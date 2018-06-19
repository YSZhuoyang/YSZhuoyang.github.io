
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Dialog from '@material-ui/core/Dialog';

// import './Proj.css';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'transparent'
    },
    gridList: {
        width: 1200,
        [theme.breakpoints.up('md')]: {
            height: 800
        },
        [theme.breakpoints.up('lg')]: {
            height: 1000
        },
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white'
    }
});

const tileData = [{
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
    },
    {
        title: 'News digest',
        subtitle: 'Ruby on rails',
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
    }
];

class ProjDialog extends React.Component {

    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return(
            <Dialog
            title={this.props.title}
            modal={false}
            open={this.state.open}
            onClose={this.handleClose}
            >
                {
                    this.props.video !== '' ?
                    <div>
                        <iframe id="project_video"
                        title={this.props.title}
                        src={this.props.video}
                        frameBorder="0" allowFullScreen>
                        </iframe>
                        <div className="clear"></div>
                    </div>
                    : <div/>
                }
                
                <div id="proj-brief-text">
                    <br />
                    {this.props.brief}
                    <br /><br />
                </div>
                <a id="source-link" href={this.props.href}>Source</a>
            </Dialog>
        );
    }
}

class ProjGridList extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={'auto'} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile className={classes.tile}
                    key={tile.imgPath} cols={1} rows={1}
                    onClick={this.handleOpen}
                    >
                    <img src={tile.imgPath} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
                        titlePosition="top"
                        // actionIcon={
                        // <IconButton className={classes.icon}>
                        //     <StarBorderIcon />
                        // </IconButton>
                        // }
                        actionPosition="left"
                        className={classes.titleBar}
                    />
                    <ProjDialog />
                    </GridListTile>
                ))}
                </GridList>
            </div>
        );
    }
}

ProjGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjGridList);


// class ProjCard extends React.Component {
    
//     state = {
//         open: false,
//     };

//     handleOpen = () => {
//         this.setState({open: true});
//     };

//     handleClose = () => {
//         this.setState({open: false});
//     };

//     renderContent() {
//         return(
//             <Dialog
//             title={this.props.mycontents.title}
//             modal={false}
//             open={this.state.open}
//             onClose={this.handleClose}
//             >
//                 {
//                     this.props.mycontents.video !== '' ?
//                     <div>
//                         <iframe id="project_video"
//                         title={this.props.mycontents.title}
//                         src={this.props.mycontents.video}
//                         frameBorder="0" allowFullScreen>
//                         </iframe>
//                         <div className="clear"></div>
//                     </div>
//                     : <div/>
//                 }
                
//                 <div id="proj-brief-text">
//                     <br />
//                     {this.props.mycontents.brief}
//                     <br /><br />
//                 </div>
//                 <a id="source-link" href={this.props.mycontents.href}>Source</a>
//             </Dialog>
//         );
//     }
    
//     render() {
//         return (
//             <div>
//                 <div style={this.props.mystyle} className="card"
//                 id={this.props.myid}
//                 onClick={this.handleOpen}>
//                     <Thumbnail src={this.props.mycontents.imgPath} alt="242x200" />
//                     <div className="overlay">
//                         <div className="title">
//                             <h4><b>{this.props.mycontents.title}</b></h4>
//                         </div>
//                         <div className="subtitle">
//                             <h4><b>{this.props.mycontents.subtitle}</b></h4>
//                         </div>
//                     </div>
//                 </div>
//                 {this.renderContent()}
//             </div>
//         )
//     }
// }
