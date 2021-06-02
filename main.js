const readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name: "Abc",
    score: 3,
  },
  {
    name: "Xyz",
    score: 2,
  }
]

let questions = [
  {
    question: "Am I older than 25? ",
    answer: "no"
  },
  {
    question: "My favourite programming language is: ",
    answer: "javascript"
  },
  {
    question: "Where am I from? ",
    answer: "Coimbatore"
  },
  {
    question: "Do I have a pet? ",
    answer: "no"
  },
  {
    question: "Who is my favourite superhero? ",
    answer: "Deadpool"
  },
]


 var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW SARAN?");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!");
    score++;
    
  } else {
    console.log("You are wrong!");   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

for (let i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }


  console.log("YAY! You SCORED: ", score);

  console.log("High scores:");

  for(let i = 0; i < highScores.length; i++){
    console.log(highScores[i].name +": " + highScores[i].score)
  }


  console.log("If you have beaten the high score, send me  ascreenshot of your score, I will update it")