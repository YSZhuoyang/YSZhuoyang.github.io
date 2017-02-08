
import React from 'react';
import Timeline from 'react-image-timeline';
import 'react-image-timeline/dist/timeline.css';
import './trace.css';

const events = [{
	"date": Date.parse("2016-01-24T07:00:00.000Z"),
	"text": "I really like Radvanska's style of playing.",
	"title": "Australian Open, Melbourne",
	"imageUrl": "./img/events/ausopen.jpg"
}, {
	"date": Date.parse("2015-12-31T07:00:00.000Z"),
	"text": "Last night of 2015, St Kilda, Crown were full of people, waiting for the comming of 2016. Disappointingly, the firework lasted for 5 minites only",
	"title": "New year's eve 2016, Melbourne",
	"imageUrl": "./img/events/2016newyear.jpg"
}, {
	"date": Date.parse("2016-02-11T07:00:00.000Z"),
	"text": "This is a brand new begining in 614 Queensberry. My lovely new home",
	"title": "614 Queensberry, Melbourne",
	"imageUrl": "./img/events/firstday614.jpg"
}, {
	"date": Date.parse("2015-09-28T07:00:00.000Z"),
	"text": "Took a rest in the middle break",
	"title": "Belgrave, Melbourne",
	"imageUrl": "./img/events/dandenong.jpg"
}, {
	"date": Date.parse("2016-02-07T07:00:00.000Z"),
	"text": "First hanging out with new housemates in 614 Queensberry",
	"title": "Southbank, Melbourne",
	"imageUrl": "./img/events/haningoutwith614.jpg"
}
];

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
