import React from 'react';
import ReactDom from 'react-dom';
import Index from './index';
import Topics from './components/list';
import ComponentDetail from './components/detail';
import {hashHistory} from 'react-router';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

export default class Root extends React.Component{
  render(){
    return (
      <HashRouter history={hashHistory}>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/detail">详情页面</Link></li>
            <li><Link to="/list">主题列表</Link></li>
          </ul>
          <hr/>
          <Route component={Index} exact path="/"/>
          <Route component={ComponentDetail} path="/detail"/>
          <Route component={Topics} path="/list" />
        </div>
      </HashRouter>
    );
  };
}

ReactDom.render(<Root/>, document.getElementById('example'));
