export interface ItemsValidate {
    newPassword: string;
    repeatPassword: string;
    changeError: Function;
}

export interface UserUpdatePassword{
    newPassword: string;
    repeatPassword: string;
}