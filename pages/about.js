/* eslint-disable react/no-unescaped-entities */
import Navbar from '../components/Navbar.js'
import aboutimg from '../media/about_img.png'
import styles from '../styles/About.module.css'
import Image from 'next/dist/client/image'
import Head from 'next/head.js'
const about = () => {
    return (
        <div className={styles.aboutoutermost}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <div className={styles.section1}>
                <h1 className={styles.head1}>About Me</h1>
                <p className={styles.para1}>
                    I am a passionate and innovative <b>Computer Science Engineer</b> fueled by an insatiable curiosity for cutting-edge technology.<br />
                    Leveraging a robust understanding of modern technologies, I learnt <b>MERN</b> stack development to create visually appealing and engaging websites.<br /><br />

                    Furthermore, my expertise encompasses the use of modern front-end frameworks like <b>React</b>, <b>Next</b>, etc. enabling the development of sophisticated and user-friendly web applications. On the back end, I am adept at utilizing technologies such as <b>Node.js</b> and <b>Express</b> to build scalable and efficient server-side applications.<br />
                    My commitment to code quality and organization is reflected in my adept use of version control systems like <b>Git</b>, ensuring collaborative and streamlined development workflows.<br /><br />
                    I learnt <b>user-centric design</b> principles, creating visually striking designs that prioritize an optimal user experience.<br />

                    My programming skills are characterized by a proficiency in languages such as <b>C</b>, <b>C++</b>, <b>Python</b> and <b>JavaScript</b>. I am still improving myself to bring a strong foundation in <b>Data Structures and Algorithms (DSA)</b>.<br /><br />

                    Committed to staying abreast of industry trends and emerging technologies through ongoing <b>self-directed learning</b>, webinars, online courses and workshops.<br />
                    Through a blend of <b>academic excellence</b> and a hands-on approach to <b>problem-solving,</b> I am poised to contribute my skills and enthusiasm to the forefront of technological innovation.<br />

                    <b>Eager to collaborate, learn, and embark on transformative tech journeys.</b> Whether unraveling the mysteries of artificial intelligence, securing cyber landscapes, or sculpting the future with innovative solutions, <b>my passion knows no bounds.</b>
                </p>
                <div className={styles.imgcont}>
                    <Image src={aboutimg} layout='responsive' />
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>Education</h1>
                        <p><span>(2004-2016)</span> New Beersheba Senior Secondary School Pithoragarh ( 10th with 95% )</p>
                        <p><span>(2016-2018)</span> New Beersheba Senior Secondary School Pithoragarh ( 12th PCM with 90% )</p>
                        <p><span>(2019-2023)</span> Bipin Tripathi Kumaon Institute of Technology (KEC) Almora (B.Tech CSE with 70%)</p>
                    </div>
                </div>

                <div className={styles.detailsright}>
                    <div className={styles.detailsinner}>
                        <h1>Experience</h1>
                        <p> <span>2020 (Industrial Training: Cyber Forensics)</span> Under Bharat Sanchar Nigam Limited (BSNL) & Advanced Level Telecom Training Center (ALTTC)</p>
                        <p><span>2022 (Workshop: ML using Python) </span> Hands on workshop program on Machine Learning using Python with Ensino Research and Development Pvt. Ltd.</p>
                        <p><span>2023 (Udemy: Web Development Bootcamp) </span>Completed Fullstack Development course from zero to expert using MERN</p>
                    </div>
                </div>

                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>My Skills</h1>
                        <p><span>Programming in</span> C, C++, Python & Javascript</p>
                        <p><span>Competitive Programming with</span> DSA in C/C++ </p>
                        <p><span>Web Development in</span> MERN Stack</p>
                        <p><span>App Development</span> React Native /Flutter</p>
                    </div>
                </div>
            </div>

            <div className={styles.section1}>
                <h1 className={styles.head2}>To Know More about me</h1>
                <button><a href='https://www.google.com'>Download Resume</a></button>
            </div>
        </div>
    )
}

export default about
