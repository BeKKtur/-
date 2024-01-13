import React from "react";

export type Drink = {
    id: string,
    count: number,
    name: string,
    price: number
}

interface DrinksProps {
    onDrinkClick: (drink:Drink) => void
}

export const DrinksData:Drink[] = [
    {id:'coffee',count:1,  name:'Coffee', price: 70},
    {id: 'tea',count:1, name:'Tea', price: 50},
    {id: 'cola',count:1, name: 'Cola', price: 40}
];

export const Drinks:React.FC<DrinksProps> = ({onDrinkClick}) => {
    return (
        <>
            {DrinksData.map(drink => (
                <div id={ drink.id } key={drink.name} className='menuBlock' onClick={() => onDrinkClick(drink)}>
                    <span>{drink.name}</span>
                    <p>Price: {drink.price}KGS</p>
                </div>
            ))}
        </>
    );
};

export default Drinks;