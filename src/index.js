import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './slider/Slider';
import NavBar from './navbar/NavBar';

ReactDOM.render(
  <NavBar />, 
  document.getElementById('swipe-view-navbar')
);

ReactDOM.render(
  <Slider />, 
  document.getElementById('img-gallery-slider')
);
