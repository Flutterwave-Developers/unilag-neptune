import React from 'react';
import Styles from './index.module.css';
import Tile from '../Tiles';

const Details = () => {
    return (
        <div className={Styles.container}>
            <h4 className={Styles.h}>Online</h4>
            <Tile username="Dennis Ritchie"/>
            <Tile username="Linus torvalds"/>
        </div>
    )
}

export default Details;