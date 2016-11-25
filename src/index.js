import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Slider from './slider/Slider';
import NavBar from './navbar/NavBar';

import '../public/index.css';


injectTapEventPlugin();

const Body = () => (
    <div>
        <Slider />

        <div className="tab-body">
            <NavBar />
            
            <footer>
                <p className="pull-right"><a href="#">Back to top</a></p>
            </footer>
        </div>
    </div>
);

ReactDOM.render(
  <Body />, 
  document.getElementById('my-body')
);

