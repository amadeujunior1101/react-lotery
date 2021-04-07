import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import LoadingComponent from "../../components/Loading/Loading"
import Alert from "../../components/Alert"
import Footer from "../../components/Footer"

import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxRight, SpanTitleAuthentication, ContainerBoxRight, FormResetPassword, DivInputNewPassword,
    DivInputConfirmPassword, InputNewPassword, InputConfirmPassword, DivButtonLogin, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp,
} from "./style";
import validateUpdatePassword from "./validate"
import { ItemsValidate, UserUpdatePassword } from "./types";

function UpdatePassword() {
    const [error, setError] = useState<UserUpdatePassword>()
    const [newPassword, setNewPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [visibleMessageReset, setVisibleMessageReset] = useState(false)
    const [infoReset, setInfoReset] = useState("")
    const [information, setInformation] = useState<String>("Aguarde...")

    const history = useHistory();

    useEffect(() => {
        tokenVerify()
    }, []);

    async function tokenVerify() {
        try {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');

            const response = await api.post(`/confirmation-user?token=${token}`)
            //    return console.log("response=>", response)
            if (response.data.user_message === "Token invalido.") {
                setInformation("Token inválido, expirado ou revogado, você será redirecionado....");
                setTimeout(() => {
                    return history.replace("/login");
                }, 4000);

            }
            else {
                setInformation("");
            }
            // console.log("response=>", response)

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let item: ItemsValidate = {
            newPassword: newPassword,
            repeatPassword: repeatPassword,
            changeError: changeError,
        }
        return validateUpdatePassword(item)
    }

    function changeError(error: UserUpdatePassword) {
        setError(error)
        if (error.newPassword === "ok" && error.repeatPassword === "ok") {

            updateNewPassword()

            setError({
                newPassword: "",
                repeatPassword: "",
            })
        }
    }

    const handleChangeNewPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const handleChangeConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
    }

    function returnGoBack() {
        history.goBack();
    }

    async function updateNewPassword() {
        if (newPassword !== repeatPassword) {
            setVisibleMessageReset(true)
            return setInfoReset("Senhas diferentes.");
        }
        setVisibleLoading(true);
        try {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const tokenParams = params.get('token');

            const response = await api.post(`/confirmation-reset-password?token=${tokenParams}`, {
                password: newPassword
            })

            if (response.data.user_message === "Senha redefinida com sucesso.") {
                setVisibleLoading(false);
                setVisibleMessageReset(true);
                setInfoReset("Senha redefinida com sucesso. redirecionando...");
                setTimeout(() => {
                    return history.replace("/login");
                }, 4000);
            }
            else if (response.data.user_message === "Senhas diferentes.") {
                setVisibleLoading(false);
                setVisibleMessageReset(true);
                setInfoReset("Senhas diferentes.");
            }
            else {
                setVisibleLoading(false);
                setVisibleMessageReset(true);
                setInfoReset("Token invalido.");
            }

        } catch (error) {
            setVisibleLoading(false);
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

    return (
        <Wrapper>
            {
                visibleLoading ?
                    <LoadingComponent />
                    : null
            }
            <ContainerFluid>
                <BoxGeneral>

                    <DivBoxRight>
                        {
                            information === "" ?
                                <ContainerBoxRight>
                                    <div>
                                        <SpanTitleAuthentication>
                                            Reset Password
                                        </SpanTitleAuthentication>
                                    </div>


                                    <FormResetPassword onSubmit={handleSubmit}>
                                        <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                            <DivInputNewPassword >
                                                <InputNewPassword
                                                    type="password"
                                                    placeholder="New password"
                                                    value={newPassword}
                                                    autoComplete="true"
                                                    security="true"
                                                    onChange={handleChangeNewPassword}
                                                />
                                                <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.newPassword}</span>
                                            </DivInputNewPassword>
                                            <DivInputConfirmPassword >
                                                <InputConfirmPassword
                                                    type="password"
                                                    placeholder="Repeat new password"
                                                    autoComplete="true"
                                                    security="true"
                                                    value={repeatPassword}
                                                    onChange={handleChangeConfirmPassword}
                                                />
                                                <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.repeatPassword}</span>
                                            </DivInputConfirmPassword>
                                            <DivButtonLogin>
                                                <div>
                                                    <ButtonLogin>
                                                        <SpanLogin>Update <i className="fas fa-arrow-right"></i></SpanLogin>
                                                    </ButtonLogin>
                                                </div>
                                            </DivButtonLogin>
                                        </div>
                                        {
                                            visibleMessageReset ?
                                                infoReset === "Senhas diferentes." ?
                                                    <Alert title={infoReset} color={"#f8d7da"} />
                                                    :
                                                    <Alert title={infoReset} color={"#d4edda"} />
                                                : null
                                        }

                                    </FormResetPassword>
                                    <ButtonSigUp>
                                        <SpanSigUp onClick={() => { returnGoBack() }}><i className="fas fa-arrow-left"></i>Back</SpanSigUp>
                                    </ButtonSigUp>
                                </ContainerBoxRight>
                                :
                                <ContainerBoxRight>
                                    <SpanTitleAuthentication>
                                        {information}
                                    </SpanTitleAuthentication>
                                </ContainerBoxRight>
                        }

                    </DivBoxRight>
                </BoxGeneral>
            </ContainerFluid>
            <Footer />
        </Wrapper>
    )
}

export default UpdatePassword;