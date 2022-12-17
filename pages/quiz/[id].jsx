import React from 'react'
import styles from '../../styles/quiz.module.css';
import QuizScreen from '../../components/QuizScreen';
import JoinScreen from '../../components/JoinScreen';
import { useState } from 'react';
import axios from "axios";

const Quiz = ({quiz}) => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);


    return (
        <>
            <div className={styles.quiz-container}>
                {isQuizStarted ? (
                    <QuizScreen quiz={quiz} retry={() => setIsQuizStarted(false)}/>
                ) : (
                    <JoinScreen quiz={quiz} start={() => setIsQuizStarted(true)}/>
                )}
            </div>
    
        </>
    )
}

export const getServerSideProps = async ({params}) => {
    
    const res = await axios.get(`${process.env.SERVER}/api/quiz/${params.id}`);

    return {
        props:{
            quiz: res.data,
        },
    };
}

export default Quiz