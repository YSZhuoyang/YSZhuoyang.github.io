
import React from 'react';
import { Link } from 'react-router';
import SwipeViews from 'react-swipe-views';
import AboutMe from '../aboutMe/AboutMe.js';
//import Proj from '../projects/Proj.js';

import 'react-swipe-views/lib/react-swipe-views.css';
import './navbar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <SwipeViews>
        <div title={<Link id="tab" to="my-work">My Work</Link>}>
          <p>Tab 1 content.</p>
          <div id="my-work" />
        </div>
        <div title={<Link id="tab" to="about-me">About Me</Link>}>
          <AboutMe />
        </div>
        <div title={<Link id="tab" to="my-trace">My Trace</Link>}>
          <p>Tab 3 content.</p>
          <div id="my-trace" />
        </div>
      </SwipeViews>
    );
  }
}
