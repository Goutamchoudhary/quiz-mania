import React, { useState } from 'react'
import QuestionList from '../Util/sampleQuestions.json'
import QuizResult from '../components/QuizResult';
import Question from '../components/Question';

const QuizScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    return (
        <div className={styles.QuizScreen}>
            {isQuestionEnd ? 
            (
                <QuizResult/>
            ) : (
                <Question
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionIndex + 1}
                />
            )

            }
        </div>
    );
}

export default QuizScreen