import { ButtonChoose } from "../pages/Game/game.style"

interface Item {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  "min-cart-value": number;
}

interface Props {
  item: Item;
  id: string;
  func: Function
  active: number;
}

function ButtonChooseBet(props: Props) {
  return (
    <ButtonChoose
    // style={{marginBottom: 10}}
      background={Number(props.id) === props.active ? `${props.item.color}` : "#FFF"}
      color={Number(props.id) !== props.active ? `${props.item.color}` : "#FFF"}
      border={`2px solid ${props.item.color}`}
      id={props.id}
      onClick={() => { props.func(Number(props.id)) }}
    >
      {props.item.type}
    </ButtonChoose>
  );
};

export default ButtonChooseBet;