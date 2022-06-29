import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total'

const intitData =[
    {
        id:1,
        product_name:"Noodles",
        price: 30,
        qty: 1
    },
    {
        id:2,
        product_name:"Biryani",
        price: 90,
        qty: 2
    },
    {
        id:3,
        product_name:"Chips",
        price: 10,
        qty: 3
    }
];

function CalculateTotal (products){
   return products.reduce((acc,c) => acc + (c.qty*c.price), 0)
}



const CartContainer = () => {
    const [data, setData] = useState(intitData)

    const handleChangeQty = (id, amount) => {
        let updatedData = data.map ( item => {
            if (item.id===id){
                return {
                    ...item, 
                    qty : item.qty + amount
                }
            }
            else {
                return item
            }
        })
        setData(updatedData);
    }

  return (
    <div>
        
        <div>
            {
                data.map(item =>
                    <CartItem label={item.product_name} qty={item.qty} id={item.id} key={item.id} price={item.price} handleChangeQty={handleChangeQty} />
                    )
            }
        </div>

        <Total total={CalculateTotal(data)} handleChangeQty={handleChangeQty}/>
    </div>
  )
}

export default CartContainer