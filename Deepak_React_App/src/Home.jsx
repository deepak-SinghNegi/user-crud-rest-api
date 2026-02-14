import React from 'react'
import { useState } from 'react';
import Display from './Display';
import Signup from './SignUp';
const Home = () => {
    
    const [show, setShow] = useState(false);
    const display = () => {
        if (!show) setShow(true);
        else setShow(false);
    }
    const changeText = ()=>{
        if(btntext === 'See Others') setBtnText("Back To Form")
            else setBtnText("See Others")
    }
    return (
        <div className='h-full '>
            <section>
                {
                    !show && <Signup />
                }
            </section>
            <section className='sticky top-0 '>
                <div className='left-0 mt-10'>
                    <button onClick={display} className="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition duration-200 " >{show?"Back To SignUp":"See All Users"} </button>
                </div>
            </section>
            <section>
                {
                    show && <Display />
                }
            </section>
        </div>
    )
}

export default Home