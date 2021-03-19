import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArrayObjects } from "../../store/Carts/Carts.types"

import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"

import {
    WrapperTopbar,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivBarLogo,
    BlockRight,
    SpanAccount,
    SpanLogOut,
    DivFooter,
    SpanTextFooter,
    Container,
    Main,
    DivBlockLeft,
    DivBlockRight,
    SpanTitleRecentGame,
    SpanTitleFilters,
    DivButtonGames,
    // ButtonChoose,
    SpanNewBet,
    DivWrapperScrollList,
    ScrollList,
    DivListGames,
    DivDivisorElement,
    DivGameDescription,
    SpanNumberList,
    SpanType,
    SpanInfos,
    DivWrapperRecentGame,
} from "./recent-games.style";

interface Item {
    type: string;
    color: string;
    description: string;
    ["max-number"]: number;
    range: number;
    price: number;
}

export interface ItemCart {
    type: string;
    price: number;
    bets: Array<String>;
    color: string;
}

function RecentGames() {
    const result = useSelector((state: ArrayObjects) => state.cart);
    const [gameResults, setGamesResults] = useState(result)

    // useEffect(() => {
    // }, [])
    // setGamesResults(result)
    console.log("Results:", result)

    const [dataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(1)
    const [game, setGames] = useState<Item>()
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])


    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = dataJSON[0].filter(el => {
            return el.type === item
        })
        setGamesResults(
            result.filter(el => {
                return el.type === results[0].type
            })
        )

        setGames(results[0]);
        setSelectedBalls([])
    }

    useEffect(() => {
        let results = dataJSON[0].filter(el => {
            return el.type
        })
        setGames(results[0])
        changeState(1, results[0].type)

        setGamesResults(
            result.filter(el => {
                return el.type === results[0].type
            })
        )

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
                    </BlockLeft>
                    <BlockRight>
                        <SpanAccount>Account</SpanAccount>
                        <SpanLogOut>Sair </SpanLogOut>
                        <i className="fas fa-arrow-right"></i>
                    </BlockRight>
                </TopBar>
            </WrapperTopbar>

            <Container>
                <Main>
                    <DivBlockLeft>
                        <DivWrapperRecentGame>
                            <div style={{ marginRight: 30 }}>
                                <SpanTitleRecentGame>Recent Games</SpanTitleRecentGame>
                            </div>
                            <div style={{ marginRight: 10 }}>
                                <SpanTitleFilters>Filters</SpanTitleFilters>
                            </div>
                            <DivButtonGames>
                                {/* <ButtonChoose>
                                    Lotofácil
                                </ButtonChoose> */}
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
                            </DivButtonGames>
                        </DivWrapperRecentGame>
                        {/* <div style={{display: "grid" }}> */}

                        <DivWrapperScrollList>
                            {/* <ScrollList> */}
                            {
                                gameResults.length > 0 ?
                                    gameResults.map((item, index: number) => {
                                        return (
                                            <DivListGames key={index}>
                                                <DivDivisorElement color={item.color}>
                                                    {/* <DivDivisorElement> */}
                                                </DivDivisorElement>
                                                <DivGameDescription>
                                                    <SpanNumberList>{(item.bets).join(", ")}</SpanNumberList>
                                                    {/* <SpanNumberList>1, 2, 3, 4</SpanNumberList> */}
                                                    <SpanInfos>30/11/2020 - (R$ {item.price})</SpanInfos>
                                                    <SpanType color={item.color}>{item.type}</SpanType>
                                                    {/* <SpanType>Lotofácil</SpanType> */}
                                                </DivGameDescription>
                                            </DivListGames>
                                        )
                                    }) :
                                    <>
                                        <h3>Sem games marcados!</h3>
                                    </>
                            }

                        </DivWrapperScrollList>

                        {/* </div> */}
                    </DivBlockLeft>
                    <DivBlockRight>
                        <SpanNewBet>New Bet <i className="fas fa-arrow-right"></i></SpanNewBet>
                    </DivBlockRight>
                </Main>
            </Container>

            <DivFooter>
                <SpanTextFooter>Copyright 2021 Luby Software</SpanTextFooter>
            </DivFooter>
        </>
    )
}

export default RecentGames;