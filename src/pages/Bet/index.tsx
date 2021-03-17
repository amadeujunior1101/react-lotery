import React, { useEffect, useState, AriaAttributes, DOMAttributes } from "react";
import "./bet.style.css";
import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"
import BallBet from "../../components/Ball"

import {
    DivButtonsChoose,
    ParagraphDescription,
    WrapperTopbar,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivBarLogo,
    SpanHome,
    BlockRight,
    SpanAccount, 
    SpanLogOut,
    Container,
    Main,
    ContentLeft,
    DivBox1,
    DivBox2,
    DivBox3,
    SpanTitleGame,
    ContainerBalls,
    DivButtonsOptions,
    ButtonOption,
    ButtonAddToCard,
    BlockTitlesTop,
    SpanTitleOne,
    SpanTitleTwo,
    SpanPatch,
} from "./bet.style"

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
    price: number
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
            price: Number(game?.price),
            bets: cartTemporary
        });
        console.log("Itens no carinho:", cart);
    }

    function removeItemCart(indexRemove: number) {
        let newCart = cart.filter((item, index, object) => {
            return index !== indexRemove
        })
        setCart(newCart)
    }

    function cartValue() {
        let total;
        if (cart.length === 0) {
            total = "0,00"

        } else {
            total = cart.reduce((accumulator: any, currentValue) => {
                return Number(accumulator) + currentValue.price;
            }, [0]);

            return total
                .toFixed(2)
                .replace(".", ",")
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        }

        return total
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
            <WrapperTopbar>
                <TopBar>
                    <BlockLeft>
                        <div>
                            <SpanLogo>TGL</SpanLogo>
                            <DivBarLogo></DivBarLogo>
                        </div>
                        <SpanHome>Home</SpanHome>
                    </BlockLeft>
                    <BlockRight>
                        <SpanAccount>Account</SpanAccount>
                        <SpanLogOut>Log out <i className="fas fa-arrow-right"></i></SpanLogOut>
                    </BlockRight>
                </TopBar>
            </WrapperTopbar>
            <Container>
                <Main>
                    <ContentLeft>
                        <DivBox1>
                            <BlockTitlesTop>
                                <SpanTitleOne><SpanPatch> new bet</SpanPatch> for {game?.type}</SpanTitleOne>
                                <SpanTitleTwo>Choose a game</SpanTitleTwo>
                            </BlockTitlesTop>
                            <DivButtonsChoose>
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

                            </DivButtonsChoose>
                        </DivBox1>
                        <DivBox2>
                            <div className="text-information">
                                <SpanTitleGame>Fill your bet</SpanTitleGame>
                                <ParagraphDescription>
                                    {game?.description}
                                </ParagraphDescription>
                            </div>
                        </DivBox2>
                        <DivBox3>
                            <ContainerBalls>
                                {/* Ball's */}
                                {loadBalls()}
                            </ContainerBalls>
                            <DivButtonsOptions>
                                <div>
                                    <ButtonOption onClick={() => { completeGame() }}>Complete game</ButtonOption>
                                    <ButtonOption onClick={() => { cleanGame() }}>Clear game</ButtonOption>
                                </div>
                                <div>
                                    <ButtonAddToCard onClick={() => { addToCart() }}><i className="fas fa-cart-plus"> </i>Add to cart</ButtonAddToCard>
                                </div>
                            </DivButtonsOptions>
                        </DivBox3>
                    </ContentLeft>
                    <div className="content-rigth">
                        <div className="card-base">
                            <div className="title-card">
                                <span>cart</span>
                            </div>
                            <div className="div-information-cart-empty">
                                {
                                    cart.length === 0 ?
                                        <span className="information-cart-empty">Sem itens no cart</span>
                                        :
                                        <div className="scroll-list" style={{ overflowY: "scroll", maxHeight: 300 }}>
                                            {
                                                cart.map((item, index, object) => {
                                                    return (
                                                        <div className="list-games" key={index}>
                                                            <div className="game-icon">
                                                                <i className="fas fa-trash-alt" style={{ cursor: "pointer" }} onClick={() => removeItemCart(index)}></i>
                                                            </div>
                                                            <div className="divisor-element" style={{ background: "#7F3992" }}>
                                                            </div>
                                                            <div className="game-description">
                                                                <span className="span-number-list">{(item.bets).join(", ")}</span>
                                                                <span className="span-type" style={{ color: "#7F3992" }}>{item.type}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                }

                            </div>


                        </div>
                        <div className="cart-total">
                            <span>cart <strong className="value-total">TOTAL: R$ <span className="span-value-total">{cartValue()}</span></strong></span>
                        </div>
                        <div className="save-button">
                            <span>Save <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </Main>
            </Container>

            <div className="footer">
                <span className="text-footer">Copyright 2021 Luby Software</span>
            </div>
        </>
    )
}

export default Bet;
