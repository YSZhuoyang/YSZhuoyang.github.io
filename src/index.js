import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Status from './Status/Status';
import NavBar from './navbar/NavBar';

import './index.css';


injectTapEventPlugin();

const Body = () => (
    <div>
        <Status />

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

