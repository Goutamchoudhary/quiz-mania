import NavBar from "./Navbar";
import Head from 'next/head'

const Layout=({children})=>{
    return(
        <>
        <Head>
            <title>Quiz Mania</title>
            <meta name="description" content="Check your knowledge" />  
        </Head>
        <NavBar />
        {children}
        <script src="https://d3js.org/d3.v6.min.js"></script>
        </>
    )
}


export default Layout