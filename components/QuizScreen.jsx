import React, { useState } from 'react';
import styles from '../styles/QuizScreen.module.css';
import QuestionList from '../Util/sampleQuestions.json';
import QuizResult from '../components/QuizResult';
import axios from 'axios';


const QuizScreen = ({quiz}) => {
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [currentDifficulty, setCurrentDifficulty] = useState(5);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const isQuestionEnd = (currentDifficulty === 0) ? true : false;

    const handleCheckedOption = (answer) =>{
        if(selectedOptions.includes(answer)){
            setSelectedOptions(selectedOptions.filter((option) => option !== answer));
        }
        else{
            setSelectedOptions((prev) => [...prev, answer]);
        }
    }

    const handleSubmitQuestion = ()=> {

    }

    useEffect(()=> {

        const getQuestion = async() => {
            
            try{
                const quesRes = await axios.get(`api/lists/${"?quiz="+quiz.title}${"&difficulty="+currentDifficulty}`);
                console.log(quesRes.data);
                setCurrentQuestion(quesRes.data);

            }catch(err){
                console.log(err);
            }

        };
        getQuestion();

    },[currentDifficulty]);

    return (
        <div className={styles.QuizScreen}>
            {isQuestionEnd ? 
            (
                <QuizResult/>
            ) : (
                <div className={styles.question-container}>
                    <div className={styles.question-number-difficulty}>
                        <h5>Question {currentQuestionNumber} of 10 </h5>
                        <h5>Difficulty : {currentDifficulty} / 10</h5>
                    </div>
                    <div className={styles.question-title}>{currentQuestion.question}</div>
                    <div className={styles.mcq-option}
                        onClick={(e) => handleCheckedOption(currentQuestion.answerOptions[0])}>
                        <input type="checkbox" 
                            name={currentQuestion.answerOptions[0]}
                            value={currentQuestion.answerOptions[0]}
                            className={styles.radio-option} 
                            checked={
                                selectedOptions.includes(currentQuestion.answerOptions[0])
                            }
                        />
                        <p className={styles.option-text}>{currentQuestion.answerOptions[0]}</p>
                    </div>
                    <div className={styles.mcq-option}
                        onClick={(e) => handleCheckedOption(currentQuestion.answerOptions[1])}>
                        <input type="checkbox" 
                            name={currentQuestion.answerOptions[1]}
                            value={currentQuestion.answerOptions[1]}
                            className={styles.radio-option} 
                            checked={
                                selectedOptions.includes(currentQuestion.answerOptions[1])
                            }
                        />
                        <p className={styles.option-text}>{currentQuestion.answerOptions[1]}</p>
                    </div>
                    <div className={styles.mcq-option}
                        onClick={(e) => handleCheckedOption(currentQuestion.answerOptions[2])}>
                        <input type="checkbox" 
                            name={currentQuestion.answerOptions[2]}
                            value={currentQuestion.answerOptions[2]}
                            className={styles.radio-option} 
                            checked={
                                selectedOptions.includes(currentQuestion.answerOptions[2])
                            }
                        />
                        <p className={styles.option-text}>{currentQuestion.answerOptions[2]}</p>
                    </div>
                    <div className={styles.mcq-option}
                        onClick={(e) => handleCheckedOption(currentQuestion.answerOptions[3])}>
                        <input type="checkbox" 
                            name={currentQuestion.answerOptions[3]}
                            value={currentQuestion.answerOptions[3]}
                            className={styles.radio-option} 
                            checked={
                                selectedOptions.includes(currentQuestion.answerOptions[3])
                            }
                        />
                        <p className={styles.option-text}>{currentQuestion.answerOptions[3]}</p>
                    </div>
                    <button className={styles.submit-question}
                            onClick={(e) => handleSubmitQuestion()}>Submit</button>
                </div>
            )

            }

            <button type='submit'>Submit</button>
        </div>
    );
}

export default QuizScreen