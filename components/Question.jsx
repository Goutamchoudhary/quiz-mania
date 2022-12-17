



// Logic Steps:


// 1. Fetch the specific quiz object based on the user selection.

// 2. In the quiz object we have the list of all the questions.

// 3. Using quiz title and currentDifficulty = 5 I will look for the question in the 
//    database.

// 4. 

// 5. Then, on submission we will recieve the selected options from the user and then we'll
//     verify those options with the correctAnswer.

// 6. If all the correct Answers were selected by user then we will look for the question with
//     currentDifficulty + 1 from our questionsList and then update our questionState object.

// 7. If the answers are not correct then we will look for the question with
//     currentDifficulty - 1 from our questionsList and then update our questionState object.

// 8. The quiz will keep on going like this until the user selects the wrong answers for the 
//     question with difficulty = 1. We will show the score of the user in QuizResult Component
//     with 0/10. And provide a button to retry the Quiz. Then, the Quiz will be restarted.

