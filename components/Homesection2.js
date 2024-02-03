/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/Homesection2.module.css'

const Homesection2 = () => {
    return (
        <div className={styles.section2outer}>
            <div className={styles.left}>
                <h1 className={styles.head1}>My skills</h1>
                <h1 className={styles.head2}>Web/App Development, Graphics Designing &
                    Programming</h1>
            </div>
            <div className={styles.right}>
                <p>
                    In the realm of web development, I am proficient in crafting dynamic and responsive user interfaces. Leveraging a robust understanding of modern technologies, I learnt <b>MERN</b> stack development to create visually appealing and engaging websites.<br />

                    Furthermore, my expertise encompasses the use of modern front-end frameworks like <b>React</b>, <b>Next</b>, etc. On the back end, I am adept at utilizing technologies such as <b>Node.js</b> and <b>Express</b> to build scalable and efficient server-side applications.<br />
                    
                    My programming skills are characterized by a proficiency in languages such as <b>C</b>, <b>C++</b>, <b>Python</b> and <b>JavaScript</b>. I am still improving myself to bring a strong foundation in Data Structures and Algorithms <b>(DSA)</b>.<br />

                    As I embark on my professional journey, I am excited to contribute my skills, qualities, and passion for technology to make meaningful contributions in the ever-evolving field of Computer Science.
               </p>
            </div>
        </div>
    )
}

export default Homesection2