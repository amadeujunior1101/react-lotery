import styled, { StyledFunction } from "styled-components";

interface ButtonProps {
    background: string;
    color: string;
    border: string;
    // active: boolean;
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

export {
    ButtonChoose,
}