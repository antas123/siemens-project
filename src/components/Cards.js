import React from 'react'
import styles from "./Dashboard.module.css"
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

const Cards = () => {
  return (
    <div className={styles.main_cards}>
            <div className={styles.card}>
                <div className={styles.card_inner}>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className={styles.card_icon}/>
                </div>
                <h1>300</h1>
            </div>
            <div className={styles.card}>
            <div className={styles.card_inner}>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className={styles.card_icon}/>
                </div>
                <h1>12</h1>
            </div>
            <div className={styles.card}>
            <div className={styles.card_inner}>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className={styles.card_icon}/>
                </div>
                <h1>33</h1>
            </div>
            <div className={styles.card}>
            <div className={styles.card_inner}>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className={styles.card_icon}/>
                </div>
                <h1>42</h1>
            </div>
        </div>
  )
}

export default Cards