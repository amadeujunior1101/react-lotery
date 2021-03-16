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
    const [activeId, setActiveId] = useState(1)
    const [balls, setBalls] = useState<Item>()
    let ids = 0;

    const [data, setData] = useState([dataJson.types])
    function loadDataJson() {
        return console.log(data[0])
    }

    // let $elementButtonChoose = document.querySelector(".buttons-choose")
    let $elementButton = document.querySelector("button")

    $elementButton?.setAttribute("active", "true");

    interface Item {
        type: string;
        range: number;
    }

    function changeState(id: number, item: string) {
        setActiveId(id)

        let results = data[0].filter(el => {
            return el.type === item
        })

        setBalls(results[0])

        console.log("Range: ", results)
    }

    let text = 10;

    function loadBalls() {
        // if (!balls?.range) {
        //     console.error('No data here!');
        //     return null
        // 

        return Array.apply(0, Array(balls?.range)).map(function (x, i) {
            i + 1 < 10
                ? (i = (`${"0" + (i + 1)}`))
                : (i = i + 1);
            return (
                <div className="ball" key={i} >
                    <span style={{ color: "#FFF" }}>
                        {String(i)}
                    </span>
                </div>
            )
        })

        // for (let index = 0; index < 25; index++) {
        //     // console.error('Numero de bolas!', balls.range);
        //     console.log("teste")
        //     return (
        //         <div className="ball" >
        //             <span style={{ color: "#FFF" }}>
        //                 {1}
        //             </span>
        //         </div>
        //     )
        // }

        // return [1, 2, 3, 4, 5, 6].map(item => {
        //     return (
        //         <div className="ball" >
        //             <span style={{ color: "#FFF" }}>
        //                 {item}
        //             </span>
        //         </div>
        //     )
        // })
    }



    useEffect(() => {
        loadDataJson()
        let results = data[0].filter(el => {
            return el.type
        })
        setBalls(results[0])
        changeState(1, results[0].type)
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
                                            <ButtonChooseBet
                                                key={item.type}
                                                item={item}
                                                id={ids.toString()}
                                                func={(e: number) => changeState(e, item.type)}
                                                active={activeId}

                                            />
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

                                {loadBalls()}


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
