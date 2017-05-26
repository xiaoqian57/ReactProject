import React from 'react';
var footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
    render(){
        console.log(footerCss);
        var footerConvertStyle = {
          "miniFooter":{
            "backgroundColor":"#1ad9f4",
            "color":"#f108ae",
            "paddingLeft":"20px",
            "paddingTop":"3px",
            "paddingBottom":"3px"
          },
          "miniFooter_h1":{
            "fontSize":"15px"
          }
        };
        return (
            <footer className={footerCss.miniFooter}>
                <h1 style={footerConvertStyle.miniFooter_h1}>放置版权信息</h1>
            </footer>
        )
    }
}
