# Quiz App



## Background
***

  This is a Quiz App where Admin can create quizzes and users can participate in the quizzes. It is built using NextJS which is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. NextJS is a complete full-stack framework. Redux is used in this application for state management. CSS is used for styling. JSONWEBTOKEN is used for authentication.

**Note:** This application is deployed on Vercel Platform which is developed by the team behind Next.js.


## Features Implemented
***

* A user can register using Email Ids and password then after signing in, all the quizzes that is available to participate will be shown on the Home Page.

* If the user is signed in as an Admin then all the available quizzes are shown and there is a button which can used to create a new Quiz.

* If that button is clicked then the admin can submit the details of the Quiz by providing the details of 10 questions and 4 options.

* Options can be of two types:
   
   - Multiple choice with a single correct answer (four choices and one correct answer) 
   - Multiple choice with multiple correct answers (four choices and more than one correct answer) 

  #### Rules for the quiz that I implemented in the backend:

  * Each question should have a difficulty defined between 1–10.  
  * The quiz starts for everyone at difficulty level 5. 
  * For every correct answer, the next question should be at the current level + 1 difficulty. (Since we have only 10 questions, some questions will be         repeated, and it's OK.) 
  * For every incorrect answer, the next question should be at the current level - 1 difficulty -1. (Since we have only 10 questions, some questions will       be repeated, and it's OK.) 
  
  
  #### The quiz ends for a user:

  * When the user answers a difficulty 10 question correctly, or 
  * When the user answers a difficulty 1 question incorrectly, or
  * When all 10 questions are exhausted. 


  #### As a user, I should be able to.  

  * Visit the unique link for the quiz and answer questions.  
  * On the UI, I should be able to see the difficulty level along with the question on each step.  
  * On finally completing the quiz as a user, I should be able to see my final score(+5 for every correct answer and -2 for every wrong answer) and a line     graph of my score against each attempt. Plot this online graph using d3js (So, when I start, my score is 0 and my attempt is 0. If I answer the first       question correctly, my attempt count will be 1 and score will be 5, and so on. 
  
 
 
 
 ## Demo
***

### Live Deployed Website : [http://quiz-mania-nine.vercel.app/](http://quiz-mania-nine.vercel.app/)

