import styled from "styled-components";
import { device } from "../mideaQuerysDefault"

const Wrapper = styled.div`
  background: #F7F7F7;
  height: 100vh;
     
`;
const ContainerFluid = styled.div`
  background: #F7F7F7;
  width: 100%;
 
  display: flex;
  align-items: center;
  justify-content: center;

   @media ${device.tablet && device.mobileL && device.mobileM && device.mobileS}{
        height: 100%;
     }

     @media ${device.laptop}{
        height: calc(100% - var(--footer-login));
     }
     
`;

const BoxGeneral = styled.div`
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

const DivBoxRight = styled.div`
    width: 100%;
`;

const ContainerBoxRight = styled.div`
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const SpanTitleAuthentication = styled.span`
    text-align: center;
    font: italic normal bold 35px Helvetica Neue;
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
    Wrapper,
    ContainerFluid,
    BoxGeneral,
    DivBoxRight,
    ContainerBoxRight,
    SpanTitleAuthentication,
    Footer,
}