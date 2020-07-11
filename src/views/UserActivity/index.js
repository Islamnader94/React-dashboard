import React, { Component } from 'react';
import './user-activity.css';
import LineChart from '../../charts/LineChart';

export default class UserActivity extends Component {
    render() {
        const {user} = this.props,
              width = 1100,
              height = 250;
        return (
            <div id='user-activity' className='pane' >
                <div id="header" className='header'>User Acivities</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <LineChart data={user} width={width} height={height}/>
                </div>
            </div>
        )
    }
}