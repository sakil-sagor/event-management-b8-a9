
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AllSummarySection from '../../Components/AllSummarySection/AllSummarySection';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import LocationFind from '../../Components/LocationFind/LocationFind';
import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className='container mx-auto px-2 '>
                <Slider></Slider>
            </div>
            <div data-aos="fade-down" className='container mx-auto px-2 my-16'>
                <Services></Services>
            </div>
            <div data-aos="fade-up">
                <AllSummarySection></AllSummarySection>
            </div>
            <div data-aos="flip-left" className='container mx-auto px-2 my-16'>
                <ChooseUs></ChooseUs>
            </div>
            <div data-aos="zoom-in" className='container mx-auto px-2 my-16'>
                <LocationFind></LocationFind>
            </div>

        </div>
    );
};

export default Home;