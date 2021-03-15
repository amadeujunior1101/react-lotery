import React, { useEffect, useState, AriaAttributes, DOMAttributes } from "react";
import "./bet.style.css";
import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"

// import {  } from "./bet.style"

interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    active?: string;
}

function Bet() {
    let ids = 0;

    const [data, setData] = useState([dataJson.types])
    function loadDataJson() {
        console.log(data[0])
    }

    // let $elementButtonChoose = document.querySelector(".buttons-choose")
    let $elementButton = document.querySelector("button")

    $elementButton?.setAttribute("active", "true");


    useEffect(() => {
        loadDataJson()
    }, [])
    return (
        <>
            <div className="wrapper-topbar">
                <div className="top-bar">
                    <div className="block-left">
                        <div>
                            <span className="logo">TGL</span>
                            <div className="bar-logo"></div>
                        </div>
                        <span className="home">Home</span>
                    </div>
                    <div className="block-right">
                        <span className="account">Account</span>
                        <span className="log-out">Log out <i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="container">
                <main>
                    <div className="content-left">
                        <div className="box-1">
                            <div className="block-titles-top">
                                <span className="span-title-one"><span className="patch"> new bet</span> for mega-sena</span>
                                <span className="span-title-two">Choose a game</span>
                            </div>
                            <div className="buttons-choose">
                                {
                                    data[0].map(item => {
                                        ids = ids + 1;
                                        return (
                                            <ButtonChooseBet key={item.type} item={item} id={ids.toString()} />
                                        )
                                    })
                                }
                                {/* <button className="choose-button-one" active="true" id="lotofacil">Lotofácil</button>
                                <button className="choose-button-two" active="false" id="mega-sena">Mega-Sena</button>
                                <button className="choose-button-three" active="false" id="lotomania">Lotomania</button> */}
                            </div>
                        </div>
                        <div className="box-2">
                            <p className="text-information">
                                <span>Fill your bet</span> <br />
                                {/* <p className="description">
                                    Mark as many numbers as you
                                    want up to a maximum of 50. Win by hitting
                                    15, 16, 17, 18, 19, 20 or none of the 20 numbers
                                    drawn.
                                </p> */}
                            </p>
                        </div>
                        <div className="box-3">
                            <div className="container-balls">
                                {/* Ball's */}

                                {/* {data[0].map(item => {
                                    <div className="ball">
                                        <span style={{ border: "2px solid #adc0c4" }}>
                                            {item.range}
                                        </span>
                                    </div>
                                })} */}


                            </div>
                            <div className="buttons-options">
                                <div>
                                    <button className="button-complete-game">Complete game</button>
                                    <button className="button-clear-game">Clear game</button>
                                </div>
                                <div>
                                    <button className="button-add-cart"><i className="fas fa-cart-plus"> </i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-rigth">
                        <div className="card-base">
                            <div className="title-card">
                                <span>cart</span>
                            </div>
                            <div className="div-information-cart-empty">
                                <span className="information-cart-empty">Sem itens no cart</span>
                            </div>


                        </div>
                        <div className="cart-total">
                            <span>cart <strong className="value-total">TOTAL: R$ <span className="span-value-total">0</span></strong></span>
                        </div>
                        <div className="save-button">
                            <span>Save <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </main>
            </div>

            <div className="footer">
                <span className="text-footer">Copyright 2021 Luby Software</span>
            </div>
        </>
    )
}

export default Bet;
