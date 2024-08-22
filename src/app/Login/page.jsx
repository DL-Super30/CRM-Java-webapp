import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };






export default function Home() {
    return (

        <main className='flex h-screen'>
            <div >
                <div className='pt-24 pl-24 items-center'>
                    <div className=''>
                        <img className='pb-10'src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75"></img>
                    </div>
                    <div class="border boder-gray-1000  shadow-lg p-7 w-3/4">
                        <label>User Name</label>
                        <TextField type='text' fullWidth id="fullWidth" />
                        <label>Password</label>
                        <TextField type='password' fullWidth id="fullWidth" />
                        <button type="button" class=" mt-9 w-full text-white bg-gradient-to-r from-orange-300 to-pink-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                        <div className='flex '>
                        <Checkbox {...label} />
                        <span className="font-normal text-sm text-gray-600 mt-2.5">Remember Me</span>
                        </div>
                        <span class="text-gray-500 text-sm font-medium mt-24 text-center block">©2024, All rights reserved</span>
                        
            

                    </div>
                </div>

            </div>

            <div className='pt-10'>
                <div>
                <h1 className=" font-bold text-[1.8rem] text-center leading-[normal]">Seamlessly manage all learner data in a unified platform.</h1>
                <p class=" font-normal text-center ">Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
                </div>

                <img className='relative h-[35rem]'src='https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinkcrm.d54abf0d.png&w=1920&q=75'></img>


            </div>


        </main>

    )
}