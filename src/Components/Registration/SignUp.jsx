import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';




const SignUp = ({ loginArea }) => {
    const { createUser } = useContext(AuthContext);
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [bloodGroup, setBloodGroup] = useState('');
    // const [district, setDistrict] = useState('');
    // const [thana, setThana] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })



    };
    return (
        <div className=" bg-blue-50">
            <div className=''>

                <form className='md:flex justify-center' onSubmit={handleSubmit}>
                    <div className='md:w-96 px-4  py-8 border-2 rounded-md bg-white shadow-2xl shadow-blue-300'>

                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>  Name</span>
                            <input placeholder=' Name' required className="p-2 w-full  bg-white border border-gray-400 rounded-md" type="text" name="name" />
                        </div>
                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>   Email </span>
                            <input name='email' placeholder=' Email' type="email" required className="p-2 w-full  bg-white border border-gray-400 rounded-md" />
                        </div>


                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>   Password </span>
                            <input name='password' placeholder='Password' type="password" required className="p-2 w-full  bg-white border border-gray-400 rounded-md" />

                        </div>
                        <br />
                        <div className='block m-auto  text-center'>

                            <button className='p-2 w-full  bg-blue-700 text-white uppercase text-sm rounded-md hover:bg-blue-800' type="submit">Submit </button>

                        </div>
                        <div>
                            <p className=' py-2 mt-2'>Alreday have an account, Please <button onClick={loginArea} className='text-blue-900 py-2 text-lg font-bold' to="/login">Log In</button></p>
                        </div>
                    </div>


                </form >
            </div>
        </div>
    );
};

export default SignUp;


