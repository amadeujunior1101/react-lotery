import styled from "styled-components";
import { device } from "../../pages/mideaQuerysDefault";

const WrapperTopbar = styled.div`
    width: 100%;
    height: 70px;
    justify-content: center;
    border-bottom: 2px solid #ebebeb;
    display: flex;
    padding: 0;
    background-color: #FFF;
`;

const TopBar = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
    width: 1200px;

    @media ${device.mobileS}{
        padding: 0 10px 0 10px;
        width: 320px;
     }
    @media ${device.mobileM}{
        padding: 0 10px 0 10px;
        width: 375px;
     }
    @media ${device.mobileL}{
        padding: 0 10px 0 10px;
        width: 576px;
     }
    @media ${device.tablet}{
        padding: 0 10px 0 10px;
        width: 768px;
     }
    @media ${device.laptop}{
        padding: 0;
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
cursor: pointer;
`;
const BlockRight = styled.div`
 justify-content: center;
align-items: center;
display: flex;
`;

const SpanAccount = styled.span`
 text-align: center;
font: italic normal bold 20px Helvetica Neue;
display: none;

a{
color: #707070;
    text-decoration: none;
}

@media ${device.tablet}{
        display: block;
     }

`;

const SpanLogOut = styled.span`
 text-align: center;
    font: italic normal bold 20px Helvetica Neue;
    margin-left: 80px;
    display: none;
    cursor: pointer;

    span{
    color: #707070;
    text-decoration: none;
    }
    i{
        color: #707070;
    }

    @media ${device.tablet}{
        display: block;
     }
`;

const DivMenu = styled.div`

    i{
        color: #707070;
    }
 
    @media ${device.mobileL}{
        display: block;
     }
     @media ${device.tablet}{
        display: none;
     }
`;

export {
    WrapperTopbar,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivMenu,
    DivBarLogo,
    SpanHome,
    BlockRight,
    SpanAccount,
    SpanLogOut,
}

