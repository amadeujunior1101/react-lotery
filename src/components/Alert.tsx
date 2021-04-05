import styled from "styled-components";

interface AlertType {
    title: string;
    color: "#f8d7da" | "#d4edda";
}

function Alert(props: AlertType) {
    return (
        <DivAlert style={{ background: `${props.color}` }}>
            <span>{props.title}</span>
        </DivAlert>
    )
}

const DivAlert = styled.div`
 margin: 10px 0 0 0;
height: 50px;
background: #f8d7da; 
display: flex; 
justify-content: center; 
align-items: center;
color: #721c24; 
border-color: #f5c6cb; 
border: 1px solid transparent;
`;

export default Alert;