import React from "react";
import styled from "styled-components";

const IMAGE_ID_PATH = "./img/ids/ID.jpg";
const IMAGE_FAVORITE_GAME_PATH = "./img/my_favorite_game.png";

const StyledTextImg = styled.img`
  width: 120px;
  height: 25px;

  @media (max-width: 768px) {
    width: 65%;
    height: 65%;
  }
`;

const StyledImg = styled.img`
  float: right;
  margin: -30px 0 0 0;
  width: 22%;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const StyledRootDiv = styled.div`
  max-width: 800px;
  margin: 40px auto 60px;
  font-family: "Arial", Georgia, Serif;
`;

const StyledDt = styled.dt`
  padding: 0 0 0 0;
  font-style: italic;
  font-weight: bold;
  font-size: 150%;
  width: 40%;
  float: left;
`;

const StyledDd = styled.dd`
  width: 60%;
  float: right;
`;

const StyledProfileDiv = styled.div`
  width: 75%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  font-style: italic;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const StyledClearDiv = styled.div`
  clear: both;
  float: none;
  height: 15px;
  max-width: 800px;
  border-bottom: 1px solid #aaa;
`;

const StyledEmailA = styled.a`
  color: #ccc;
  margin-top: 10px;
  line-height: 150%;
  text-decoration: none;
  border-bottom: 1px dotted #dddddd;
`;

const StyledAboutMeA = styled.a`
  color: #ccc;
  text-decoration: none;
  border-bottom: 1px dotted #dddddd;
`;

const StyledUl = styled.ul`
  margin: 0 0 18px 0px;
`;

const StyledH1 = styled.h1`
  margin: 0 0 16px 0;
  padding: 0 0 16px 0;
  font-weight: bold;
  letter-spacing: -2px;
  border-bottom: 1px solid #aaa;
`;

// Overwrite react-image-timeline style
const StyledH2 = styled.h2`
  font-size: 160% !important;
  margin: 5px 0 5px 0 !important;
  position: relative;
  color: #ffffff;
`;

// Overwrite react-image-timeline style
const StyledLi = styled.li`
  margin-top: 0px !important;
`;

const StyledImageLi = styled.li`
  margin-top: 0px !important;
  width: 120px;
`;

const StyledInterestsDiv = styled.div`
  margin-top: 20px;
`;

export default React.memo(props => (
  <StyledRootDiv>
    {renderIDPhoto()}
    <div id="contact-info" className="vcard">
      <StyledH1 className="fn">Oscar Yu</StyledH1>
      {renderEmail()}
    </div>

    <StyledProfileDiv>
      <StyledH2>
        Go to my{" "}
        <StyledAboutMeA
          href="https://github.com/YSZhuoyang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font color="#ccdd33">Github</font>
        </StyledAboutMeA>
      </StyledH2>

      <StyledH2>
        Go to my{" "}
        <StyledAboutMeA
          href="https://au.linkedin.com/in/yuszy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font color="#ccdd33">LinkedIn</font>
        </StyledAboutMeA>
      </StyledH2>
    </StyledProfileDiv>

    <StyledClearDiv />

    <dl>{renderInterests()}</dl>
    <br />
  </StyledRootDiv>
));

function renderIDPhoto() {
  return <StyledImg src={IMAGE_ID_PATH} alt="My id" />;
}

function renderEmail() {
  return (
    <p id="email">
      Email:
      <StyledEmailA href="mailto:sangzhuoyangy@gmail.com">
        sangzhuoyangy@gmail.com
      </StyledEmailA>
    </p>
  );
}

function renderInterests() {
  return (
    <StyledInterestsDiv id="interests">
      <StyledDt>My Favorites</StyledDt>
      <StyledDd>
        <StyledH2>Food</StyledH2>
        <StyledUl>
          <StyledLi>Fried eggs</StyledLi>
          <StyledLi>Tomatoes</StyledLi>
          <StyledLi>Steak</StyledLi>
          <StyledLi>Yoghurt</StyledLi>
        </StyledUl>

        <StyledH2>Anime</StyledH2>
        <StyledUl>
          <StyledLi>るろうに剣心</StyledLi>
          <StyledLi>いぬやしゃ</StyledLi>
          <StyledLi>ドラゴンボール</StyledLi>
        </StyledUl>

        <StyledH2>Programming Languages</StyledH2>
        <StyledUl>
          <StyledLi>Golang</StyledLi>
          <StyledLi>Cuda</StyledLi>
          <StyledLi>Typescript</StyledLi>
        </StyledUl>

        <StyledH2>Sports</StyledH2>
        <StyledUl>
          <StyledLi>Tennis</StyledLi>
        </StyledUl>

        <StyledH2>Games</StyledH2>
        <StyledUl>
          <StyledImageLi>
            <StyledTextImg
              src={IMAGE_FAVORITE_GAME_PATH}
              alt="My favorite game"
            />
          </StyledImageLi>
          <StyledLi>Need for speed</StyledLi>
        </StyledUl>
      </StyledDd>
    </StyledInterestsDiv>
  );
}
