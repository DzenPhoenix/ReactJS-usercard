import UserPhoto from './components/UserPhoto/UserPhoto.jsx';
import UserInfoList from './components/UserInfoList/UserInfoList.jsx';
import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.userData = props.userData;
    this.src = this.userData.results[0].picture.medium;
    this.userInfoData = {
      Name:this.userData.results[0].name.first,
      Surname:this.userData.results[0].name.last,
      Email:this.userData.results[0].email,
      Gender:this.userData.results[0].gender,
      Phone: this.userData.results[0].phone,
    }
  }
  render() {
    return (
      <div className="container">
        <UserPhoto src={this.src}></UserPhoto>
        <UserInfoList userInfoData={this.userInfoData}></UserInfoList>
      </div>
    )
  }
}