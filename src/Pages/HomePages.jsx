
import React from 'react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, Route} from 'react-router-dom';

function HomePage(){

    return(

<div className = "HomePage">
    <header className = "hero">
       <h1 className = "hero-text"> 
       Welcome to 
        <span> Paladin Network</span>
       </h1>
       <p className = "h-sub-text">
           Online CSGO BHOP community
           </p>
           <div className ="icons">
      
               <Link className="icon-holder" to={{pathname:"https://discord.gg/9NSsc6YDKT"}} target="blank">
                        <FontAwesomeIcon icon={faDiscord} className="icon"/>
                </Link>
           </div>
    </header>
</div>

    )

}

export default HomePage;