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
            <hr className={Styles.line}/>
            <div className={Styles.section}>
                <img src="/teacher.png" alt="g"/>
                <div className={Styles.caption}>
                    <h2>Access 1000+ Courses and Ready Tutors</h2>
                    <p>With Edukos, a student has access to as many as 1000+ teachers who are proficient in even more courses</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className={Styles.section}>
                <div className={Styles.caption}>
                    <h2>Schedule One On One Classes</h2>
                    <p>With Edukos, a student can schedule one on one class sessions with teachers to take them personally on a particular course or join others on their schedule for the same teacher and course.</p>
                    <button>Browse teachers</button>
                </div>
                <img src="/grp.png" alt="g"/>
            </div>
            <div className={Styles.section}>
                <img src="/sphere.png" alt="g"/>
                <div className={Styles.caption}>
                    <h2>Pay For Services With Rave by FlutterWave</h2>
                    <p>With Edukos, students pay for our service and to the teachers. Payment is very secure and reliable as we use Rave by Flutterwave. teachers also get paid using Rave</p>
                    <button>Browse teachers</button>
                </div>
            </div>
        </div>
    )
}

export default Home;