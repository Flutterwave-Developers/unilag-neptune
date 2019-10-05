import React from 'react';
import Nav from '../Nav';
import Styles from './index.module.css';

const Home = () => {
    return (
        <div style={{padding: '0 30px'}}>
            <Nav />
            <div className={Styles.landing}>
                <div style={{alignSelf: "center"}}>
                    <h1>get direct one on one learning</h1>
                    <p>On any subject or course of your choice</p>
                    <button>Get Started</button>
                </div>
                <img src="/back.png" alt="back" className={Styles.mainImg}/>
            </div>
            <p className={Styles.dec}> Edukos is a platform that allows students and teachers to connect from around the world, schedule one on one classes and teaches or learn directly, one student to a teacher</p>
            {/* <hr className={Styles.line}/> */}
        </div>
    )
}

export default Home;