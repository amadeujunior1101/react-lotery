import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ArrayObjects } from "../../store/Carts/Carts.types"
import { Dispatch } from "redux";
import { addCart } from "../../store/Carts/Carts.actions";

import dataJson from "../../mock/games.json"
import ButtonChooseBet from "../../components/ButtonChooseBet"
import BallBet from "../../components/Ball"
import CartItem from "../../components/CartItem"

import {
    DivButtonsChoose,
    ParagraphDescription,
    WrapperTopbar,
    DivMenuMobile,
    UlMenuMobile,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivMenu,
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
    DivFooter,
    SpanTextFooter,
} from "./game.style"

interface Item {
    type: string;
    color: string;
    description: string;
    ["max-number"]: number;
    range: number;
    price: number;
    ["min-cart-value"]: number;
}

interface Cart {
    type: string;
    price: number;
    date: string;
    numbers: Array<String>;
    color: string;
}

function Game() {

    const result = useSelector((state: ArrayObjects) => state.cart);

    const dispatch: Dispatch = useDispatch();

    const [openMenu, setOpenMenu] = useState(false);
    const [visibleCartMobile, setVisibleCartMobile] = useState(false);
    const [visibleInfoCart, setVisibleInfoCart] = useState(false);

    const [dataJSON] = useState([dataJson.types])
    const [activeId, setActiveId] = useState(1)
    const [game, setGames] = useState<Item>()
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([])
    const [cart, setCart] = useState<Cart[]>([])
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([])

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
            const found = selectedBalls.some((element) => element === Number(number));
            if (!found) {
                // let newNumber = "";
                // number < 10
                //     ? (newNumber = `${"0" + String(number)}`)
                //     : (newNumber = String(number));

                selectedNumber(number);
                selectedBalls.push(number);
                // selectedBalls.push(Number(newNumber));
            }
        }
    }

    function cleanGame() {
        setSelectedBalls([])
    }

    function addToCart() {
        if (selectedBalls.length < Number(game?.["max-number"])) return;

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
            type: String(game?.type),
            price: Number(game?.price),
            date: getDate(),
            numbers: cartTemporary,
            color: String(game?.color),
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

    function saveCartRedux() {
        if (cartValue() < Number(game?.["min-cart-value"])) {
            setVisibleInfoCart(true)
            setTimeout(() => {
                setVisibleInfoCart(false)
            }, 4000);
        } else {
            dispatch(addCart(itemCart));
            console.log("Valores redux", result)
            setVisibleInfoCart(false)
            setCart([]);
        }
    }

    function seeCart() {
        let arrGame: Object[] = []

        cart.map(item => {
            arrGame.push({
                numbers: String(item.numbers),
                color: item.color,
                date: item.date,
                price: item.price,
                type: item.type,
            })
        })

        let cartObj = {
            user_id: 1,
            date: "24/03/2021",
            games: arrGame
        }
        console.log("Objeto Cart: ", cartObj)
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
                        <SpanHome>Home</SpanHome>
                    </BlockLeft>
                    <BlockRight>
                        <SpanAccount>
                            <Link to="/recent-games">Account</Link>
                        </SpanAccount>
                        <SpanLogOut>
                            <Link to="/login">Log Out </Link>
                            <i className="fas fa-arrow-right"></i></SpanLogOut>
                        <DivMenu onClick={() => { setOpenMenu(!openMenu) }}><i className="fas fa-bars"></i></DivMenu>
                    </BlockRight>
                </TopBar>
            </WrapperTopbar>
            {
                openMenu ?
                    <DivMenuMobile>
                        <UlMenuMobile>
                            <Link to="/register">Account</Link>
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
                                            <DivSaveButton onClick={() => { saveCartRedux() }}>
                                                <SpanSaveButton>Save <i className="fas fa-arrow-right"></i></SpanSaveButton>
                                            </DivSaveButton>
                                            {
                                                visibleInfoCart ?
                                                    <DivAlert>
                                                        <span>{`O valor mínimo das apostas é ${Number(game?.["min-cart-value"]).toFixed(2)
                                                            .replace(".", ",")
                                                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</span>
                                                    </DivAlert>
                                                    :
                                                    null
                                            }
                                        </div>
                                        : null
                                }
                            </DivCardMobile>

                            <BlockTitlesTop>
                                <SpanTitleOne><SpanPatch> new bet</SpanPatch> for {game?.type}</SpanTitleOne>
                                <SpanTitleTwo>Choose a game</SpanTitleTwo>
                            </BlockTitlesTop>
                            <DivScrollButtonsChoose>
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
                            </DivScrollButtonsChoose>
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
                        <DivSaveButton onClick={() => { saveCartRedux() }}>
                            <SpanSaveButton>Save <i className="fas fa-arrow-right"></i></SpanSaveButton>
                        </DivSaveButton>
                        {/* <button onClick={() => seeCart()}>See cart</button> */}
                        {
                            visibleInfoCart ?
                                <DivAlert>
                                    <span>{`O valor mínimo das apostas é ${Number(game?.["min-cart-value"]).toFixed(2)
                                        .replace(".", ",")
                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`}</span>
                                </DivAlert>
                                :
                                null
                        }
                    </ContentRight>
                </Main>
            </Container>


            <DivFooter>
                <SpanTextFooter>Copyright 2021 Luby Software</SpanTextFooter>
            </DivFooter>
        </>
    )
}

export default Game;
