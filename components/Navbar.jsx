import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/Navbar.module.css';
import {parseCookies} from 'nookies';
import cookie from 'js-cookie';

const NavBar = ()=>{
    const router = useRouter();
    const cookieuser = parseCookies();
    const user =  cookieuser ? cookieuser.userEmail : "";

    return(
        <nav>
            <div className={styles.container}>
                <Link href="/" className={styles.titleLogo}>Quiz Mania</Link>
    
                <div className={styles.navOptions}>
                    {user ?
                    (<ul className={styles.item}>
                        <li><button className={styles.list} onClick={()=>{
                            cookie.remove('token');
                            cookie.remove('userEmail');
                            cookie.remove('isUserAdmin');
                            router.push(`${process.env.SERVER}/Login`);
                        }}>Logout</button></li>  
                    </ul>
                    )   
                    :
                    (<ul className={styles.item}>
                        <Link href="/Login"> <li className={styles.list}> Login </li> </Link>
                        <Link href="/SignUp"> <li className={styles.list}> Sign Up </li> </Link>
                    </ul>)
                    }
                </div>
                
            </div>
        </nav>
    )
}


export default NavBar