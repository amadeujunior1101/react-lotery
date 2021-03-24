import { DivListGames, DivGameIcon, DivDivisorElement, DivGameDescription, SpanNumberList, SpanType } from "../pages/Game/game.style"

interface Props {
    removeItemCart: Function;
    index: number;
    numbers: Array<String>;
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
                <SpanNumberList>{(props.numbers).join(", ")}</SpanNumberList>
                <SpanType color={props.color}>{props.type}</SpanType>
            </DivGameDescription>
        </DivListGames>
    )
}
export default CartItem;