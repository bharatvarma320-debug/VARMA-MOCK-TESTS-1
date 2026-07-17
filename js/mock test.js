const quiz = [
    {
        question: "Who has been named by the Assembly of Experts as the new Supreme Leader of Iran?",
        options: [
            "Masoud Pezeshkian",
            "Ali Larijani",
            "Mojtaba Khamenei",
            "Ebrahim Raisi"
        ],
        answer: 2
    },

    {
        question: "Who has been appointed as the next Vice Chief of the Army Staff (VCOAS) of the Indian Army?",
        options: [
            "Lt Gen P.P. Singh",
            "Lt Gen Dhiraj Seth",
            "Lt Gen V.M.B. Krishnan",
            "Lt Gen Sandeep Jain"
        ],
        answer: 2
    },

    {
        question: "In March 2026, Jose Antonio Kast was sworn in as the President of which country?",
        options: [
            "Argentina",
            "Chile",
            "Peru",
            "Colombia"
        ],
        answer: 1
    }
    {
    question: "Who has become the interim President of Venezuela following the capture of President Nicolás Maduro by US forces? (January 2026)",
    options: [
        "Delcy Rodríguez",
        "Cilia Flores",
        "Juan Guaidó",
        "Diosdado Cabello"
    ],
    answer: 2
},
{
    question: "Who has been appointed as the new Director General of the National Investigation Agency (NIA) in January 2026?",
    options: [
        "Rakesh Aggarwal",
        "Ajay Kumar",
        "Navin Garg",
        "Bhupender Singh"
    ],
    answer: 3
},
{
    question: "MS Dhoni was appointed Goodwill Ambassador for the Pune Grand Tour 2026. This tour is associated with which sport?",
    options: [
        "Cycling",
        "Marathon running",
        "Race walking",
        "Cross-country running"
    ],
    answer: 0
},
{
    question: "Who became the first woman Chief Justice of the Meghalaya High Court?",
    options: [
        "Justice Soumen Sen",
        "Justice Indira Banerjee",
        "Justice Revati Mohite Dere",
        "Justice Hima Kohli"
    ],
    answer: 2
},
{
    question: "Consider the following statements about Balendra Shah:\n1. He is the 47th and youngest Prime Minister in Nepal's history.\n2. He is the first person from the Madhes region to hold the post.\n3. His party, the Rastriya Swatantra Party (RSP), was formed in 2012.\nWhich statements are correct?",
    options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
    ],
    answer: 0
},
{
    question: "Who has been given the additional charge of Governor of Tamil Nadu after RN Ravi was transferred to West Bengal?",
    options: [
        "C.V. Ananda Bose",
        "Rajendra Vishwanath Arlekar",
        "Taranjit Singh Sandhu",
        "Kavinder Gupta"
    ],
    answer: 1
},
{
    question: "Who has been appointed as the new Whole-Time Member (WTM) of SEBI in March 2026?",
    options: [
        "Ananth Narayan G",
        "Kamlesh Chandra Varshney",
        "K. V. Ramana Murty",
        "Sandip Pradhan"
    ],
    answer: 0
},
{
    question: "Who was elected President of Guinea in December 2025 after ruling the country since the 2021 military coup?",
    options: [
        "Mamady Doumbouya",
        "Alpha Condé",
        "Ibrahim Boubacar Keïta",
        "Roch Marc Christian Kaboré"
    ],
    answer: 0
},
{
    question: "Who has been appointed as the new Lieutenant Governor of Delhi following the gubernatorial reshuffle announced on March 6, 2026?",
    options: [
        "Vinai Kumar Saxena",
        "Taranjit Singh Sandhu",
        "Kavinder Gupta",
        "RN Ravi"
    ],
    answer: 2
},
{
    question: "Following the 2026 reshuffle, which individual has been moved from the governorship of Telangana to become the Governor of Maharashtra?",
    options: [
        "Shiv Pratap Shukla",
        "Nand Kishore Yadav",
        "Jishnu Dev Varma",
        "Syed Ata Hasnain"
    ],
    answer: 2
}

    // 👉 Add more questions here
];

let current = 0;
let score = 0;
let time = 1200; // 20 minutes

function loadQuestion() {

    if (current >= quiz.length) {
        finishQuiz();
        return;
    }

    document.getElementById("question").innerHTML =
        "Q" + (current + 1) + ". " + quiz[current].question;

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

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an option.");
        return;
    }

    if (parseInt(selected.value) === quiz[current].answer) {
        score++;
    }

    current++;
    loadQuestion();
}

function finishQuiz() {

    document.querySelector(".login-box").innerHTML = `
        <h2>Quiz Completed</h2>
        <h3>Your Score: ${score}/${quiz.length}</h3>
        <h3>Percentage: ${(score / quiz.length * 100).toFixed(2)}%</h3>
    `;
}
function loadQuestion() {
    document.getElementById("question").innerHTML =
        quiz[currentQuestion].question;

    let options = "";

    for (let i = 0; i < 4; i++) {
        options += `
        <label>
            <input type="radio" name="answer" value="${i}">
            ${quiz[currentQuestion].options[i]}
        </label><br><br>`;
    }

    document.getElementById("options").innerHTML = options;
}