
import React from 'react';
import Timeline from './timeline/timeline';
import events from './Events.js';
import './timeline/timeline.css';
import './trace.css';


const emptyfooter = (props) => {
    return <div></div>;
};

export default class Trace extends React.Component {
    render() {
        return (
			<div className="timeline-div">
				<Timeline events={events} customFooter={emptyfooter}/>
			</div>
        );
    }
}
