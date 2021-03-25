import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import api from "../../services/api";
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
} from "./home.style";

function Home() {
    const result = useSelector((state: ArrayObjects) => state.cart);
    // const [gameResults, setGamesResults] = useState(result);
    const [gameResults, setGamesResults] = useState(result);

    const [dataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(0)

    function changeState(id: number, item: string) {
        let results = dataJSON[0].filter(el => {
            return el.type === item
        })

        if (activeId === id) {
            setActiveId(0)
            setGamesResults(
                result.filter(el => {
                    return el
                })
            )
        } else {
            setActiveId(id)
            setGamesResults(
                result.filter(el => {
                    return el.type === results[0].type
                })
            )
        }
    }

    async function findBets() {
        // const data = await api.get("/show-bet?user_id=1");

        // console.log("data:", data.data.data)
    }

    useEffect(() => {
        // let results = dataJSON[0].filter(el => {
        //     return el.type
        // })
        // changeState(1, results[0].type)

        setGamesResults(
            result.filter(el => {
                return el
            })
        )

        // findBets()
    }, [])

    return (
        <>
            <WrapperTopbar>
                <TopBar>
                    <BlockLeft>
                        <div>
                            <SpanLogo>
                                <Link to="/" style={{ color: "#707070", textDecoration: "none" }}>TGL</Link>
                            </SpanLogo>
                            <DivBarLogo></DivBarLogo>
                        </div>
                    </BlockLeft>
                    <BlockRight>
                        <SpanAccount>
                            <Link to="/account" style={{ color: "#707070", textDecoration: "none" }}>Account</Link>
                        </SpanAccount>
                        <SpanLogOut>
                            <Link to="/login" style={{ color: "#707070", textDecoration: "none" }}>Sair </Link>
                        </SpanLogOut>
                        <i className="fas fa-arrow-right" style={{ color: "#707070" }}></i>
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
                            <ScrollList>
                                {
                                    gameResults.length > 0 ?
                                        gameResults.map((item, index: number) => {
                                            return (
                                                <DivListGames key={index}>
                                                    <DivDivisorElement color={item.color}>
                                                    </DivDivisorElement>
                                                    <DivGameDescription>
                                                        <SpanNumberList>{(item.numbers).join(", ")}</SpanNumberList>
                                                        <SpanInfos>{item.date} - (R$ {item.price})</SpanInfos>
                                                        <SpanType color={item.color}>{item.type}</SpanType>
                                                    </DivGameDescription>
                                                </DivListGames>
                                            )
                                        }) :
                                        <>
                                            <h3>Não há apostas realizadas!</h3>
                                        </>
                                }
                            </ScrollList>
                        </DivWrapperScrollList>

                        {/* </div> */}
                    </DivBlockLeft>
                    <DivBlockRight>
                        <SpanNewBet>
                            <Link to="/game" style={{ color: "#B5C401", textDecoration: "none" }}>New Bet </Link>
                            <i className="fas fa-arrow-right"></i></SpanNewBet>
                    </DivBlockRight>
                </Main>
            </Container>

            <DivFooter>
                <SpanTextFooter>Copyright 2021 Luby Software</SpanTextFooter>
            </DivFooter>
        </>
    )
}

export default Home;