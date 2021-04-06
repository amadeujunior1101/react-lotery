import styled from "styled-components"

interface DivBallProps {
    bg: string;
};

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

export { Ball, SpanBall }