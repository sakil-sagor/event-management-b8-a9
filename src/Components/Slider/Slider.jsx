import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCss.css';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.jpg';
import b3 from '../../assets/b3.jpg';
import b4 from '../../assets/b4.jpg';
import b5 from '../../assets/b5.jpg';

const Slider = () => {

    return (
        <div className='mt-12'>
            <div className=' '>
                <div className='slider'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper max-h-[70vh]  w-full"
                    >
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b1} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b2} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b3} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b4} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='w-full '><img className='w-full ' src={b5} alt="" /></div></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Slider;