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



