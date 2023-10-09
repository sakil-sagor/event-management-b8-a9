import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {

    const { id, name, image, price, description } = service;
    return (
        <div className=' border rounded-md bg-blue-100  shadow-2xl'>
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
            <div className='p-4 flex flex-col'>
                <div className='flex justify-between items-center flex-shrink'>
                    <h3 className='text-xl font-bold text-blue-500'>{name}</h3>
                    <button className='bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-800 duration-200'>{price}</button>
                </div>
                <div>
                    <p className='py-3'>{description.split(" ").slice(0, 20).join(" ") + "..."}  </p>
                    <div >
                        <Link className='block bg-blue-500 text-center text-white px-2 py-1 rounded hover:bg-blue-800 duration-200' to={`services/${id}`}>Detials </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;