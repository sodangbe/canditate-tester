# canditate-tester

Part 1: Minimum Viable Quiz
Define variables for:
candidate's name
a quiz question (pick any question from the table in Part 2 below)
the correct answer
the candidate's response
Ask for the candidate's name. Before moving to the next step, use console.log to verify that your code correctly stores the information.
Display the question and prompt the candidate for an answer. As before, use console.log to verify that your program correctly stored the answer.
Check the candidate's answer to see if it is correct.
Provide basic feedback to the student. This should include their name and whether their answer was correct.

Part 2: Use Arrays
Now that your small app is working, expand it to deal with multiple questions.

Redefine your question and correct answer variables to be arrays.
Fill these arrays with the questions and answers listed in the table below.
You still need to ask for the candidate's name.
Using bracket notation, select one question and use that to prompt the candidate.
Compare the candidate's response to the proper entry in the answers array.
Replace the basic feedback with a template literal.

Question	                                                                                Answer
True or false: 5000 meters = 5 kilometers.	                                              "True"
(5 + 3)/2 * 10 = ?	                                                                      "40"
Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?               	"Trajectory"
Who was the first American woman in space?	                                              "Sally Ride"
What is the minimum crew size for the International Space Station (ISS)?	                 "3"


Part 3: Use Iteration to Ask All Questions
Add one or more loops to your code to ask all the questions in the quiz. Use arrays to collect and check all the candidate's answers. 
Finally, calculate the candidate's score and print the results.

Helpful hint - To calculate the candidate's percentage, use the equation:

(Number of Correct Answers) / (Number of Questions) * 100
Note that the final report MUST have the format shown in the "Results Output" section.

Sanity Checks
Before submitting your solution, make sure your program:

Does NOT consider case when checking answers.
Includes at least one loop and one conditional.
Uses at least one template literal.
Correctly accepts or rejects a candidate based on their percentage

Example Output
The results output should include the candidate's name, the candidate's responses, the correct answers, the final percentage, and if the candidate passed the quiz.

Candidate Name: Can Twin
1) True or false: 5000 meters = 5 kilometers.
Your Answer: false
Correct Answer: true

2) (5 + 3)/2 * 10 = ?
Your Answer: 45
Correct Answer: 40

3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: trajectory
Correct Answer: trajectory

4) Who was the first American woman in space?
Your Answer: sally ride
Correct Answer: sally ride

5) What is the minimum crew size for the International Space Station (ISS)?
Your Answer: 10
Correct Answer: 3

>>> Overall Grade: 40% (2 of 5 responses correct) <<<
>>> Status: FAILED <<<


