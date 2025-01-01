'use client'

import { styled } from '@mui/material/styles';

const NewsText = styled('a')`
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

export default NewsText;
