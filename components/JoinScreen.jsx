import React from 'react'
import styles from '../../styles/quiz.module.css';

const JoinScreen = ({start}) => {
    return (
        <div className={styles.join-screen}>
            <h2>Join Quiz</h2>
            <h4>Click on Start!</h4>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default JoinScreen