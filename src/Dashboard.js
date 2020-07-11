import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import Profile from './views/Profile';
import Gender from './views/Gender';
import GenderFilter from './views/GenderFilter';
import UserActivity from './views/UserActivity';
import AgeGraph from './views/AgeGraph';
import UserList from './views/UserList';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenAge: 0,
            includedGender: ['Male', 'Female','Unknown'],
        }
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {
        const {selectedUser, greaterThenAge, includedGender} = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender)!==-1)
                                 .filter(user=>user.age>greaterThenAge);

        return (
            <div>
                <Layout style={{ height: 920 }}>
                    <Sider width={300} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 200 }}>
                            <Profile user={selectedUser}/>
                        </Content>
                        <Content>
                        <UserList data={filteredData} changeSelectUser={this.changeSelectUser}/>
                        </Content>
                    </Sider>
                    <Layout>
                        <Content style={{ height: 300 }}>
                            <UserActivity user={selectedUser}/>
                        </Content>
                        <Layout style={{ height: 600 }}>
                        <Content>
                            <AgeGraph data={filteredData}/>
                        </Content>
                        <Sider width={300} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 260 }}>
                            <GenderFilter 
                                changeGreaterThenAge={this.changeGreaterThenAge}
                                changeIncludedGender={this.changeIncludedGender}
                            />
                        </Content>
                        <Content style={{ height: 300 }}>
                            <Gender data={filteredData}/>
                        </Content>
                        </Sider>
                        </Layout>
                    </Layout>
                </Layout>
                <Layout>
                    <Footer style={{ height: 20 }}>
                        <div style={{marginTop: -10, display: 'flex', justifyContent: 'center'}}>
                            Author Islam Nader
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
