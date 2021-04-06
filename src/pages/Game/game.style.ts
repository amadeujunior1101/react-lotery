import styled from "styled-components";
import { device } from "../mideaQuerysDefault"

const DivButtonsChoose = styled.div`
   margin: 20px 0 20px 0;
   display: flex;
   /* width: 100%; */
   /* @media ${device.mobileS}{
        padding: 0 10px 0 10px;
        width: 300px;
        overflow-y: scroll;
     }
   @media ${device.mobileM}{
        padding: 0 10px 0 10px;
        width: 100%;
        overflow-y: scroll;
     } */
`;

const DivScrollButtonsChoose = styled.div`
width: 320px;
display: flex;
overflow-y: scroll;

@media ${device.mobileS}{
width: 100%;
overflow-y: hidden;
} 

`;

const ParagraphDescription = styled.p`
margin: 20px 50px 20px 0;
text-align: left;
font: italic normal 17px/24px Helvetica Neue;
letter-spacing: 0px;
color: #868686;
`;

const DivMenuMobile = styled.div`
    width: 100%;
    /* height: 70px; */
    justify-content: center;
    border-bottom: 2px solid #ebebeb;
    display: flex;
    padding: 0;

    @media ${device.mobileL}{
        display: block;
        
     }
     @media ${device.tablet}{
        display: none;
     }
`;

const UlMenuMobile = styled.div`
justify-content: center;
display: grid;
list-style: none;
    a{
            color: #707070;
            text-decoration: none;
    }
`;

const Container = styled.div`
 background-color: "#F7F7F7";
justify-content: center;
display: grid;

`;
const Main = styled.main`
width: 1200px;
display: flex;
margin-top: auto;

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
        width: 576px;
     }
@media ${device.tablet}{
        display: grid;
        width: 768px;
     }
@media ${device.laptop}{
        display: flex;
        width: 1200px;
        margin-top: 50px;
     }
`;
const ContentLeft = styled.div`
 

 @media ${device.mobileS}{
        width: 100%;
     }
 @media ${device.mobileL}{
        width: 100%;
     }
 @media ${device.laptop}{
    width: 65%;
     }
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
/* grid-template-columns: repeat(10, 1fr); */
grid-auto-rows: 75px;
grid-gap: 5px 8px;
padding: 0 10px 10px 0;
margin-top: 20px;
margin-bottom: 30px;

@media ${device.mobileS}{
    grid-template-columns: repeat(4, 1fr);
}
@media ${device.mobileM}{
    grid-template-columns: repeat(5, 1fr);
}
@media ${device.mobileL}{
    grid-template-columns: repeat(8, 1fr);
}
@media ${device.tablet}{
    grid-template-columns: repeat(10, 1fr);
}

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

const DivCardMobile = styled.div`
display: grid;

@media ${device.laptop}{
   display: none;
}

`;
const DivWrapperCartMobile = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 20px;
cursor: pointer;
`;
const SpanCountCart = styled.span`
margin-top: 8px;
position: absolute;
color: #dc3545;
font-weight: bold;
`;
const BlockTitlesTop = styled.div`
display: grid;
`;
const SpanTitleOne = styled.span`
  color: #707070;
    text-transform: uppercase;
    font: italic normal 24px Helvetica Neue;
    margin-top: 40px;
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
display: none;
/* width: 100%; */
 /* @media ${device.tablet}{
display: none;
} */
@media ${device.laptop}{
display: block;
width: 35%;
}
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
    cursor: pointer;
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

const DivAlert = styled.div`
 margin: 10px 0 0 10px;
height: 50px;
background: #f8d7da; 
display: flex; 
justify-content: center; 
align-items: center;
color: #721c24; 
border-color: #f5c6cb; 
border: 1px solid transparent;
`;

export {
    DivScrollButtonsChoose,
    DivButtonsChoose,
    ParagraphDescription,
    DivMenuMobile,
    UlMenuMobile,
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
    DivCardMobile,
    DivWrapperCartMobile,
    SpanCountCart,
    BlockTitlesTop,
    SpanTitleOne,
    SpanTitleTwo,
    SpanPatch,
    ContentRight,
    DivCardBase,
    DivTitleCard,
    SpanInformationCartEmpty,
    ScrollList,
    DivAlert,
    DivCartTotal,
    SpanCartTotal,
    ValueTotal,
    SpanValueTotal,
    DivSaveButton,
    SpanSaveButton,
    DivFooter,
    SpanTextFooter,
}