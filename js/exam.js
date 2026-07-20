// =========================
// VARMA TESTS EXAM ENGINE
// Part 1
// =========================

let quiz = (typeof armyQuestions !== "undefined")
    ? armyQuestions
    : (typeof ntpcQuestions !== "undefined" ? ntpcQuestions : []);

let currentQuestion = 0;
let score = 0;
let answers = [];
let timerInterval = null;

let totalTime = 60 * 60; // 60 Minutes

// --------------------
// TIMER
// --------------------

function startTimer(){

    const timer = document.getElementById("timer");

    if(!timer) return;

    timerInterval = setInterval(function(){

        let minutes = Math.floor(totalTime/60);
        let seconds = totalTime%60;

        timer.innerHTML =
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0");

        totalTime--;

        if(totalTime<0){

            clearInterval(timerInterval);
            submitExam();

        }

    },1000);

}

// --------------------
// LOAD QUESTION
// --------------------

function loadQuestion(){

    if(!quiz || quiz.length === 0){
        document.getElementById("section").innerHTML = "Section :";
        document.getElementById("question").innerHTML = "No questions available.";
        document.getElementById("options").innerHTML = "";
        return;
    }

    const q = quiz[currentQuestion];

    document.getElementById("section").innerHTML =
    "Section : " + q.section;

    document.getElementById("question").innerHTML =
    "Q" + (currentQuestion+1) + ". " + q.question;

    let html="";

    q.options.forEach((option,index)=>{

        html+=`

        <label class="option">

        <input
        type="radio"
        name="answer"
        value="${index}"

        ${answers[currentQuestion]==index?"checked":""}

        >

        ${option}

        </label>

        `;

    });

    document.getElementById("options").innerHTML=html;

}

// --------------------
// QUESTION PALETTE
// --------------------

function createPalette(){

    let html="";

    for(let i=0;i<quiz.length;i++){

        html+=`

        <button
        class="palette-btn"
        onclick="jumpQuestion(${i})">

        ${i+1}

        </button>

        `;

    }

    document.getElementById("palette").innerHTML=html;

}

// --------------------
// JUMP QUESTION
// --------------------

function jumpQuestion(index){

    saveAnswer();

    currentQuestion=index;

    loadQuestion();
    updatePalette();

}
// --------------------
// SAVE ANSWER
// --------------------

function saveAnswer(){

    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if(selected){

        answers[currentQuestion] =
        parseInt(selected.value);

    }

}

// --------------------
// NEXT QUESTION
// --------------------

document.getElementById("nextBtn")
.addEventListener("click",function(){

    saveAnswer();

    if(currentQuestion < quiz.length-1){

        currentQuestion++;

        loadQuestion();

        updatePalette();

    }

});

// --------------------
// PREVIOUS QUESTION
// --------------------

document.getElementById("prevBtn")
.addEventListener("click",function(){

    saveAnswer();

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

        updatePalette();

    }

});

// --------------------
// SKIP QUESTION
// --------------------

document.getElementById("skipBtn")
.addEventListener("click",function(){

    saveAnswer();

    if(currentQuestion < quiz.length-1){

        currentQuestion++;

        loadQuestion();

        updatePalette();

    }

});

// --------------------
// UPDATE PALETTE
// --------------------

function updatePalette(){

    const buttons =
    document.querySelectorAll(".palette-btn");

    buttons.forEach((btn,index)=>{

        btn.style.background="#eeeeee";
        btn.style.color="#000";

        if(answers[index]!=undefined){

            btn.style.background="#4CAF50";
            btn.style.color="white";

        }

    });

    buttons[currentQuestion].style.background="#c62828";
    buttons[currentQuestion].style.color="white";

}
// --------------------
// SUBMIT EXAM
// --------------------

function submitExam(){

    if(timerInterval){
        clearInterval(timerInterval);
    }

    saveAnswer();

    score = 0;

    for(let i = 0; i < quiz.length; i++){

        if(answers[i] === quiz[i].answer){

            score++;

        }

    }

    let percentage =
    ((score / quiz.length) * 100).toFixed(2);

    document.body.innerHTML = `

    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:#f5f5f5;
        font-family:Poppins;
    ">

        <div style="
            background:white;
            padding:40px;
            border-radius:20px;
            width:450px;
            text-align:center;
            box-shadow:0 10px 30px rgba(0,0,0,.15);
        ">

            <h1 style="color:#c62828;">
                🎉 Test Completed
            </h1>

            <br>

            <h2>
                Score : ${score} / ${quiz.length}
            </h2>

            <br>

            <h2>
                Percentage : ${percentage}%
            </h2>

            <br>

            <button
            onclick="location.reload()"
            style="
                background:#c62828;
                color:white;
                border:none;
                padding:15px 30px;
                border-radius:10px;
                cursor:pointer;
                font-size:18px;
            ">

            Restart Test

            </button>

        </div>

    </div>

    `;

}

function initExam(){
    if(!quiz || quiz.length === 0){
        document.getElementById("section").innerHTML = "Section :";
        document.getElementById("question").innerHTML = "No questions available.";
        document.getElementById("options").innerHTML = "";
        return;
    }

    createPalette();
    loadQuestion();
    updatePalette();
    startTimer();
}

// --------------------
// SUBMIT BUTTON
// --------------------

document
.getElementById("submitBtn")
.addEventListener("click",function(){

    if(confirm("Are you sure you want to submit the test?")){

        submitExam();

    }

});

document.addEventListener("DOMContentLoaded", initExam);