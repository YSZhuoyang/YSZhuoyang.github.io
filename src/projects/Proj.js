
import React from 'react';
import Dialog from 'material-ui/Dialog';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './Proj.css';


injectTapEventPlugin();

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
                    randTop: Math.floor(Math.random() * 400 + 20),
                    randLeft: Math.floor(Math.random() * 600),
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
                    randTop: Math.floor(Math.random() * 400 + 20),
                    randLeft: Math.floor(Math.random() * 600),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                }
            ]
        };
    }

    renderProj1() {
        const styles = {
            position: 'relative',
            transform: this.state.pos[0].randRot,
            top: this.state.pos[0].randTop,
            left: this.state.pos[0].randLeft
        };

        const contents = {
            title: this.state.pos[0].title,
            subtitle: this.state.pos[0].subtitle,
            brief: this.state.pos[0].brief,
            imgPath: this.state.pos[0].imgPath,
            href: this.state.pos[0].href,
            video: this.state.pos[0].video
        }

        return(
            <ProjCard mystyle={styles} mycontents={contents} myid='proj1' />
        );
    }

    renderProj2() {
        const styles = {
            position: 'relative',
            transform: this.state.pos[1].randRot,
            top: this.state.pos[1].randTop,
            left: this.state.pos[1].randLeft
        };

        const contents = {
            title: this.state.pos[1].title,
            subtitle: this.state.pos[1].subtitle,
            brief: this.state.pos[1].brief,
            imgPath: this.state.pos[1].imgPath,
            href: this.state.pos[1].href,
            video: this.state.pos[1].video
        }

        return(
            <ProjCard mystyle={styles} mycontents={contents} myid='proj2' />
        );
    }

    render() {
        return(
            <div>
                {this.renderProj1()}
                {this.renderProj2()}
            </div>
        );
    }
}
