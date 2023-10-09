import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();

    const singleService = services.find(service => service.id === parseInt(id));
    console.log(singleService)
    return (
        <div className='container mx-auto px-2 min-h-[80vh]'>
            <div>
                <div className='h-[70vh] w-full'>
                    <img className='h-full w-full' src={singleService?.image} alt="" />
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <h3 className='text-3xl text-blue-500 font-bold'>{singleService?.name}</h3>
                    <p className='text-white bg-blue-500 inline-block py-1 px-3 rounded'>{singleService?.price}</p>


                </div>
                <div className='mt-8 mb-16'>
                    <p className='text-gray-700 font-semibold'>{singleService?.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;