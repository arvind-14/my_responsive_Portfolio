import styles from '../styles/Homesection1.module.css'
import mainimg from '../media/arv_mainimg.png'
import Image from 'next/image'
import React from 'react'

const Homesection1 = () => {

    return (
        <div className={styles.section1outer}>
            <div className={styles.left}>
                <p className={styles.head2}>Hello there,</p>
                <p className={styles.head1}>I am <span>Arvind</span></p>
                <p className={styles.ptag}>A passionate and innovative Web Developer & Computer Science Engineer.<br />
                    From lines of code to the dance of algorithms, I find solace and excitement in the ever-evolving world of tech.
                    <br />
                    <br />
                    <b>{`Let's`} code the future together!</b>
                </p>
            </div>
            <div className={styles.right}>
                <Image src={mainimg}  layout="responsive" alt='arvind' />
            </div>

        </div>
    )
}

export default Homesection1




