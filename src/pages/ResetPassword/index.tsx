import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import LoadingComponent from "../../components/Loading/Loading"
import Alert from "../../components/Alert"

import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormResetPassword, DivInputEmail,
    DivInputPassword, InputEmail, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, Footer,
} from "./style";
import validateResetPassword from "./validate"
import { ItemsValidate, UserResetPassword } from "./types";

function ResetPassword() {
    const [error, setError] = useState<UserResetPassword>()
    const [email, setEmail] = useState<string>("")
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [visibleMessageReset, setVisibleMessageReset] = useState(false)
    const [infoReset, setInfoReset] = useState("")

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let item: ItemsValidate = {
            email: email,
            changeError: changeError,
            check_email: check_email,
        }
        return validateResetPassword(item)
    }

    function changeError(error: UserResetPassword) {
        setError(error)
        if (error.email === "ok") {

            sendEmailResetPassword()

            setError({
                email: "",
            })
            // setEmail("")
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

    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    function returnGoBack() {
        history.goBack();
    }

    async function sendEmailResetPassword() {
        setVisibleLoading(true);
        try {
            const response = await api.post("/confirmation-forgot-password", {
                email: email
            }
            )

            if (response.data.user_message === "Email enviado com sucesso.") {
                setVisibleLoading(false);
                setVisibleMessageReset(true);
                setInfoReset("Email enviado com sucesso, redirecionando...");
                setTimeout(() => {
                    return history.replace("/login");
                }, 4000);
            }
            if (response.data.user_message === "Email não cadastrado.") {
                setVisibleLoading(false);
                setVisibleMessageReset(true);
                setInfoReset("Email não cadastrado.");
            }

            // localStorage.setItem('auth:token', response.data.data.token)
            // history.replace("/");

        } catch (error) {
            setVisibleLoading(false);

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
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
                                    Reset Password
                        </SpanTitleAuthentication>
                            </div>
                            <FormResetPassword onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputEmail >
                                        <InputEmail
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChangeEmail}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.email}</span>
                                    </DivInputEmail>
                                    <DivButtonLogin>
                                        <div>
                                            <ButtonLogin>
                                                <SpanLogin>Send Link <i className="fas fa-arrow-right"></i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>
                                {
                                    visibleMessageReset ?
                                        infoReset === "Email enviado com sucesso, redirecionando..." ?
                                            <Alert title={infoReset} color={"#d4edda"} />
                                            :
                                            <Alert title={infoReset} color={"#f8d7da"} />
                                        : null
                                }

                            </FormResetPassword>
                            {/* <div> */}
                            <ButtonSigUp>
                                <SpanSigUp onClick={() => { returnGoBack() }}><i className="fas fa-arrow-left"></i>Back</SpanSigUp>
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

export default ResetPassword;