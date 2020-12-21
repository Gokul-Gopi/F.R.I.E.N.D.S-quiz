var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question(chalk.hex('#4d94ff')('Please enter your name '));
console.log(chalk.hex('#4d94ff')('Hello '+ username+'! Welcome to a FRIENDS quiz'));
var score = 0;




function quizGame(ques,ans){
  var userAnswer = readlineSync.question(ques);

  if(userAnswer===ans){
  score+=1;
  console.log(chalk.green('Right Answer Buddy!'));
  }
  else{
  score-=1
  console.log(chalk.red('Oops! you got that wrong'));
  }

  console.log(chalk.hex('#00f0e4')('Your score is '+ score));
  console.log('------------------------------')

}

var qNa = [
  {
    question:`
    CHOOSE THE CORRECT OPTION
    1) What's the last name of Rachel?
    a- Geller
    b- Green
    c- Amy
     `,
    answer: 'b'
  },
  {
    question:`
    1) Which of the following relate to- JOEY SPECIAL?
    a- Two Pizzas
    b- Sandwich
    c- Turkey
     `,
    answer: 'a'
  }, 
  {
    question:`
    1) To whom does Phoebe gets married?
    a- David The scientist guy
    b- Mike
    c- Joey
     `,
    answer: 'b'
  }, 
  {
    question:`
    1) Whats the name of the Monkey Ross had?
    a- Rossi
    b- Marcel
    c- Amy
     `,
    answer: 'b'
  },
  {
    question:`
    1) Whats the name of the doll Joey had?
    a- Pugsy
    b- Dugsy
    c- Hugsy
     `,
    answer: 'c'
  }
];

var highScores = [
  {
    score:5,
    name:'Gokul'
  },
  {
    score:4,
    name:'Rahul' 
  }
]

for(let i=0;i<5;i++){
  quizGame(qNa[i].question,qNa[i].answer);
}

checkHighScore(score);





function checkHighScore(input){

  if(highScores[0].score < input ||

  highScores[1].score < input ){
     console.log('YOU SCORED  ' + score);
     
    console.log(chalk.hex('#fad400')(`It looks like you've beaten a previous high score, CONGRATULATION! Do send us a screenshot of your score. following were the previous highScores.
    ${highScores[0].name}:${highScores[0].score}
    ${highScores[1].name}:${highScores[1].score}`));
  }
  else{
    console.log('YOU SCORED  ' + score);
  }
}







  
