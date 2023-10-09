import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');
                toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                });

            })
            .catch(error => {
                console.error(error);
            })


    }
    return (
        <div className=" bg-blue-50">
            <div className=''>


                <form className='md:flex justify-center md:m-0' onSubmit={handleLogin}>
                    <div className='md:w-96 px-4 py-8  bg-white rounded-md shadow-2xl shadow-blue-300'>
                        <div className='mb-3 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '> Email </span>
                            <input placeholder=' Your Email ' required className="p-2 w-full  bg-white border border-gray-400 rounded-md " type="email" name="email" />
                        </div>

                        <div className='mb-6 '>
                            <span className=' text-gray-600 font-semibold block mb-2'> Password </span>
                            <input placeholder='Password' type="password" required className="p-2 w-full   bg-white border border-gray-400 rounded-md " name='password' />
                        </div>

                        <div className='mb-6'>

                            <button className=' py-2 text-sm w-full text-white cursor-pointer rounded bg-blue-800 uppercase hover:bg-blue-900' type="submit">Login</button>

                        </div>
                        <div className='flex justify-between text-sm w-full' >
                            <p className='text-yellow-800 py-2 underline cursor-pointer'>Forget Password?</p>
                        </div>
                    </div>
                </form >
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />

        </div>
    );
};

export default Login;