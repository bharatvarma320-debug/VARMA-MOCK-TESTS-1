const quiz = [
  {
    section: "General Intelligence & Reasoning",
    question: "Sound : Cacophony :: Smell : ?",
    options: ["Perfume", "Stench", "Aroma", "Tongue"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "14 : 210 :: 16 : ?",
    options: ["256", "272", "240", "280"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Three of the following four words are alike in a certain way. Which one does not belong to the group?",
    options: ["Rigveda", "Yajurveda", "Ayurveda", "Samaveda"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Find the odd number pair from the given alternatives.",
    options: ["126", "215", "342", "511"],
    answer: 3
  },
  {
    section: "General Intelligence & Reasoning",
    question: "In a certain code language, MONKEY is written as XDJMNL. How will TIGER be written?",
    options: ["QDFHS", "SDFHS", "SHFDQ", "UJHFS"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "If ROSE is coded as 6821 and CHAIR is coded as 73456, how will SEARCH be coded?",
    options: ["214673", "214763", "216473", "214637"],
    answer: 0
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Complete the number series: 4, 11, 30, 67, 128, ?",
    options: ["219", "216", "222", "195"],
    answer: 0
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Complete the alphabetical series: Z, W, S, N, H, ?",
    options: ["B", "C", "A", "D"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Complete the alpha-numeric series: C3E, G7I, K11M, ?",
    options: ["N14P", "O15Q", "O14Q", "P15R"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    options: ["Brother", "Uncle", "Cousin", "Father"],
    answer: 3
  },
  {
    section: "General Intelligence & Reasoning",
    question: "If 'P + Q' means P is the brother of Q; 'P - Q' means P is the mother of Q; and 'P * Q' means P is the sister of Q. Which expression means M is the maternal uncle of N?",
    options: ["M + K - N", "M - K + N", "M * K - N", "M + K * N"],
    answer: 0
  },
  {
    section: "General Intelligence & Reasoning",
    question: "A man walks 5 km North, turns right and walks 8 km. He turns right again and walks 9 km. Finally, he takes a left turn and walks 4 km. What is the shortest distance from the starting point?",
    options: ["12 km", "15 km", "8 km", "10 km"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "A person facing West turns 45° clockwise, then 180° clockwise, then 270° anticlockwise. Which direction is he facing now?",
    options: ["South-West", "North-West", "South-East", "South"],
    answer: 0
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Statements: All pens are markers. Some markers are scales. Conclusions: I. Some pens are scales. II. No pen is a scale.",
    options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither follows"],
    answer: 3
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Statements: No flower is a plant. All plants are trees. Conclusions: I. No flower is a tree. II. Some trees are plants.",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Which Venn diagram best represents: Doctors, Lawyers, Professionals?",
    options: ["Three disjoint circles", "Two circles inside one larger circle", "Three intersecting circles", "Nested circles"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "In a group of 50 people, 30 like tea, 25 like coffee, and 10 like both. How many like neither tea nor coffee?",
    options: ["0", "5", "10", "15"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Which two mathematical signs need to be interchanged to make the equation correct? 5 + 3 * 8 - 12 / 4 = 3",
    options: ["+ and *", "- and /", "+ and /", "* and -"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Five friends A, B, C, D and E sit around a circle facing the centre. Who is immediate left of B?",
    options: ["C", "D", "E", "A"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Six friends P, Q, R, S, T and U sit in a row. Who is at the extreme right end?",
    options: ["P", "Q", "T", "S"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "In a row of 40 students, Manik is 14th from the right. What is his rank from the left?",
    options: ["26th", "27th", "28th", "25th"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Five blocks A, B, C, D and E have different weights. Which block is the heaviest?",
    options: ["C", "D", "E", "A"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "If 15 August 2011 was Monday, what day was 15 August 2012?",
    options: ["Tuesday", "Wednesday", "Thursday", "Monday"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "What is the reflex angle between the hands of a clock at 4:20?",
    options: ["10°", "350°", "20°", "340°"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Statement: Mobile phones are prohibited near railway tracks. Which assumption is correct?",
    options: ["Only I", "Only II", "Both I and II", "Neither I nor II"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Statement: Severe drought has been reported in the region. Which conclusion follows?",
    options: ["Only I", "Only II", "Both I and II", "Neither I nor II"],
    answer: 2
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Find the missing number in the series: 2, 6, 14, 30, 62, ?",
    options: ["124", "126", "128", "132"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "A cube of side 4 cm is painted on all faces and cut into 1 cm cubes. How many small cubes have no paint on them?",
    options: ["4", "8", "16", "27"],
    answer: 1
  },
  {
    section: "General Intelligence & Reasoning",
    question: "Choose the correct mirror image of the word 'REASONING' when a vertical mirror is placed on its right.",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0
  },
  {
    section: "General Intelligence & Reasoning",
    question: "If a square transparent sheet is folded along the central horizontal line, how many independent layers overlap?",
    options: ["1 layer", "2 layers", "3 layers", "4 layers"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "The population of a town increases by 10% in the first year and decreases by 10% in the second year. If the current population is 19,800, what was the population of the town exactly two years ago?",
    options: ["18,500", "20,000", "19,000", "21,500"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "By selling an article for $1,170, a merchant suffers a net loss of 10%. At what price should he sell the article to secure a net gain of 20%?",
    options: ["1,440", "1,500", "1,560", "1,620"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A sum of money is divided among A, B and C in the ratio 2:3:5. If B's share is $450 more than A's share, find the total sum.",
    options: ["3,500", "4,000", "4,200", "4,500"],
    answer: 3
  },
  {
    section: "Mathematics",
    question: "The average age of a family of 5 members is 26 years. If the youngest member is currently 6 years old, what was the average age of the family just before the birth of the youngest member?",
    options: ["22 years", "24 years", "25 years", "26 years"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A and B can complete a piece of work in 15 days and 10 days respectively. They work together for 2 days, then B leaves. In how many total days is the work completed?",
    options: ["8 days", "10 days", "12 days", "14 days"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "Two trains start simultaneously from opposite stations at speeds of 60 km/h and 75 km/h. When they meet, one train has travelled 60 km more than the other. Find the total distance.",
    options: ["480 km", "540 km", "520 km", "600 km"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A sum of money triples itself in 12 years under simple interest. In how many years will it become five times itself at the same rate?",
    options: ["18 years", "20 years", "22 years", "24 years"],
    answer: 3
  },
  {
    section: "Mathematics",
    question: "Calculate the compound interest on $8,000 for 1.5 years at 10% per annum compounded half-yearly.",
    options: ["1,200", "1,261", "1,250", "1,321"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "In what ratio should tea costing $60/kg and $85/kg be mixed so that the mixture sold at $84/kg gives a profit of 20%?",
    options: ["2:3", "3:2", "4:3", "5:4"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A, B and C invest in a business. A invests one-third capital for one-third time, B invests one-sixth capital for one-sixth time and C invests the remaining capital for the whole time. If the total profit is $4,600, what is B's share?",
    options: ["150", "200", "180", "250"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A man rows at 5 km/h in still water. If the river current is 1 km/h and it takes 5 hours to row downstream and return upstream, what is the one-way distance?",
    options: ["10 km", "12 km", "14 km", "15 km"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "Ten years ago, a father's age was three times his son's age. Ten years from now, the father will be twice his son's age. What is their present age ratio?",
    options: ["5:2", "7:3", "6:3", "9:4"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "Pipe A fills a tank in 20 minutes and Pipe B in 30 minutes. Both are opened together, but Pipe A is closed after 5 minutes. How many more minutes will Pipe B take to fill the remaining tank?",
    options: ["12.5 minutes", "15.5 minutes", "17.5 minutes", "20 minutes"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A fraction becomes 4/5 when 1 is added to both numerator and denominator. When 5 is subtracted from both, it becomes 1/2. Find the original fraction.",
    options: ["5/7", "7/9", "7/11", "9/11"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "The LCM of two numbers is 4800 and their HCF is 160. If one number is 480, find the other number.",
    options: ["1200", "1600", "1500", "1800"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A student secures 125 marks and fails by 40 marks. If the passing marks are 33% of the maximum marks, what are the maximum marks?",
    options: ["400", "450", "500", "600"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A dishonest shopkeeper uses an 800 g weight instead of 1 kg while selling goods at cost price. What is his gain percentage?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A bag contains 50-cent, 25-cent and 10-cent coins in the ratio 5:9:4. If their total value is $206, how many 25-cent coins are there?",
    options: ["180", "270", "360", "450"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "The average of 11 observations is 50. The average of the first 6 observations is 49 and the last 6 observations is 52. Find the 6th observation.",
    options: ["50", "56", "52", "60"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "Worker A is twice as efficient as Worker B and completes a job 15 days earlier. If they work together, in how many days will they complete the work?",
    options: ["6 days", "8 days", "10 days", "12 days"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A train 180 m long crosses a platform 420 m long in 30 seconds. Find the speed of the train.",
    options: ["60 km/h", "72 km/h", "75 km/h", "80 km/h"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "A trader marks an article 40% above the cost price and allows a discount of 20%. Find his profit percentage.",
    options: ["10%", "12%", "15%", "20%"],
    answer: 1
  },
  {
    section: "Mathematics",
    question: "The difference between compound interest and simple interest on ₹10,000 for 2 years at 10% per annum is:",
    options: ["₹80", "₹90", "₹100", "₹110"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "A sum becomes ₹6,250 in 2 years and ₹7,500 in 4 years at simple interest. Find the principal.",
    options: ["₹4,000", "₹4,500", "₹5,000", "₹5,500"],
    answer: 2
  },
  {
    section: "Mathematics",
    question: "The average of five consecutive even numbers is 48. What is the largest number?",
    options: ["50", "52", "54", "56"],
    answer: 1
  },
  {
    section: "General Science",
    question: "A convex lens forms a real, inverted image of the same size as the object. Where is the object placed in front of the lens?",
    options: ["At Principal Focus (F₁)", "At twice the focal length (2F₁)", "Between Focus (F₁) and Optical Center (O)", "At Infinity"],
    answer: 1
  },
  {
    section: "General Science",
    question: "A cylindrical wire has resistance R. If its length is doubled and its radius is halved, what will be its new resistance?",
    options: ["2R", "4R", "8R", "16R"],
    answer: 3
  },
  {
    section: "General Science",
    question: "An object of mass 10 kg is moving with a uniform velocity of 4 m/s. What is the kinetic energy possessed by the object?",
    options: ["40 J", "80 J", "160 J", "20 J"],
    answer: 1
  },
  {
    section: "General Science",
    question: "The weight of an object on Earth is 60 N. What will be its approximate weight on the Moon?",
    options: ["60 N", "360 N", "10 N", "0 N"],
    answer: 2
  },
  {
    section: "General Science",
    question: "Which statement is correct regarding the speed of sound in air when humidity increases?",
    options: ["It decreases because moist air is denser.", "It increases because moist air is less dense than dry air.", "It remains unaffected.", "It becomes zero."],
    answer: 1
  },
  {
    section: "General Science",
    question: "A person cannot see objects beyond 2 m clearly. Which lens and power should be prescribed?",
    options: ["Convex +0.5 D", "Concave −0.5 D", "Concave −2.0 D", "Convex +2.0 D"],
    answer: 1
  },
  {
    section: "General Science",
    question: "Which rule determines the direction of induced current?",
    options: ["Fleming's Left-Hand Rule", "Fleming's Right-Hand Rule", "Right-Hand Thumb Rule", "Ampere's Swimming Rule"],
    answer: 1
  },
  {
    section: "General Science",
    question: "A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. What is its acceleration?",
    options: ["1 m/s²", "2 m/s²", "3.6 m/s²", "0.5 m/s²"],
    answer: 0
  },
  {
    section: "General Science",
    question: "An iron nail is placed in copper sulphate solution. The solution turns light green. Which type of reaction is this?",
    options: ["Combination Reaction", "Double Displacement Reaction", "Displacement Reaction", "Decomposition Reaction"],
    answer: 2
  },
  {
    section: "General Science",
    question: "What is the chemical formula of Plaster of Paris?",
    options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CuSO₄·5H₂O", "Na₂CO₃·10H₂O"],
    answer: 1
  },
  {
    section: "General Science",
    question: "According to the Modern Periodic Law, the properties of elements are periodic functions of:",
    options: ["Atomic mass", "Atomic number", "Mass number", "Number of neutrons"],
    answer: 1
  },
  {
    section: "General Science",
    question: "Which of the following is the only liquid non-metal at room temperature?",
    options: ["Mercury", "Iodine", "Bromine", "Chlorine"],
    answer: 2
  },
  {
    section: "General Science",
    question: "Which functional group is present in aldehydes?",
    options: ["–OH", "–COOH", "–CHO", ">C=O"],
    answer: 2
  },
  {
    section: "General Science",
    question: "A solution turns red litmus paper blue. What is the most likely pH of the solution?",
    options: ["1", "4", "7", "10"],
    answer: 3
  },
  {
    section: "General Science",
    question: "Cinnabar is an important ore of which metal?",
    options: ["Copper", "Mercury", "Aluminium", "Iron"],
    answer: 1
  },
  {
    section: "General Science",
    question: "The element having atomic number 17 belongs to:",
    options: ["Period 3, Group 17", "Period 2, Group 17", "Period 3, Group 7", "Period 4, Group 17"],
    answer: 0
  },
  {
    section: "General Science",
    question: "Bleaching powder is produced by passing chlorine gas over:",
    options: ["Calcium oxide (CaO)", "Dry calcium hydroxide [Ca(OH)₂]", "Calcium carbonate (CaCO₃)", "Calcium sulphate (CaSO₄)"],
    answer: 1
  },
  {
    section: "General Science",
    question: "Complete digestion of food takes place in the:",
    options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"],
    answer: 1
  },
  {
    section: "General Science",
    question: "The breakdown of pyruvate into carbon dioxide, water and energy occurs in the:",
    options: ["Cytoplasm", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"],
    answer: 1
  },
  {
    section: "General Science",
    question: "Which plant hormone promotes cell elongation and phototropism?",
    options: ["Gibberellin", "Cytokinin", "Auxin", "Abscisic acid"],
    answer: 2
  },
  {
    section: "General Science",
    question: "Hydra reproduces by which of the following methods?",
    options: ["Binary Fission", "Budding", "Fragmentation", "Spore Formation"],
    answer: 1
  },
  {
    section: "General Science",
    question: "A cross between TT × tt produces all tall F₁ offspring. This demonstrates which of Mendel's principles?",
    options: ["Law of Independent Assortment", "Law of Segregation", "Law of Dominance", "Law of Incomplete Dominance"],
    answer: 2
  },
  {
    section: "General Science",
    question: "What is the structural and functional unit of the kidney?",
    options: ["Neuron", "Nephron", "Alveoli", "Ureter"],
    answer: 1
  },
  {
    section: "General Science",
    question: "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
    options: ["Aorta", "Pulmonary Vein", "Pulmonary Artery", "Vena Cava"],
    answer: 2
  },
  {
    section: "General Science",
    question: "At which trophic level is the maximum amount of energy available in an ecosystem?",
    options: ["Primary Consumers", "Producers", "Secondary Consumers", "Apex Predators"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "In which year was the Quit India Movement launched by Mahatma Gandhi with the slogan 'Do or Die'?",
    options: ["1920", "1930", "1942", "1945"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Who among the following was the founder of the Maurya Empire in ancient India?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Which Mughal Emperor constructed the historic Red Fort and Jama Masjid in Delhi?",
    options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Which is the longest river in Peninsular India, often referred to as the 'Dakshin Ganga'?",
    options: ["Mahanadi", "Godavari", "Krishna", "Kaveri"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Which soil type covers the largest area in India and is most suitable for major agricultural crops?",
    options: ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Kaziranga National Park is located in which Indian state?",
    options: ["West Bengal", "Assam", "Uttarakhand", "Odisha"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Which Article is known as the 'Heart and Soul of the Constitution'?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: 3
  },
  {
    section: "General Awareness",
    question: "What is the minimum age required to become a member of the Rajya Sabha?",
    options: ["25 years", "30 years", "35 years", "21 years"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Fundamental Duties were added to the Constitution by which Amendment Act?",
    options: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "73rd Amendment Act, 1992"],
    answer: 0
  },
  {
    section: "General Awareness",
    question: "Who appoints the Comptroller and Auditor General (CAG) of India?",
    options: ["Prime Minister", "Chief Justice of India", "President of India", "Union Finance Minister"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Which institution is the central bank of India?",
    options: ["NITI Aayog", "SEBI", "Reserve Bank of India (RBI)", "State Bank of India (SBI)"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Where is the headquarters of ISRO located?",
    options: ["Sriharikota", "Bengaluru", "Thiruvananthapuram", "Hyderabad"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "The International Court of Justice (ICJ) is headquartered in:",
    options: ["Geneva", "New York", "The Hague", "Paris"],
    answer: 2
  },
  {
    section: "General Awareness",
    question: "Which three countries are jointly hosting the 2026 FIFA Men's World Cup?",
    options: ["USA, Mexico & Canada", "Spain, Portugal & Morocco", "Argentina, Uruguay & Chile", "Qatar, UAE & Saudi Arabia"],
    answer: 0
  },
  {
    section: "General Awareness",
    question: "The 20th Asian Games (Aichi-Nagoya 2026) are scheduled to be held in which country?",
    options: ["China", "Japan", "South Korea", "Indonesia"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "What is the main objective of the PM Vishwakarma Yojana?",
    options: ["Electricity subsidy", "Financial aid, toolkit incentives and skill training for traditional artisans", "Health insurance", "Solar rooftop installation"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Under the Jal Jeevan Mission, what is the target quantity of potable water per person per day?",
    options: ["40 Litres", "55 Litres", "70 Litres", "100 Litres"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "National Farmers' Day is celebrated on 23 December to mark the birth anniversary of:",
    options: ["Lal Bahadur Shastri", "Chaudhary Charan Singh", "Rajiv Gandhi", "Atal Bihari Vajpayee"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Which was the first post-independence state to pass a Uniform Civil Code Bill?",
    options: ["Goa", "Uttarakhand", "Gujarat", "Assam"],
    answer: 1
  },
  {
    section: "General Awareness",
    question: "Which government scheme uses drone surveys to provide rural property cards?",
    options: ["PM-KISAN", "SVAMITVA Scheme", "PM Gati Shakti", "e-NAM"],
    answer: 1
  }
];
let current = 0;
let score = 0;
let time = 90 * 60;
let userAnswers = []; // ✅ added globally

function loadQuestion() {
  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  document.getElementById("section").innerHTML = quiz[current].section;
  document.getElementById("question").innerHTML = quiz[current].question;

  let html = "";
  quiz[current].options.forEach((option, index) => {
    const checked = userAnswers[current] === index ? "checked" : "";
    html += `
      <label>
        <input type="radio" name="answer" value="${index}" ${checked}>
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

  const answer = parseInt(selected.value);
  userAnswers[current] = answer;

  if (answer === quiz[current].answer) {
    score++;
  }

  current++;
  loadQuestion();
}

function finishQuiz() {
  // ✅ recalculate score based on stored answers
  score = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === quiz[idx].answer) {
      score++;
    }
  });

  document.querySelector(".card").innerHTML = `
    <h2>🎉 RRB Group D Mock Test Completed</h2>
    <h3>Total Questions : ${quiz.length}</h3>
    <h3>Correct Answers : ${score}</h3>
    <h3>Wrong Answers : ${quiz.length - score}</h3>
    <h3>Score : ${((score / quiz.length) * 100).toFixed(2)}%</h3>
  `;
}

function startTimer() {
  const timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerHTML =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    time--;

    if (time < 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

loadQuestion();
startTimer();

