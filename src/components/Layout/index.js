import React from 'react';
import {useHistory} from 'react-router-dom'
import './index.css'

const Layout = ( props) => {
    const history=useHistory();
    return (
        <div className="container">
           <div className="top-bar">
               <div className="return-button" onClick={()=>history.goBack()}>{"<--"}</div>
               <div className="title-bar">
                   <h3>JOBMATCHMAKER</h3></div>
           </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;