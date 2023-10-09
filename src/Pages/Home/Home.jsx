
import AllSummarySection from '../../Components/AllSummarySection/AllSummarySection';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import LocationFind from '../../Components/LocationFind/LocationFind';
import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto px-2 '>
                <Slider></Slider>
            </div>
            <div data-aos="animation_name" className='container mx-auto px-2 my-16'>
                <Services></Services>
            </div>
            <div data-aos="animation_name">
                <AllSummarySection></AllSummarySection>
            </div>
            <div className='container mx-auto px-2 my-16'>
                <ChooseUs></ChooseUs>
            </div>
            <div className='container mx-auto px-2 my-16'>
                <LocationFind></LocationFind>
            </div>

        </div>
    );
};

export default Home;