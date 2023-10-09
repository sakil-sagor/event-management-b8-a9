
import AllSummarySection from '../../Components/AllSummarySection/AllSummarySection';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import LocationFind from '../../Components/LocationFind/LocationFind';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto px-2 '>
                <Slider></Slider>
            </div>
            <div>
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