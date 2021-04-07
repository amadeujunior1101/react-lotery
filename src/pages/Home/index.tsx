import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"

import dayjs from 'dayjs';
import api from "../../services/api";

import ButtonChooseBet from "../../components/ButtonChooseBet"
import TopBarMain from "../../components/TopBar"

import {
    WrapperTopbar,
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
} from "./style";
import { Game, GameResults } from "./types";
import Footer from "../../components/Footer";

function Home() {
    const history = useHistory();

    const [openMenu, setOpenMenu] = useState(false);
    const [games, setGames] = useState<Game[]>([]);
    const [loadGames, setLoadGames] = useState(true)
    const [gamesResults, setGamesResults] = useState<GameResults[]>([]);
    const [itemsGamesResults, setItemsGamesResults] = useState<GameResults[]>([]);

    const [activeId, setActiveId] = useState(0)

    useEffect(() => {
        // getUser()
        listGames()
        showBets()
        // setGamesResults(
        //     gamesResults.filter(el => {
        //         return el
        //     })
        // )
    }, [])

    function changeState(id: number, type: string) {
        if (activeId === id) {
            setActiveId(0)
            setGamesResults(itemsGamesResults)
        } else {
            setActiveId(id)
            setGamesResults(
                itemsGamesResults.filter(el => {
                    return el.type === type
                })
            )
        }
    }

    async function listGames() {
        try {
            const listGames = await api.get("/list-games?page=1&limit=3");

            setGames(listGames.data.data.data)
            setLoadGames(false)

        } catch (error) {
            if (!error.response) {
                return history.replace("/login")
            }
            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
            })
        }
    }

    async function showBets() {
        try {
            const bets = await api.get("/show-bet");

            setGamesResults(bets.data.data)
            setItemsGamesResults(bets.data.data)

        } catch (error) {
            if (!error.response) {
                return history.replace("/login")
            }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
            })
        }
    }

    function formatDate(date: string) {
        return dayjs(date).locale('pt').format('DD-MM-YYYY')
    }

    return (
        <>
            <WrapperTopbar>
                <TopBarMain
                    openMenu={() => { setOpenMenu(!openMenu) }}
                />
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
                                                        {/* <SpanInfos>{formatDate(item.date)} - (R$ {(item.price).toFixed(2) */}
                                                        <SpanInfos>{formatDate(item.date)} - (R$ {(item.price).toFixed(2)
                                                            .replace(".", ",")
                                                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")})</SpanInfos>
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

                    </DivBlockLeft>
                    <DivBlockRight>
                        <SpanNewBet>
                            <Link to="/game" style={{ color: "#B5C401", textDecoration: "none" }}>New Bet </Link>
                            <i className="fas fa-arrow-right"></i></SpanNewBet>
                    </DivBlockRight>
                </Main>
            </Container>

            <Footer />
        </>
    )
}

export default Home;