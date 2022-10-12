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
          className="collapse collapse-arrow border mt-5 rounded-box shadow-md"
        >
          <div className="collapse-title text-xl font-medium p-3 ">
            <div className="card card-side">
              <figure className="sm:w-24 pr-2 sm:pr-0 ">
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div className="card-body p-0 sm:p-[2rem] gap-1">
                <p className="font-medium text-base sm:text-lg">
                  Puma RS Fast Limiter Sneaker Mens Black Red
                </p>
                <p className="text-slate-600 font-light text-xs sm:text-base">
                  PUMA
                </p>
                <span className="text-sm w-fit p-1 rounded-md px-2 bg-green-200 text-green-700 font-bold">
                  Delivered
                </span>
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm my-auto mt-2 rounded py-2 bg-[#1750FF] border-0 text-white sm:hidden"
              >
                Order Details
              </label>
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <p className="font-semibold">Order ID #123456</p>
            <p className="font-semibold">Delivery Address</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="font-semibold">Payment method</p>
            <p>Cash on delivery</p>
          </div>
        </div>

        {/* Mobile */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white ">
            <hr className='mb-4 mt-1 w-12 border-2 rounded mx-auto' />
            <h4 className='font-bold text-lg'>Order Details</h4>
            <hr className='my-4' />
            <p className="font-semibold">Order ID #123456</p>
            <p className="font-semibold">Delivery Address</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="font-semibold">Payment method</p>
            <p>Cash on delivery</p>
            <div className="modal-action ">
              <label htmlFor="my-modal-6" className="btn w-full bg-[#1750FF] border-0  text-white">
                Done!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
