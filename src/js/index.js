var React = require('react');
var ReactDom = require('react-dom');

// ReactDom.render(
//     <h1>Hello Chandler!!!!!</h1>,
//     document.getElementById('example')
// );
import ComponentHeader from './components/header.js';
import ComponentFooter from './components/footer.js';
import BodyIndex from './components/bodyindex.js';
import 'antd/dist/antd.css';

export default class Index extends React.Component{
    componentWillMount(){
        console.log("Index -- componentWillMount");
    }
    componentDidMount(){
        console.log("Index -- componentDidMount");
    }
    render(){
        //组件化的好处
        // var component;
        // if(用户已登录){
        //     component = <ComponentLoginHeader/>;
        // }else{
        //     component = <ComponentHeader/>;
        // }

        return (
            <div>
                <ComponentHeader/>
                <BodyIndex userId = {123456} userName = "CC"/>
                <div>
                  {this.props.children}
                </div>
                <ComponentFooter/>
            </div>
        )
    }
}
