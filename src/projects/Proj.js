
import React from 'react';

import './Proj.css';

export default class Proj extends React.Component {

    renderProj1() {
        return(
            <div className="card">
                <img src="./img/pass.png" alt="Avatar" />
                <div className="desc">
                    <h4><b>Proj 1</b></h4>
                    <p>Proj 1 content</p>
                </div>
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.renderProj1()}
            </div>
        );
    }
}
