'use client'

import { styled } from '@mui/material/styles';

const DateDiv = styled('div')`
    font-size: 50px;
    font-family: Georgia, serif;
    color: #66bbbb;
    position: absolute;
    padding-top: 10%;
    padding-left: 3%;
    text-align: center;
    width: 25%;
    float: left;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export default DateDiv;
