import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Login.module.css';
import axios from 'axios'
import cookie from 'js-cookie'

const Login = ()=>{
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router  = useRouter();

    const userLogin = async (e)=>{
        e.preventDefault();
        
        try{
            const res = await axios.post(`/api/login`, {userEmail, password});

            const {accessToken, email, isAdmin, ...info} = res.data;

            cookie.set('token', accessToken);
            cookie.set('userEmail', email);
            cookie.set('isUserAdmin', isAdmin);
            
            router.push(`/PanelPage`);

        }catch(err){
            console.log(err);
        }

    }
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.titleLogo}>Login</h3>
                <form onSubmit={(e)=>userLogin(e)} className={styles.form}>
                    <input type="email" placeholder="Email"
                    value={userEmail}
                    className={styles.input}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Password"
                    value={password}
                    className={styles.input}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className={styles.submitButton} type="submit">Login
                    </button>
                    <Link href="/SignUp" className={styles.notHaveAccount}><p>Don't have an account ?</p></Link>
                </form>
            </div>
        </div>
    )
}

export default Login