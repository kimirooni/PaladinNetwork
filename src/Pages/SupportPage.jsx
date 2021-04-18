
import React from 'react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, Route} from 'react-router-dom';

function SupportPage(){

    return(

<div >
    
       
<h1 className="support"> For support, please join the </h1>
        
        <Link to={{pathname:"https://discord.gg/9NSsc6YDKT"}} target="blank"><h1 className="hyperlink" >
           Paladin Network's Discord Server
           </h1></Link>

   
</div>

    )

}

export default SupportPage;