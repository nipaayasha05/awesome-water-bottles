import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className="flex gap-5">
            {
                cart.map((bottle,index)=> <div key={bottle.id +index}>
                      <img className="w-44 rounded-2xl m-5" src={bottle.img} alt="" />
                      <button onClick={()=>handleRemoveFromCart(bottle.id)} className="btn border-2 border-gray-200 mb-5">X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;