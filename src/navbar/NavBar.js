
import React from 'react';
import SwipeViews from 'react-swipe-views';

import AboutMe from '../aboutMe/AboutMe.js';
import Proj from '../projects/Proj.js';

import 'react-swipe-views/lib/react-swipe-views.css';
import './navbar.css';


const NavBar = () => (
    <SwipeViews>
        <div title={<em id="tab">My Work</em>}>
            <Proj />
        </div>
        <div title={<em id="tab">About Me</em>}>
            <AboutMe />
        </div>
    </SwipeViews>
);

export default NavBar;
