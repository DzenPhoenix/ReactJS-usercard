import React from 'react';
import Style from './UserInfo.module.css';

export default function UserInfo(props) {
    return (
        <div className={Style.row}>
            <span>{props.infoName}:</span>
            <span>{props.infoValue}</span>   
        </div>
    )
}
