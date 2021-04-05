interface User {
    newPassword: string;
    repeatPassword: string;
    changeError: Function;
}

function validate(props: User) {
    if (props.newPassword.length === 0) {
        return props.changeError({
            newPassword: "Senha obrigatória!",
            repeatPassword: "",
        })
    } else if (props.repeatPassword.length === 0) {
        return props.changeError({
            newPassword: "",
            repeatPassword: "Confirme a senha",
        })
    } else {
        return props.changeError({
            newPassword: "ok",
            repeatPassword: "ok",
        })
    }
}

export default validate;