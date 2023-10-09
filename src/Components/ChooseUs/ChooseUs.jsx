import { BsAwardFill, BsBarChartLine, BsBookFill, BsCodeSlash } from "react-icons/bs";
import { FaCanadianMapleLeaf, FaGraduationCap, FaUnlink } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import TitleBoard from "../TopSection/TitleBoard";

const ChooseUs = () => {
    return (
        <div className="my-16 ">
            <TitleBoard titleWord={'WHY CHOOSE US'}></TitleBoard>
            <div className="mt-16 ">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaUnlink className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Smart events Facilities</h3>
                        <p className='text-gray-500 font-semibold '>We have the best facilites for your any of events</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsBookFill className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBookFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Modern & smart equipment </h3>
                        <p className='text-gray-500 font-semibold '>We have the best and modern well decorated equipment</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaGraduationCap className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaGraduationCap>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Be qualified Employee</h3>
                        <p className='text-gray-500 font-semibold '>Our team members all are highly qualified </p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsCodeSlash className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsCodeSlash>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>High Managment System</h3>
                        <p className='text-gray-500 font-semibold '>We ensure our high managment system for your satisfaction</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsBarChartLine className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBarChartLine>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>All Types of events </h3>
                        <p className='text-gray-500 font-semibold '>we provie weeding, birthday ,opeing and  all others</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsAwardFill className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsAwardFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Free events</h3>
                        <p className='text-gray-500 font-semibold '>We also provide some free events with your request.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaCanadianMapleLeaf className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaCanadianMapleLeaf>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'> Best Team member</h3>
                        <p className='text-gray-500 font-semibold '>We have more then 20+ qualified team members.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaPersonRunning className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaPersonRunning>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Heavy Experience</h3>
                        <p className='text-gray-500 font-semibold '>Our team members are highly experienced about all.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;