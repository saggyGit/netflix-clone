import React, { useEffect, useState } from 'react';
import img1 from '../img/Netflix-removebg-preview.png';
import img2 from '../img/earth-icon-language-icon-planet-icon-png-favpng-g89jiXSijaPESryc1hDAJQZF3-removebg-preview.png'

import './Navbar.css';


function Navbar() {



    return (
        <div className='navbar'>
            
            <nav>
                <div class="navbar_wrap">
                    <img src={img1} alt=""/>
                    <div class="input_wrap flex_row">
                        <div class="select_wrap">
                            <div class="lang_logo">
                                <img src={img2} alt=""/>
                            </div>
                            <select name="lang" id="lang" class="select_width">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        
                        <input type="button" value="Sign Up" class="select_width"/>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar;
