const passage1 = `
Read the given passage and answer the questions that follow.

Most people drink orange juice and eat oranges because they are said to be rich in vitamin C. There are also other foods that are rich in vitamin C. It is found in citrus fruits and vegetables such as broccoli, spinach, cabbage, cauliflower, and carrots...
`;

const quiz = [

{
section:"General Intelligence & Reasoning",
question:"If 4th January, 2008 falls on Friday, what day of week will fall on 4th January, 2009?",
options:["Monday","Friday","Wednesday","Sunday"],
answer:3
},

{
section:"General Intelligence & Reasoning",
question:"Select the missing number: 18, 37, 76, 155, 314, ?",
options:["633","628","537","528"],
answer:0
},

{
section:"General Intelligence &Reasoning",
question:"Read the statements and conclusions carefully. Statements: All beans are meat. All breads are meat. Conclusions: I. Some beans are breads. II. Some breads are beans.",
options:[
"Only conclusion I follows",
"Both conclusions I and II follow",
"Either conclusion I or II follows",
"Neither conclusion I nor II follows"
],
answer:3
},
{
section:"General Intelligence & Reasoning",
question:"A is the mother of B. B is sister of C. C is wife of D. D is son of E. E is wife of F. F is brother of G. How is E related to C?",
options:[
"Father",
"Husband's father",
"Mother",
"Husband's mother"
],
answer:3
},

{
section:"General Intelligence & Reasoning",
question:"Select the related letters. BGR : CIU :: HCY : ?",
options:["IFC","IEB","JEC","JFB"],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"Select the correct combination of mathematical signs to replace 'A' from left to right and balance the equation. 26 A 2 A 3 A 3 A 13",
options:[
"×, =, -, ÷",
"÷, ×, =, -",
"×, ÷, +, =",
"÷, ×, =, ×"
],
answer:1
},

{
section:"General Intelligence & Reasoning",
question:"Select the number replacing the question mark: 4, 16, 9, ?, 29, 116",
options:["36","27","45","2"],
answer:0
},

{
section:"General Intelligence & Reasoning",
question:"In a certain code, AXE is written as 120. How will FEE be written?",
options:["150","80","60","20"],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"Arrange the following words in dictionary order: 1.Introduce 2.Internship 3.Interaction 4.Interjection 5.Intervene 6.Interruption",
options:[
"3,4,2,6,1,5",
"3,4,2,6,5,1",
"3,4,2,5,6,1",
"3,2,4,6,5,1"
],
answer:1
},

{
section:"General Intelligence & Reasoning",
question:"In a certain code language, 'kew xas huma deko' means 'she is eating apples'; 'kew tepo qua' means 'she sells toys'; and 'sul lim deko' means 'I like apples'. Which word means 'she and apples'?",
options:[
"kew and deko",
"kew and lim",
"xas and kew",
"xas and deko"
],
answer:0
}

,
{
section:"General Intelligence & Reasoning",
question:"School : Education :: ? : ?",
options:[
"Scalpel : Teacher",
"Hospital : Treatment",
"Teacher : School",
"Class : College"
],
answer:1
},

{
section:"General Intelligence & Reasoning",
question:"Select the option in which the numbers are related in the same way as 4, 17, 33.",
options:[
"5, 10, 55",
"12, 15, 244",
"6, 15, 71",
"10, 14, 114"
],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"In a certain code, 'MAN' is written as 'SANM' and 'WORD' is written as 'SORDW'. How would 'SALE' be written?",
options:[
"LESAS",
"LEASS",
"SALES",
"SEALS"
],
answer:0
},

{
section:"General Intelligence & Reasoning",
question:"Neetu walks 25 m east, then 20 m south, then 62 m west, then 91 m north, then 62 m east, then 35 m south, then 25 m west and finally 15 m north. How far and in which direction is she from the starting point?",
options:[
"55 m, South",
"51 m, North",
"51 m, South",
"55 m, North"
],
answer:1
},

{
section:"General Intelligence & Reasoning",
question:"The sum of the present ages of a mother and son is 50 years. Four years ago, their ages were in the ratio 6 : 1. Find the mother's present age.",
options:[
"35 years",
"40 years",
"42 years",
"45 years"
],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"Find the missing term: EDC, GHI, MLK, OPQ, UTS, ?",
options:[
"YXW",
"XYZ",
"ZYX",
"WXY"
],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"In a row of girls facing North, Rinky is 10th to the left of Pinky, who is 21st from the right end. Minky is 17th from the left end and is 4th to the right of Rinky. How many girls are there in the row?",
options:[
"43",
"45",
"44",
"41"
],
answer:0
},

{
section:"General Intelligence & Reasoning",
question:"Eight friends A, B, C, D, E, F, G and H have different heights. A is taller than F but shorter than D. G is shorter than B but taller than H. E is taller than B. C is shorter than F but taller than E. Who is the second tallest?",
options:[
"A",
"D",
"H",
"F"
],
answer:0
},

{
section:"General Intelligence & Reasoning",
question:"Choose the correct coded family relation.",
options:[
"H#R$D$N",
"H#R#D@N",
"N%F@D$H",
"N%F@D%H"
],
answer:2
},

{
section:"General Intelligence & Reasoning",
question:"Which letter-cluster will replace the question mark? PBXJ, TFXJ, ?, BNJX, FRXJ",
options:[
"WKJX",
"VKJX",
"VLXJ",
"XJXJ"
],
answer:3
},
{
section: "General Knowledge",
question: "Q21. In which Indian city is Panch Mahal located?",
options: ["Lucknow", "Golconda", "Agra", "Fatehpur Sikri"],
answer: "Fatehpur Sikri"
},

{
section: "General Knowledge",
question: "Q22. Who led the rebellion in Kanpur in 1857 and drove the British troops out of the city?",
options: ["Nana Saheb", "Bakht Khan", "Hazrat Mahal", "Ahmedullah Shah"],
answer: "Nana Saheb"
},

{
section: "General Knowledge",
question: "Q23. Strait of Malacca separates",
options: ["Sumatra and Borneo", "Sumatra and Java", "Malaysia and Java", "Malaysia and Sumatra"],
answer: "Malaysia and Sumatra"
},

{
section: "General Knowledge",
question: "Q24. Who was the Prime Minister of India when the Third Five-Year Plan was made?",
options: ["Indira Gandhi", "Morarji Desai", "Rajiv Gandhi", "Jawaharlal Nehru"],
answer: "Jawaharlal Nehru"
},

{
section: "General Knowledge",
question: "Q25. In sweet pea, the tendrils are modified",
options: ["Stem branches", "Leaflets", "Leaves", "Stipules"],
answer: "Leaflets"
},

{
section: "General Knowledge",
question: "Q26. Which of the following individuals is the author of the book Anandamath?",
options: ["Rabindranath Tagore", "Munshi Premchand", "Bankim Chandra Chatterjee", "Dr. Rajendra Prasad"],
answer: "Bankim Chandra Chatterjee"
},

{
section: "General Knowledge",
question: "Q27. What is the average height of the Troposphere?",
options: ["44 km", "50 km", "80 km", "13 km"],
answer: "13 km"
},

{
section: "General Knowledge",
question: "Q28. In which year did India win its first Olympic Gold in Hockey?",
options: ["1924", "1928", "1932", "1969"],
answer: "1928"
},

{
section: "General Knowledge",
question: "Q29. What is meant by Mixed Economy?",
options: [
"Co-existence of Labor intensive and Capital intensive industries",
"Co-existence of Small and Large scale industries",
"Co-existence of National and Foreign companies",
"Co-existence of Public and Private sectors"
],
answer: "Co-existence of Public and Private sectors"
},

{
section: "General Knowledge",
question: "Q30. Vinegar is a solution of",
options: [
"50%-60% acetic acid in alcohol",
"5%-8% acetic acid in alcohol",
"5%-8% acetic acid in water",
"50%-60% acetic acid in water"
],
answer: "5%-8% acetic acid in water"
},
{
section: "General Knowledge",
question: "Q31. Who won the Women's Premier League (WPL) 2025 title?",
options: [
"Chennai Super Kings",
"Delhi Capitals",
"Mumbai Indians",
"Royal Challengers Bangalore"
],
answer: "Mumbai Indians"
},

{
section: "General Knowledge",
question: "Q32. Which of the following is correct regarding the New Industrial Policy announced in July 1991?",
options: [
"It introduced a five-year industrial licensing review mechanism.",
"It de-reserved several industries previously earmarked for the public sector.",
"It banned FDI in manufacturing and core industries.",
"It expanded the scope of licensing for all industries."
],
answer: "It de-reserved several industries previously earmarked for the public sector."
},

{
section: "General Knowledge",
question: "Q33. The 'Lezim' dance form is peculiar to which of the following states?",
options: [
"Karnataka",
"Bihar",
"Maharashtra",
"Gujarat"
],
answer: "Maharashtra"
},

{
section: "General Knowledge",
question: "Q34. Right to livelihood has been established as a part of which Fundamental Right by the Supreme Court?",
options: [
"Right to equality of opportunity",
"Right to life",
"Right to freedom of movement",
"Right to freedom of profession"
],
answer: "Right to life"
},

{
section: "General Knowledge",
question: "Q35. Which movement marked the beginning of the Civil Disobedience Movement?",
options: [
"Khilafat Movement",
"Salt Satyagraha",
"Ghadar Movement",
"Non-Cooperation Movement"
],
answer: "Salt Satyagraha"
},

{
section: "General Knowledge",
question: "Q36. According to the Regulating Act 1773, which of the following options is INCORRECT about the powers and responsibilities of the Governor General?",
options: [
"Can make rules and regulations for the civil government of Fort William",
"Can control the Presidencies of Madras and Bombay in war and peace",
"Powered to superintend the Presidencies of Madras and Bombay in war and peace",
"Can override the decision of his council"
],
answer: "Can override the decision of his council"
},

{
section: "General Knowledge",
question: "Q37. 'Bindusara' was the son of ________.",
options: [
"Ashoka",
"Chandragupta Maurya",
"Sarvatha-siddhi",
"Vikramaditya"
],
answer: "Chandragupta Maurya"
},

{
section: "General Knowledge",
question: "Q38. Reserve Bank of India was constituted under the Reserve Bank of India Act, ____.",
options: [
"1934",
"1947",
"1950",
"1952"
],
answer: "1934"
},

{
section: "General Knowledge",
question: "Q39. Which country hosted the 13th BRICS Summit in 2021?",
options: [
"Brazil",
"Russia",
"India",
"China"
],
answer: "India"
},

{
section: "General Knowledge",
question: "Q40. Where were the 2025 Asian Youth Games, in which India achieved its best-ever performance with 48 medals, held?",
options: [
"Manama, Bahrain",
"Doha, Qatar",
"Nanjing, China",
"Singapore"
],
answer: "Manama, Bahrain"
},
{
section: "Elementary Mathematics",
question: "Q41. What will come in the place of '?' in the following question? 240 ÷ 40 + 2 × 5 + 4 = ?",
options: ["4.6", "15", "64", "19"],
answer: "19"
},

{
section: "Elementary Mathematics",
question: "Q42. Evaluate: (-9) - (-60) ÷ (+12) + (-3) × 7",
options: ["-37", "-38", "-35", "-34"],
answer: "-34"
},

{
section: "Elementary Mathematics",
question: "Q43. Height of a cone is 12 cm and radius of its base is 14 cm. What is the volume of the cone?",
options: ["2464 cm³", "2692 cm³", "2248 cm³", "2872 cm³"],
answer: "2464 cm³"
},

{
section: "Elementary Mathematics",
question: "Q44. P and Q can do a piece of work in 24 days, while R and S can do the same work in 8 days. In how many days can P, R and S do it together?",
options: ["10 days", "6 days", "7 days", "5 days"],
answer: "6 days"
},

{
section: "Elementary Mathematics",
question: "Q45. In a 400 litres mixture of A and B, the quantity of A is 240 litres. What is the ratio of quantity of A and B in the given mixture?",
options: ["3 : 1", "2 : 1", "3 : 2", "3 : 4"],
answer: "3 : 2"
},

{
section: "Elementary Mathematics",
question: "Q46. If a boat goes upstream at a speed of 18 km/hr and comes back at the same distance at 30 km/hr, what is its average speed (in km/hr) for the total journey?",
options: ["22.5", "24", "20.5", "25"],
answer: "22.5"
},

{
section: "Elementary Mathematics",
question: "Q47. There is a circular path of width 4 m inside a circular park along its boundary. If the radius of the park is 16 m, find the area of the path (Use π = 3.14).",
options: ["251.68 m²", "261.58 m²", "351.68 m²", "361.58 m²"],
answer: "351.68 m²"
},

{
section: "Elementary Mathematics",
question: "Q48. If the length of the shadow of a vertical pole on the horizontal ground is √3 times its height, then the angle of elevation is:",
options: ["45°", "50°", "30°", "35°"],
answer: "30°"
},

{
section: "Elementary Mathematics",
question: "Q49. A boat is moving in still water at a speed of 15 km/h. The speed of the stream is 3 km/h. How much time will the boat take to cover 6 km upstream?",
options: ["30 minutes", "15 minutes", "20 minutes", "45 minutes"],
answer: "30 minutes"
},

{
section: "Elementary Mathematics",
question: "Q50. A boat can travel 21 km in 3 hours going upstream. It can travel 55 km in 5 hours going downstream. What is the speed of the stream?",
options: ["2.5 km/h", "3.5 km/h", "3 km/h", "2 km/h"],
answer: "2 km/h"
},
{
section: "Elementary Mathematics",
question: "Q51. Evaluate: (40 ÷ 4) + (12 × 6) ÷ 4 × 2",
options: ["-37", "-36", "-35", "-34"],
answer: "-36"
},

{
section: "Elementary Mathematics",
question: "Q52. Height of a cone is 12 cm and radius of its base is 14 cm. What is the volume of the cone?",
options: ["2464 cm³", "2688 cm³", "2344 cm³", "2872 cm³"],
answer: "2464 cm³"
},

{
section: "Elementary Mathematics",
question: "Q53. P and Q can do a piece of work in 26 days, while R and P can do the same work in 8 days. In how many days can R and S do it together?",
options: ["10 days", "8 days", "7 days", "6 days"],
answer: "8 days"
},

{
section: "Elementary Mathematics",
question: "Q54. If A = 400 litres mixture of A and B, the quantity of A is 240 litres. What is the ratio of quantity of A and B in the given mixture?",
options: ["3 : 1", "2 : 1", "3 : 2", "3 : 4"],
answer: "3 : 2"
},

{
section: "Elementary Mathematics",
question: "Q55. If a boat goes upstream at a speed of 10 km/hr and comes back the same distance at 30 km/hr, what is the average speed (in km/hr) for the total journey?",
options: ["22.5", "24", "20.5", "15"],
answer: "15"
},

{
section: "Elementary Mathematics",
question: "Q56. There is a circular path of width 4 m inside a circular park along its boundary. If the radius of the park is 16 m, the area of the path is:",
options: ["251.86 m²", "261.86 m²", "351.86 m²", "261.58 m²"],
answer: "351.86 m²"
},

{
section: "Elementary Mathematics",
question: "Q57. If the length of the shadow of a vertical pole on the horizontal ground is 5 times its height, then the angle of elevation is:",
options: ["45°", "60°", "30°", "90°"],
answer: "30°"
},

{
section: "Elementary Mathematics",
question: "Q58. A boat is moving in still water at a speed of 15 km/h. The speed of the stream is 2.5 km/h. How much time will the boat take to cover 45 km upstream?",
options: ["30 minutes", "15 minutes", "20 minutes", "4 minutes"],
answer: "4 minutes"
},

{
section: "Elementary Mathematics",
question: "Q59. A boat can travel 21 km in 3 hours going upstream. It can travel 35 km in 5 hours going downstream. What is the speed of the stream?",
options: ["2.5 km/h", "3.5 km/h", "3 km/h", "2 km/h"],
answer: "2 km/h"
},

{
section: "English",
question: "Q60. Fill in the blank with suitable tense. '_____ I not talking on the puzzle at 6 pm last night?'",
options: ["Has", "Is", "Had", "Was"],
answer: "Was"
},
// 61
{
    section: "English",
    question: "Q61. Identify the segment in the sentence which contains a grammatical error. If there is no error, select 'No error'. The Principal and Economics professor have come to teach.",
    options: [
        "The Principal and",
        "Economics professor have",
        "Come to teach",
        "No error"
    ],
    answer: "Economics professor have"
},

// 62
{
    section: "Mathematics",
    question: "Q62. One diagonal of a rhombus-shaped field of area 240 m² is 16 m. Find the cost of fencing the field at ₹21 per metre.",
    options: [
        "₹1428",
        "₹2142",
        "₹714",
        "₹1071"
    ],
    answer: "₹1428"
},

// 63
{
    section: "English",
    question: "Q63. Select the most appropriate option to fill in the blank. Hang ____ a second, I have to ask my mother before going out this late.",
    options: [
        "up",
        "on",
        "out",
        "for"
    ],
    answer: "on"
},

// 64
{
    section: "English",
    question: "Q64. Select the alternative that will improve the underlined part of the sentence. '... launched Hindusthani, a newspaper, with the initial stage in English and Gujarati.'",
    options: [
        "In the initial stage",
        "Because the initial stage",
        "Its the initial stage",
        "No improvement"
    ],
    answer: "In the initial stage"
},

// 65
{
    section: "English",
    question: "Q65. Select the most appropriate ANTONYM of the word 'Ardent'.",
    options: [
        "Emotional",
        "Encouraging",
        "Dispassionate",
        "Humble"
    ],
    answer: "Dispassionate"
},

// 66
{
    section: "English",
    question: "Q66. Select the most appropriate ANTONYM of the word 'Impatient'.",
    options: [
        "Anxious",
        "Irritable",
        "Tolerant",
        "Restless"
    ],
    answer: "Tolerant"
},

// 67
{
    section: "English",
    question: "Q67. Select the most appropriate ANTONYM of the word 'BLAME'.",
    options: [
        "Rebuke",
        "Criticise",
        "Shout",
        "Praise"
    ],
    answer: "Praise"
},

// 68
{
    section: "English",
    question: "Q68. Fill in the blank. The Gupta family has very ____ money and can't go for a holiday every year.",
    options: [
        "many",
        "some",
        "every",
        "little"
    ],
    answer: "little"
},

// 69
{
    section: "English",
    question: "Q69. Identify the segment that contains a grammatical error. 'She does not / feel comfortable / in the midst of / the strangers.'",
    options: [
        "feel comfortable",
        "the strangers",
        "She does not",
        "in the midst of"
    ],
    answer: "No Error"
},

// 70
{
    section: "English",
    question: "Q70. Fill in the blank with a suitable gerund. The police arrested him for ____.",
    options: [
        "Speed up",
        "Speed",
        "to speed",
        "Speeding"
    ],
    answer: "Speeding"
},

// 71
{
    section: "English",
    question: "Q71. Identify the segment that contains a grammatical error. These tutorials are so elementary that they can help neither you nor I.",
    options: [
        "so elementary that",
        "neither you nor I",
        "These tutorials are",
        "they can help"
    ],
    answer: "neither you nor I"
},

// 72
{
    section: "English",
    question: "Q72. Select the most appropriate substitution. Undercover officers were sent to gather information, and they gave evidence in court from behind screens to protect their identities.",
    options: [
        "for protecting his identities",
        "in protecting their identity",
        "No improvement",
        "to protecting their identities"
    ],
    answer: "No improvement"
},

// 73
{
    section: "English",
    question: "Q73. Select the most appropriate synonym of the word 'Cordial'.",
    options: [
        "Unfriendly",
        "Friendly",
        "Brave",
        "Aromatic"
    ],
    answer: "Friendly"
},

// 74
{
    section: "English",
    question: "Q74. Select the misspelt word.",
    options: [
        "Reliable",
        "Affable",
        "Amicable",
        "Gulible"
    ],
    answer: "Gulible"
},

// 75
{
    section: "English",
    question: "Q75. Select the correctly spelt word.",
    options: [
        "equelibrium",
        "equilriam",
        "equilibrium",
        "equillibrium"
    ],
    answer: "equilibrium"
},
// Question 76
{
    section: "English",
    passage: passage1,
    question: "According to the passage, what is a consequence of a prolonged deficiency of vitamin C?",
    options: [
        "It may lead to stomach ulcers and fever.",
        "It may lead to skin infections and fever.",
        "It may lead to swelling and bleeding.",
        "It may lead to high blood pressure levels."
    ],
    answer: "It may lead to swelling and bleeding."
},

// Question 77
{
    section: "English",
    passage: passage1,
    question: "Why does the author mention vitamin C's effect on the heart?",
    options: [
        "To compare it with other heart medicines",
        "To prove that it prevents serious heart attacks",
        "To show how it improves heart rhythm",
        "To explain its role in blood circulation"
    ],
    answer: "To explain its role in blood circulation"
},

// Question 78
{
    section: "English",
    passage: passage1,
    question: "Which of the following best summarises the main idea of the passage?",
    options: [
        "Vitamin C helps in healing and prevention.",
        "Vitamin C is better than other nutrients.",
        "Vitamin C should only be taken when sick.",
        "Vitamin C is mostly found in oranges only."
    ],
    answer: "Vitamin C helps in healing and prevention."
},

// Question 79
{
    section: "English",
    passage: passage1,
    question: "Select the most appropriate title for the passage.",
    options: [
        "The Harmful Effects of Poor Nutrition",
        "A Closer Look at Modern Diet Trends",
        "The Many Uses of Orange Juice in Health",
        "Understanding the Role of Vitamin C"
    ],
    answer: "Understanding the Role of Vitamin C"
},

// Question 80
{
    section: "English",
    passage: passage1,
    question: "What can be inferred from the passage?",
    options: [
        "Oranges are currently the only reliable source of vitamin C.",
        "A lack of vitamin C in the diet can negatively affect heart health.",
        "People must take vitamin C tablets to remain healthy and strong.",
        "Natural sources of vitamin C are more effective than supplements."
    ],
    answer: "A lack of vitamin C in the diet can negatively affect heart health."
}
];

let current = 0;
let score = 0;
let time = 60 * 60;

function loadQuestion() {
    if (current >= quiz.length) {
        finishQuiz();
        return;
    }

    const currentQuestion = quiz[current];
    const passageHtml = currentQuestion.passage
        ? `<div style="white-space: pre-wrap;">${currentQuestion.passage}</div>`
        : "";

    document.getElementById("question").innerHTML = `Q${current + 1}. ${currentQuestion.question}`;
    document.getElementById("section").innerHTML = `<b>Section:</b> ${currentQuestion.section}`;

    let html = "";
    currentQuestion.options.forEach((option, index) => {
        html += `
        <label style="display:block; margin:8px 0;">
            <input type="radio" name="answer" value="${index}">
            ${option}
        </label>
        `;
    });

    document.getElementById("options").innerHTML = html;
}

function skipQuestion() {
    current++;
    loadQuestion();
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an option.");
        return;
    }

    const selectedIndex = parseInt(selected.value, 10);
    const currentQuestion = quiz[current];
    const selectedOption = currentQuestion.options[selectedIndex];
    const isCorrect = typeof currentQuestion.answer === "number"
        ? selectedIndex === currentQuestion.answer
        : selectedOption === currentQuestion.answer;

    if (isCorrect) {
        score++;
    }

    current++;
    loadQuestion();
}

function finishQuiz() {
    const percentage = ((score / quiz.length) * 100).toFixed(2);

    document.querySelector(".login-box").innerHTML = `
        <h2>🎉 SSC GD Mock Test Completed</h2>
        <h3>Total Questions : ${quiz.length}</h3>
        <h3>Correct : ${score}</h3>
        <h3>Wrong : ${quiz.length - score}</h3>
        <h3>Percentage : ${percentage}%</h3>
    `;
}

function startTimer() {
    const timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        document.getElementById("timer").innerHTML =
            "Time Left : " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        time--;

        if (time < 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

loadQuestion();
startTimer();
