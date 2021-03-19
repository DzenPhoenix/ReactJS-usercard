import React from 'react';
import Style from './UserPhoto.module.css';

export default function UserPhoto(props) {
    return (
        <div className={Style.container}>
            <div className={Style.photo} style={{backgroundImage:`url(${props.src})`}}></div>
        </div>
    )
}
