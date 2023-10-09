
import TitleBoard from '../../Components/TopSection/TitleBoard';
import './Appoinment.css';
import AppoinmentFrom from './AppoinmentFrom/AppoinmentFrom';

const Appointment = () => {
    return (
        <div>
            {/* appointment page title  */}
            <div className='mt-12'>
                <TitleBoard titleWord={"Booking your best choice"}></TitleBoard>
                {/* < TopSection headline={"Our History makes us Strong"} paragraph={''}></> */}
            </div>
            {/* appointment main body  */}
            <div className="full-width-all container m-auto py-24">

                {/* appointment form  */}
                <div>
                    <AppoinmentFrom></AppoinmentFrom>
                </div>

            </div>
        </div>
    );
};

export default Appointment;