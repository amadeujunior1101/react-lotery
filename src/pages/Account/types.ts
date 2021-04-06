export interface ItemsValidate {
    fullName: string;
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

export interface User {
    fullName: string;
    email: string;
    password: string;
}