import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot, Footer,
} from "./login.style"

function Login() {
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
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
                                        <InputLogin type="text" placeholder="Email" />
                                    </DivInputEmail>
                                    <DivInputPassword>
                                        <InputLogin type="password" placeholder="Password" autoComplete="on" />
                                    </DivInputPassword>
                                    <DivButtonLogin>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <DivForgot>
                                                <ButtonForgot>
                                                    <SpanForgot>I forget my password</SpanForgot>
                                                </ButtonForgot>
                                            </DivForgot>
                                        </div>
                                        <div>
                                            <ButtonLogin>
                                                <SpanLogin>Log In <i>-</i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>

                            </FormLogin>
                            {/* <div> */}
                            <ButtonSigUp>
                                <SpanSigUp>Sign Up <i>-</i></SpanSigUp>
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

export default Login;