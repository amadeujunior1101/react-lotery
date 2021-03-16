import React, { useState } from "react";
import { Ball, SpanBall } from "../pages/Bet/bet.style";
import BallBet from "./Ball";

interface PropsLoadBall {
    range: number;
    color: string;
}

function App2(props: PropsLoadBall) {
    const [color, setColor] = useState("blue")

    function selectedBall() {
        // arrayTemp = [];
        console.log("Clicou ")
        setColor("red")
    }


    return (
        // <BallBet items={1} color={String(props.color)} func={()=>{selectedBall()}} />
        <div onClick={() => { selectedBall() }}>
            <span>{props.color}</span>
        </div>
    )
}
export default App2;