import { useState } from "react";
import { Ball, SpanBall } from "../pages/Bet/bet.style";

interface PropsBall {
    numberBall: number;
    color: string;
    selectedNumber: Function
    arrBalls: Array<number>
    // func: Function
}

function Index(props: PropsBall) {
    
    return (
        <Ball bg={String(props.color)} onClick={() => { props.selectedNumber(props.numberBall + 1) }}>
            <SpanBall>
                {props.numberBall + 1 < 10 ? (`${"0" + (props.numberBall + 1)}`) : props.numberBall + 1}
            </SpanBall>
        </Ball>
    )

}

export default Index;