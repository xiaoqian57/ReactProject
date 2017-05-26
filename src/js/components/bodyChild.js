import React from 'react';
import BodyIndex from './bodyindex.js'
export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
              子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/>
              <p>{this.props.userId}  {this.props.userName} {this.props.id}</p>
            </div>
        )
    }
}
