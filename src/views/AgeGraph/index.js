import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './age-graph.css';

export default class AgeGraph extends Component {
    render() {
        const {data} = this.props;
        const {scale} = this.props;
        return (
            <div id='age-graph' className='pane'>
                <div id="header" className='header'>Age</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <BarChart data={data} colorScale={scale} width={1000} height={550}/>
                </div>                
            </div>
        )
    }
}