import NavBar from "./Navbar";
import Head from 'next/head'

const Layout=({children})=>{
    return(
        <>
        <Head>
            <title>Quiz Mania</title>
            <meta name="description" content="Check your knowledge" />  
            {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" /> */}
        </Head>
        <NavBar />
        {children}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}
        </>
    )
}


export default Layout