import React, { memo } from "react";
import styled from 'styled-components';

const StatusDiv = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
`;

const DateDiv = styled.div`
    font-size: 50px;
    font-family: Georgia, serif;
    color: #66bbbb;
    position: absolute;
    padding-top: 4%;
    padding-left: 3%;
    text-align: center;
    width: 25%;
    float: left;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const NewsText = styled.a`
    font-size: 26px;
    font-family: Georgia, serif;
    color: #bbeebb;
    position: absolute;
    padding-top: 14%;
    padding-left: 10%;
    text-align: center;
    width: 45%;
    float: left;
    border-bottom: none;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export default memo(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();

    return (
      <StatusDiv>
          <DateDiv>{months[month] + " " + day}</DateDiv>
          <NewsText
              href="http://www.crunchyroll.com/anime-news/2016/12/01/rurouni-kenshin-manga-heads-north-for-new-spin-off"
          >
              Rurouni Kenshin: Hokkaido Arc Manga announced!
          </NewsText>
      </StatusDiv>
    );
});
