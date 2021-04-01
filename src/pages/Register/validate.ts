interface User {
    name: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
    // setError: object({
    //     name: string,
    //     email: string;
    //     password: string;
    // })
}

function validate(props: User) {
    if (props.name.length === 0) {
        // console.log("Nome obrigatório!")
        return props.changeError({
            name: "Nome obrigatório!",
            email: "",
            password: "",
        })
    } else if (props.email.length === 0) {
        // console.log("E-mail obrigatório!")
        return props.changeError({
            name: "",
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        // console.log("Formato do e-mail incorreto!")
        return props.changeError({
            name: "",
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        // console.log("Insira uma senha!")
        return props.changeError({
            name: "",
            email: "",
            password: "insira uma senha!",
        })
    } else if (props.password.length < 6) {
        // console.log("Insira uma senha!")
        return props.changeError({
            name: "",
            email: "",
            password: "Minimo de 6 caracteres!",
        })
    } else {
        return props.changeError({
            name: props.name,
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;