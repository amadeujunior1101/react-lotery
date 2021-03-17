import React, { useEffect, useState, AriaAttributes, DOMAttributes } from "react";
import "./bet.style.css";
import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"
import BallBet from "../../components/Ball"

// import { Ball, SpanBall } from "./bet.style"
interface Item {
    type: string;
    color: string;
    description: string;
    ["max-number"]: number;
    range: number;
    price: number;
}

interface Cart {
    type: string,
    price: string
    bets: Array<String>
}

function Bet() {
    const [dataJSON, setDataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(1)
    const [game, setGames] = useState<Item>()
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])
    const [cart, setCart] = useState<Cart[]>([])
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([])

    // function loadDataJson() {
    //     return console.log(dataJSON[0])
    // }

    function selectedNumber(id: number) {

        let result = selectedBalls.filter(function (item, index, object) {
            return item !== id
        });

        if (result) setSelectedBalls(result)

        if (selectedBalls.length > Number(game?.["max-number"]) - 1) return;

        setSelectedBalls([...selectedBalls, id])
    }

    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = dataJSON[0].filter(el => {
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

    function completeGame() {
        while (selectedBalls.length < Number(game?.["max-number"])) {
            let number = Math.floor(Math.random() * Number(game?.range) + 1);
            const found = selectedBalls.some((element) => element == Number(number));
            if (!found) {
                let newNumber = "";
                number < 10
                    ? (newNumber = `${"0" + String(number)}`)
                    : (newNumber = String(number));

                selectedNumber(number)
                selectedBalls.push(Number(newNumber));
            }
        }
    }

    function cleanGame() {
        setSelectedBalls([])
    }

    function addToCart() {
        if (selectedBalls.length < Number(game?.["max-number"])) return;

        setCartTemporary([])
        setSelectedBalls([])

        selectedBalls.map(item => {
            let newNumber: string = "";
            item < 10
                ? (newNumber = `${"0" + String(item)}`)
                : (newNumber = String(item));
            cartTemporary.push(newNumber)
        })

        cart?.push({
            type: String(game?.type),
            price: String(game?.price),
            bets: cartTemporary
        });
        console.log("Itens no carinho:", cart);
    }

    useEffect(() => {
        // loadDataJson()
        let results = dataJSON[0].filter(el => {
            return el.type
        })
        setGames(results[0])
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
                                <span className="span-title-one"><span className="patch"> new bet</span> for {game?.type}</span>
                                <span className="span-title-two">Choose a game</span>
                            </div>
                            <div className="buttons-choose">
                                {
                                    dataJSON[0].map((item, index, object) => {
                                        index += 1;
                                        return (
                                            <ButtonChooseBet
                                                key={item.type}
                                                item={item}
                                                id={index.toString()}
                                                func={(e: number) => changeState(e, item.type)}
                                                active={activeId}
                                            />
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="box-2">
                            <div className="text-information">
                                <span>Fill your bet</span>
                                <p className="description">
                                    {game?.description}
                                </p>
                            </div>
                        </div>
                        <div className="box-3">
                            <div className="container-balls">
                                {/* Ball's */}
                                {loadBalls()}
                            </div>
                            <div className="buttons-options">
                                <div>
                                    <button className="button-complete-game" onClick={() => { completeGame() }}>Complete game</button>
                                    <button className="button-clear-game" onClick={() => { cleanGame() }}>Clear game</button>
                                </div>
                                <div>
                                    <button className="button-add-cart" onClick={() => { addToCart() }}><i className="fas fa-cart-plus"> </i>Add to cart</button>
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
