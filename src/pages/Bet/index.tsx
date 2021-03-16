import React, { useEffect, useState, AriaAttributes, DOMAttributes } from "react";
import "./bet.style.css";
import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"
import BallBet from "../../components/Ball"
import LoadBalls from "../../components/LoadBalls"

// import { Ball, SpanBall } from "./bet.style"
interface Item {
    type: string;
    color: string;
    range: number;
}

function Bet() {
    const [activeId, setActiveId] = useState(1)
    const [game, setGames] = useState<Item>()
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])
    const [color, setColor] = useState<String>("#adc0c4")

    let ids = 0;

    const [data, setData] = useState([dataJson.types])
    function loadDataJson() {
        return console.log(data[0])
    }

    function selectedNumber(id: number) {

        setSelectedBalls([...selectedBalls, id])

    }

    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = data[0].filter(el => {
            return el.type === item
        })
        setGames(results[0]);
        setSelectedBalls([])
    }

    function verifyColor(number: number) {
        return selectedBalls.filter(el => {
            return el === number + 1
        })
    }

    function loadBalls() {
        return Array.apply(0, Array(game?.range)).map(function (x, i) {
            console.log(verifyColor(i))
            return (
                <BallBet
                    key={i}
                    numberBall={i}
                    color={verifyColor(i).length !== 0 ? String(game?.color) : "#adc0c4"}
                    selectedNumber={(e: number) => { selectedNumber(e) }}
                    arrBalls={selectedBalls}
                />
            )
        })

    }

    useEffect(() => {
        loadDataJson()
        let results = data[0].filter(el => {
            return el.type
        })
        setGames(results[0])
        changeState(1, results[0].type)

        // console.log("executou no useEffects")
    }, [])

    // useEffect(() => {
    //     loadBalls()
    // }, [activeId])

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
                                {/* <LoadBalls range={Number(game?.range)} color={String(game?.color)}/> */}

                            </div>
                            <div className="buttons-options">
                                <div>
                                    <button className="button-complete-game">Complete game</button>
                                    <button className="button-clear-game">Clear game</button>
                                </div>
                                <div>
                                    <button className="button-add-cart" onClick={() => console.log("Items no arrayTemp", selectedBalls)}><i className="fas fa-cart-plus"> </i>Add to cart</button>
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
