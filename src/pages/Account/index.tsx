import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { addUser } from "../../store/Users/Users.actions";
import { Users } from "../../store/Users/Users.types";
import {
    Wrapper, DivMenuMobile, UlMenuMobile, ContainerFluid, BoxGeneral, DivBoxRight, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputName, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, ButtonLogin, SpanLogin, Footer,
} from "./style"
import validateAccount from "./validate";
import TopBarMain from "../../components/TopBar";
import api from "../../services/api";
import Alert from "../../components/Alert"
import LoadingComponent from "../../components/Loading/Loading";
import { logout } from "../../auth/authentication"
import { ItemsValidate, User } from "./types"

function Account() {
    // const dispatch: Dispatch = useDispatch();
    // const history = useHistory();

    const result = useSelector((state: Users) => state.user.users);

    const [visibleLoading, setVisibleLoading] = useState(false)
    const [visibleInfo, setVisibleInfo] = useState(false)
    const [openMenu, setOpenMenu] = useState(false);
    const [messageUser, setMessageUser] = useState("");

    const [error, setError] = useState<User>()
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    useEffect(() => {
        getUser()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let item: ItemsValidate = {
            fullName: fullName.trim(),
            email: email.trim(),
            password: password.trim(),
            changeError: changeError,
            check_email: check_email,
        }
        // return console.log("User:", item)
        return validateAccount(item)
    }

    function changeError(error: User) {
        setError(error)
        if (error.fullName.length > 0 && error.email.length > 0 && error.password.length > 0) {
            updateUser()

            console.log("users do redux:", result)

            setError({
                fullName: "",
                email: "",
                password: ""
            })
            // setFullName("")
            // setEmail("")
            setPassword("")

            // history.push("/login");
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

    const handleChangeFullName = (e: React.FormEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
    }
    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    async function getUser() {
        try {
            const response = await api.get("/show-user");
            setFullName(response.data.user.full_name)
            setEmail(response.data.user.email)

            // console.log("response:", response)

        } catch (error) {
            return console.log({
                error: error,
                message: "Falha na autenticação",
                status: error.response.data.error
            })
        }

    }

    async function updateUser() {
        setVisibleLoading(true);
        try {
            const response = await api.put("/update-user", {
                full_name: fullName,
                email: email,
                password: password,
            });

            if (response.data.user_message === "Usuário atualizado com sucesso.") {
                setVisibleLoading(false);
                setVisibleInfo(true);
  
                return setMessageUser(response.data.user_message)
            }
            else if (response.data.user_message === "Senha obrigatória.") {
                setVisibleLoading(false);
                setVisibleInfo(true);

                return setMessageUser(response.data.user_message)
            } else {
                setVisibleLoading(false);
                setVisibleInfo(true);

                return setMessageUser(response.data.user_message)
            }

        } catch (error) {
            console.log(error.response)
            setVisibleLoading(false);
            return setMessageUser(error.data)
        }
    }

    return (
        <Wrapper>

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

            <ContainerFluid>
                <BoxGeneral>
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
                                            value={fullName}
                                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value)}
                                            onChange={handleChangeFullName}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.fullName}</span>
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
                                {
                                    visibleInfo ?
                                        messageUser === "Usuário atualizado com sucesso." ?
                                            <Alert title={messageUser} color={"#d4edda"} />
                                            :
                                            <Alert title={messageUser} color={"#f8d7da"} />
                                        : null
                                }

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