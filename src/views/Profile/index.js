import React, { Component } from 'react';
import { Avatar } from 'antd';
import logo from '../ImageSource/me.png';
import './profile.css';

export default class Profile extends Component {
    render() {
        let {user} = this.props;
        if (user === null) {
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
            }
        }
        return (
            <div id='profile' className='pane'>
                <div id="header" className='header'>User Profile</div>
                <div>
                    <div className={'avatar-view'}>
                        <Avatar src={logo} shape="square" size={120} icon="user"/>
                    </div>
                    <div className={'info-view'}>
                        <div>name: {user.name}</div>
                        <div>gender: {user.gender}</div>
                        <div>age: {user.age}</div>
                    </div>
                </div>
            </div>
        )
    }
}
