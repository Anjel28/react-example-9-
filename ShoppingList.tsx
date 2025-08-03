//BASIC ARRAY MAP()for rendering lists

import React from 'react';


interface Item{
    id:number,
    name: string,
    price: number,
}

const ShoppingList: React.FC = () =>{
    const items: Item[] = [
        {id:1, name:'Milk', price: 2.5},
        {id:2, name: 'Bread', price:1.5},
        {id: 3, name: 'Eggs', price: 3.0},
    ]
    return(
        <>
        <ul>
            {items.map((item) =>(
                <li key={item.id}>
                    {item.name} -${item.price.toFixed(2)}
                </li>
            ))}
        </ul>
        </>
    )
}


export default ShoppingList;