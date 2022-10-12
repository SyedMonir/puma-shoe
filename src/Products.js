import React from 'react';

const Products = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs mx-4 sm:mx-14 pt-10 pb-5 text-black">
        <ul>
          <li>
            <>Home</>
          </li>
          <li>
            <p className="font-semibold">My Orders(1)</p>
          </li>
        </ul>
        {/* Card */}

        <div
          tabIndex={0}
          className="collapse collapse-arrow border mt-5 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            <div className="card card-side">
              <figure className="sm:w-24 pr-2 sm:pr-0 ">
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div className="card-body p-0 sm:p-[2rem]">
                <p className="font-medium text-base sm:text-lg">
                  Puma RS Fast Limiter Sneaker Mens Black Red
                </p> 
                <p className='text-slate-600 font-light text-xs sm:text-base'>PUMA</p>
                <span className="text-sm w-fit p-1 rounded bg-green-200 text-green-700 font-bold">Delivered</span>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p className='font-semibold'>Order ID #123456</p>
            <p className='font-semibold'>Delivery Address</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='font-semibold'>Payment method</p>
            <p>Cash on delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
