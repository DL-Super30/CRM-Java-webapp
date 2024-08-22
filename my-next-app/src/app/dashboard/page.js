"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../../components/navbar'
import Image from 'next/image'


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function Dashboard() {

    return (
        <div style={{ color: "#F4F6F9" }}>
            <Navbar />
            <div >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-2 mx-10 '>
                    <div className='flex border-2 border p-2 rounded-lg bg-white shadow-lg shadow-slate-200'>
                        <Image src='/person.svg' width={50} height={10} alt='person.svg' />
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Not Contacted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <Image src='/person.svg' width={50} height={10} alt='person.svg' />
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Warm Lead</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200  bg-white'>
                        <Image src='/person.svg' width={50} height={10} alt='person.svg' />
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Attempted</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <Image src='/person.svg' width={50} height={10} alt='person.svg' />
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Registered</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                    <div className='flex border-2 border p-2 rounded-lg shadow-lg shadow-slate-200 bg-white'>
                        <Image src='/person.svg' width={50} height={10} alt='person.svg' />
                        <div className='m-5'>
                            <p style={{ color: '#a8c6df' }}>Cold Lead</p>
                            <p className="text-2xl font-bold text-black">14</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-3">
                <div className="flex-1 bg-white shadow-lg my-4 w-full lg:ml-10">
                    <div className="w-full sm:w-[150%]">
                        <Chart
                            type='line'
                            width="100%"
                            height="250%"
                            series={[
                                {
                                    name: 'Leads',
                                    data: [0.0, 0.5, 1.0, 1.5, 2.0, null, null, null, null, null, null, null, null, null, null]
                                }
                            ]}
                            options={{
                                chart: {
                                    id: 'today-leads',
                                    toolbar: {
                                        show: false
                                    },
                                    margin: {
                                        bottom: 0
                                    }
                                },
                                title: {
                                    text: 'Today Leads',
                                    align: 'center',
                                    margin: 20,
                                    offsetY: 0,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'normal',
                                        color: '#263238'
                                    }
                                },
                                xaxis: {
                                    categories: ['12am', '1am', '2am', '3am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '11pm'],
                                    labels: {
                                        show: true,
                                        rotate: -45,
                                        hideOverlappingLabels: false,
                                        offsetX: 0,
                                        offsetY: -5
                                    },
                                },
                                yaxis: {
                                    tickAmount: 4,
                                    labels: {
                                        formatter: function (value) {
                                            if ([0.0, 0.5, 1.0, 1.5, 2.0].includes(value)) {
                                                return value;
                                            }
                                            return '';
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>

                <div className='w-96 bg-white p-4 max-h-96 flex-1 flex-col items-center justify-center mt-10 ms-10'>
                    <p className='text-slate-600 ms-24 text-lg font-medium'>Analytics</p>
                    <div className='rounded-full border border-black p-36 w-16 h-16 flex flex-col items-center justify-center mt-3'>
                        <p className='text-slate-600 text-center font-extrabold'>0</p>
                        <p className='text-slate-600 text-center font-extrabold'>Leads</p>
                    </div>
                </div>
            </div>
        </div>
    );
};