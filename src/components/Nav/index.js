import React from 'react';
import Styles from './index.module.css';
const Nav = () => (
    <div className={Styles.container}>
        <img src="/Vector.svg" alt="log" className={Styles.logo}/>
        <ul>
            <li><a href="/">Browse teachers</a></li>
            <li><a href="/">Browse students</a></li>
            <li><a href="/">How it works</a></li>
            <li><img src="/finder.svg" alt="/finder" /></li>
            <li><a href="/">Sign In</a></li>
            <li><button>Sign Up</button></li>
        </ul>
    </div>
)

export default Nav;