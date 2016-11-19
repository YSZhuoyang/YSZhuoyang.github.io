import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './slider/Slider';
import './slider/Slider.css';

import NavBar from './navbar/NavBar';

ReactDOM.render(
  <Slider />, 
  document.getElementById('img-gallery-slider')
);

ReactDOM.render(
  <NavBar />, 
  document.getElementById('swipe-view-navbar')
);

