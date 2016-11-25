
import React from 'react';
import Dialog from 'material-ui/Dialog';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './Proj.css';


class ProjCard extends React.Component {
    
    state = {
        open: false,
    };

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    renderContent() {
        return(
            <Dialog
            title={this.props.mycontents.title}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
                {
                    this.props.mycontents.video !== '' ?
                    <div>
                        <iframe id="project_video" 
                        src={this.props.mycontents.video}
                        frameBorder="0" allowFullScreen>
                        </iframe>
                        <div className="clear"></div>
                    </div>
                    : <div/>
                }
                
                <div id="proj-brief-text">
                    <br />
                    {this.props.mycontents.brief}
                    <br /><br />
                </div>
                <a id="source-link" href={this.props.mycontents.href}>Source</a>
            </Dialog>
        );
    }
    
    render() {
        /*const height = document.getElementById('proj-tab').height;
        const width = document.getElementById('proj-tab').width;
        const currStyle = this.props.mystyle;

        console.log (height);

        currStyle.top *= height / 400;
        currStyle.left *= width / 600;*/

        return (
            <div>
                <div style={this.props.mystyle} className="card"
                id={this.props.myid}
                onTouchTap={this.handleOpen}>
                    <img src={this.props.mycontents.imgPath} alt="Avatar" />
                    <div className="overlay" />
                    <div className="title">
                        <h4><b>{this.props.mycontents.title}</b></h4>
                    </div>
                    <div className="subtitle">
                        <h4><b>{this.props.mycontents.subtitle}</b></h4>
                    </div>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

export default class Proj extends React.Component {

    constructor() {
        super();
        this.state = {
            pos: [
                {
                    title: 'Password security',
                    subtitle: 'Javascript, D3',
                    brief: 'It aims to give a direct view of' + 
                        '‘what is a silly password’ and ‘what is a good password’.' + 
                        ' A data visualization website was established, where' + 
                        ' a set of interactive diagrams were implemented with D3 ' + 
                        ' Javascript library for demonstrating features of password' +
                        ' (e.g. length, type of characters used, frequencies' +
                        ' of letter combinations and etc)',
                    imgPath: './img/pass.png',
                    href: '',
                    video: '',
                    randTop: Math.floor(Math.random() * 100 + 20),
                    randLeft: Math.floor(Math.random() * 100 + 20),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                }, 
                {
                    title: 'Green space',
                    subtitle: 'Java, OpenGL',
                    brief: 'A design aid tool that performs plant ' + 
                        'landscaping with trees and shrubs.' +
                        'The idea is to replace paper drawings with a' + 
                        ' 3D virtual scene, thus to simplify designers ' +
                        'work. Users are allowed to easily select ' +
                        'a plant model, customize it through specifying ' + 
                        'the attributes, and then add it to the scene. ' +
                        'Prototyping becomes easy and fast. ' +
                        'Realistic rendering techniques used include phone ' + 
                        'shading, shadow mapping, as well as a ' + 
                        'GPU based particle system simulating weather ' +
                        'effects.',
                    imgPath: './img/green_space.PNG',
                    href: 'https://github.com/YSZhuoyang/Green-Space-Plant-Landscaping',
                    video: 'https://www.youtube.com/embed/7JP8YgwPKTw?rel=0',
                    randTop: Math.floor(Math.random() * 100 + 20),
                    randLeft: Math.floor(Math.random() * 100 + 365),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                },
                {
                    title: 'News digest',
                    subtitle: 'Ruby on rails, bootstrap',
                    brief: 'A news feeds website where users are able to read ' +
                        'news articles scrapped from multiple news sources (e.g. ' +
                        'New York Times, The Age, ABC News), and subscribe based on ' +
                        'their interests. Scrapped news articles are tagged with ' +
                        'different tagging gems. And readers who subscribe fron the ' +
                        'website will receive emails of latest news matching their ' +
                        'interests, which was implemented with a synonym finder api.',
                    imgPath: './img/news_digest.jpeg',
                    href: 'https://github.com/YSZhuoyang/News-Digest',
                    video: '',
                    randTop: Math.floor(Math.random() * 100 + 20),
                    randLeft: Math.floor(Math.random() * 100 + 710),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                },
                {
                    title: 'RideshareOZ',
                    subtitle: 'Android, Nodejs, Mongodb',
                    brief: 'An android app for sharing rides in Auz.' +
                        'RidesharingOz is a non-profit organisation based in ' +
                        'Melbourne founded with the principle objective of ' +
                        'reversing the trend of increasing traffic congestion, ' +
                        'which has significant negative impacts on productivity, ' +
                        'the environment. With RideShare-OZ, users are able to ' +
                        'share a ride with others, going to somewhere or some ' +
                        'event together.',
                    imgPath: './img/rideshare.png',
                    href: 'https://github.com/YSZhuoyang/SWEN90014-Masters-Engineering-Project',
                    video: 'https://www.youtube.com/embed/--IQHUw0SYo',
                    randTop: Math.floor(Math.random() * 100 + 350),
                    randLeft: Math.floor(Math.random() * 100 + 20),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                },
                {
                    title: 'Magic',
                    subtitle: 'Unity3D, C#, Kinect V2 SDK',
                    brief: 'It is able to track and recognize players\' skeleton and ' +
                        'gestures, based on which players can interact with the virtual ' +
                        'scene and objects.',
                    imgPath: './img/magic.jpg',
                    href: 'https://github.com/YSZhuoyang/Get-Started-With-Kinect',
                    video: 'https://www.youtube.com/embed/V1APHKYzVeQ',
                    randTop: Math.floor(Math.random() * 100 + 350),
                    randLeft: Math.floor(Math.random() * 100 + 365),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                },
                {
                    title: 'Functional structural plant modelling',
                    subtitle: 'Java, Java 3D',
                    brief: 'Doing real world experiments of growing plants takes ' +
                        'time and costs, whereas simulation is quick and cheap. ' +
                        'The idea behind is partially substituting real world experiments ' +
                        'of plant growth with simulation of its growing process and ' +
                        'interaction with the environment. A modelling ' +
                        'platform was implemented, where users are allowed to model ' +
                        'the plant growth by coding. A rice seedling model was built ' +
                        'based on this platform. It consists of a structure model ' +
                        'described with L-System rules, physiological model simulating ' +
                        'the process of producing and allocating biomass. The model ' +
                        'indicates the first 30 days growing of rice seedling, the ' +
                        'result of which varies according to the light absorption and ' +
                        'nitrogen content.',
                    imgPath: './img/rice seedling.jpg',
                    href: 'https://github.com/YSZhuoyang/L-System-Plant-Modelling-Platform',
                    video: '',
                    randTop: Math.floor(Math.random() * 100 + 350),
                    randLeft: Math.floor(Math.random() * 100 + 710),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                }
            ]
        };
    }

    renderProj(index) {
        const styles = {
            position: 'absolute',
            transform: this.state.pos[index].randRot,
            top: this.state.pos[index].randTop,
            left: this.state.pos[index].randLeft
        };

        const contents = {
            title: this.state.pos[index].title,
            subtitle: this.state.pos[index].subtitle,
            brief: this.state.pos[index].brief,
            imgPath: this.state.pos[index].imgPath,
            href: this.state.pos[index].href,
            video: this.state.pos[index].video
        }

        return(
            <ProjCard mystyle={styles} mycontents={contents} myid={'proj' + index} />
        );
    }

    render() {
        /*const cards = [];

        for (var i = 0; i < 4; i++)
        {
            
        }*/

        return(
            <div id="proj-tab">
                {this.renderProj(0)}
                {this.renderProj(1)}
                {this.renderProj(2)}
                {this.renderProj(3)}
                {this.renderProj(4)}
                {this.renderProj(5)}
            </div>
        );
    }
}
