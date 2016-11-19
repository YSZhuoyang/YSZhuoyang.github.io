
import React from 'react';
//import { Link } from 'react-router';
import SwipeViews from 'react-swipe-views';
import AboutMe from '../aboutMe/AboutMe.js';
//import Proj from '../projects/Proj.js';

import 'react-swipe-views/lib/react-swipe-views.css';
import './navbar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <SwipeViews>
        <div title={<em id="tab">My Work</em>}>
          <p>Tab 1 content.</p>
          <div id="my-work" />
        </div>
        <div title={<em id="tab">About Me</em>}>
          <AboutMe />
        </div>
        <div title={<em id="tab">My Trace</em>}>
          <p>Tab 3 content.</p>
          <div id="my-trace" />
        </div>
      </SwipeViews>
    );
  }
}
