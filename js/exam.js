const quizData =
  typeof armyQuestions !== "undefined" && Array.isArray(armyQuestions) && armyQuestions.length
    ? armyQuestions
    : typeof ntpcQuestions !== "undefined" && Array.isArray(ntpcQuestions) && ntpcQuestions.length
      ? ntpcQuestions
      : [];

let quiz = quizData;
let currentQuestion = 0;
let score = 0;
let answers = [];
let timerInterval = null;
let totalTime = 60 * 60;

function getEl(id) {
  return document.getElementById(id);
}

function startTimer() {
  const timer = getEl("timer");
  if (!timer) return;

  timerInterval = setInterval(() => {
    const minutes = String(Math.floor(totalTime / 60)).padStart(2, "0");
    const seconds = String(totalTime % 60).padStart(2, "0");

    timer.textContent = `${minutes}:${seconds}`;
    totalTime--;

    if (totalTime < 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    answers[currentQuestion] = Number(selected.value);
  } else {
    delete answers[currentQuestion];
  }
}

function loadQuestion() {
  const section = getEl("section");
  const question = getEl("question");
  const options = getEl("options");

  if (!section || !question || !options) return;

  if (!quiz.length) {
    section.textContent = "Section :";
    question.textContent = "No questions available.";
    options.innerHTML = "";
    return;
  }

  const q = quiz[currentQuestion];

  section.textContent = `Section : ${q.section}`;
  question.textContent = `Q${currentQuestion + 1}. ${q.question}`;

  let html = "";

  q.options.forEach((option, index) => {
    const checked = answers[currentQuestion] === index ? "checked" : "";
    html += `
      <label class="option">
        <input type="radio" name="answer" value="${index}" ${checked}>
        ${option}
      </label>
    `;
  });

  options.innerHTML = html;
}

function createPalette() {
  const palette = getEl("palette");
  if (!palette) return;

  palette.innerHTML = quiz
    .map((_, index) => `<button class="palette-btn" type="button" onclick="jumpQuestion(${index})">${index + 1}</button>`)
    .join("");
}

function updatePalette() {
  const buttons = document.querySelectorAll(".palette-btn");
  if (!buttons.length) return;

  buttons.forEach((btn, index) => {
    btn.style.background = "#eeeeee";
    btn.style.color = "#000";

    if (answers[index] !== undefined) {
      btn.style.background = "#4CAF50";
      btn.style.color = "#fff";
    }

    if (index === currentQuestion) {
      btn.style.background = "#c62828";
      btn.style.color = "#fff";
    }
  });
}

function jumpQuestion(index) {
  saveAnswer();
  currentQuestion = index;
  loadQuestion();
  updatePalette();
}

function bindButton(id, callback) {
  const btn = getEl(id);
  if (btn) {
    btn.addEventListener("click", callback);
  }
}

function submitExam() {
  if (timerInterval) clearInterval(timerInterval);

  saveAnswer();

  score = quiz.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  const percentage = quiz.length
    ? ((score / quiz.length) * 100).toFixed(2)
    : "0.00";

  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#f5f5f5;font-family:Poppins;">
      <div style="background:white;padding:40px;border-radius:20px;width:450px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.15);">
        <h1 style="color:#c62828;">🎉 Test Completed</h1>
        <br>
        <h2>Score : ${score} / ${quiz.length}</h2>
        <br>
        <h2>Percentage : ${percentage}%</h2>
        <br>
        <button onclick="location.reload()" style="background:#c62828;color:white;border:none;padding:15px 30px;border-radius:10px;cursor:pointer;font-size:18px;">
          Restart Test
        </button>
      </div>
    </div>
  `;
}

function initExam() {
  if (!quiz.length) {
    const section = getEl("section");
    const question = getEl("question");
    const options = getEl("options");

    if (section) section.textContent = "Section :";
    if (question) question.textContent = "No questions available.";
    if (options) options.innerHTML = "";
    return;
  }

  createPalette();
  loadQuestion();
  updatePalette();
  startTimer();

  bindButton("nextBtn", () => {
    saveAnswer();
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      loadQuestion();
      updatePalette();
    }
  });

  bindButton("prevBtn", () => {
    saveAnswer();
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
      updatePalette();
    }
  });

  bindButton("skipBtn", () => {
    saveAnswer();
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      loadQuestion();
      updatePalette();
    }
  });

  bindButton("submitBtn", () => {
    if (confirm("Are you sure you want to submit the test?")) {
      submitExam();
    }
  });
}

document.addEventListener("DOMContentLoaded", initExam);