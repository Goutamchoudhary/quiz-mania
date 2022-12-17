import React, { useState } from 'react'
import styles from '../styles/AddQuiz.module.css';
import axios from 'axios';

const AddQuiz = ({setClose}) => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [difficulty, setDifficulty] = useState(0);
    const [checkedAnswers, setCheckedAnswers] = useState([]);
    const [questionCount, setQuestionCount] = useState(10);

    const handleCheckedAnswers = (e) => {
    
        if(e.target.checked){
            setCheckedAnswers((prev) => [...prev, e.target.value]);
        }
        else{
            setCheckedAnswers(checkedAnswers.filter((option) => option !== e.target.value));
        }
    }

    const handleSubmitQuestion = async() => {
        
        try{
            const answerOptions = [option1, option2, option3, option4];
            const newQuestion = {
                question, answerOptions, difficulty, correctAnswers:checkedAnswers,
            };

            console.log(newQuestion);
            await axios.post("/api/QuestionsApi", newQuestion);
            setQuestionCount(prevQuestionCount => prevQuestionCount + 1);
        }catch(err){
            console.log(err);
        }
    }

    const handleSubmitQuiz = async() => {
        
        try{
            const newQuiz = {title};

            await axios.post("/api/QuizApi", newQuiz);
            setClose(true);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    X
                </span>
                <h1>New Quiz</h1>
                <div className={styles.itemTitle}>
                    <label className={styles.titleLabel}>Title</label>
                    <input 
                    className={styles.titleInput}
                    placeholder='Quiz Title'
                    value={title}
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <h3>Add {questionCount} Questions</h3>
                <form className={styles.form} onSubmit={handleSubmitQuestion}>
                    <div className={styles.item}>
                        <div className={styles.question}>
                            <input type="text" placeholder='Question' 
                                value={question}
                                className={styles.input}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        <div className={styles.optionContainer}>
                            <input 
                                className={styles.optionInput}
                                type="text" 
                                value={option1}
                                placeholder='Option 1' 
                                onChange={(e) => setOption1(e.target.value)}
                            />
                            <input 
                                className={styles.optionInput}
                                type="text" 
                                value={option2}
                                placeholder='Option 2' 
                                onChange={(e) => setOption2(e.target.value)}
                            />
                            <input 
                                className={styles.optionInput}
                                type="text" 
                                value={option3}
                                placeholder='Option 3' 
                                onChange={(e) => setOption3(e.target.value)}
                            />
                            <input 
                                className={styles.optionInput}
                                type="text" 
                                value={option4}
                                placeholder='Option 4' 
                                onChange={(e) => setOption4(e.target.value)}
                            />
                        </div>
                        <div className={styles.correctAnswersBlock}>
                            <p>Select Correct Answers: </p>
                            <div className={styles.answersTag}>
                                <input type="checkbox" id="option" value={1}
                                name="option1" onChange={(e) => handleCheckedAnswers(e)}/>
                                <label > 1 </label><br/>
                                <input type="checkbox" id="option" value={2}
                                name="option2" onChange={(e) => handleCheckedAnswers(e)}/>
                                <label > 2 </label><br/>
                                <input type="checkbox" id="option" value={3}
                                name="option3" onChange={(e) => handleCheckedAnswers(e)}/>
                                <label > 3 </label><br/>
                                <input type="checkbox" id="option" value={4}
                                name="option4" onChange={(e) => handleCheckedAnswers(e)}/>
                                <label > 4 </label>
                            </div>
                        </div>
                        <div className={styles.difficultyTag}>
                            <label htmlfor="difficulty">Difficulty (between 1 - 10):</label>
                            <select className={styles.input} value={difficulty} 
                                    onChange={(e) => setDifficulty(e.target.value)}>
                                    <option disabled>Select</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>

                            </select>
                        </div>
                    </div>
                    <button type='submit' className={styles.questionAddBtn}>Add</button>
                </form>
                {questionCount === 0 ? <p>Click on Submit! </p> : null}
                <button className={styles.quizSubmitBtn} type='submit'
                        onSubmit={handleSubmitQuiz}>Submit</button>
            </div>
        </div>
    )
}

export default AddQuiz