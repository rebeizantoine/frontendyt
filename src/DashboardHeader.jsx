import React from 'react';
import logo from './logo-maya.png'

function DashboardHeader() {
  return (<div>
<div className="header">
      <a href="#header"><img className="logo-maya" src={logo} alt="Logo"/></a>
      <p>Welcome to Your Dashboard</p>
      <button className="log-out">LOG OUT</button>
    </div>
    <hr className='hr-header'/>
    </div> 
  );
}

export default DashboardHeader;
