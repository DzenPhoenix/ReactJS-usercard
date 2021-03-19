import React from 'react'
import UserInfo from '../UserInfo/UserInfo.jsx';
import Style from './UserInfoList.module.css';

export default function UserInfoList(props) {
    let res=[];
    for(let infoName in props.userInfoData){
        res.push(
            <UserInfo key={infoName+props.userInfoData[infoName]} infoName={infoName} infoValue={props.userInfoData[infoName]}></UserInfo>
        );
    }
    return (
        <div className={Style.infoList}>
            {res}
        </div>
    )
}