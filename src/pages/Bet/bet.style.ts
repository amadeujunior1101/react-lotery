import styled, { StyledFunction } from "styled-components";

interface ButtonProps {
    background: string;
    color: string;
    border: string;
    // active: boolean;
};

interface DivBallProps {
    bg: string;
};

interface TypeColorProps {
    color: string;
};

/* background: ${(p: ButtonProps)=>p.background};
color: ${(p: ButtonProps)=>p.color};
border: ${(p: ButtonProps)=>p.border}; */

const ButtonChoose = styled.button<ButtonProps>`
    width: 113px;
    height: 34px;
    border-radius: 30px;
    border-width: 0;
    /* border: 2px solid #7f3992; */
    cursor: pointer;
    text-align: center;
    font: italic normal bold 14px Helvetica Neue;
    /* color: #7f3992; */
    margin-right: 20px;

    background: ${(p: ButtonProps) => p.background};
    color: ${(p: ButtonProps) => p.color};
    border: ${(p: ButtonProps) => p.border};
    
    outline: none;
    box-shadow: none;
`;

const Ball = styled.div<DivBallProps>`
    background: ${(p: DivBallProps) => p.bg === "#adc0c4" ? "#adc0c4" : p.bg};
    /* background: #adc0c4; */
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    margin-bottom: 5px;
`;

const SpanBall = styled.span`
   color: #FFF;
`;

const DivButtonsChoose = styled.div`
   margin: 20px 0 20px 0;
`;

const ParagraphDescription = styled.p`
margin: 20px 50px 20px 0;
text-align: left;
font: italic normal 17px/24px Helvetica Neue;
letter-spacing: 0px;
color: #868686;
`;

const WrapperTopbar = styled.div`
    width: 100%;
    height: 70px;
    justify-content: center;
    border-bottom: 2px solid #ebebeb;
    display: flex;
`;

const TopBar = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
    width: 1200px;
`;

const BlockLeft = styled.div`
   justify-content: center;
    align-items: center;
    display: flex;
`;
const SpanLogo = styled.span`
   text-align: center;
    font: italic normal bold 44px Helvetica Neue;
    color: #707070;
    margin-right: 80px;
`;
const DivBarLogo = styled.div`
position: absolute;
margin-left: 0;
margin-top: 6px;
width: 107px;
height: 7px;
border-radius: 6px;
background: #b5c401;
`;
const SpanHome = styled.span`
text-align: center;
font: italic normal bold 20px Helvetica Neue;
color: #707070;
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
`;

const Container = styled.div`
 background-color: "#F7F7F7";
justify-content: center;
display: grid;

`;
const Main = styled.main`
width: 1200px;
display: flex;
`;
const ContentLeft = styled.div`
 width: 65%;
`;
const DivBox1 = styled.div`
 display: grid;
`;
const DivBox2 = styled.div`
`;
const DivBox3 = styled.div`

`;
const SpanTitleGame = styled.span`
font: italic normal bold 17px/24px Helvetica Neue;
color: #868686;
`;
const ContainerBalls = styled.div`
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-auto-rows: 75px;
grid-gap: 5px 8px;
padding: 0 10px 10px 0;
margin-top: 20px;
margin-bottom: 30px;
`;
const DivButtonsOptions = styled.div`
 display: flex;
justify-content: space-between;
margin-right: 10px;
`;

const ButtonOption = styled.button`
height: 52px;
border-radius: 10px;
border-width: 0;
border: 2px solid #27c383;
cursor: pointer;
text-align: center;
font: italic normal bold 16px Helvetica Neue;
color: #27c383;
padding: 0 5px 0 5px;
margin-right: 10px;
`;

const ButtonAddToCard = styled.button`
height: 52px;
border-radius: 10px;
border-width: 0;
background: #01ac66;
cursor: pointer;
text-align: center;
font: italic normal bold 16px Helvetica Neue;
color: #fff;
padding: 0 5px 0 5px;

outline: none;
box-shadow: none;
`;

const BlockTitlesTop = styled.div`
display: grid;
`;
const SpanTitleOne = styled.span`
  color: #707070;
    text-transform: uppercase;
    font: italic normal 24px Helvetica Neue;
    margin-top: 70px;
`;
const SpanTitleTwo = styled.span`
 text-align: left;
    font: italic normal bold 17px Helvetica Neue;
    color: #868686;
    margin-top: 30px;
`;
const SpanPatch = styled.span`
 color: #707070;
    text-transform: uppercase;
    font: italic normal bold 24px Helvetica Neue;
`;
const ContentRight = styled.div`
 width: 35%;
`;
const DivCardBase = styled.div`
  border-radius: 10px 10px 0 0;
    background: #fff;
    /* border: 1px solid #e2e2e2; */
    margin: 40px 0 auto 10px;
    padding: 15px;
    border-left: 1px solid #e2e2e2;
    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
`;

const DivTitleCard = styled.div`
 text-align: left;
    font: italic normal bold 24px Helvetica Neue;
    color: #707070;
    text-transform: uppercase;
`;

const SpanInformationCartEmpty = styled.span`
 display: flex;
    justify-content: center;
    font: normal normal 300 24px/85px Helvetica Neue;
    color: #707070;
`;
const ScrollList = styled.div`
 overflow-y: scroll;
 max-height: 300px;
`;
const DivCartTotal = styled.div`
margin: 0 0 auto 10px;
padding: 15px;
border-left: 1px solid #e2e2e2;
border-right: 1px solid #e2e2e2;
`;
const SpanCartTotal = styled.span`
 font: italic normal bold 24px/85px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
`;
const ValueTotal = styled.strong`
  text-align: left;
    font: normal normal 300 24px/85px Helvetica Neue;
    color: #707070;
`;
const SpanValueTotal = styled.span`
  text-align: left;
    font: normal normal 300 24px/85px Helvetica Neue;
    color: #707070;
`;
const DivSaveButton = styled.div`
  width: auto;
    height: 95px;
    background: #f4f4f4 0% 0%;
    border: 1px solid #e2e2e2;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 0 auto 10px;
    padding: 15px;
    border-radius: 0 0 10px 10px;
`;
const SpanSaveButton = styled.span`
  text-align: center;
    font: italic normal bold 35px/70px Helvetica Neue;
    color: #27c383;
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
const DivListGames = styled.div`
   display: flex;
    margin-top: 35px;
`;
const DivGameIcon = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50px;
`;

const DivDivisorElement = styled.div<TypeColorProps>`
   width: 5px;
    height: auto;
    background: ${(p) => p.color && p.color};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;
const DivGameDescription = styled.div`
  margin: 10px 5px 10px 10px;
    display: grid;
    width: 280px;
    word-wrap: break-word;
`;
const SpanNumberList = styled.span`
  text-align: left;
    font: italic bold 18px Helvetica Neue;
    color: #868686;
    width: 280px;
`;
const SpanType = styled.span<TypeColorProps>`
  color: ${(p) => p.color && p.color};

`;

export {
    ButtonChoose,
    Ball,
    SpanBall,
    DivButtonsChoose,
    ParagraphDescription,
    WrapperTopbar,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivBarLogo,
    SpanHome,
    BlockRight,
    SpanAccount,
    SpanLogOut,
    Container,
    Main,
    ContentLeft,
    DivBox1,
    DivBox2,
    DivBox3,
    SpanTitleGame,
    ContainerBalls,
    DivButtonsOptions,
    ButtonOption,
    ButtonAddToCard,
    BlockTitlesTop,
    SpanTitleOne,
    SpanTitleTwo,
    SpanPatch,
    ContentRight,
    DivCardBase,
    DivTitleCard,
    SpanInformationCartEmpty,
    ScrollList,
    DivListGames,
    DivGameIcon,
    DivDivisorElement,
    DivGameDescription,
    SpanNumberList,
    SpanType,

    DivCartTotal,
    SpanCartTotal,
    ValueTotal,
    SpanValueTotal,
    DivSaveButton,
    SpanSaveButton,
    DivFooter,
    SpanTextFooter,
}