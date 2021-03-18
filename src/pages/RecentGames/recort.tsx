<Container>
                <Main>
                    <DivBlockLeft>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ marginRight: 30 }}>
                                <SpanTitleRecentGame>Recent Games</SpanTitleRecentGame>
                            </div>
                            <div style={{marginRight: 10}}>
                                <SpanTitleFilters>Filters</SpanTitleFilters>
                            </div>
                            <div>
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

                            </div>
                        </div>
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
                            {/* </ScrollList> */}

                        </DivWrapperScrollList>

                        {/* </div> */}
                    </DivBlockLeft>
                    <DivBlockRight>
                        <SpanNewBet>New Bet <i className="fas fa-arrow-right"></i></SpanNewBet>
                    </DivBlockRight>
                </Main>
            </Container>