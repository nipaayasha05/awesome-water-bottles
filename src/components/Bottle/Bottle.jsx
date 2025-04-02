import React from 'react';

const Bottle = ({bottle,handleAddToCart}) => {
    const {img,name,price,stock} = bottle
    // console.log(bottle)
    return (
        <div>
            <div className="card bg-base-100 w- drop-shadow-sm">
  <figure className=" ">
    <img
      src={img}
      alt="Bottle"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl">{name}</h2>
    <p className="text-xl">${price}</p>
    <p className="text-xl">{stock} remaining</p>
    <div className="card-actions">
      <button onClick={()=> handleAddToCart(bottle)} className="btn btn-primary bg-black ">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bottle;