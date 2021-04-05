import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import LoadingComponent from "../../components/Loading"
import Alert from "../../components/Alert"

import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxRight, SpanTitleAuthentication, ContainerBoxRight, FormResetPassword, DivInputNewPassword,
    DivInputConfirmPassword, InputNewPassword, InputConfirmPassword, DivButtonLogin, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp,
    Footer,
} from "./forgot_password";
import validateUpdatePassword from "./validate"
import { UserUpdatePassword } from "../../store/Users/Users.types"

function UpdatePassword() {
    const [error, setError] = useState<UserUpdatePassword>()
    const [newPassword, setNewPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [visibleMessageReset, setVisibleMessageReset] = useState(false)
    const [infoReset, setInfoReset] = useState("")

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        interface ItemsValidate {
            newPassword: string;
            repeatPassword: string;
            changeError: Function;
        }

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
            const token = params.get('token');

            const response = await api.post(`/confirmation-reset-password?token=${token}`, {
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

                    </DivBoxRight>
                </BoxGeneral>
            </ContainerFluid>
            <Footer>
                <span>Copyright 2020 Luby Software</span>
            </Footer>
        </Wrapper>
    )
}

export default UpdatePassword;