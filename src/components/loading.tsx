import ReactLoading from 'react-loading';

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
        <div>
            <div style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loading type={"spin"} color={"#fff"} />
            </div>
            <div style={{ background: "#000", opacity: "0.9", position: "absolute", width: "100vw", height: "100vh", zIndex: 2 }}>

            </div>
        </div>
    )
}

export default LoadingComponent;