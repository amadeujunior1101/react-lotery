import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addToken } from "../../store/Users/Users.actions";
import { Link, useHistory, Redirect, Route } from "react-router-dom"
import { UserLogin, Users } from "../../store/Users/Users.types"
import api from "../../services/api";
import LoadingComponent from '../../components/Loading/Loading';
import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot,
    Footer
} from "./style"
import validateRegister from "./validate"
import Alert from "../../components/Alert";
interface ItemsValidate {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

function Login() {
    // localStorage.removeItem('auth:token');
    const dispatch: Dispatch = useDispatch();
    const result = useSelector((state: Users) => state.user.users);

    const [visibleInfoUserConfirmed, setVisibleInfoUserConfirmed] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<UserLogin>()
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [visibleInfoLogin, setVisibleInfoLogin] = useState(false)
    const [infoLogin, setInfoLogin] = useState("")

    const history = useHistory();

    async function auth() {
        setVisibleLoading(true);
        try {
            const response = await api.post("/auth", {
                email: email,
                password: password,
            }
            )

            if (response.data.user_message === "Acesse sua caixa de emails e confirme seu usuário.") {
                setVisibleLoading(false);
                return setVisibleInfoUserConfirmed(response.data.user_message)
            }

            localStorage.setItem('auth:token', response.data.data.token)
            history.replace("/");

        } catch (error) {
            setVisibleLoading(false);

            if (!error.response) {
                setVisibleInfoLogin(true);
                setInfoLogin("Houve uma falha na conexão cokm o servidor!");
                setTimeout(() => {
                    setVisibleInfoLogin(false);
                }, 4000);
                return;
            }
            
            if (error.response.statusText) {
                setVisibleInfoLogin(true);
                setInfoLogin("Login ou senha invalidos.");
                setTimeout(() => {
                    setVisibleInfoLogin(false);
                }, 4000);

            } else {
                setVisibleInfoLogin(false);
                setEmail("")
                setPassword("")
            }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
            })
        }

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        let item: ItemsValidate = {
            email: email,
            password: password,
            changeError: changeError,
            check_email: check_email,
        }
        return validateRegister(item)
    }

    function changeError(error: UserLogin) {
        setError(error)
        if (error.email.length > 0 && error.password.length > 0) {
            setError({
                email: "",
                password: ""
            })

            auth()

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

    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
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
                                    Authentication
                        </SpanTitleAuthentication>
                            </div>
                            <FormLogin onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputEmail >
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
                                            autoComplete="on"
                                            security="true"
                                            value={password}
                                            onChange={handleChangePassword}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.password}</span>
                                    </DivInputPassword>
                                    <DivButtonLogin>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <DivForgot>
                                                <ButtonForgot>
                                                    <SpanForgot><Link to="/reset-password" style={{ textDecoration: "none", color: "#707070" }}>I forget my password</Link></SpanForgot>
                                                </ButtonForgot>
                                            </DivForgot>
                                        </div>
                                        <div>
                                            <ButtonLogin onClick={handleLogin}>
                                                <SpanLogin >Log In <i className="fas fa-arrow-right"></i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>
                                {
                                    visibleInfoLogin ?
                                        <Alert title={infoLogin} color={"#f8d7da"} />
                                        : null
                                }
                                {
                                    visibleInfoUserConfirmed !== "" ?
                                        <Alert title={visibleInfoUserConfirmed} color={"#d4edda"} />
                                        : null
                                }

                            </FormLogin>
                            <ButtonSigUp>
                                <SpanSigUp>
                                    <Link to="/register" style={{ textDecoration: "none", color: "#707070" }}>Sign Up </Link>
                                    <i className="fas fa-arrow-right"></i></SpanSigUp>
                            </ButtonSigUp>
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

export default Login;