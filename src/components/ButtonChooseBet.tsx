import React, { useState } from "react"
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
  // stateCurrent: arrayButtons;
  // changeState(action: number): ()=>{}
  func: Function
  active: number;
}

function ButtonChooseBet(props: Props) {

  // console.log("props id", props.func)
  //  let elementButtonChoose= document.querySelector(".button-choose")
  //  let elementButton:  Props = document.querySelector(".choose-button-one")

  //  elementButton?.setAttribute("active", "true");
  //   elementButtonChoose.appendChild(elementButton);
  // let myAttr = {'data-attr': 'value'}

  return (
    <ButtonChoose
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

{/* <ButtonChoose button="red" id={props.id}>{props.item.type}</ButtonChoose> */ }
{/* <ButtonChoose style={{ background: `${props.item.color}`, color: "#FFF", border: `1px solid ${props.item.color}` }} className="choose-button-one" id="lotofacil">{props.item.type}</ButtonChoose> */ }
{/* <ButtonChoose style={{ background: `${props.item.color}`, color: "#FFF", border: `1px solid ${props.item.color}` }} id={props.id}>{props.item.type}</ButtonChoose> */ }

export default ButtonChooseBet;