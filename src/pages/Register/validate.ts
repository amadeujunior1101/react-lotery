interface User {
    full_name: string;
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
    if (props.full_name.length === 0) {
        // console.log("Nome obrigatório!")
        return props.changeError({
            full_name: "Nome obrigatório!",
            email: "",
            password: "",
        })
    } else if (props.email.length === 0) {
        // console.log("E-mail obrigatório!")
        return props.changeError({
            full_name: "",
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        // console.log("Formato do e-mail incorreto!")
        return props.changeError({
            full_name: "",
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        // console.log("Insira uma senha!")
        return props.changeError({
            full_name: "",
            email: "",
            password: "insira uma senha!",
        })
    } else if (props.password.length < 6) {
        // console.log("Insira uma senha!")
        return props.changeError({
            full_name: "",
            email: "",
            password: "Minimo de 6 caracteres!",
        })
    } else {
        return props.changeError({
            full_name: props.full_name,
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;