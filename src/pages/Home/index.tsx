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
    // const [gamesResults, setGamesResults] = useState(result);

    const [games, setGames] = useState<Game[]>([]);
    const [loadGames, setLoadGames] = useState(true)
    const [gamesResults, setGamesResults] = useState<GameResults[]>([]);


    const [dataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(0)

    function changeState(id: number, type: string) {
        let results = gamesResults.filter(el => {
            return el.type === type
        })

        // return console.log("Jogos", results)

        if (activeId === id) {
            setActiveId(0)
            setGamesResults(
                gamesResults.filter(el => {
                    return el
                })
            )
        } else {
            setActiveId(id)
            setGamesResults(
                gamesResults.filter(el => {
                    return el.type == results[0].type
                })
            )
        }
    }

    async function showBets() {
        const bets = await api.get("/show-bet", {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxNzEwNzk5OCwiZXhwIjoxNjE3MTk0Mzk4fQ.XjjaqBcAbYU2Wo73Y9SXgxij8WzzJPth131VzzZYI2Y`
            }
        });

        console.log("data:", bets.data.data)
        setGamesResults(bets.data.data)
    }
    async function listGames() {
        const listGames = await api.get("/list-games?page=1&limit=3", {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxNzEwNzk5OCwiZXhwIjoxNjE3MTk0Mzk4fQ.XjjaqBcAbYU2Wo73Y9SXgxij8WzzJPth131VzzZYI2Y`
            }
        });

        setGames(listGames.data.data.data)
        setLoadGames(false)
    }

    useEffect(() => {
        // let results = dataJSON[0].filter(el => {
        //     return el.type
        // })
        // changeState(1, results[0].type)

        setGamesResults(
            gamesResults.filter(el => {
                return el
            })
        )

        showBets()
        listGames()
    }, [])
    interface Game {
        type: string;
        description: string;
        range: number;
        price: number;
        "max-number": number;
        color: string;
        "min-cart-value": number;
        id: string;
        func: Function
        active: number;
    }
    interface GameResults {
        type: string;
        color: string;
        numbers: string;
        date: string;
        price: number;
    }

    // interface Props {
    //     item: Game;
    //     id: string;
    //     func: Function
    //     active: number;
    // }

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
                                    loadGames !== true &&
                                    games.map((item, index, object) => {
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
                                    gamesResults.length > 0 ?
                                        gamesResults.map((item, index: number) => {
                                            return (
                                                <DivListGames key={index}>
                                                    <DivDivisorElement color={item.color}>
                                                    </DivDivisorElement>
                                                    <DivGameDescription>
                                                        <SpanNumberList>{[(item.numbers)].join(",").replaceAll(",", ", ")}</SpanNumberList>
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