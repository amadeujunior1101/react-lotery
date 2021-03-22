export interface Item {
    id: number;
    name: string;
    quantity: number;
    price: number;
};

// export interface ItemWithSubTotal {
//     id: number;
//     name: string;
//     quantity: number;
//     price: number;
//     subTotal: number;
// };

// export interface Carts {
//     products: Cart
// };

// export interface Cart {
//     cart: [ItemWithSubTotal],
// };
export interface ItemCart {
    type: string;
    price: number;
    bets: Array<String>;
    color: string;
    date:string;
}

export interface ArrayObjects {
    cart: Array<ItemCart>;
};


export interface Action {
    type: string;
    payload: ArrayObjects
};


// export interface Props {
//     item: Item
// }


