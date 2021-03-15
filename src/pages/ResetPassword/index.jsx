import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormResetPassword, DivInputEmail,
    DivInputPassword, InputEmail, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot, Footer,
} from "./resetPassword.style";

function ResetPassword() {
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
    }

    function toBack() {
        console.log("toBack()")
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
                                    Reset Password
                        </SpanTitleAuthentication>
                            </div>
                            <FormResetPassword onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputEmail >
                                        <InputEmail type="text" placeholder="Email" />
                                    </DivInputEmail>
                                    <DivButtonLogin>
                                        <div>
                                            <ButtonLogin>
                                                <SpanLogin>Send Link<i>-</i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>

                            </FormResetPassword>
                            {/* <div> */}
                            <ButtonSigUp onClick={() => toBack()}>
                                <SpanSigUp><i>-</i>Back</SpanSigUp>
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