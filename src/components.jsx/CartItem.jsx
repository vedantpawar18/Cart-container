import React from 'react'
import LablePrice from './LablePrice'
import Quantity from './Quantity'


const CartItem = ({label, price, qty,id, handleChangeQty}) => {
  return (
    <div style={{ display:"flex", gap:"1rem", padding:"2rem", justifyContent:"center",alignItems:"center"}}>
        <LablePrice label={label} price={price}/>
        <Quantity id={id} qty={qty} changeCount ={handleChangeQty}/>
    </div>
  )
}

export default CartItem