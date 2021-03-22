import styled from "styled-components";
import { device } from "../mideaQuerysDefault"

const WrapperTopbar = styled.div`
    width: 100%;
    height: 70px;
    justify-content: center;
    border-bottom: 2px solid #ebebeb;
    display: flex;
`;

const TopBar = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;

    @media ${device.mobileS}{
      
  }

  @media ${device.mobileM}{
    justify-content: space-between;
    display: flex;
    width: 375px;
  }

  @media ${device.mobileL}{
    display: flex;
    width: 576px;
  }

  @media ${device.tablet}{
    display: flex;
    width: 768px;
  }

  @media ${device.laptop} {
    display: flex;
    width: 1200px;
  }
`;

const BlockLeft = styled.div`
   justify-content: center;
    align-items: center;
    display: flex;
`;

const SpanLogo = styled.span`
   text-align: center;
    font: italic normal bold 25px Helvetica Neue;
    color: #707070;
    margin-right: 70px;

    @media ${device.mobileM}{
        font: italic normal bold 44px Helvetica Neue;
  }
`;
const DivBarLogo = styled.div`
position: absolute;
margin-left: 0;
margin-top: 6px;

height: 7px;
border-radius: 6px;
background: #b5c401;

@media ${device.mobileS}{
    width: 50px;
  }
@media ${device.mobileM}{
    width: 90px;
  }
`;

const BlockRight = styled.div`
 justify-content: center;
align-items: center;
display: flex;
`;

const SpanAccount = styled.span`
 text-align: center;
font: italic normal bold 20px Helvetica Neue;
color: #707070;
`;

const SpanLogOut = styled.span`
 text-align: center;
    font: italic normal bold 20px Helvetica Neue;
    color: #707070;
    margin-left: 80px;
    display: flex;
    /* margin-right: 10px;  */
`;

const DivFooter = styled.div`
   width: 100%;
    height: 70px;

    justify-content: center;
    align-items: center;
    border-top: 2px solid #ebebeb;
    display: flex;
    margin-top: 150px;
`;
const SpanTextFooter = styled.span`
   text-align: center;
    font: normal 15px Helvetica Neue;
    color: #707070;
`;

const Container = styled.div`
 background-color: "#F7F7F7";
justify-content: center;
display: grid;
height: calc(100vh - var(--content-recent-game));
`;
const Main = styled.main`
width: 1200px;
height: 100px;
margin-top: 70px;

@media ${device.mobileS}{
    width: 320px;
    display: grid;
  }
@media ${device.mobileM}{
    width: 375px;
    display: grid;
  }
@media ${device.mobileL}{
    width: 576px;
    display: grid;
    /* margin-top: 30px */
  }
@media ${device.tablet}{
    width: 768px;
    display: grid;
  }

@media ${device.laptop}{
    width: 1200px;
    display: flex;
  }
`;

const DivBlockLeft = styled.div`
/* width: 65%; */
margin-bottom: 10px;
/* display: flex; */
`;
const DivWrapperRecentGame = styled.div`
align-items: center;
/* display: grid; */

@media ${device.mobileS}{
    display: grid;
    width: 320px;
  }
@media ${device.mobileM}{
    display: grid;
    width: 375px;
  }

@media ${device.mobileL}{
    display: grid;
    /* width: 100%; */
    width: 576px;
  }
@media ${device.tablet}{
    display: flex;
    /* width: 100%; */
    width: 768px;
  }


`;
const DivBlockRight = styled.div`

display: flex;
justify-content: flex-end;
align-items: flex-start;

@media ${device.mobileL}{
    /* justify-content:  */
    width: auto;
  }
@media ${device.tablet}{
    /* justify-content:  */
    width: 100%;
  }
`;
const SpanTitleRecentGame = styled.span`
text-align: center;
font: italic normal bold 24px Helvetica Neue;
color: #707070;
text-transform: uppercase;
`;
const SpanTitleFilters = styled.span`
text-align: left;
font: italic normal normal 17px Helvetica Neue;
color: #868686;
`;

const DivButtonGames = styled.div`
margin-bottom: 10px;
/* height: 130px; */

@media ${device.mobileS}{
    justify-content: center;
    display: grid;
    height: 130px;
  }
@media ${device.mobileM}{
    /* justify-content:  */
    display: flex;
    height: auto;
  }
`;



// const ButtonChoose = styled.button`
//     width: 113px;
//     height: 34px;
//     border-radius: 30px;
//     border-width: 0;
//     /* border: 2px solid #7f3992; */
//     cursor: pointer;
//     text-align: center;
//     font: italic normal bold 14px Helvetica Neue;
//     margin-left: 20px;
//     color: #7f3992;
//     background: #FFF;
//     border: 2px solid #7f3992;

//     /* background: ${(p: ButtonProps) => p.background};
//     color: ${(p: ButtonProps) => p.color};
//     border: ${(p: ButtonProps) => p.border}; */

//     outline: none;
//     box-shadow: none;
// `;

const SpanNewBet = styled.span`
font: italic normal bold 24px Helvetica Neue;
letter-spacing: 0px;
color: #B5C401;
`;

const DivWrapperScrollList = styled.div`
 display: grid;
`;
const ScrollList = styled.div`
 overflow-y: scroll;

 @media ${device.mobileS}{
  max-height: 300px;
  }
 @media ${device.tablet}{
  max-height: 500px;
  }
`;

const DivListGames = styled.div`
   display: flex;
    margin-top: 20px;
`;

// const DivDivisorElement = styled.div<TypeColorProps>`
const DivDivisorElement = styled.div`
   width: 5px;
    height: auto;
    background: ${(p) => p.color && p.color};
    /* background: orange; */
    border-radius: 20px;
`;
const DivGameDescription = styled.div`
  margin: 0 10px 0 10px;
    display: grid;
    width: 280px;
    height: 80px;
    word-wrap: break-word;
    align-items: center;
`;
const SpanNumberList = styled.span`
  text-align: left;
    font: italic bold 18px Helvetica Neue;
    color: #868686;
    width: 280px;
`;
// const SpanType = styled.span<TypeColorProps>`
const SpanType = styled.span`
  color: ${(p) => p.color && p.color};
  /* color: orange; */
  font: italic normal bold 20px Helvetica Neue;
`;
const SpanInfos = styled.span`
 text-align: left;
font: normal normal normal 17px Helvetica Neue;
color: #868686;

`;

export {
  WrapperTopbar,
  TopBar,
  BlockLeft,
  SpanLogo,
  DivBarLogo,
  BlockRight,
  SpanAccount,
  SpanLogOut,
  DivFooter,
  SpanTextFooter,
  Container,
  Main,
  DivBlockLeft,
  DivBlockRight,
  SpanTitleRecentGame,
  SpanTitleFilters,
  DivButtonGames,
  // ButtonChoose,
  SpanNewBet,
  DivWrapperScrollList,
  ScrollList,
  DivListGames,
  DivDivisorElement,
  DivGameDescription,
  SpanNumberList,
  SpanType,
  SpanInfos,
  DivWrapperRecentGame,
}