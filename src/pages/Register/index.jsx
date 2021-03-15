import {
    Wrapper, ContainerFluid, BoxGeneral, DivBoxLeft, DivBoxRight, ContainerBoxLeft, DivTitleOne, SpanTitleOne,
    DivButtonFor, SpanButtonFor, SpanLotery, SpanTitleAuthentication, ContainerBoxRight, FormLogin, DivInputName, DivInputEmail,
    DivInputPassword, InputLogin, DivButtonLogin, DivForgot, SpanForgot, ButtonLogin, SpanLogin, SpanSigUp, ButtonSigUp, ButtonForgot, Footer,
} from "./register.style"

function Register() {
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
                                    Registration
                        </SpanTitleAuthentication>
                            </div>
                            <FormLogin onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputName >
                                        <InputLogin type="text" placeholder="Name" />
                                    </DivInputName>
                                    <DivInputEmail >
                                        <InputLogin type="email" placeholder="Email" />
                                    </DivInputEmail>
                                    <DivInputPassword>
                                        <InputLogin type="password" placeholder="Password" autoComplete="on" />
                                    </DivInputPassword>
                                    <DivButtonLogin>
                                        <div>
                                            <ButtonLogin>
                                                <SpanLogin>Register <i>-</i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>

                            </FormLogin>
                            {/* <div> */}
                            <ButtonSigUp>
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

export default Register;