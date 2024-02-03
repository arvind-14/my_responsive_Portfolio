import React from 'react'
import styles from './Card1_left.module.css'
import Image from 'next/image'
// import courseimg from '../../media/project/nextjs.png'
const Card1_left = (props) => {
    return (
        <div className={styles.card_outer}>
            <div className={styles.left}>
                <Image src={props.cimg} layout='responsive' alt='project1img' className={styles.image} />
            </div>
            <div className={styles.right}>
                <div className={styles.text}>
                    <h2>{props.cname}</h2>
                    <p>{props.cdescription}
                    </p>
                </div>
                <div>
                    <button><a href={props.cvisit} target="_blank" rel='noreferrer'>Visit</a></button>
                    <button><a href={props.ccode} target="_blank" rel='noreferrer'>Source Code</a></button>
                </div>
            </div>
        </div>
    )
}

export default Card1_left