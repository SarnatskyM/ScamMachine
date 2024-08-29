import { writable, get } from "svelte/store";

interface shopItem {
    id: number,
    title: string,
    image: string,
    price: number,
    isBuying: boolean
}

export const notify = writable(false);

export const shopItems = writable<Array<shopItem>>([
    {
        id: 1,
        title: "Taco",
        image: "/images/coin.png",
        price: 1000,
        isBuying: false,
    },
    {
        id: 2,
        title: "Arco",
        image: "/images/coin.png",
        price: 1500,
        isBuying: false,
    },
    {
        id: 3,
        title: "Mico",
        image: "/images/coin.png",
        price: 1000,
        isBuying: false,
    },
    {
        id: 4,
        title: "Chico",
        image: "/images/coin.png",
        price: 1000,
        isBuying: false,
    },
]);
