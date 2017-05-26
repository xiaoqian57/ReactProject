import React from 'react';
import BodyChild from './bodyChild';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import MixinLog from './mixin';
import {Input, Button} from 'antd';

const defaultProps = {
    userName: 'nickName'
};

export default class BodyIndex extends React.Component {
    constructor() {
        super(); //调用基类的所有初始化方法
        this.state = {
            userName: "Chandler",
            age: 20
        }; //初始化数值
    }
    changeUserInfo(age) {
        this.setState({
            age: age
        });
        //操作DOM两种方式：第一种方式
        var mySubmitBtn = document.getElementById('submitBtn');
        ReactDom.findDomNode(mySubmitBtn).style.color = 'red';
        //第二种方式
        console.log(this.refs.submitBtn);
        this.refs.submitBtn.style.color = 'blue';
        MixinLog.log();
    }
    handleChildValueChange(event) {
        this.setState({
            age: event.target.value
        });
    }
    render() {
        var userName = this.state.userName;
        var booleanInput = false;
        return (
          <div>
            <h2> 页面主体内容 </h2>
            <p> {userName == '' ? '用户还没有登录' : '用户名：' + userName} </p>
            <p> < input type = "button" value = {userName} disabled = { booleanInput}/></p>
            { /*注释*/ }
            <p> 接收到的父页面的属性： userId: {this.props.userId} userName: {this.props.userName} </p>
            <p> age: {this.state.age} </p>
            <input id = "submitBtn" ref = "submitBtn" type = "button" value = "提交"
            onClick = {this.changeUserInfo.bind(this, 99)} />
            <Input placeholder="Basic usage" />
            <h3> 子页面向父页面传递参数只能通过这种事件的形式： </h3>
            <BodyChild {...this.props} id = {4} handleChildValueChange = {this.handleChildValueChange.bind(this)}/>
          </div>
        )
    }
}

BodyIndex.propTypes = {
    userId: PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.prototype, MixinLog);
