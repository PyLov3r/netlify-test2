import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div style={{height:'50px',display: 'flex', alignItems:'center', justifyContent:'right'}}>
        <ul style={{display: 'flex', paddingTop:'7px',width:'350px',float:'right'}}>
            <li style={{ listStyleType: "none", paddingRight: '55px' }}><Link style={{ textDecoration:'none',color:'black', fontWeight:'bold' }} to='/'>Home</Link></li>
            <li style={{ listStyleType: "none", paddingRight: '55px'  }}><Link style={{ textDecoration:'none',color:'black', fontWeight:'bold' }} to='/About'>About</Link></li>
            <li style={{ listStyleType: "none" , paddingRight: '55px' }}><Link style={{ textDecoration:'none',color:'black', fontWeight:'bold' }} to='/Projects'>Projects</Link></li>
            <li style={{ listStyleType: "none" , paddingRight: '55px' }}><Link style={{ textDecoration:'none',color:'black', fontWeight:'bold' }} to='/Contact'>Contact</Link></li>
        </ul>
        </div>
    );
}

export default NavBar