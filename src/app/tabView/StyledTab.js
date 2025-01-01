'use client'

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';


const StyledTab = styled(Tab)`
    && {
        flex: 1;
        font-size: 20px;
        color: #aaaaaa;

        @media (max-width: 768px) {
          font-size: 14px;
        }

        &.Mui-selected {
            color: #ddddbb;
        }
    }
`;

export default StyledTab;
