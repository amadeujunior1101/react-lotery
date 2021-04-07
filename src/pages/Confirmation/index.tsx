import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import api from "../../services/api";

import {
    Wrapper,
    ContainerFluid,
    BoxGeneral,
    DivBoxRight,
    SpanTitleAuthentication,
    ContainerBoxRight,
    Footer,
} from "./style";

function Confirmation() {
    const [information, setInformation] = useState<String>("Aguarde...")

    const history = useHistory();

    useEffect(() => {
        userConfirmation()
    }, [])

    async function userConfirmation() {
        try {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const token = params.get('token');

            const response = await api.post(`/confirmation-user?token=${token}`)
            if (response.data.user_message === "Token valido.") {
                setInformation("Usuário confirmado, você será redirecionado...");
                setTimeout(() => {
                    return history.replace("/login");
                }, 4000);

            }
            else {
                setInformation("Token inválido, expirado ou revogado, você será redirecionado...");
                setTimeout(() => {
                    return history.replace("/login");
                }, 4000);
            }

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

    return (
        <Wrapper>
            <ContainerFluid>
                <BoxGeneral>
                    <DivBoxRight>
                        <ContainerBoxRight>
                            <div>
                                <SpanTitleAuthentication>
                                    {information}
                                </SpanTitleAuthentication>
                            </div>
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

export default Confirmation;