import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { UserLogin, Users } from "../../store/Users/Users.types"
import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot,
    Footer, DivAlert,
} from "./login.style"
import validateRegister from "./validate"

function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<UserLogin>()
    const [visibleInfoLogin, setVisibleInfoLogin] = useState(false)

    const result = useSelector((state: Users) => state.user.users);
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        interface ItemsValidate {
            email: string;
            password: string;
            changeError: Function;
            check_email: Function;
        }

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
            let obj: UserLogin = {
                email: email,
                password: password,
            }

            let existUser = result.filter(element => {
                return element.email === obj.email && element.password === obj.password
            })

            setError({
                email: "",
                password: ""
            })

            if (existUser.length === 0) {
                setVisibleInfoLogin(true);

                setTimeout(() => {
                    setVisibleInfoLogin(false);
                }, 4000);

            } else {
                setVisibleInfoLogin(false);
                console.log("Dados do user: ", existUser)
                history.push("/");
                
                setEmail("")
                setPassword("")
            }

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
                                        <DivAlert>
                                            <span>Login ou senha invalidos!</span>
                                        </DivAlert>
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