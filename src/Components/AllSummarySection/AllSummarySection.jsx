import React from 'react';
import { FaGraduationCap, FaPaintBrush, FaUserGraduate, FaUserTie } from "react-icons/fa";
import s3img from "../../assets/s3.jpg";
import TitleBoard from '../TopSection/TitleBoard';




const AllSummarySection = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto px-2'>
                <div>
                    <TitleBoard titleWord={"Our History makes us Strong"}></TitleBoard>
                    {/* < TopSection headline={"Our History makes us Strong"} paragraph={''}></> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-16'>

                    <div className=' '>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaGraduationCap className='mx-auto text-blue-500 text-6xl'></FaGraduationCap>

                                <p className='text-gray-500 font-bold text-4xl my-4'>200+</p>
                                <p className='text-gray-500 font-semibold '>events </p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaUserTie className='mx-auto text-blue-500  text-6xl'></FaUserTie>

                                <p className='text-gray-500 font-bold text-4xl my-4'>130+</p>
                                <p className='text-gray-500 font-semibold '>Clients</p>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaUserGraduate className='mx-auto text-blue-500 text-6xl'></FaUserGraduate>

                                <p className='text-gray-500 font-bold text-4xl my-4'>20+</p>
                                <p className='text-gray-500 font-semibold '>Certified employee</p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaPaintBrush className='mx-auto text-blue-500 text-6xl'></FaPaintBrush>

                                <p className='text-gray-500 font-bold text-4xl my-4'>3</p>
                                <p className='text-gray-500 font-semibold '>Teams</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-right justify-center'>
                        <div className='w-2/3'>
                            <img className='  rounded-bl-full' src={s3img} alt="" />
                        </div>
                        <h2 className='font-bold text-3xl text-blue-500 my-8 '> 8 years experience </h2>
                        <div>
                            <p className='font-semibold'>At Celebrations Unlimited, we specialize in transforming your special moments into unforgettable experiences. Whether you're planning a wedding that dreams are made of, a birthday bash to remember, or any event that deserves a touch of magic, we are your trusted event management company.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllSummarySection;