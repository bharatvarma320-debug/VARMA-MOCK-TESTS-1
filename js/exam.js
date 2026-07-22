const quizData =
  typeof armyQuestions !== "undefined" && Array.isArray(armyQuestions) && armyQuestions.length
    ? armyQuestions
    : typeof ntpcQuestions !== "undefined" && Array.isArray(ntpcQuestions) && ntpcQuestions.length
      ? ntpcQuestions
      : [];

let quiz = quizData;
let currentQuestion = 0;
let score = 0;
let answers = {}; // Keeps track of question index -> selected option index
let timerInterval = null;
let totalTime = 60 * 60;

function getEl(id) {
  return document.getElementById(id);
}

// -------------------------------------------------------------
// HELPER: Explicitly save whatever is currently selected
// -------------------------------------------------------------
function saveCurrentAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    answers[currentQuestion] = Number(selectedOption.value);
  }
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

function loadQuestion() {
  const section = getEl("section");
  const question = getEl("question");
  const options = getEl("options");

  if (!section || !question || !options) return;

  const q = quiz[currentQuestion];

  section.textContent = `Section : ${q.section}`;
  question.textContent = `Q${currentQuestion + 1}. ${q.question}`;

  let html = "";

  q.options.forEach((option, index) => {
    // Check against saved answers
    const checked = answers[currentQuestion] === index ? "checked" : "";
    html += `
      <label class="option">
        <input type="radio" name="answer" value="${index}" ${checked}>
        ${option}
      </label>
    `;
  });

  options.innerHTML = html;

  document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener("change", () => {
      answers[currentQuestion] = Number(radio.value);
      updatePalette();
    });
  });
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

    // Marked as answered
    if (answers[index] !== undefined && answers[index] !== null) {
      btn.style.background = "#4CAF50";
      btn.style.color = "#fff";
    }

    // Active question
    if (index === currentQuestion) {
      btn.style.background = "#c62828";
      btn.style.color = "#fff";
    }
  });
}

function jumpQuestion(index) {
  saveCurrentAnswer(); // Save before jumping
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
  saveCurrentAnswer(); // Save final question state before grading

  if (timerInterval) clearInterval(timerInterval);

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

  // Instant save & palette update when an option is clicked
  const optionsContainer = getEl("options");
  if (optionsContainer) {
    optionsContainer.addEventListener("change", (e) => {
      if (e.target.name === "answer") {
        saveCurrentAnswer();
        updatePalette();
      }
    });
  }

  createPalette();
  loadQuestion();
  updatePalette();
  startTimer();

  bindButton("nextBtn", () => {
    saveCurrentAnswer();
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      loadQuestion();
      updatePalette();
    }
  });

  bindButton("prevBtn", () => {
    saveCurrentAnswer();
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
      updatePalette();
    }
  });

  bindButton("skipBtn", () => {
    saveCurrentAnswer();
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