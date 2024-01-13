import React from "react";
import {Drink} from "./Drinks";

export type Food = {
    id: string,
    count: number
    name: string,
    price: number
}

interface FoodProps {
    onFoodClick: (food:Drink) => void
}

export const Foods: Food[] = [
    { id: 'hamburger',count:1, name: 'Hamburger', price: 80 },
    { id: 'cheeseburger',count:1, name: 'CheeseBurger', price: 90 },
    { id: 'fries',count:1, name: 'Fries', price: 45 }
]

export const Snacks:React.FC<FoodProps> = ({onFoodClick,}) => {
    return (
        <>
            {Foods.map(food => (
                <div id={food.id} key={food.name} className='menuBlock' onClick={() => onFoodClick(food)}>
                    <span>{food.name}</span>
                    <p>Price: {food.price}KGS</p>
                </div>
            ))}
        </>
    );
};

export default Snacks;