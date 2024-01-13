import React from 'react';

type Drink = {
    name: string,
    price: number
}

const DrinksDate:Drink[] = [
    {name:'Coffee', price: 70},
    {name:'Tea', price: 50},
    {name: 'Cola', price: 40}
]
const Drinks = () => {
    return (
        <>
            {DrinksDate.map(drink => (
                <div key={drink.name} className='menuBlock'>
                    <span>{drink.name}</span>
                    <p>Prise: {drink.price}KGS</p>
                </div>
            ))}
        </>
    );
};

export default Drinks;