import React from 'react';
import styles from '../styles/QuizResult.module.css';
import Link from 'next/link'

const QuizResult = ({currentScore, retry}) => {
    return (
        <div className={styles.resultContainer}>
            <p><b>Final Score:</b> {currentScore} out of 50</p>
            
            <div className={styles.buttons}>
                <button onClick={retry} className={styles.retryButton}>Retry</button>
                <Link href={`/PanelPage`} passHref>
                    <button className={styles.homeButton}>Home</button>
                </Link>
            </div>
            
        </div>
    )
}

export default QuizResult