import React from "react"
// import "../pages/Bet/bet.style.css";

import { ButtonChoose } from "../pages/Bet/bet.style"

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
  // active: string;
}

function ButtonChooseBet(props: Props) {
  console.log("props id", props.id)
  //  let elementButtonChoose= document.querySelector(".button-choose")
  //  let elementButton:  Props = document.querySelector(".choose-button-one")

  //  elementButton?.setAttribute("active", "true");
  //   elementButtonChoose.appendChild(elementButton);
  // let myAttr = {'data-attr': 'value'}

  return (
    <ButtonChoose
      background={props.id === "1" ? `${props.item.color}` : "#FFF"}
      color={props.id !== "1" ? `${props.item.color}` : "#FFF"}
      border={`2px solid ${props.item.color}`}
      id={props.id}
    >
      {props.item.type}
    </ButtonChoose>
  );
};

{/* <ButtonChoose button="red" id={props.id}>{props.item.type}</ButtonChoose> */ }
{/* <ButtonChoose style={{ background: `${props.item.color}`, color: "#FFF", border: `1px solid ${props.item.color}` }} className="choose-button-one" id="lotofacil">{props.item.type}</ButtonChoose> */ }
{/* <ButtonChoose style={{ background: `${props.item.color}`, color: "#FFF", border: `1px solid ${props.item.color}` }} id={props.id}>{props.item.type}</ButtonChoose> */ }

export default ButtonChooseBet;