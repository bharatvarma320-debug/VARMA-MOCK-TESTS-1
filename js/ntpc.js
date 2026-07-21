let current = 0;
let score = 0;
let time = 90 * 60;
let timerInterval = null;

const questions = [
  {
    id: 1,
    question: "Who has been named by the Assembly of Experts as the new Supreme Leader of Iran?",
    options: ["Masoud Pezeshkian", "Ali Larijani", "Mojtaba Khamenei", "Ebrahim Raisi"],
    answer: "Mojtaba Khamenei"
  },
  {
    id: 2,
    question: "Who has been appointed as the next Vice Chief of the Army Staff (VCOAS) of the Indian Army, effective from April 1, 2026?",
    options: ["Lt Gen P.P. Singh", "Lt Gen Dhiraj Seth", "Lt Gen V.M.B. Krishnan", "Lt Gen Sandeep Jain"],
    answer: "Lt Gen Dhiraj Seth"
  },
  {
    id: 3,
    question: "In March 2026, Jose Antonio Kast was sworn in as the President of which country?",
    options: ["Argentina", "Chile", "Peru", "Colombia"],
    answer: "Chile"
  },
  {
    id: 4,
    question: "Who has become the first woman in India to be appointed as the Chief Superintendent of a functional nuclear power plant?",
    options: ["Soumya Swaminathan", "RM Nachammai", "N. Kalaiselvi", "Tessy Thomas"],
    answer: "RM Nachammai"
  },
  {
    id: 5,
    question: "Who has been appointed as the official Brand Ambassador for the BHIM (Bharat Interface for Money) App?",
    options: ["Sachin Tendulkar", "Rohit Sharma", "Mahendra Singh Dhoni", "Virat Kohli"],
    answer: "Rohit Sharma"
  },
  {
    id: 6,
    question: "Who was sworn in as Maharashtra's first woman Deputy Chief Minister, and whom did she succeed?",
    options: [
      "Sunetra Pawar, succeeding Ajit Pawar",
      "Pankaja Munde, succeeding Gopinath Munde",
      "Supriya Sule, succeeding Sharad Pawar",
      "Rashmi Thackeray, succeeding Uddhav Thackeray"
    ],
    answer: "Sunetra Pawar, succeeding Ajit Pawar"
  },
  {
    id: 7,
    question: "Who did Uday Kotak replace to become the new Chairman of Gujarat International Finance Tec-City Company Ltd. (GIFT City) in February 2026?",
    options: ["Sudhir Mankad", "Tapan Ray", "Injeti Srinivas", "Dr. Hasmukh Adhia"],
    answer: "Tapan Ray"
  },
  {
    id: 8,
    question: "Following the resignation of Pieter Elbers in March 2026, who has taken over as the interim CEO of IndiGo?",
    options: ["Ronojoy Dutta", "Rahul Bhatia", "Aditya Ghosh", "Shai Weiss"],
    answer: "Rahul Bhatia"
  },
  {
    id: 9,
    question: "Who has taken over charge as the Chairman of the Atomic Energy Regulatory Board (AERB) from 1 January 2026?",
    options: ["Dr. D. K. Shukla", "Lt. Gen. R. S. Sharma", "Dr. Anil Kakodkar", "A. K. Balasubrahmanian"],
    answer: "Dr. D. K. Shukla"
  },
  {
    id: 10,
    question: "Who took over as the Air Officer Commanding-in-Chief (AOC-in-C), Training Command of the Indian Air Force on 01 January 2026?",
    options: ["Air Marshal S. P. Dharkar", "Air Marshal Seethepalli Shrinivas", "Air Marshal Raghunath Nambiar", "Air Marshal Vivek Ram Chaudhari"],
    answer: "Air Marshal S. P. Dharkar"
  },
  {
    id: 11,
    question: "Who has become the interim President of Venezuela following the capture of President Nicolás Maduro by US forces? (January 2026)",
    options: ["Delcy Rodríguez", "Cilia Flores", "Juan Guaidó", "Diosdado Cabello"],
    answer: "Juan Guaidó"
  },
  {
    id: 12,
    question: "Who has been appointed as the new Director General of the National Investigation Agency (NIA) in January 2026?",
    options: ["Rakesh Aggarwal", "Ajay Kumar", "Navin Garg", "Bhupender Singh"],
    answer: "Navin Garg"
  },
  {
    id: 13,
    question: "MS Dhoni was appointed Goodwill Ambassador for the Pune Grand Tour 2026. This tour is associated with which sport?",
    options: ["Cycling", "Marathon running", "Race walking", "Cross-country running"],
    answer: "Cycling"
  },
  {
    id: 14,
    question: "Who became the first woman Chief Justice of the Meghalaya High Court?",
    options: ["Justice Soumen Sen", "Justice Indira Banerjee", "Justice Revati Mohite Dere", "Justice Hima Kohli"],
    answer: "Justice Revati Mohite Dere"
  },
  {
    id: 15,
    question: "Balendra Shah seen in news in March 2026: Which statements are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
    answer: "1 and 2 only"
  },
  {
    id: 16,
    question: "Who has been given the additional charge of being the Governor of Tamil Nadu after RN Ravi was transferred to West Bengal?",
    options: ["C.V. Ananda Bose", "Rajendra Vishwanath Arlekar", "Taranjit Singh Sandhu", "Kavinder Gupta"],
    answer: "Rajendra Vishwanath Arlekar"
  },
  {
    id: 17,
    question: "Who has been appointed as the new Whole-Time Member (WTM) of SEBI in March 2026?",
    options: ["Ananth Narayan G", "Kamlesh Chandra Varshney", "K. V. Ramana Murty", "Sandip Pradhan"],
    answer: "Kamlesh Chandra Varshney"
  },
  {
    id: 18,
    question: "Who was elected President of Guinea in December 2025 after ruling since the 2021 military coup?",
    options: ["Mamady Doumbouya", "Alpha Condé", "Ibrahim Boubacar Keïta", "Roch Marc Christian Kaboré"],
    answer: "Mamady Doumbouya"
  },
  {
    id: 19,
    question: "Who has been appointed as the new Lieutenant Governor of Delhi following the reshuffle announced on March 6, 2026?",
    options: ["Vinai Kumar Saxena", "Taranjit Singh Sandhu", "Kavinder Gupta", "RN Ravi"],
    answer: "Taranjit Singh Sandhu"
  },
  {
    id: 20,
    question: "Following the 2026 reshuffle, which individual has been moved from the governorship of Telangana to become the Governor of Maharashtra?",
    options: ["Shiv Pratap Shukla", "Nand Kishore Yadav", "Jishnu Dev Varma", "Syed Ata Hasnain"],
    answer: "Nand Kishore Yadav"
  },
  {
    id: 21,
    question: "Find the surface area of a sphere whose diameter is equal to 22 cm.",
    options: ["484π cm²", "502π cm²", "153π cm²", "1019π cm²"],
    answer: "484π cm²"
  },
  {
    id: 22,
    question: "A 250 meters long train crosses a bridge 750 meters long in 20 seconds and crosses a platform in 15 seconds. Find the length of the platform.",
    options: ["350 m", "450 m", "500 m", "800 m"],
    answer: "500 m"
  },
  {
    id: 23,
    question: "Find 1/7 of 504.",
    options: ["94", "115", "168", "84"],
    answer: "72"
  },
  {
    id: 24,
    question: "In a class 82% students passed and 2% students were placed in the reappear category. The number of students who failed was 592. What was the total number of students in the class?",
    options: ["2700", "3600", "2000", "3700"],
    answer: "3600"
  },
  {
    id: 25,
    question: "Find the H.C.F. of 245 and 233.",
    options: ["1", "7", "13", "233"],
    answer: "1"
  },
  {
    id: 26,
    question: "A shopkeeper marked his article 150% above the cost price. If he allows a 20% discount and earns ₹200 profit, find the cost price.",
    options: ["₹160", "₹180", "₹200", "₹220"],
    answer: "₹200"
  },
  {
    id: 27,
    question: "Find the average of the first 10 natural numbers.",
    options: ["5", "5.5", "6", "6.5"],
    answer: "5.5"
  },
  {
    id: 28,
    question: "If 12% of a number is 48, find the number.",
    options: ["400", "480", "500", "600"],
    answer: "400"
  },
  {
    id: 29,
    question: "A sum of money becomes ₹1,200 in 2 years at 10% simple interest. Find the principal.",
    options: ["₹800", "₹900", "₹1000", "₹1100"],
    answer: "₹1000"
  },
  {
    id: 30,
    question: "The perimeter of a rectangle is 40 cm and its length is 12 cm. Find the breadth.",
    options: ["6 cm", "8 cm", "10 cm", "12 cm"],
    answer: "8 cm"
  },
  {
    id: 31,
    question: "Solve: 15 × 4 + 12 ÷ 3.",
    options: ["64", "68", "72", "76"],
    answer: "64"
  },
  {
    id: 32,
    question: "What is the LCM of 12 and 18?",
    options: ["24", "36", "48", "54"],
    answer: "36"
  },
  {
    id: 33,
    question: "If 5a = 3b and a + b = 16, find a.",
    options: ["6", "8", "10", "12"],
    answer: "6"
  },
  {
    id: 34,
    question: "A car covers 180 km in 3 hours. What is its speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    answer: "60 km/h"
  },
  {
    id: 35,
    question: "Find the next number in the series: 2, 6, 12, 20, ?",
    options: ["24", "28", "30", "32"],
    answer: "30"
  },
  {
    id: 36,
    question: "The simple interest on ₹5000 at 8% for 2 years is?",
    options: ["₹400", "₹600", "₹700", "₹800"],
    answer: "₹800"
  },
  {
    id: 37,
    question: "Which of the following numbers is divisible by 9?",
    options: ["128", "243", "356", "478"],
    answer: "243"
  },
  {
    id: 38,
    question: "If x + 2 = 7, then x = ?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    id: 39,
    question: "Convert 0.75 into a fraction.",
    options: ["1/2", "3/4", "2/3", "4/5"],
    answer: "3/4"
  },
  {
    id: 40,
    question: "Find the square of 13.",
    options: ["169", "196", "225", "256"],
    answer: "169"
  },
  {
    id: 41,
    question: "Select the option that is related to the third letter cluster in the same way as the second letter cluster is related to the first letter cluster. FTPK : LRWJ :: SKMP : ?",
    options: ["SPMW", "RPNV", "TMPT", "QONW"],
    answer: "RPNV"
  },
  {
    id: 42,
    question: "Which interchange of numbers and mathematical signs would make the equation correct? 30 + 6 × 4 + 15 - 35 = 25",
    options: ["25 and 30, × and -", "4 and 6, + and -", "25 and 35, × and +", "30 and 35, - and +"],
    answer: "25 and 30, × and -"
  },
  {
    id: 43,
    question: "Complete the series: 25U2, 30S4, 35W6, 40U8, ?",
    options: ["44Z10", "44Z11", "45Z10", "45Y10"],
    answer: "45Z10"
  },
  {
    id: 44,
    question: "Find the square root of 484.",
    options: ["20", "22", "24", "26"],
    answer: "22"
  },
  {
    id: 45,
    question: "Which letter-clusters should replace # and % so that the relationship holds? # : DKR :: PCL : %",
    options: ["# = BNQ, % = NFM", "# = FHT, % = NFJ", "# = COQ, % = OGH", "# = BNP, % = NFJ"],
    answer: "# = BNP, % = NFJ"
  },
  {
    id: 46,
    question: "Refer to the series: 1*2984!^354#9!$3^13&968$*93. How many symbols are immediately preceded and followed by a number?",
    options: ["6", "3", "2", "4"],
    answer: "4"
  },
  {
    id: 47,
    question: "Six friends G, H, I, J, K, and L are watching a cricket match sitting in a row facing North. Who is sitting second to the left of K?",
    options: ["G", "I", "J", "H"],
    answer: "J"
  },
  {
    id: 48,
    question: "In a class, Rajesh ranks 15th from the top and Prakash ranks 25th from the bottom. Gyan is 10 places ahead of Prakash. If 10 students are between Rajesh and Gyan, how many total students are there?",
    options: ["60", "55", "40", "50"],
    answer: "55"
  },
  {
    id: 49,
    question: "P, Q, R, S, T, U, V and W are eight points with given directions/distances. W is in which direction and how far with respect to V?",
    options: ["5 km South", "10 km West", "25 km North-West", "10 km East"],
    answer: "25 km North-West"
  },
  {
    id: 50,
    question: "STANZA : HHZNAA :: TEMPLE : ?",
    options: ["QBJMIX", "FFNQMZ", "GFMQLZ", "GWNLOW"],
    answer: "FFNQMZ"
  },
  {
    id: 51,
    question: "Next term in the arrangement YEB, WFD, UHG, SKI is:",
    options: ["QGL", "QOL", "TOL", "QNL"],
    answer: "QNL"
  },
  {
    id: 52,
    question: "ABC : ZYX :: ?",
    options: ["BCD : YXW", "CDE : XVZ", "BDE : XCD", "CBC : XZY"],
    answer: "BCD : YXW"
  },
  {
    id: 53,
    question: "Seven friends E, F, G, H, I, J and K are sitting around a circular table facing centre. Who is sitting to the immediate right of H?",
    options: ["K", "E", "H", "F"],
    answer: "K"
  },
  {
    id: 54,
    question: "The original puzzle statement appears incomplete. Please replace this item with the full question text.",
    options: ["Needs full puzzle"],
    answer: "Needs full puzzle"
  },
  {
    id: 55,
    question: "P, Q, R, S, T, U and V live on seven different floors of the same building. Q lives on floor number 2. R lives on the floor immediately above U's floor. S is on the floor immediately below V.",
    options: ["Floor arrangement puzzle"],
    answer: "Floor arrangement puzzle"
  },
  {
    id: 56,
    question: "Which of the following is divisible by 24?",
    options: ["2940", "2856", "1458", "1860"],
    answer: "2856"
  },
  {
    id: 57,
    question: "Simplify the following: 19 + 5 of (27 - 15 - 21) + 37",
    options: ["6124/165", "6142/165", "165", "37/165"],
    answer: "165"
  },
  {
    id: 58,
    question: "A and B started a small business by investing ₹15,000. At the end of the year they made a profit of ₹2,000. B received ₹600 as profit share. How much did B invest?",
    options: ["7,500", "4,500", "6,500", "10,500"],
    answer: "4,500"
  },
  {
    id: 59,
    question: "The incomes of A and B are in the ratio 6:11. The ratio of their expenditures is 1:2. If A and B save Rs. 9,000 and Rs. 11,500 respectively, then the expenditure of B is:",
    options: ["Rs. 55,500", "Rs. 54,900", "Rs. 55,800", "Rs. 60,000"],
    answer: "Rs. 55,800"
  },
  {
    id: 60,
    question: "If 2cos²A + 1 = 2sin³A and A + B = 90°, then find the value of cosB.",
    options: ["1/2", "1", "0", "1/√2"],
    answer: "1/2"
  },
  {
    id: 61,
    question: "The average weight of 15 men decreases by 2 kg when one of them weighing 70 kg is replaced by a new man. What is the weight of the new man?",
    options: ["35", "45", "38", "40"],
    answer: "40"
  },
  {
    id: 62,
    question: "Rajesh goes to his office at 25 km/hr and returns at 20 km/hr. If total time is 9 hours, what is the distance between office and home?",
    options: ["120 km", "90 km", "140 km", "100 km"],
    answer: "100 km"
  },
  {
    id: 63,
    question: "A man spends 5% of his income on Travelling, 20% of the rest on Food, donates Rs. 120, and is left with Rs. 1400. Find his income.",
    options: ["1000", "2000", "3000", "4000"],
    answer: "2000"
  },
  {
    id: 64,
    question: "The arithmetic mean of 1, 5, 9, 2, 2, 3, x, a, 9 is 5. Find the arithmetic mean of a and x.",
    options: ["14", "7", "11", "10"],
    answer: "11"
  },
  {
    id: 65,
    question: "What price should a shopkeeper mark on a product costing Rs. 200 to gain 35% after allowing a discount of 25%?",
    options: ["Rs. 390", "Rs. 370", "Rs. 330", "Rs. 360"],
    answer: "Rs. 360"
  },
  {
    id: 66,
    question: "Select the option that is related to the third letter cluster in the same way as the second letter cluster is related to the first letter cluster.",
    options: ["QBJMIX", "FFNQMZ", "GFMQLZ", "GWNLOW"],
    answer: "FFNQMZ"
  },
  {
    id: 67,
    question: "The term that comes next in the arrangement of letters YEB, WFD, UHG, SKI is:",
    options: ["QGL", "QOL", "TOL", "QNL"],
    answer: "QNL"
  },
  {
    id: 68,
    question: "ABC : ZYX :: ?",
    options: ["BCD : YXW", "CDE : XVZ", "BDE : XCD", "CBC : XZY"],
    answer: "BCD : YXW"
  },
  {
    id: 69,
    question: "Seven friends E, F, G, H, I, J and K are sitting along a circular table facing centre. F and I are immediate neighbours of G. H is sitting third to the left of G. E and I are neighbours of J. Who is sitting to the immediate right of H?",
    options: ["K", "E", "H", "F"],
    answer: "K"
  },
  {
    id: 70,
    question: "P, Q, R, S, T, U and V live on seven different floors of the same building. Q lives on floor number 2. R lives immediately above U. S is immediately below V.",
    options: ["Floor arrangement puzzle"],
    answer: "Floor arrangement puzzle"
  },
  {
    id: 71,
    question: "Which of the following is divisible by 24?",
    options: ["2940", "2856", "1458", "1860"],
    answer: "2856"
  },
  {
    id: 72,
    question: "Simplify the following: 19 + 5 of (27 - 15 - 21) + 37",
    options: ["6124/165", "6142/165", "165", "37/165"],
    answer: "165"
  },
  {
    id: 73,
    question: "A and B started a small business by investing ₹15,000. At the end of the year they made a profit of ₹2,000. B received ₹600 as profit share. How much did B invest?",
    options: ["7,500", "4,500", "6,500", "10,500"],
    answer: "4,500"
  },
  {
    id: 74,
    question: "The incomes of A and B are in the ratio 6:11. The ratio of their expenditures is 1:2. If A and B save Rs. 9,000 and Rs. 11,500 respectively, then the expenditure of B is:",
    options: ["Rs. 55,500", "Rs. 54,900", "Rs. 55,800", "Rs. 60,000"],
    answer: "Rs. 55,800"
  },
  {
    id: 75,
    question: "If 2cos²A + 1 = 2sin³A and A + B = 90°, then find the value of cosB.",
    options: ["1/2", "1", "0", "1/√2"],
    answer: "1/2"
  },
  {
    id: 76,
    question: "The average weight of 15 men decreases by 2 kg when one of them weighing 70 kg is replaced by a new man. What is the weight of the new man?",
    options: ["35", "45", "38", "40"],
    answer: "40"
  },
  {
    id: 77,
    question: "Rajesh goes to his office at 25 km/hr and returns at 20 km/hr. If total time is 9 hours, what is the distance between office and home?",
    options: ["120 km", "90 km", "140 km", "100 km"],
    answer: "100 km"
  },
  {
    id: 78,
    question: "A man spends 5% of his income on Travelling, 20% of the rest on Food, donates Rs. 120, and is left with Rs. 1400. Find his income.",
    options: ["1000", "2000", "3000", "4000"],
    answer: "2000"
  },
  {
    id: 79,
    question: "The arithmetic mean of 1, 5, 9, 2, 2, 3, x, a, 9 is 5. Find the arithmetic mean of a and x.",
    options: ["14", "7", "11", "10"],
    answer: "11"
  },
  {
    id: 80,
    question: "What price should a shopkeeper mark on a product costing Rs. 200 to gain 35% after allowing a discount of 25%?",
    options: ["Rs. 390", "Rs. 370", "Rs. 330", "Rs. 360"],
    answer: "Rs. 360"
  }
];

const quiz = questions;

function loadQuestion() {
  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  const sectionEl = document.getElementById("section");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  if (!sectionEl || !questionEl || !optionsEl) return;

  const q = quiz[current];
  sectionEl.innerHTML = q.section || "General Awareness";
  questionEl.innerHTML = `Q${current + 1}. ${q.question}`;

  let html = "";
  q.options.forEach((option, index) => {
    html += `
      <label style="display:block; margin-bottom:10px; padding:12px; border:1px solid #ddd; border-radius:8px; cursor:pointer;">
        <input type="radio" name="answer" value="${option}">
        ${option}
      </label>
    `;
  });

  optionsEl.innerHTML = html;
}

function skipQuestion() {
  current++;
  loadQuestion();
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  } else {
    alert("You are already at the first question.");
  }
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const q = quiz[current];
  const selectedValue = selected.value;
  const correctAnswer = q.answer;

  if (typeof correctAnswer === "number") {
    if (Number(selectedValue) === correctAnswer) score++;
  } else if (selectedValue === correctAnswer) {
    score++;
  }

  current++;
  loadQuestion();
}

function finishQuiz() {
  const card = document.querySelector(".card");
  if (card) {
    card.innerHTML = `
      <h2>🎉 NTPC Mock Test Completed</h2>
      <h3>Total Questions: ${quiz.length}</h3>
      <h3>Correct Answers: ${score}</h3>
      <h3>Wrong Answers: ${quiz.length - score}</h3>
      <h3>Score: ${((score / quiz.length) * 100).toFixed(2)}%</h3>
    `;
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const timerEl = document.getElementById("timer");
    if (!timerEl) return;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerEl.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

loadQuestion();
startTimer();
