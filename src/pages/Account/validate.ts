import { ItemsValidate } from "./types"

function validate(props: ItemsValidate) {
    if (props.full_name.length === 0) {
        return props.changeError({
            fullName: "Nome obrigatório!",
            email: "",
            password: "",
        })
    } else if (props.email.length === 0) {
        return props.changeError({
            fullName: "",
            email: "E-mail obrigatório!",
            password: "",
        })
    } else if (!props.check_email(props.email)) {
        return props.changeError({
            fullName: "",
            email: "Formato do e-mail incorreto!",
            password: "",
        })
    } else if (props.password.length === 0) {
        return props.changeError({
            fullName: "",
            email: "",
            password: "insira uma senha!",
        })
    } else {
        return props.changeError({
            fullName: props.full_name,
            email: props.email,
            password: props.password,
        })
    }
}

export default validate;