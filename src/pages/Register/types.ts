export interface ItemsValidate {
    full_name: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

export interface User {
    full_name: string;
    email: string;
    password: string;
}