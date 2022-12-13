import Head from 'next/head';
import Image from 'next/image';
import {parseCookies} from 'nookies';
import cookie from 'js-cookie';
import Login from '../pages/Login';
import PanelPage from './PanelPage';

const Home = () => {
    const cookieuser = parseCookies();
    console.log(cookieuser);
    
    const user =  cookieuser ? cookieuser.userEmail : "";
    return (
      <>
          {user ? (
          <>
            <PanelPage/>
          </> )
          : (
          <>
            <Login/>
          </> )}

      </>
    )
}

export default Home;