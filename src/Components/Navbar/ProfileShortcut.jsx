import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


// profile area 

const ProfileShortcut = ({ loginPhoto }) => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="profile-shortcut bg-blue-500 shadow-2xl">
            <div className=' flex justify-center'>
                <img style={{ cursor: 'pointer' }} className="w-12 rounded-full " src={loginPhoto()} alt="" />
            </div>
            <div className='mb-2'>

                {
                    user?.displayName ? <h1 className="text-lg font-semibold text-white">{user?.displayName}</h1> : <p className='text-white '>Name: N/A</p>
                }

            </div>
            <hr />

            <div>
                <button className="text-indigo-900 font-semibold hover:bg-white hover:rounded p-2 hover:text-indigo-700 mt-3" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
};

export default ProfileShortcut;