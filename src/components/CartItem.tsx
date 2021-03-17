import { DivListGames, DivGameIcon, DivDivisorElement, DivGameDescription, SpanNumberList, SpanType } from "../pages/Bet/bet.style"

interface Props {
    removeItemCart: Function;
    index: number;
    bets: Array<String>;
    type: string;
    color: string;
}

function CartItem(props: Props) {
    return (
        <DivListGames >
            <DivGameIcon>
                <i className="fas fa-trash-alt" style={{ cursor: "pointer", color: "#888888" }} onClick={() => props.removeItemCart(props.index)}></i>
            </DivGameIcon>
            <DivDivisorElement color={props.color}>
            </DivDivisorElement>
            <DivGameDescription>
                <SpanNumberList>{(props.bets).join(", ")}</SpanNumberList>
                <SpanType color={props.color}>{props.type}</SpanType>
            </DivGameDescription>
        </DivListGames>
    )
}
export default CartItem;