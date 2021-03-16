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
   color: #FFF
`;

export {
    ButtonChoose,
    Ball,
    SpanBall,
}