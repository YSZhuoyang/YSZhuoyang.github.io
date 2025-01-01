import React from 'react';

import Body from './Body';
import Status from './status/Status';
import TabView from './tabView/TabView';
import TabContainer from './TabContainer';


export default function HomePage() {
    return (
        <Body>
            <Status />

            <TabContainer>
                <TabView />
            </TabContainer>
        </Body>
    );
}
