import React, { useEffect, useState } from 'react';
import styles from '../styles/QuizScreen.module.css';
//import QuestionList from '../Util/sampleQuestions.json';
import QuizResult from '../components/QuizResult';
import axios from 'axios';


const QuizScreen = ({quiz, retry}) => {
    const [currentQuestion, setCurrentQuestion] = useState();
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [currentDifficulty, setCurrentDifficulty] = useState(5);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [chartData, setChartData] = useState([]);
    const isQuizEnd = (currentDifficulty === 0 || currentQuestionNumber == 11) ? true : false;

    const handleCheckedOption = (answer) =>{
        if(selectedOptions.includes(answer)){
            setSelectedOptions(selectedOptions.filter((option) => option !== answer));
        }
        else{
            setSelectedOptions((prev) => [...prev, answer]);
        }
    }

    const handleSubmitQuestion = async()=> {
        try{ 
            const res = await axios.put(`/api/QuestionsApi/${"?quiz="+quiz.title}${"&difficulty="+currentDifficulty}`, selectedOptions);
            console.log(res.data);

            if(res.data.isCorrect){
                if(currentDifficulty < 10){
                    setCurrentDifficulty((prev) => prev + 1);
                }
                else{
                    setCurrentDifficulty(1);
                }
                
                setCurrentScore((prev) => prev + 5);
            }
            else{
                setCurrentDifficulty((prev) => prev - 1);
                setCurrentScore((prev) => prev - 2);
            }
            const newLineData = {                              // for creating line chart
                                    label: currentQuestionNumber,
                                    currentScore,
                                    tooltipContent: `<b>x: </b>${currentQuestionNumber}<br><b>y: </b>${currentScore}`
                                };
            setChartData((prev) => [...prev, newLineData]);
            setCurrentQuestionNumber((prev) => prev + 1);
            setSelectedOptions([]);
        }catch(err){
            console.log(err);
        }   
    }

    useEffect(()=> {

        const getQuestion = async() => {
            
            try{
                console.log(quiz);
                const quesRes = await axios.get(`/api/QuestionsApi/${"?quiz="+quiz.title}${"&difficulty="+currentDifficulty}`);
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
            {isQuizEnd ? 
            (
                <QuizResult chartData={chartData} currentScore={currentScore} retry={retry}/>
            ) : (
                <div className={styles.questionContainer}>
                    <div className={styles.questionNumberDifficulty}>
                        <h5>Question {currentQuestionNumber} of 10 </h5>
                        <h5>Difficulty : {currentDifficulty} / 10</h5>
                    </div>
                    <div className={styles.questionTitle}>{currentQuestion?.question}</div>
                    <div className={styles.mcqOption}>
                        <input type="checkbox" 
                            name={currentQuestion?.answerOptions[0]}
                            value={currentQuestion?.answerOptions[0]}
                            className={styles.radioOption} 
                            onChange={(e) => handleCheckedOption(currentQuestion?.answerOptions[0])}
                            checked={
                                selectedOptions.includes(currentQuestion?.answerOptions[0])
                            }
                        />
                        <p className={styles.optionText}>{currentQuestion?.answerOptions[0]}</p>
                    </div>
                    <div className={styles.mcqOption}>
                        <input type="checkbox" 
                            name={currentQuestion?.answerOptions[1]}
                            value={currentQuestion?.answerOptions[1]}
                            className={styles.radioOption} 
                            onChange={(e) => handleCheckedOption(currentQuestion?.answerOptions[1])}
                            checked={
                                selectedOptions.includes(currentQuestion?.answerOptions[1])
                            }
                        />
                        <p className={styles.optionText}>{currentQuestion?.answerOptions[1]}</p>
                    </div>
                    <div className={styles.mcqOption}>
                        <input type="checkbox" 
                            name={currentQuestion?.answerOptions[2]}
                            value={currentQuestion?.answerOptions[2]}
                            className={styles.radioOption} 
                            onChange={(e) => handleCheckedOption(currentQuestion?.answerOptions[2])}
                            checked={
                                selectedOptions.includes(currentQuestion?.answerOptions[2])
                            }
                        />
                        <p className={styles.optionText}>{currentQuestion?.answerOptions[2]}</p>
                    </div>
                    <div className={styles.mcqOption}>
                        <input type="checkbox" 
                            name={currentQuestion?.answerOptions[3]}
                            value={currentQuestion?.answerOptions[3]}
                            className={styles.radioOption} 
                            onChange={(e) => handleCheckedOption(currentQuestion?.answerOptions[3])}
                            checked={
                                selectedOptions.includes(currentQuestion?.answerOptions[3])
                            }
                        />
                        <p className={styles.optionText}>{currentQuestion?.answerOptions[3]}</p>
                    </div>
                    <button type="submit" className={styles.submitQuestion}
                            onClick={(e) => handleSubmitQuestion()}>Submit</button>
                </div>
            )

            }

        </div>
    );
}

export default QuizScreen