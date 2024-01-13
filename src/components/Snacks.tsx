import React from 'react';

type Food = {
    name: string,
    price: number
}

const Foods: Food[] = [
    {name: 'Hamburger', price: 80},
    {name: 'CheeseBurger', price: 90},
    {name: 'Fries', price: 45}
]

const Snacks = () => {
    return (
        <>
            {Foods.map(food => (
                <div key={food.name} className='menuBlock'>
                    <span>{food.name}</span>
                    <p>Price: {food.price}KGS</p>
                </div>
            ))}
        </>
    );
};

export default Snacks;