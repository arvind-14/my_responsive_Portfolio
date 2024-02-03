/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from '../styles/Homesection4.module.css';

const Homesection4 = () => {
    return (
        <div className={styles.section4outermost}>
            <div className={styles.left}>
                <p>If you are Looking for a web/app developer or need help with your project then feel free to contact me at <span>arvindbhandari123456@gmail.com</span></p>
                <Link href="/contact"><button className={styles.btn}>Contact Here</button></Link>
            </div>
            <div className={styles.right}>
                <h1>
                    Let's<br />
                    Work<br />
                    together
                </h1>
            </div>
        </div>
    )
}

export default Homesection4