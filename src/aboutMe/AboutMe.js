import React from "react";
import { styled } from '@mui/material/styles';

const IMAGE_ID_PATH = "./img/ids/ID.png";
const GIT_ICON_PATH = "./img/git-icon.png";

const StyledGitImg = styled('img')`
  width: 47px;
  height: 47px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledImg = styled('img')`
  float: right;
  margin: -30px 0 0 0;
  width: 25%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const StyledRootDiv = styled('div')`
  max-width: 800px;
  margin: 40px auto 60px;
  font-family: "Arial", Georgia, Serif;
`;

const StyledProfileDiv = styled('div')`
  width: 75%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-style: italic;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const StyledClearDiv = styled('div')`
  clear: both;
  float: none;
  height: 15px;
  max-width: 800px;
  border-bottom: 1px solid #aaa;
`;

const StyledEmailA = styled('a')`
  color: #ccc;
  margin-top: 10px;
  line-height: 150%;
  text-decoration: none;
  border-bottom: 1px dotted #dddddd;
`;

const StyledH1 = styled('h1')`
  margin: 0 0 16px 0;
  padding: 0 0 16px 0;
  font-weight: bold;
  letter-spacing: -2px;
  border-bottom: 1px solid #aaa;
`;

// Overwrite react-image-timeline style
const StyledH2 = styled('h2')`
  font-size: 160% !important;
  margin: 5px 0 5px 0 !important;
  position: relative;
  color: #ffffff;
`;

export default React.memo(() => (
  <StyledRootDiv>
    <StyledImg src={IMAGE_ID_PATH} alt="My id" />

    <div id="contact-info" className="vcard">
      <StyledH1 className="fn">Oscar Yu</StyledH1>
      <p>
        Email:
        <StyledEmailA href="mailto:sangzhuoyangy@gmail.com">
          sangzhuoyangy@gmail.com
        </StyledEmailA>
      </p>
    </div>

    <StyledProfileDiv>
      <StyledH2>
        <a href="https://github.com/YSZhuoyang">
          <StyledGitImg
            src={GIT_ICON_PATH}
            alt="My git"
          />
        </a>
      </StyledH2>
    </StyledProfileDiv>

    <StyledClearDiv />
  </StyledRootDiv>
));
