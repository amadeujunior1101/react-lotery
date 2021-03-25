import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { addUser } from "../../store/Users/Users.actions";
import { User, Users } from "../../store/Users/Users.types";
import {
    Wrapper, DivMenuMobile, UlMenuMobile, ContainerFluid, BoxGeneral, DivBoxRight, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputName, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, ButtonLogin, SpanLogin, Footer,
} from "./account.style"
import validateAccount from "./validate";
import TopBarMain from "../../components/TopBar";

function Account() {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const result = useSelector((state: Users) => state.user.users);

    const [error, setError] = useState<User>()
    const [openMenu, setOpenMenu] = useState(false);

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        interface ItemsValidate {
            name: string;
            email: string;
            password: string;
            changeError: Function;
            check_email: Function;
        }

        let item: ItemsValidate = {
            name: name,
            email: email,
            password: password,
            changeError: changeError,
            check_email: check_email,
        }
        return validateAccount(item)
    }

    function changeError(error: User) {
        setError(error)
        if (error.name.length > 0 && error.email.length > 0 && error.password.length > 0) {
            let obj: User = {
                name: name,
                email: email,
                password: password,
            }
            dispatch(addUser(obj));

            console.log("users do redux:", result)

            setError({
                name: "",
                email: "",
                password: ""
            })
            setName("")
            setEmail("")
            setPassword("")

            history.push("/login");
        }
    }


    function check_email(val: string) {
        if (!val.match(/\S+@\S+\.\S+/)) {
            return false;
        }
        if (val.indexOf(' ') != -1 || val.indexOf('..') != -1) {
            return false;
        }
        return true;
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    function returnGoBack() {
        history.goBack();
    }

    return (
        <Wrapper>

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

            <ContainerFluid>
                <BoxGeneral>
                    {/* <DivBoxLeft>
                        <ContainerBoxLeft>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <DivTitleOne>
                                    <SpanTitleOne>The Geatest App</SpanTitleOne>
                                </DivTitleOne>
                            </div>
                            <DivButtonFor>
                                <SpanButtonFor>for</SpanButtonFor>
                            </DivButtonFor>
                            <div>
                                <SpanLotery>Lottery</SpanLotery>
                            </div>
                        </ContainerBoxLeft>
                    </DivBoxLeft> */}
                    <DivBoxRight>
                        <ContainerBoxRight>
                            <div>
                                <SpanTitleAuthentication>
                                    Account Update
                        </SpanTitleAuthentication>
                            </div>
                            <FormLogin onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputName >
                                        <InputLogin
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value)}
                                            onChange={handleChangeName}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.name}</span>
                                    </DivInputName>
                                    <DivInputEmail>
                                        <InputLogin
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChangeEmail}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.email}</span>
                                    </DivInputEmail>
                                    <DivInputPassword>
                                        <InputLogin
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                            value={password}
                                            onChange={handleChangePassword}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.password}</span>
                                    </DivInputPassword>
                                    <DivButtonLogin>
                                        <div>
                                            <ButtonLogin>
                                                <SpanLogin>Save <i className="fas fa-arrow-right"></i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>

                            </FormLogin>

                        </ContainerBoxRight>

                    </DivBoxRight>
                </BoxGeneral>
            </ContainerFluid>
            <Footer>
                <span>Copyright 2020 Luby Software</span>
            </Footer>
        </Wrapper>
    )
}

export default Account;