// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!
//PART 1 : Minimum Viable Quiz

/************************** Commenting Part 1 ***********************************************************/

/*const input = require ('readline-sync');

//Variables 
let candidateName = input.question("Enter a  name : ");;
const quizQuestion = "True or false: 5000 meters = 5 kilometers."
const quizAnswer = "True";
let candidateAnswer = "";

//Validating that there is an entry for the candidate name 

while(candidateName.length === 0)
{

let candidateNameFixed = input.question("Enter a valid name : ");

candidateName = candidateNameFixed ;

}

//displaying the first question for the candidate 

console.log(`1. ${quizQuestion}`);
candidateAnswer = input.question ("Your Answer: ") 

//feedback for the candidate
console.log(`Correct Answer: ${quizAnswer}`);

if (candidateAnswer.toLowerCase() === quizAnswer.toLowerCase() )
{
 console.log(candidateName + " your response is correct");
}else {

console.log(candidateName + " your response is incorrect");
}*/

/************************** End  Commenting Part 1 *********************************************/
/****************************Start commenting out Part 2****************************************
//Part 2 : Use Arrays 

const input = require ('readline-sync');

let candidateName = input.question("Enter a  name : ");

const quizQuestions = [ "True or false: 5000 meters = 5 kilometers.",
                         "(5 + 3)/2 * 10 = ?",
                         "Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?",
                         "Who was the first American woman in space?",
                         "What is the minimum crew size for the International Space Station (ISS)?"];

const quizAnswers = [ "True",
                       "40",
                       "Trajectory",
                       "Sally Ride",
                       "3"];

//Validating that there is an entry for the candidate name 

while(candidateName.length === 0)
{

let candidateNameFixed = input.question("Enter a valid name : ");

candidateName = candidateNameFixed ;

}


//displaying the question for the candidate 

console.log(`1. ${quizQuestions[3]}`);
candidateAnswer = input.question ("Your Answer: ") 

//feedback for the candidate
console.log(`Correct Answer: ${quizAnswers[3]}`);

if (candidateAnswer.toLowerCase() === quizAnswers[3].toLowerCase() )
{
 console.log(`${candidateName.toUpperCase()}  your response is correct`);
}else {

console.log(`${candidateName.toUpperCase()} your response is incorrect`);
}

************************** End  Commenting Part 2 ************************************************/

//PART 3 Use Iteration to Ask all the questions 

const input = require ('readline-sync');

//Variables 
let candidateName = input.question("Enter a name : ");

const quizQuestions = [ "True or false: 5000 meters = 5 kilometers.",
                         "(5 + 3)/2 * 10 = ?",
                         "Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?",
                         "Who was the first American woman in space?",
                         "What is the minimum crew size for the International Space Station (ISS)?"];

const quizAnswers = [ "True",
                       "40",
                       "Trajectory",
                       "Sally Ride",
                       "3"];

let candidateAnswers = [];
let correctAnswers = 0;
//end variables

//Validating that there is an entry for the candidate name 

while(candidateName.length === 0)
{

let candidateNameFixed = input.question("You must enter a valid name : ");

candidateName = candidateNameFixed ;

}

console.log();
//displaying the questions for the candidate 
for (let i = 0 ; i < quizQuestions.length ; i++)
{
console.log(`${i+1}. ${quizQuestions[i]}`);
candidateAnswers[i] = input.question ("Your Answer: ") 
console.log();
}

//Clear screen to display the report 
console.clear();

// report start
console.log(`Candidate Name: ${candidateName}`)

//Display all the answers from candidate
for (let i = 0 ; i < quizQuestions.length ; i++)
{
   console.log(`${i+1}. ${quizQuestions[i]}`);   
   console.log(`Your Answer: ${candidateAnswers[i]}`);
   console.log(`Correct Answer: ${quizAnswers[i]}`);
   // condition to increment the correct answers
   if (candidateAnswers[i].toLowerCase() === quizAnswers[i].toLowerCase() )
   {
        correctAnswers++;
   }
   console.log();
}
//Display  the result of the candidate test 

console.log(`>>> Overall Grade: ${(correctAnswers/quizQuestions.length)*100}% (${correctAnswers} of ${quizQuestions.length} responses correct) <<<`);

// validation of answers/questions ratio to give the test result to the candidate
if ((correctAnswers/quizQuestions.length)*100 >= 50)
{
   console.log(">>> Status: PASSED <<<");
}else {

  console.log(">>> Status: FAILED <<<");
}
