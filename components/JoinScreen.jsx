import React from 'react'
import styles from '../styles/JoinScreen.module.css';

const JoinScreen = ({start}) => {
    return (
        <div className={styles.joinScreen}>
            <h1>Join Quiz</h1>
            <h3>Click on Start!</h3>
            <button onClick={start} className={styles.startButton}>Start</button>
        </div>
    )
}

export default JoinScreen