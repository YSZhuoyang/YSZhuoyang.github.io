
import React from 'react';
import Timeline from 'react-image-timeline';
import events from './Events.js';
import 'react-image-timeline/dist/timeline.css';
import './trace.css';


const emptyfooter = (props) => {
    return <div></div>;
};

export default class App extends React.Component {
    render() {
        return (
			<div className="timeline-div">
				<Timeline events={events} customFooter={emptyfooter}/>
			</div>
        );
    }
}
