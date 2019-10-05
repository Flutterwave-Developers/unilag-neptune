import React from 'react';
import Styles from './index.module.css';

const Tile = ({username, image}) => {
    return (
        <div className={Styles.top}>
            <div className={Styles.container}>
            <div className={Styles.avatar} />
            <div className={Styles.username}>{username}</div>
        </div>
        </div>
    )
}

export default Tile;