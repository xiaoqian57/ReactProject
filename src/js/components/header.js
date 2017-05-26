import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class ComponentHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            miniHeader: false
        };
    };
    componentWillMount(){
      console.log('header -- componentWillMount');
    }
    componentDidMount(){
      console.log('header -- componentDidMount');
    }
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    };
    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "rgb(114, 237, 17)",
                color: "#e91d25",
                //"padding-top": (this.state.miniHeader) ? "3px" : "12px",
                //推荐驼峰
                paddingTop: (this.state.miniHeader) ? "3px" : "12px",
				        paddingBottom: (this.state.miniHeader) ? "3px" : "12px"
            }
            //还可以定义其他样式
        }

        return (
            <div>
                <header style = {styleComponentHeader.header} className = "smallFontSize"
                    onClick={this.switchHeader.bind(this)}>
                    <h1> 这里是头部 </h1>
                </header>
            </div>
        );
    };
}
