
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Modal from '@material-ui/core/Dialog';

import { tileData } from './ProjTileData';
import './Proj.css';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'transparent'
    },
    gridList: {
        width: '80%',
        [theme.breakpoints.down(400)]: {
            height: 500
        },
        [theme.breakpoints.up(400)]: {
            height: 'auto'
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

    renderDialog = () => {
        const { tile } = this.props;

        return(
            <Modal
            title={tile.title}
            open={this.state.open}
            onClose={this.handleClose}
            >
                {
                    tile.video !== '' ?
                    <div>
                        <iframe id="project_video"
                        title={tile.title}
                        src={tile.video}
                        frameBorder="0" allowFullScreen>
                        </iframe>
                        <div className="clear"></div>
                    </div>
                    : <div/>
                }
                
                <div id="proj-brief-text">
                    <br />
                    {tile.brief}
                    <br /><br />
                </div>
                <a id="source-link" href={tile.href}>Source</a>
            </Modal>
        );
    }

    render() {
        const { tile, classes, style } = this.props;
        
        return (<GridListTile
            key={tile.imgPath} cols={1} rows={1}
            onClick={this.handleOpen}
            style={style}
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
            {this.renderDialog()}
            </GridListTile>
        );

    }
}

class ProjGridList extends React.Component {

    render() {
        const { classes, style, windowWidth } = this.props;
        const numCols = windowWidth > 800 ? 3 : windowWidth > 400 ? 2 : 1;

        return (
            <div className={classes.root}>
                <GridList
                className={classes.gridList}
                cellHeight={'auto'}
                cols={numCols}
                >
                    {tileData.map(tile => {
                        return (
                            <ProjDialog
                            key={tile.title}
                            tile={tile}
                            style={style}
                            classes={classes}
                            />
                        );
                    })}
                </GridList>
            </div>
        );
    }
}

ProjGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjGridList);
