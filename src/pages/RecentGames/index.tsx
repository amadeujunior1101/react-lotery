import { useEffect, useState } from "react";
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

function RecentGames() {
    const [dataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(1)
    const [game, setGames] = useState<Item>()
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])

    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = dataJSON[0].filter(el => {
            return el.type === item
        })
        setGames(results[0]);
        setSelectedBalls([])
    }

    useEffect(() => {
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
                            <DivListGames >
                                {/* <DivDivisorElement color={props.color}> */}
                                <DivDivisorElement>
                                </DivDivisorElement>
                                <DivGameDescription>
                                    {/* <SpanNumberList>{(props.bets).join(", ")}</SpanNumberList> */}
                                    <SpanNumberList>1, 2, 3, 4</SpanNumberList>
                                    <SpanInfos>30/11/2020 - (R$ 2,50)</SpanInfos>
                                    {/* <SpanType color={props.color}>{props.type}</SpanType> */}
                                    <SpanType>Lotofácil</SpanType>
                                </DivGameDescription>
                            </DivListGames>
                            <DivListGames >
                                {/* <DivDivisorElement color={props.color}> */}
                                <DivDivisorElement>
                                </DivDivisorElement>
                                <DivGameDescription>
                                    {/* <SpanNumberList>{(props.bets).join(", ")}</SpanNumberList> */}
                                    <SpanNumberList>1, 2, 3, 4</SpanNumberList>
                                    <SpanInfos>30/11/2020 - (R$ 2,50)</SpanInfos>
                                    {/* <SpanType color={props.color}>{props.type}</SpanType> */}
                                    <SpanType>Lotofácil</SpanType>
                                </DivGameDescription>
                            </DivListGames>
                            <DivListGames >
                                {/* <DivDivisorElement color={props.color}> */}
                                <DivDivisorElement>
                                </DivDivisorElement>
                                <DivGameDescription>
                                    {/* <SpanNumberList>{(props.bets).join(", ")}</SpanNumberList> */}
                                    <SpanNumberList>1, 2, 3, 4</SpanNumberList>
                                    <SpanInfos>30/11/2020 - (R$ 2,50)</SpanInfos>
                                    {/* <SpanType color={props.color}>{props.type}</SpanType> */}
                                    <SpanType>Lotofácil</SpanType>
                                </DivGameDescription>
                            </DivListGames>
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