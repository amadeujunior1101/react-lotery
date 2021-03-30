export interface UserLogin {
    email: string;
    password: string;
}

export interface UserResetPassword{
    email: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UsersList {
    users: Array<User>;
};

export interface Users {
    user: UsersList
}

export interface Action {
    type: string;
    payload: User
};
export interface ActionToken {
    type: string;
    payload: string
};



