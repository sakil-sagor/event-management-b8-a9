import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCss.css';
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Slider = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('services.json');
                const json = await response.json();
                setServices(json);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();

    }, [])

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
                        {
                            services.map((service) => <SwiperSlide key={service.id}><div className='w-full '><img className='w-full ' src={service.image} alt="" /></div></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Slider;