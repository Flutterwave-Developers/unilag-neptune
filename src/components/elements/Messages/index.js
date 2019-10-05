import React from 'react';
import Styles from './index.module.css';
const Message = ({children, recieved}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.message} style={{marginLeft: !recieved && 'auto'}}>
                {children}
            </div>
            <p style={{textAlign: !recieved && 'right'}}>You<br />2:34pm</p>
        </div>
    )
}
export default Message;