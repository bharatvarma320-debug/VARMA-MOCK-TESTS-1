const quiz = [
  {
    section: "Reasoning",
    question: "Select the option that is related to the third term in the same way as the second term is related to the first term.\n8 : 512 :: 6 : ?",
    options: ["216", "256", "144", "324"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Find the missing number in the series.\n5, 11, 23, 47, 95, ?",
    options: ["181", "189", "191", "193"],
    answer: 2
  },
  {
    section: "Reasoning",
    question: "If 'COMPUTER' is written as 'RFUVQNPD', then how will 'KEYBOARD' be written in the same code?",
    options: ["ESBPCZFL", "ESCPBZFL", "ESBQDZFL", "FSBQDZGL"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Which number does NOT belong to the following series?\n7, 14, 28, 54, 112",
    options: ["14", "28", "54", "112"],
    answer: 2
  },
  {
    section: "Reasoning",
    question: "Select the odd word from the given options.",
    options: ["Square", "Rectangle", "Triangle", "Cylinder"],
    answer: 3
  },
  {
    section: "Reasoning",
    question: "A is taller than B. B is taller than C. D is taller than A. Who is the shortest?",
    options: ["A", "B", "C", "D"],
    answer: 2
  },
  {
    section: "Reasoning",
    question: "If NORTH is coded as OPQTI, then SOUTH is coded as:",
    options: ["TPVUI", "TPVUII", "TPWUI", "TPVUH"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Pointing towards a woman, Raj said, 'She is the daughter of my grandfather's only son.' How is the woman related to Raj?",
    options: ["Mother", "Sister", "Daughter", "Cousin"],
    answer: 1
  },
  {
    section: "Reasoning",
    question: "Find the next term in the series.\n2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    answer: 1
  },
  {
    section: "General Knowledge",
    question: "Book : Author :: Painting : ?",
    options: ["Artist", "Museum", "Brush", "Canvas"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "3, 8, 18, 38, 78, ?",
    options: ["156", "158", "160", "162"],
    answer: 1
  },
  {
    section: "Reasoning",
    question: "If TRAIN = USBJO, then PLANE = ?",
    options: ["QMBOF", "QMCOF", "PMBOF", "QNBOF"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Pointing to a woman, Rahul said, 'She is the daughter of my grandfather's only son.' How is the woman related to Rahul?",
    options: ["Sister", "Cousin", "Aunt", "Mother"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "A person walks 10 m North, then 15 m East, then 10 m South, then 5 m West. How far is he from the starting point?",
    options: ["5 m", "10 m", "15 m", "20 m"],
    answer: 1
  },
  {
    section: "Reasoning",
    question: "Which Venn diagram correctly represents Doctors, Surgeons and Engineers?",
    options: [
      "Three separate circles",
      "Doctors ⊃ Surgeons; Engineers separate",
      "Surgeons ⊃ Doctors; Engineers separate",
      "All overlap"
    ],
    answer: 1
  },
  {
    section: "Reasoning",
    question: "AZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "FU"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Statement: All apples are fruits. Some fruits are oranges. Which conclusion follows?",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    answer: 1
  },
  {
    section: "Reasoning",
    question: "If the mirror shows 8:20, what is the actual time?",
    options: ["3:40", "3:20", "4:40", "4:20"],
    answer: 0
  },
  {
    section: "Reasoning",
    question: "Which figure contains a perfect square hidden inside it?",
    options: ["Circle with diagonals", "Pentagon", "Hexagon with inner square", "Triangle"],
    answer: 2
  },
  {
    section: "General Knowledge",
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2
  },
  {
    section: "General Knowledge",
    question: "Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answer: 1
  },
  {
    section: "Polity",
    question: "Which Article of the Indian Constitution deals with the Right to Equality?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: 0
  },
  {
    section: "Geography",
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Ganga", "Yamuna", "Kosi", "Godavari"],
    answer: 2
  },
  {
    section: "Polity",
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel", "Rajendra Prasad"],
    answer: 1
  },
  {
    section: "Geography",
    question: "Which is the smallest state in India by area?",
    options: ["Sikkim", "Tripura", "Goa", "Mizoram"],
    answer: 2
  },
  {
    section: "Science",
    question: "What is the SI unit of Force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: 1
  },
  {
    section: "Science",
    question: "Who discovered Penicillin?",
    options: ["Edward Jenner", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
    answer: 1
  },
  {
    section: "Biology",
    question: "Which vitamin is produced in the human body when exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    section: "History",
    question: "The Battle of Plassey was fought in which year?",
    options: ["1757", "1761", "1857", "1947"],
    answer: 0
  },
  {
    section: "Science",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    section: "History",
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
    answer: 0
  },
  {
    section: "Geography",
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
    answer: 2
  },
  {
    section: "General Knowledge",
    question: "The headquarters of UNESCO is located in?",
    options: ["New York", "Paris", "London", "Geneva"],
    answer: 1
  },
  {
    section: "History",
    question: "Which Mughal emperor built the Taj Mahal?",
    options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
    answer: 2
  },
  {
    section: "General Knowledge",
    question: "Which is the national aquatic animal of India?",
    options: ["Blue Whale", "River Dolphin", "Shark", "Crocodile"],
    answer: 1
  },
  {
    section: "Science",
    question: "Who invented the Telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "James Watt", "Nikola Tesla"],
    answer: 1
  },
  {
    section: "Geography",
    question: "Which continent is known as the Dark Continent?",
    options: ["Asia", "Europe", "Africa", "Australia"],
    answer: 2
  },
  {
    section: "Science",
    question: "The Sun rises in the east because?",
    options: ["Earth rotates west to east", "Sun moves around Earth", "Moon pulls Earth", "Earth rotates east to west"],
    answer: 0
  },
  {
    section: "General Knowledge",
    question: "Which is the highest civilian award in India?",
    options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
    answer: 2
  },
  {
    section: "History",
    question: "Who founded the Maurya Empire?",
    options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harshavardhana"],
    answer: 2
  },
  {
    section: "Geography",
    question: "Which Indian state is known as the Spice Garden of India?",
    options: ["Tamil Nadu", "Kerala", "Karnataka", "Goa"],
    answer: 1
  },
  {
    section: "Biology",
    question: "Which blood group is known as the universal donor?",
    options: ["A+", "B+", "O-", "AB+"],
    answer: 2
  },
  {
    section: "General Knowledge",
    question: "The currency of Japan is?",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
    answer: 2
  },
  {
    section: "Science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A sum of money becomes ₹13,310 in 2 years and ₹14,641 in 3 years at compound interest. The rate of interest per annum is:",
    options: ["8%", "9%", "10%", "11%"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "The ratio of the present ages of A and B is 7:9. Six years ago, the ratio was 5:7. What is A's present age?",
    options: ["28", "35", "42", "49"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A train 240 m long crosses a platform 360 m long in 30 seconds. What is the speed of the train?",
    options: ["54 km/h", "60 km/h", "66 km/h", "72 km/h"],
    answer: 3
  },
  {
    section: "Mathematics",
    question: "A can complete a work in 20 days and B in 30 days. They work together for 8 days. The remaining work is completed by C in 4 days. In how many days can C alone complete the whole work?",
    options: ["18", "20", "24", "30"],
    answer: 3
  },
  {
    section: "Mathematics",
    question: "A dealer marks an article 40% above the cost price and allows a discount of 10%. His profit percentage is:",
    options: ["20%", "24%", "26%", "28%"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "The average of 12 numbers is 38. If one number 84 is replaced by 48, the new average is:",
    options: ["35", "36", "37", "38"],
    answer: 0
  },
  {
    section: "Mathematics",
    question: "A boat travels 36 km downstream in 3 hours and the same distance upstream in 4.5 hours. What is the speed of the boat in still water?",
    options: ["9 km/h", "10 km/h", "11 km/h", "12 km/h"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "If x² − 13x + 40 = 0, then the value of x is:",
    options: ["5 or 8", "4 or 9", "6 or 7", "3 or 10"],
    answer: 0
  },
  {
    section: "Mathematics",
    question: "The curved surface area of a cylinder is 616 cm² and its height is 14 cm. The radius is:",
    options: ["6 cm", "7 cm", "8 cm", "9 cm"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A shopkeeper mixes two varieties of rice costing ₹48/kg and ₹60/kg in the ratio 5:3. The cost price of the mixture is:",
    options: ["₹52.5", "₹54", "₹55.5", "₹56"],
    answer: 0
  },
  {
    section: "English",
    question: "Choose the correct synonym of 'Meticulous'.",
    options: ["Careless", "Careful", "Angry", "Lazy"],
    answer: 1
  },
  {
    section: "English",
    question: "Choose the correct antonym of 'Scarcity'.",
    options: ["Shortage", "Abundance", "Lack", "Deficiency"],
    answer: 1
  },
  {
    section: "English",
    question: "Choose the correctly spelt word.",
    options: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"],
    answer: 1
  },
  {
    section: "English",
    question: "Choose the one-word substitution for 'A person who can speak many languages'.",
    options: ["Linguist", "Polyglot", "Orator", "Scholar"],
    answer: 1
  },
  {
    section: "English",
    question: "Fill in the blank: She is good _____ Mathematics.",
    options: ["at", "in", "on", "for"],
    answer: 0
  },
  {
    section: "English",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "Rahul said I am busy.",
      "Rahul said, 'I am busy.'",
      "Rahul said 'I am busy'.",
      "Rahul, said I am busy."
    ],
    answer: 1
  },
  {
    section: "English",
    question: "Identify the error: 'Neither the teacher nor the students was present.'",
    options: ["No Error", "'Neither'", "'was' should be 'were'", "'present'"],
    answer: 2
  },
  {
    section: "English",
    question: "Choose the correct passive voice: 'They are repairing the road.'",
    options: ["The road has been repaired.", "The road is repaired.", "The road is being repaired.", "The road was repaired."],
    answer: 2
  },
  {
    section: "English",
    question: "Choose the correct indirect speech: Ravi said, 'I will help you.'",
    options: ["Ravi said that he will help me.", "Ravi said that he would help me.", "Ravi says that he would help me.", "Ravi said he helps me."],
    answer: 1
  },
  {
    section: "English",
    question: "Choose the correct idiom meaning of 'Hit the nail on the head'.",
    options: ["Miss the target", "Do something impossible", "Say exactly the right thing", "Work very hard"],
    answer: 2
  }
];

let current = 0;
let score = 0;
let time = 60 * 60;
let questionStartTime = Date.now();

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

  current++;
  loadQuestion();
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

  if (!timer) return;

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