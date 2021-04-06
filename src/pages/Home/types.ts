export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
    id: string;
    func: Function
    active: number;
}
export interface GameResults {
    type: string;
    color: string;
    numbers: string;
    date: string;
    price: number;
}