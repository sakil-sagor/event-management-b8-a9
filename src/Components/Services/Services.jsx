import React, { useEffect, useState } from 'react';
import TitleBoard from '../TopSection/TitleBoard';
import SingleService from './SingleService';

const Services = () => {
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
        <div className='py-16'>
            <div>
                <div>
                    <TitleBoard titleWord={"Our Services"}></TitleBoard>
                    {/* < TopSection headline={"Our History makes us Strong"} paragraph={''}></> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16'>
                    {
                        services.map((service) => <SingleService service={service} key={service.id}> </SingleService>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;