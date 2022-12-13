import React from 'react';
import Link from "next/link";
import styles from '../styles/QuizCard.module.css';

const QuizCard = () => {

    return (
        // <Link href={`/quiz/${quiz._id}`} passHref>
            <div className={styles.card}>
                <h3>Quiz Title</h3> 
            </div>
        // </Link>
        
    )
}

export default QuizCard