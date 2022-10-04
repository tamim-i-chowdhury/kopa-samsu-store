import React from "react";

const SingleGun = ({ gun, countIncrease }) => {
  //   console.log(gun);
  const { action, bullet, capacity, category, img, name, price } = gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-48 rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="badge badge-outline">Price: ${price}</div>
          </div>
          <div className="mt-4 flex justify-around">
            <button onClick={() => countIncrease()} className="btn btn-sm">
              ADD TO CART
            </button>
            <button className="btn btn-sm btn-success">DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
