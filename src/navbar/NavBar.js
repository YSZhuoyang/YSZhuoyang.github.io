//'use strict';

import React from 'react';
import { Link } from 'react-router';
import SwipeViews from 'react-swipe-views';
//import Proj from '../projects/Proj.js';

import 'react-swipe-views/lib/react-swipe-views.css';
import './custom.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <SwipeViews>
        <div title={<Link id="tab" to="intro">Projects</Link>}>
          <p>Tab 1 content.</p>
        </div>
        <div title={<Link id="tab" to="code">CV</Link>}>
          <p>Tab 2 content.</p>
        </div>
        <div title={<Link id="tab" to="thanks">My Space</Link>}>
          <p>Tab 3 content.</p>
        </div>
      </SwipeViews>
    );
  }
}
