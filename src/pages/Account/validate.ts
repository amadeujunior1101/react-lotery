interface User {
    fullName: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

function validate(props: User) {
    if (props.fullName.length === 0) {
        // console.log("Nome obrigatório!")
        return props.changeError({
            fullName: "Nome obrigatório!",
            email: "",
            password: "",
        })
    } else if (props.email.length === 0) {
        // console.log("E-mail obrigatório!")
        return props.changeError({
            fullName: "",
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        // console.log("Formato do e-mail incorreto!")
        return props.changeError({
            fullName: "",
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        // console.log("Insira uma senha!")
        return props.changeError({
            fullName: "",
            email: "",
            password: "insira uma senha!",
        })
    } else {
        return props.changeError({
            fullName: props.fullName,
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;