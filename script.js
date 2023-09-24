const questions = [
  {
    question: "What is the capital of USA?",
    options: [
      { text: "Washington DC", correct: true },
      { text: "Chicago", correct: false },
      { text: "New York", correct: false },
      { text: "Los Angeles", correct: false },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    options: [
      { text: "Whale Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: [
      { text: "K2", correct: false },
      { text: "Nanda Devi", correct: false },
      { text: "Kanchenjunga", correct: false },
      { text: "Mount Everest", correct: true },
    ],
  },
  {
    question:
      "Which country's team has been FIFA World Cup champions most number of times?",
    options: [
      { text: "Brazil", correct: true },
      { text: "Germany", correct: false },
      { text: "Argentina", correct: false },
      { text: "France", correct: false },
    ],
  },
  {
    question: "Which mammal among these lays eggs?",
    options: [
      { text: "Racoon", correct: false },
      { text: "Bat", correct: false },
      { text: "Platypus", correct: true },
      { text: "Mouse", correct: false },
    ],
  },
  {
    question: "How many medals did India win in the latest Olympics?",
    options: [
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    options: [
      { text: "Asia", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: true },
      { text: "Antarctica", correct: false },
    ],
  },
  {
    question: "Where is Sitapur district located?",
    options: [
      { text: "Uttarakhand", correct: false },
      { text: "Chattisgarh", correct: false },
      { text: "West Bengal", correct: false },
      { text: "Uttar Pradesh", correct: true },
    ],
  },
  {
    question: "How many union territories are now there in India?",
    options: [
      { text: "9", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "When did Chandrayaan-3 mission achieve success?",
    options: [
      { text: "5 August 2023", correct: false },
      { text: "2 September 2023", correct: false },
      { text: "23 August 2023", correct: true },
      { text: "25 August 2023", correct: false },
    ],
  },
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const accept_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const quesEle = document.getElementById("question");
const optnBtn = document.getElementById("option-buttons");
const nxtBtn = document.getElementById("next-btn");


start_btn.onclick = () => {
  start_btn.style.display = "none";
  info_box.classList.add("activeInfo");
};
accept_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestion(0);
  startTimer(60);
};
let currQuesIndex = 0;
let score = 0;
let timeVal = 60;
let widthVal = 0;
let counter;

function startQuiz() {
  currQuesIndex = 0;
  score = 0;
  nxtBtn.innerHTML = "Next";
}
function showQuestion() {
  resetState();
  let currQues = questions[currQuesIndex];
  let quesNo = currQuesIndex + 1;
  quesEle.innerHTML = quesNo + "." + currQues.question;
  currQues.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = option.text;
    button.classList.add("btn");
    optnBtn.appendChild(button);
    if (option.correct) {
      button.dataset.correct = option.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function startTimer(time) {
  timer();
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time expired";
    }
  }

  /*nxtBtn.classList.add("show");*/
}

function resetState() {
  nxtBtn.style.display = "none";
  while (optnBtn.firstChild) {
    optnBtn.removeChild(optnBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add(`correct`);
    score++;
  } else {
    selectedBtn.classList.add(`wrong`);
  }
  Array.from(optnBtn.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add(`correct`);
    }
    button.disabled = false;
  });
  nxtBtn.style.display = "block";
}

function showScore() {
  resetState();
  quesEle.innerHTML = `Your score is ${score} out of ${questions.length}!`;
  nxtBtn.innerHTML = "Want to improve your score? Retake the quiz!";
  nxtBtn.style.display = "block";
}

function handleNxtBtn() {
  Array.from(optnBtn.children).forEach((button) => {
    button.classList.remove("correct", "wrong");
    button.disabled = true;
  });
  currQuesIndex++;
  if (currQuesIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nxtBtn.addEventListener("click", () => {
  if (currQuesIndex < questions.length) {
    handleNxtBtn();
  } else {
    showScore();
    startQuiz();
  }
});

startQuiz();
