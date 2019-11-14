import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Status from './status/Status';
import TabView from './tabView/TabView';


const TabContainer = styled.div`
    padding-top: 27%;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: auto;
    color: #eeeeee;

    @media (max-width: 768px) {
        && {
            font-size: 80%;
        }
    }
`;

const Body = styled.div`
    background-image: url("img/background.jpeg");
    background-size: 100% 100%;
`;

const RootView = () => {
    return (
        <Body>
            <Status />

            <TabContainer>
                <TabView />
            </TabContainer>
        </Body>
    );
}

ReactDOM.render(
    <RootView />,
    document.getElementById('my-body')
);
