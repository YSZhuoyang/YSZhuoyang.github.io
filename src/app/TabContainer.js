'use client'

import { styled } from '@mui/material/styles';

const TabContainer = styled('div')`
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

export default TabContainer;
