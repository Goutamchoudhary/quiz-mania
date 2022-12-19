import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SignUp.module.css';
import axios from 'axios';

const Signup = ()=>{
    const [username, setuserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router  = useRouter();

    const userSignup = async(e)=> {
        e.preventDefault();   
        
        try{
            console.log(username, email, password);
            await axios.post(`/api/signup`, {username, email, password});
            router.push(`/Login`);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.titleLogo}>Sign Up</h3>
                <form onSubmit={(e)=>userSignup(e)} className={styles.form}>
                    <input type="text" placeholder="Name"
                    value={username}
                    className={styles.input}
                    onChange={(e)=>setuserName(e.target.value)}
                    />
                    <input type="email" placeholder="Email"
                    value={email}
                    className={styles.input}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Password"
                    value={password}
                    className={styles.input}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className={styles.submitButton} type="submit">Sign Up</button>

                    <Link href="/Login" className={styles.alreadyAccount}><h5>Already have an account ?</h5></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup