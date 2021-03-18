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
                    <ContentRight>
                        <DivCardBase>
                            <DivTitleCard>
                                <span>cart</span>
                            </DivTitleCard>
                            <div className="div-information-cart-empty">
                                {
                                    cart.length === 0 ?
                                        <SpanInformationCartEmpty>Sem itens no cart</SpanInformationCartEmpty>
                                        :
                                        <ScrollList>
                                            {
                                                cart.map((item, index, object) => {
                                                    return (
                                                        <CartItem
                                                            key={index}
                                                            bets={item.bets}
                                                            type={item.type}
                                                            color={item.color}
                                                            index={index}
                                                            removeItemCart={(e: number) => { removeItemCart(e) }}
                                                        />
                                                    )
                                                })
                                            }
                                        </ScrollList>
                                }

                            </div>

                        </DivCardBase>
                        <DivCartTotal>
                            <SpanCartTotal>cart <ValueTotal>TOTAL: R$ <SpanValueTotal>{cartValue()}</SpanValueTotal></ValueTotal></SpanCartTotal>
                        </DivCartTotal>
                        <DivSaveButton>
                            <SpanSaveButton>Save <i className="fas fa-arrow-right"></i></SpanSaveButton>
                        </DivSaveButton>
                    </ContentRight>
                </Main>
            </Container>