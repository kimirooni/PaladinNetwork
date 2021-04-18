import React from 'react';
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
<div className = "NavBar">            
    <nav className="nav">
        <div className = "profile">
            <img src = {avatar} alt="gonna be logo"/>
        </div>
    <ul className = "nav-items">
            <li className = "nav-item">
                <NavLink to ="/" exact activeClassName="active">
                    Home
                </NavLink>               
            </li>
            <li className = "nav-item">
                <NavLink to ="/Support" exact activeClassName="active">
                    Support
                </NavLink>               
            </li>
            <li className = "nav-item" >
                <NavLink to ="/portfolios" exact activeClassName="active" to={{pathname:"https://pn.site.nfoservers.com/sbpp/index.php?p=servers"}} target="blank">
                    Servers
                </NavLink>               
            </li>
            <li className = "nav-item" >
                <NavLink to ="/blogs" exact activeClassName="active" to={{pathname:"https://pn.site.nfoservers.com/sbpp/index.php?p=banlist"}} target="blank">
                    Bans
                </NavLink>               
            </li><li className = "nav-item">
                <NavLink to ="/contact" exact activeClassName="active" to={{pathname:"https://pn.site.nfoservers.com/"}} target="blank">
                   Stats
                </NavLink>               
            </li>
    </ul>
        <footer className = "footer">
        <p>@PaladinNetwork 2021</p>
     </footer>
     </nav>
</div>
    )
}
export default NavBar;