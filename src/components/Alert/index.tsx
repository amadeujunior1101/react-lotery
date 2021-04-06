import { DivAlert } from "./style";

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

export default Alert;