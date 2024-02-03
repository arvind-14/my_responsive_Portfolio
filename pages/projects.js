import styles from '../styles/Homesection3.module.css'
import Card1_left from '../components/cards/Card1_left'
import Card2_right from '../components/cards/Card2_right'
import projectimg1 from '../media/project/netflix_img.png'
import projectimg2 from '../media/project/keeper_img.png'
import projectimg3 from '../media/project/portfolio_img.png'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar'

import Homesection5 from '../components/Homesection5'

const projects = () => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
            </Head>

            <Navbar />

            <div className={styles.section3outer}>

                <h1>My Projects</h1>
                <Card1_left cimg={projectimg1} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN. It has all the functionalities like Netflix with lightning-fast navigation and responsiveness" cvisit="https://netphliix-clone.vercel.app/" ccode="https://github.com/arvind-14/netphliix-clone" />

                <Card2_right cimg={projectimg2} cname="Notes Keeping App" cdescription="A dynamic and user-friendly Keeper App crafted with React and JavaScript. It empowers users to effortlessly create, edit, and delete notes" cvisit="https://notess-keeper-app.vercel.app/" ccode="https://github.com/arvind-14/Keeper_App_reactJS" />

                <Card1_left cimg={projectimg3} cname="Portfolio Website" cdescription="Welcome to a visually engaging, responsive and technologically advanced space that reflects the versatility of my skills and the essence of my professional identity."
                cvisit="/https://www.amazon.in/" ccode="https://www.amazon.in/" />

             </div>
            <Homesection5 />
        </div>
    )
}

export default projects