
import React from 'react';
import ToolTip from 'react-portal-tooltip';

import './Proj.css';


class ProjCard extends React.Component {
    
    state = {
        isTooltipActive: false
    }

    showTooltip() {
        this.setState({isTooltipActive: true})
    }
    
    hideTooltip() {
        this.setState({isTooltipActive: false})
    }
    
    render() {
        const tipStyle = {
            style: {
                padding: 20,
                boxShadow: '5px 5px 3px rgba(1,1,1,.5)',
                width: 400
            },
            arrowStyle: {
                color: 'rgba(1, 1, 1, .3)',
                borderColor: false
            }
        };

        return (
            <a href={this.props.mycontents.href}>
            <div>
                <div style={this.props.mystyle} className="card"
                id={this.props.myid}
                onMouseEnter={this.showTooltip.bind(this)}
                onMouseLeave={this.hideTooltip.bind(this)}>
                    <img src={this.props.mycontents.imgPath} alt="Avatar" />
                    <div className="desc">
                        <h4><b>{this.props.mycontents.title}</b></h4>
                    </div>
                </div>

                <ToolTip active={this.state.isTooltipActive}
                position="top" arrow="center" style={tipStyle}
                parent={'#' + this.props.myid}>
                    <div>
                        <p>{this.props.mycontents.brief}</p>
                    </div>
                </ToolTip>
            </div>
            </a>
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
                    brief: 'It aims to give a direct view of' + 
                        '‘what is a silly password’ and ‘what is a good password’.' + 
                        ' A data visualization website was established, where' + 
                        ' a set of interactive diagrams were implemented with D3 Javascript' + 
                        ' library for analyzing and demonstrating characteristics' +
                        ' (e.g. length, type of characters used, frequencies' +
                        ' of letter combinations and etc)',
                    imgPath: './img/pass.png',
                    href: '',
                    randTop: Math.floor(Math.random() * 400 + 20),
                    randLeft: Math.floor(Math.random() * 600),
                    randRot: 'rotate(' + (Math.floor(Math.random() * 100) - 50) + 'deg)'
                }, 
                {
                    title: 'Green space',
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
                    imgPath: './img/pass.png',
                    href: 'https://github.com/YSZhuoyang/Green-Space-Plant-Landscaping',
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
            brief: this.state.pos[0].brief,
            imgPath: this.state.pos[0].imgPath,
            href: this.state.pos[0].href
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
            brief: this.state.pos[1].brief,
            imgPath: this.state.pos[1].imgPath,
            href: this.state.pos[1].href
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
