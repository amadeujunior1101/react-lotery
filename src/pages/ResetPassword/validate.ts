interface User {
    email: string;
    changeError: Function;
    check_email: Function;
}

function validate(props: User) {
    if (props.email.length === 0) {
        return props.changeError({
            email: "E-mail obrigatório!",
        })
    } else if (!props.check_email(props.email)) {
        return props.changeError({
            email: "Formato do e-mail incorreto!",
        })
    } else {
        return props.changeError({
            email: "ok",
        })
    }
}

export default validate;