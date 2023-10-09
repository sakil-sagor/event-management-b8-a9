import React from 'react';

const SingleService = ({ service }) => {
    console.log(service)
    const { name, image, price, description } = service;
    return (
        <div className=' border rounded-md bg-blue-100  shadow-2xl'>
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
            <div className='p-4'>
                <div className='flex justify-between items-center '>
                    <h3 className='text-xl font-bold text-blue-500'>{name}</h3>
                    <button className='bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-800 duration-200'>{price}</button>
                </div>
                <div>
                    <p>{description.split(" ").slice(0, 20).join(" ") + "..."}  </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;