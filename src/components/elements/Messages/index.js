import React from 'react';
import Styles from './index.module.css';
const Message = ({children, recieved, from, time}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.message} style={{marginLeft: !recieved && 'auto'}}>
                {children}
            </div>
            <p style={{textAlign: !recieved && 'right'}}>{from}<br />{time}</p>
        </div>
    )
}
export default Message;