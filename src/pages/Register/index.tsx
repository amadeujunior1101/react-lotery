import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { addUser } from "../../store/Users/Users.actions";
import { UsersList, Users } from "../../store/Users/Users.types";
import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputName, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot,
    Footer,
} from "./style"
import validateRegister from "./validate"
import api from "../../services/api";
import LoadingComponent from '../../components/Loading/Loading';
import Alert from "../../components/Alert";
import { ItemsValidate, User } from "./types";

function Register() {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const result = useSelector((state: Users) => state.user.users);

    const [error, setError] = useState<User>()
    const [visibleLoading, setVisibleLoading] = useState(false)

    const [infoRegister, setInfoRegister] = useState<string>("")
    const [full_name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let item: ItemsValidate = {
            full_name: full_name,
            email: email,
            password: password,
            changeError: changeError,
            check_email: check_email,
        }
        return validateRegister(item)
    }

    function changeError(errorInfo: User) {
        setError(errorInfo)
        if (full_name.length > 0 && email.length > 0 && password.length >= 6) {
            userRegister()
            setError({
                full_name: "",
                email: "",
                password: ""
            })
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

    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    async function userRegister() {
        setVisibleLoading(true);
        try {
            const response = await api.post("/create-user", {
                full_name: full_name,
                email: email,
                password: password,
            }
            )

            if (response.data.user_message === "E-mail já cadastrado.") {
                setVisibleLoading(false);
                return setInfoRegister(response.data.user_message)
            }

            history.push("/login");

        } catch (error) {

            setVisibleLoading(false);

            if (!error.response) {
                return history.replace("/login")
            }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha ao registrar novo usuário."
            })
        }

    }

    return (
        <Wrapper>
            {
                visibleLoading ?
                    <LoadingComponent />
                    : null
            }
            <ContainerFluid>
                <BoxGeneral>
                    <DivBoxLeft>
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
                    </DivBoxLeft>
                    <DivBoxRight>
                        <ContainerBoxRight>
                            <div>
                                <SpanTitleAuthentication>
                                    Registration
                        </SpanTitleAuthentication>
                            </div>
                            <FormLogin onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputName >
                                        <InputLogin
                                            type="text"
                                            placeholder="Name"
                                            value={full_name}
                                            onChange={handleChangeName}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.full_name}</span>
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
                                                <SpanLogin>Register <i className="fas fa-arrow-right"></i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>

                                {
                                    infoRegister === "E-mail já cadastrado." ?
                                        <Alert title={"E-mail já cadastrado!"} color={"#f8d7da"} />
                                        : null
                                }
                            </FormLogin>
                            {/* <div> */}
                            <ButtonSigUp>
                                <SpanSigUp><i className="fas fa-arrow-left"></i><Link to="/login" style={{ textDecoration: "none", color: "#707070" }}>Back</Link></SpanSigUp>
                            </ButtonSigUp>
                            {/* </div> */}
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

export default Register;