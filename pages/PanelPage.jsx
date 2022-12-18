import React, { useState } from 'react'
import styles from '../styles/PanelPage.module.css';
import QuizCard from '../components/QuizCard';
import AddQuiz from '../components/AddQuiz';
import {parseCookies} from 'nookies';
import axios from 'axios'

const PanelPage = ({quizList}) => {
    const [close, setClose] = useState(true);
    const cookieuser = parseCookies();
    
    const isUserAdmin = cookieuser ? cookieuser.isUserAdmin : "";

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {isUserAdmin === 'true' ? 
                (
                    <div onClick={() => setClose(false)} className={styles.createNewQuiz}>
                        <h3>Create a New Quiz</h3>
                    </div>
                )
                :(  <div className={styles.headTitle}>
                        <h1 >Select Any Quiz to Start......</h1>
                    </div>
                )}

                <div className={styles.grid}>
                    {quizList.map((quiz) => (
                        <QuizCard key={quiz._id} quiz={quiz}/>
                    ))}

                    {/* <QuizCard/>
                    <QuizCard/>
                    <QuizCard/>
                    <QuizCard/>
                    <QuizCard/>
                    <QuizCard/> */}

                </div>
                
                {!close && <AddQuiz setClose={setClose}/>}
            </div>

        </div>
    )
}

export const getServerSideProps = async() => {

    const res = await axios.get(`${process.env.SERVER}/api/QuizApi`);

    return {
        props:{
            quizList: res.data,
        },
    };
}

export default PanelPage