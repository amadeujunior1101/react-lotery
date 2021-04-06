import styled from "styled-components"

interface TypeColorProps {
    color: string;
};

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

export { DivListGames, DivGameIcon, DivDivisorElement, DivGameDescription, SpanNumberList, SpanType }