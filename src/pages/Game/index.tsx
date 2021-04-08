import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { ArrayObjects } from "../../store/Carts/Carts.types"
import { Dispatch } from "redux";
import api from "../../services/api";
import LoadingComponent from '../../components/Loading/Loading';

import ButtonChooseBet from "../../components/ButtonChooseBet"
import TopBarMain from "../../components/TopBar"
import BallBet from "../../components/Ball"
import CartItem from "../../components/CartItem"
import Alert from "../../components/Alert";

import {
    DivButtonsChoose,
    ParagraphDescription,

    DivMenuMobile,
    UlMenuMobile,

    Container,
    Main,
    ContentLeft,
    DivBox1,
    SpanTitleGame,
    ContainerBalls,
    DivScrollButtonsChoose,
    DivButtonsOptions,
    ButtonOption,
    ButtonAddToCard,
    DivCardMobile,
    DivWrapperCartMobile,
    SpanCountCart,
    BlockTitlesTop,
    SpanTitleOne,
    SpanTitleTwo,
    SpanPatch,
    ContentRight,
    DivCardBase,
    DivTitleCard,
    SpanInformationCartEmpty,
    ScrollList,
    DivAlert,

    DivCartTotal,
    SpanCartTotal,
    ValueTotal,
    SpanValueTotal,
    DivSaveButton,
    SpanSaveButton,
} from "./style"

import { GameType, Item, Cart } from "./types"
import Footer from "../../components/Footer";

function Game() {
    const history = useHistory();

    // const result = useSelector((state: ArrayObjects) => state.cart);

    const dispatch: Dispatch = useDispatch();

    const [games, setGames] = useState<GameType[]>([]);
    const [selectedGame, setSelectedGame] = useState<Item>()
    const [loadGames, setLoadGames] = useState(true)
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [errorConnection, setErrorConnection] = useState(false)

    const [openMenu, setOpenMenu] = useState(false);
    const [visibleCartMobile, setVisibleCartMobile] = useState(false);
    const [visibleInfoBet, SetVisibleInfoBet] = useState(false);
    const [infoBet, SetInfoBet] = useState("");
    const [visibleInfoValueQuantityBalls, SetVisibleInfoValueQuantityBalls] = useState(false);

    const [activeId, setActiveId] = useState(1)
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])
    const [cart, setCart] = useState<Cart[]>([])
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([])

    useEffect(() => {
        listGames()
    }, [])

    async function listGames() {
        try {
            const listGames = await api.get("/list-games?page=1&limit=3");

            setGames(listGames.data.data.data)
            // console.log(listGames.data.data.data)
            let listNumbers: [Item] = listGames.data.data.data;

            let results = listNumbers.filter(el => {
                return el.type
            })

            changeState(1, results[0].type)
            setSelectedGame(listNumbers[0])

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

    function selectedNumber(id: number) {

        let result = selectedBalls.filter(function (item, index, object) {
            return item !== id
        });

        if (result) setSelectedBalls(result)

        if (selectedBalls.length > Number(selectedGame?.max_number) - 1) return;

        setSelectedBalls([...selectedBalls, id])
    }

    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = games.filter(el => {
            return el.type === item
        })
        setSelectedGame(results[0]);
        setSelectedBalls([])
        setLoadGames(false)
    }

    function verifyColor(number: number) {
        return selectedBalls.filter(el => {
            return el === number + 1
        })
    }

    function loadBalls() {
        return Array.apply(0, Array(selectedGame?.range)).map(function (x, i) {
            return (
                <BallBet
                    key={i}
                    numberBall={i}
                    color={verifyColor(i).length !== 0 ? String(selectedGame?.color) : "#adc0c4"}
                    selectedNumber={(e: number) => { selectedNumber(e) }}
                    arrBalls={selectedBalls}
                />
            )
        })
    }

    function completeGame() {
        while (selectedBalls.length < Number(selectedGame?.max_number)) {
            let number = Math.floor(Math.random() * Number(selectedGame?.range) + 1);
            const found = selectedBalls.some((element) => element === Number(number));
            if (!found) {
                selectedNumber(number);
                selectedBalls.push(number);
            }
        }
    }

    function cleanGame() {
        setSelectedBalls([])
    }

    function addToCart() {
        if (selectedBalls.length < Number(selectedGame?.max_number)) {
            SetVisibleInfoValueQuantityBalls(true);
            setTimeout(() => {
                SetVisibleInfoValueQuantityBalls(false);
            }, 4000);
            return
        }

        let sortSelectedBalls = selectedBalls.sort(function (a, b) {
            return a - b;
        })
        sortSelectedBalls.map(item => {
            let newNumber: string = "";
            item < 10
                ? (newNumber = `${"0" + String(item)}`)
                : (newNumber = String(item));
            cartTemporary.push(newNumber)
        })

        cart?.push({
            type: String(selectedGame?.type),
            price: Number(selectedGame?.price),
            game_id: selectedGame?.id,
            date: getDate(),
            numbers: cartTemporary,
            color: String(selectedGame?.color),
        });
        console.log("Itens no carinho:", cart);

        setCartTemporary([])
        setSelectedBalls([])
    }

    function getDate() {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        let modifiedDay: string = "";
        day < 10
            ? (modifiedDay = `${"0" + String(day)}`)
            : (modifiedDay = String(day));

        let modifiedMonth: string = "";
        month < 10
            ? (modifiedMonth = `${"0" + String(month)}`)
            : (modifiedMonth = String(month));

        return String(`${modifiedDay}/${modifiedMonth}/${year}`)
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
            total = 0

        } else {
            total = cart.reduce((accumulator: any, currentValue) => {
                return Number(accumulator) + currentValue.price;
            }, [0]);
        }

        return total
    }

    let itemCart: ArrayObjects = {
        cart: cart
    };

    async function saveCart() {
        // return console.log("Click save")
        if (cartValue() < Number(selectedGame?.min_cart_value)) {
            SetVisibleInfoBet(true)
            SetInfoBet(`O valor mínimo das apostas é ${Number(selectedGame?.min_cart_value).toFixed(2)
                .replace(".", ",")
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`)
            setTimeout(() => {
                SetVisibleInfoBet(false)
            }, 4000);
        } else {
            setVisibleLoading(true);
            try {
                const betSave = await api.post("/create-bet", {
                    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    games: itemCart.cart
                });

                if (betSave.status === 200) {
                    SetVisibleInfoBet(false)
                    setCart([]);
                    setVisibleLoading(false);

                    SetVisibleInfoBet(true)
                    SetInfoBet("Aposta registrada, você será redirecionado...")
                    setTimeout(() => {
                        SetVisibleInfoBet(false)
                        history.push("/");
                    }, 4000);

                }

            } catch (error) {
                setVisibleLoading(false);

                if (!error.response) {
                    return setErrorConnection(true);
                }

                return console.log({
                    status: error.response.statusText,
                    error: error.response.data.user_message,
                    message: "Falha na autenticação"
                })
            }
        }
    }

    return (
        <>
            {
                visibleLoading ?
                    <LoadingComponent />
                    : null
            }
            <TopBarMain
                openMenu={() => { setOpenMenu(!openMenu) }}
            />
            {
                openMenu ?
                    <DivMenuMobile>
                        <UlMenuMobile>
                            <Link to="/account">Account</Link>
                            <Link to="/login">Log Out</Link>
                        </UlMenuMobile>
                    </DivMenuMobile>
                    : null
            }

            <Container>
                <Main>
                    <ContentLeft>
                        <DivBox1>

                            <DivCardMobile>
                                <DivWrapperCartMobile onClick={() => { setVisibleCartMobile(!visibleCartMobile) }}>
                                    <i className="fas fa-shopping-cart" style={{ color: "#707070" }}></i>
                                    <SpanCountCart>{cart.length}</SpanCountCart>
                                </DivWrapperCartMobile>
                                {
                                    visibleCartMobile ?
                                        <div style={{ maxWidth: "100%" }}>
                                            <DivCardBase style={{ marginTop: 10 }}>
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
                                                                                numbers={item.numbers}
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
                                                <SpanCartTotal>cart <ValueTotal>TOTAL: R$ <SpanValueTotal>{cartValue().toFixed(2)
                                                    .replace(".", ",")
                                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</SpanValueTotal></ValueTotal></SpanCartTotal>
                                            </DivCartTotal>
                                            <DivSaveButton onClick={() => { saveCart() }}>
                                                <SpanSaveButton>Save <i className="fas fa-arrow-right"></i></SpanSaveButton>
                                            </DivSaveButton>
                                            {
                                                visibleInfoBet ?
                                                    // <DivAlert>
                                                    //     <span>{`O valor mínimo das apostas é ${Number(selectedGame?.min_cart_value).toFixed(2)
                                                    //         .replace(".", ",")
                                                    //         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</span>
                                                    // </DivAlert>
                                                    infoBet === "Aposta registrada, você será redirecionado..." ?
                                                        <Alert title={infoBet} color={"#d4edda"} />
                                                        :
                                                        <Alert title={infoBet} color={"#f8d7da"} />
                                                    :
                                                    null
                                            }
                                            {
                                                errorConnection ?
                                                    <Alert title={"Desculpe! houve um erro, impossivel registrar sua aposta."} color={"#f8d7da"} />
                                                    : null
                                            }
                                            {
                                                visibleInfoValueQuantityBalls ?
                                                    <DivAlert>
                                                        <span>{`Você deve escolher ${Number(selectedGame?.max_number)} bolas para esse jogo`}</span>
                                                    </DivAlert>
                                                    :
                                                    null
                                            }
                                        </div>
                                        : null
                                }
                            </DivCardMobile>

                            <BlockTitlesTop>
                                <SpanTitleOne><SpanPatch> new bet</SpanPatch> for {selectedGame?.type}</SpanTitleOne>
                                <SpanTitleTwo>Choose a game</SpanTitleTwo>
                            </BlockTitlesTop>
                            <DivScrollButtonsChoose>
                                <DivButtonsChoose>
                                    {
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
                                </DivButtonsChoose>
                            </DivScrollButtonsChoose>
                        </DivBox1>
                        <>
                            <div className="text-information">
                                <SpanTitleGame>Fill your bet</SpanTitleGame>
                                <ParagraphDescription>
                                    {selectedGame?.description}
                                </ParagraphDescription>
                            </div>
                        </>
                        <>
                            <ContainerBalls>
                                {
                                    loadGames === false ?
                                        loadBalls()
                                        : null
                                }
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
                        </>
                    </ContentLeft>
                    <ContentRight style={{}}>
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
                                                            numbers={item.numbers}
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
                            <SpanCartTotal>cart <ValueTotal>TOTAL: R$ <SpanValueTotal>{cartValue().toFixed(2)
                                .replace(".", ",")
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</SpanValueTotal></ValueTotal></SpanCartTotal>
                        </DivCartTotal>
                        <DivSaveButton onClick={() => { saveCart() }}>
                            <SpanSaveButton>Save <i className="fas fa-arrow-right"></i></SpanSaveButton>
                        </DivSaveButton>
                        {/* <button onClick={() => seeCart()}>See cart</button> */}
                        {
                            visibleInfoBet ?
                                // <DivAlert>
                                //     <span>{`O valor mínimo das apostas é ${Number(selectedGame?.min_cart_value).toFixed(2)
                                //         .replace(".", ",")
                                //         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</span>
                                // </DivAlert>
                                infoBet === "Aposta registrada, você será redirecionado..." ?
                                    <Alert title={infoBet} color={"#d4edda"} />
                                    :
                                    <Alert title={infoBet} color={"#f8d7da"} />
                                :
                                null
                        }
                        {
                            errorConnection ?
                                <Alert title={"Desculpe! houve um erro, impossivel registrar sua aposta."} color={"#f8d7da"} />
                                : null
                        }
                        {
                            visibleInfoValueQuantityBalls ?
                                // <DivAlert>
                                //     <span>{`Você deve escolher ${Number(selectedGame?.max_number)} bolas para esse jogo`}</span>
                                // </DivAlert>
                                <Alert title={`Você deve escolher ${Number(selectedGame?.max_number)} bolas para esse jogo`} color={"#f8d7da"} />
                                :
                                null
                        }
                    </ContentRight>
                </Main>
            </Container>
            <Footer />
            {/* <DivFooter>
                <SpanTextFooter>Copyright 2021 Luby Software</SpanTextFooter>
            </DivFooter> */}
        </>
    )
}

export default Game;
