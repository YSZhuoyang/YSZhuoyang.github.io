
import React from 'react';

import './aboutMe.css';


const IMAGE_ID_PATH = './img/ids/ID.jpg';
const IMAGE_FAVORITE_GAME_PATH = './img/my_favorite_game.png';

export default class AboutMe extends React.Component {

    renderIDPhoto() {
        return(<img src={IMAGE_ID_PATH} alt="My id" id="pic" />);
    }

    renderEmail() {
        return(
            <p id="email">
                Email: 
                <a className="email about-me" href="mailto:sangzhuoyangy@gmail.com">
                sangzhuoyangy@gmail.com
                </a>
            </p>
        );
    }

    renderInterests() {
        return(
            <div id="interests">
                <dt>What I like</dt>
                <dd>
                    <h2>My Favorite Food</h2>
                    <ul>
                        <li>Fried eggs</li>
                        <li>Tomatoes</li>
                        <li>Steak</li>
                        <li>Yoghurt</li>
                    </ul>
                    
                    <h2>My Favorite Anime</h2>
                    <ul>
                        <li>るろうに剣心</li>
                        <li>いぬやしゃ</li>
                        <li>ドラゴンボール</li>
                    </ul>

                    <h2>My Favorite Languages</h2>
                    <ul>
                        <li>Golang</li>
                        <li>Cuda</li>
                        <li>Typescript</li>
                    </ul>

                    <h2>My Favorite Sport</h2>
                    <ul>
                        <li>Tennis</li>
                    </ul>

                    <h2>My Favorite Games</h2>
                    <ul>
                        <li>
                            <img src={IMAGE_FAVORITE_GAME_PATH} id="my-favorite-game" alt="My favorite game" />
                        </li>
                        <li>Need for speed</li>
                    </ul>
                </dd>
            </div>
        );
    }

    render() {
        return (
            <div id="about-me">
                {this.renderIDPhoto()}
                <div id="contact-info" className="vcard">
                    <h1 className="fn">Oscar Yu</h1>
                    {this.renderEmail()}
                </div>
                
                <div id="profile" >
                    <h2>Go to my <a className="about-me" href="https://github.com/YSZhuoyang" target="_blank" rel="noopener noreferrer" >
                        <font color="#ccdd33">Github</font></a>
                    </h2>

                    <h2>Go to my <a className="about-me" href="https://au.linkedin.com/in/yuszy" target="_blank" rel="noopener noreferrer">
                        <font color="#ccdd33">LinkedIn</font></a>
                    </h2>
                </div>

                <div className="clear"></div>

                <dl>
                    {this.renderInterests()}
                </dl>
                <br/>
            </div>
        );
    }
}
