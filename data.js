import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 14,
        emoji: "🍕",
        id: uuidv4(),
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: uuidv4(),
    },
    {
        name: "Beer",
        ingredients: ["grain", "hops", "yeast", "water"],
        price: 10,
        emoji: "🍺",
        id: uuidv4(),
    }
]
