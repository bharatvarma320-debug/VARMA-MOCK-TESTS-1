const quiz = [
    {
        section: "General Knowledge",
        question: "Rani-Ki-Vav (the Queen's stepwell) is situated on the banks of which river?",
        options: ["Yamuna", "Saraswati", "Krishna", "Ganga"],
        answer: 0
    },
    {
        section: "Polity",
        question: "Article 2 of the Indian Constitution is related with ______.",
        options: [
            "Admission or establishment of new states",
            "Alteration of areas of existing states",
            "Alteration of names of existing states",
            "Name and territory of the Union"
        ],
        answer: 0
    },
    {
        section: "Science",
        question: "What type of waves are light waves?",
        options: ["Transverse waves", "Longitudinal waves", "Both A & B", "None"],
        answer: 0
    },
    {
        section: "Mathematics",
        question: "Simplify: 0.12 ÷ 0.6 + 0.3",
        options: ["37/100", "38/5", "-3/7", "3"],
        answer: 3
    }
];

let current = 0;
let score = 0;
let timeTaken = [];
let questionStartTime = Date.now();
let time = 90 * 60;

function loadQuestion() {
    questionStartTime = Date.now();

    if (current >= quiz.length) {
        finishQuiz();
        return;
    }

    document.getElementById("section").innerHTML = "Section : " + (quiz[current].section || "General Knowledge");
    document.getElementById("question").innerHTML = "Q" + (current + 1) + ". " + quiz[current].question;

    let html = "";
    quiz[current].options.forEach((option, index) => {
        html += `
        <label>
            <input type="radio" name="answer" value="${index}">
            ${option}
        </label><br><br>
        `;
    });

    document.getElementById("options").innerHTML = html;
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === quiz[current].answer) {
        score++;
    }

    let seconds = Math.floor((Date.now() - questionStartTime) / 1000);
    timeTaken[current] = seconds;

    current++;
    loadQuestion();
}

function skipQuestion() {
    let seconds = Math.floor((Date.now() - questionStartTime) / 1000);
    timeTaken[current] = seconds;

    current++;
    loadQuestion();
}

function finishQuiz() {
    const percentage = ((score / quiz.length) * 100).toFixed(2);

    document.body.innerHTML = `
        <div style="text-align:center;margin-top:80px;font-family:Arial;">
            <h1>🎉 Test Completed</h1>
            <h2>Score : ${score}/${quiz.length}</h2>
            <h2>Percentage : ${percentage}%</h2>
        </div>
    `;
}

function startTimer() {
    const timer = document.getElementById("timer");

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.innerHTML = "Time Left : " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

loadQuestion();
startTimer();
