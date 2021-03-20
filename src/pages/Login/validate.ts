interface User {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

function validate(props: User) {
    if (props.email.length === 0) {
        // console.log("E-mail obrigatório!")
        return props.changeError({
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        // console.log("Formato do e-mail incorreto!")
        return props.changeError({
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        // console.log("Insira uma senha!")
        return props.changeError({
            email: "",
            password: "insira uma senha!",
        })
    } else {
        return props.changeError({
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;