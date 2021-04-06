import styled from "styled-components"

const Container = styled.div`
`;
const Background = styled.div`
background: #000;
opacity: 0.9;
position: absolute;
width: 100vw;
height: 100vh;
z-index: 2;
`;
const WrapperContainer = styled.div`
position: absolute; 
width: 100vw; 
height: 100vh; 
z-Index: 3; 
display: flex; 
justify-content: center; 
align-items: center;
`;

const DivMessage = styled.div`
display: flex; 
justify-content: center; 
flex-wrap: wrap; 
width: 100px;
height: 120px;
`;

const SpanMessage = styled.div`
font-size: 18px; 
color: #fff;
`;

export { Container, Background, WrapperContainer, DivMessage, SpanMessage }