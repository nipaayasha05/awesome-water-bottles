import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToStoredCart, getStoreCart, removeFromCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const bottles = use(bottlesPromise)
    // console.log(bottles)


    useEffect(()=>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds,bottles);

        const storedCart=[]

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id===id);
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        //  console.log('storedCart',storedCart)
         setCart(storedCart)

    },[bottles])

   const handleAddToCart=(bottle)=>{
    // console.log("add to cart",bottle)
    const newCart = [...cart,bottle]
    setCart(newCart);
    addToStoredCart(bottle.id)
   }

   const handleRemoveFromCart = id =>{
    console.log("remove item from cart",id);

    const remainingCart = cart.filter(bottle=>bottle.id !== id);
    setCart(remainingCart);
    // console.log(remainingCart);
    removeFromCart(id)
   }

    return (
        <div>
           <h3 className="text-xl p-5 font-bold">Bottles: {bottles.length}</h3>
           <h3 className="font-bold">Add To Cart: {cart.length}</h3>
           <Cart
            cart={cart} 
            handleRemoveFromCart={handleRemoveFromCart}></Cart>
           <div className="lg:grid lg:grid-cols-3 gap-6 space-y-5 ">
           {
            bottles.map(bottle=><Bottle
                 key={bottle.id}
                 handleAddToCart={handleAddToCart}
                  bottle={bottle}></Bottle>)
           }
           </div>
        </div>
    );
};

export default Bottles;