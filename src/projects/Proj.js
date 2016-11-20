
import React from 'react';

import './Proj.css';

export default class Proj extends React.Component {

    renderProj1() {
        const randTop = Math.floor(Math.random() * 400 + 20);
        const randLeft = Math.floor(Math.random() * 600);
        const randRot = 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)';

        const styles = {
            position: 'relative',
            transform: randRot,
            top: randTop,
            left: randLeft
        };

        return(
            <div style={styles} className="card">
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
