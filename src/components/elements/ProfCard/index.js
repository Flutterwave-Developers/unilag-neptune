import React from 'react';
import Styles from './index.module.css';

const ProfCard= () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.f}>
                <span className={Styles.a}>Time Left</span>
                <span className={Styles.num}>25mins</span> 
            </div>
                <div>
                <span className={Styles.a}>Time Spent</span>
                <span className={Styles.num}>1 hr 30 mins</span>
                </div>
        </div>
    )
}

export default ProfCard;