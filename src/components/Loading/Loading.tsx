import ReactLoading from 'react-loading';
import { Container, Background, WrapperContainer, DivMessage, SpanMessage } from "./style"

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

interface LoadingTypes {
    type: LoadingType;
    color: string;
}

const Loading = (props: LoadingTypes) => {
    return <ReactLoading type={props.type} color={props.color} />
}

const LoadingComponent = () => {
    return (
        <Container>
            <WrapperContainer>
                <DivMessage>
                    <Loading type={"spin"} color={"#fff"} />
                    <SpanMessage>Aguarde...</SpanMessage>
                </DivMessage>
            </WrapperContainer>
            <Background />
        </Container>
    )
}

export default LoadingComponent;