import styled from "styled-components";
import { device } from "../mideaQuerysDefault"

const ContainerFluid = styled.div`
  background: #F7F7F7;
  width: 100%;
  height: calc(100% - var(--footer-login));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxGeneral = styled.div`
  /* margin-top: 145px; */
  justify-content: center;

  @media ${device.mobileS}{
    max-width: 320px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media ${device.mobileM}{
    max-width: 375px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media ${device.mobileL}{
    max-width: 576px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media ${device.tablet}{
    max-width: 768px;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    flex: 1;
  }

  @media ${device.laptop} {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;

const DivBoxLeft = styled.div`
    /* background: brown; */
    /* flex: 1; */
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContainerBoxLeft = styled.div`
    justify-content: center;
    flex-direction: column;
    text-align: center;
    /* display: flex; */
`;

const DivTitleOne = styled.div`
   width: 245px;
   text-align: center;
   display: flex;
   justify-content: center;
`;

const SpanTitleOne = styled.span`
    text-align: center;
    font: italic normal bold 65px Helvetica Neue;
    color: #707070;
`;

const DivButtonFor = styled.button`
    width: 114px;
    height: 39px;   
    background: #B5C401;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
/* 
    text-align: center;
    justify-content: center;
    font-family: Helvetica Neue;
    font-size: 22px;
    font-weight: italic bold;
    color: #FFFFFF; */
    margin: 30px auto 10px auto;
`;

const SpanButtonFor = styled.span`
    text-align: center;
    justify-content: center;
    font: italic normal bold 22px Helvetica Neue;
    color: #FFFFFF;
`;

const SpanLotery = styled.span`
    text-align: center;
    font: italic normal bold 83px Helvetica Neue;
    color: #707070;
    text-transform: uppercase;
`;


const DivBoxRight = styled.div`
    /* background: green; */
    /* flex: 1; */
    width: 100%;
`;

const ContainerBoxRight = styled.div`
    justify-content: center;
    flex-direction: column;
    text-align: center;
    /* display: flex; */
`;

const SpanTitleAuthentication = styled.span`
    text-align: center;
    font: italic normal bold 35px Helvetica Neue;
    color: #707070;
`;

const DivCardLogin = styled.div`
    justify-content: center;
    display: grid;
    margin-top: 25px;
`;

const DivInputEmail = styled.div`
     width: 350px; 
     height: 80px; 
     background: #FFFFFF;
     border-top-left-radius: 10px; 
     border-top-right-radius: 10px; 
     border: 1px solid #EBEBEB;
     display: flex;
     justify-content: center;
     align-items: center;
`;

const DivInputPassword = styled.div`
     width: 350px; 
     height: 80px; 
     background: #FFFFFF;
     border-left: 1px solid #EBEBEB;
     border-right: 1px solid #EBEBEB;
     display: flex;
     justify-content: center;
     align-items: center;
`;

const InputLogin = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    margin: auto 20px auto 20px;
    font: italic normal bold 18px Helvetica Neue;
    color: #9D9D9D;
`;

const DivButtonLogin = styled.div`
   width: 350px; 
   background: #fff; 
   border: 1px solid #EBEBEB; 
   border-bottom-left-radius: 10px; 
   border-bottom-right-radius: 10px;
   justify-content: center; 
   display: grid;
`;

const DivForgot = styled.div`
   width: 350px;
   text-align: right;
   margin-top: 20px;

   /* cursor: pointer;
    border: none; */
`;

const SpanForgot = styled.span`
    text-align: right;
    font: italic normal normal 17px Helvetica Neue;
    color: #C1C1C1;
    margin-right: 20px;
`;

const ButtonLogin = styled.button`
    /* width: 114px; */
    /* height: 39px;    */
    background: #FFFFFF;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;

    margin: 40px auto 40px auto;
`;

const SpanLogin = styled.span`
    text-align: center;
    font: italic normal bold 35px Helvetica Neue;
    color: #B5C401;
`;

const ButtonForgot = styled.button`
    background: #FFF;
    cursor: pointer;
    border: none;
    margin-right: 10px;
    /* margin: 30px auto 30px auto;  */
`;

const ButtonSigUp = styled.button`
    background: #F7F7F7;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;

    margin: 30px auto 30px auto; 
`;

const SpanSigUp = styled.span`
    text-align: center;
    font: italic normal bold 35px/70px Helvetica Neue;
    color: #707070;
`;

const Footer = styled.div`
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-top: 1px solid #EBEBEB;
`;

export {
    ContainerFluid,
    BoxGeneral,
    DivBoxLeft,
    DivBoxRight,
    ContainerBoxLeft,
    DivTitleOne,
    SpanTitleOne,
    DivButtonFor,
    SpanButtonFor,
    SpanLotery,
    ContainerBoxRight,
    SpanTitleAuthentication,
    DivCardLogin,
    DivInputEmail,
    DivInputPassword,
    InputLogin,
    DivButtonLogin,
    DivForgot,
    SpanForgot,
    ButtonLogin,
    SpanLogin,
    SpanSigUp,
    ButtonSigUp,
    ButtonForgot,
    Footer,
}