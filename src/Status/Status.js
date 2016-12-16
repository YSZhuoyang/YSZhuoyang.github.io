
import React, { Component } from 'react';

import './Status.css';


class Status extends Component {
    
    render() {
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const dateObj = new Date();
        const day = dateObj.getDate();
        const month = dateObj.getMonth();

        return (
            <div className='status-div'>
                <div className="date">{months[month] + " " + day}</div>
                <a className="news" href="http://www.crunchyroll.com/anime-news/2016/12/01/rurouni-kenshin-manga-heads-north-for-new-spin-off">
                <div>
                Rurouni Kenshin: Hokkaido Arc Manga announced!
                </div>
                </a>
            </div>
        );
    }
}

export default Status;
