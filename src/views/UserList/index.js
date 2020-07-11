import React, { Component } from 'react';
import { List } from 'antd';
import './user-list.css';

export default class UserList extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='user-list' className='pane'>
                <div id="header" className='header'>User List</div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={user => <List.Item onClick = {() => this.selectUser(user)}>
                        <div>
                            {user.name + ':' + user.gender}
                        </div>
                    </List.Item>}
                />
            </div>
        )
    }
}