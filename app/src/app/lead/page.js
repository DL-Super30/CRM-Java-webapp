"use client";
import { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'



function Leads() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCreateLeadsOpen, setIsCreateLeadsOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <div className='min-h-screen'>
            <div className="flex bg-white shadow shadow-lg justify-between mobiles:py-2 pl-4 md:py-0 md:pb-0 lg:py-0">
                <div className="flex items-center mobiles:gap-2 gap-3">
                    <div className="lg:hidden">
                        <svg
                            className="cursor-pointer w-6 mobiles:w-5 md:w-8 block lg:hidden"
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={toggleMenu}
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                    <div className="hidden lg:block">
                        {/* Image for Devices Larger than Tablets */}
                        <img
                            src="/menu (4).png"
                            alt="Menu"
                            className="cursor-pointer w-8"
                        />
                    </div>
                    <div className='mobiles:w-21 md:w-44 lg:w-96'>
                        <img
                            src="/image (1).png"
                            className="cursor-pointer object-contain "
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-10 pt-0 md:gap-4 md:py-4 px-4">
                    {/* Full Menu for Desktop */}
                    <div className="hidden lg:flex items-center gap-4 md:pt-2 gap-x-1 cursor-pointer">
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Home</span>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Leads</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Opportunities</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Learners</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Courses</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Activities</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Analytics</span>
                            <div className='w-4'>
                                {/* <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Dropdown Menu for Tablet and Mobile */}
                    {isMenuOpen && (
                        <div className="lg:hidden flex flex-col gap-2 bg-white shadow-lg p-4 px-7 top-10 md:px-10 top-12 absolute left-0 w-full z-10">
                            <span className="text-lg">Home</span>
                            <span className="text-lg">Leads</span>
                            <span className="text-lg">Opportunities</span>
                            <span className="text-lg">Learners</span>
                            <span className="text-lg">Courses</span>
                            <span className="text-lg">Activities</span>
                            <span className="text-lg">Analytics</span>
                        </div>
                    )}
                    <div className="flex items-center mobiles:gap-2 gap-3">
                        <div className='mobiles:w-7 md:w-7'>
                            <svg className='cursor-pointer object-contain' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
                        </div>
                        <div className='mobiles:w-8 md:w-7'>
                            <img src="/stars.png" className="cursor-pointer object-contain" alt="Stars" />
                        </div>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                className="cursor-pointer mobiles:w-6 md:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M905.616 711.888c-37.344-45.424-88.48-109.742-88.48-175.358V327.57c0-180.016-134.64-326.479-306.688-326.479-172.08 0-305.664 146.464-305.664 326.479v208.96c0 64.512-55.489 125.487-90.672 172.799-31.649 42.512-56.624 76.096-39.76 109.664 14.832 29.536 51.968 33.328 82.655 33.328h183.36c.048 94.208 76.448 170.576 170.672 170.576 94.24 0 170.641-76.368 170.688-170.576h187.664c19.52 0 65.152 0 80.863-33.2 15.857-33.616-9.52-64.513-44.64-107.232zm-394.609 243.97c-57.216 0-103.632-46.352-103.712-103.536h207.424c-.08 57.184-46.464 103.535-103.712 103.535zm358.384-171.665H157.006c-4.896 0-8.991-.16-12.367-.368 6.592-10.208 16.271-23.248 24.143-33.857 38.993-52.4 104.145-126.368 104.145-213.424v-208.96c0-142.464 103.04-258.352 237.521-258.352S749.01 185.12 749.01 327.584v208.96c0 90.016 60.08 165.248 103.968 218.608 7.392 8.993 16.24 19.76 23.12 28.96-2.033.048-4.273.08-6.705.08z"></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 496 512"
                                className="cursor-pointer mobiles:w-6 md:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mx-5 my-2.5 py-2.5 px-5 mb-4 shadow-lg border-2 bg-[#FFF] rounded-lg'>
                    <div className='first-row flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div>
                                <img src='https://crm.skill-capital.com/_next/static/media/employee_contact.2d215fd6.svg'></img>
                            </div>
                            <div>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-2xl font-medium text-gray-900 items-center">
                                            All Leads
                                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-10 w-9 font-light text-gray-900" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute z-50 right-8 w-48 origin-top-right rounded-md bg-white shadow-lg border border-current ring-1 ring-black ring-opacity-5 focus:outline-none transform translate-x-full"
                                    >
                                        <div className="py-0">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 border-b border-b-neutral-300 bg-neutral-200"
                                                >
                                                    All Leads
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
                                                >
                                                    My Leads
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
                                                >
                                                    Todays Leads
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
                                                >
                                                    Yesterday's Leads
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
                                                >
                                                    This Week Leads
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
                                                >
                                                    This Month Leads
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-0">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Last Month Leads
                                                </a>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button
                                onClick={() => setIsCreateLeadsOpen(true)}
                                className="inline-flex items-center px-4 h-8 justify-center rounded-md bg-[#0176D3] p-1 text-sm font-normal leading-6 text-white">
                                Create Lead
                                <span className="ml-2 inline-block">
                                    <img className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://crm.skill-capital.com/_next/static/media/whitedownarrow.25a55fea.svg"></img>
                                </span>
                            </button>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex items-center w-full justify-center px-4 rounded-md border border-neutral-400 p-1 text-sm font-normal leading-6">
                                        Actions
                                        <span className="ml-2 inline-block">
                                            <img className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg"></img>
                                        </span>
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute left-0 z-10 mt-0 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                            >
                                                Delete
                                            </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                    <div className='search-container mt-3 flex items-center relative gap-3'>
                        <input type='text' placeholder='Search' className='search-input p-4 px-9 pl-10 h-8 rounded-md border border-[#969492] pl-8 p-1.5 text-gray-900' />
                        <i className="fa-solid fa-magnifying-glass search-icon absolute left-3 text-slate-400"></i>
                        <div class="inline-flex rounded-md shadow-sm" role="group">
                            <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700 rounded-s-lg bg-[#0176D3] text-[#FFFFFF]">Not Contacted <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
                            <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700  text-gray-900 bg-transparent">Attempted <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
                            <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700  text-gray-900 bg-transparent">Warm Lead <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button><button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700 rounded-e-lg text-gray-900 bg-transparent">Cold Lead <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
                        </div>
                        <div class="inline-flex rounded-md shadow-sm" role="group">
                            <button type="button" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-normal border border-[#747474] rounded-s-lg focus:border-transparent transition duration-700 bg-[#0176D3] text-[#FFFFFF]">
                                <img alt="Table icon" width="16" height="16" src="https://crm.skill-capital.com/_next/static/media/whiteTable.fafaee25.svg" />
                                Table
                            </button>
                            <button type="button" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-normal border border-[#747474] rounded-e-lg transition duration-700 text-gray-900 bg-transparent">
                                <img alt="Kanban icon" width="13" height="12" src="https://crm.skill-capital.com/_next/static/media/kanban.701f61e4.svg" />
                                Kanban
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={isCreateLeadsOpen} onClose={() => setIsCreateLeadsOpen(false)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl px-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className='first-row-h flex justify-between items-center pb-4'>
                                    <div className='flex items-center gap-4 mb-2'>
                                        <img src='https://crm.skill-capital.com/_next/static/media/employee_contact.2d215fd6.svg' />
                                        <p>Create Leads</p>
                                    </div>
                                    <div>
                                        <i
                                            onClick={() => setIsCreateLeadsOpen(false)}
                                            className="fa-solid fa-xmark text-xl text-slate-400 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black"></i>
                                    </div>
                                </div>
                                <div className='second-div border-b border-t py-5'>
                                    <div className='flex'>
                                        <div className='w-1/2 pr-4'>
                                            <label className='block font-medium text-base text-[#A8C6DF]'>Name</label>
                                            <input type='text' placeholder='Name' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>CC</label>
                                            <input type='text' placeholder='CC' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Phone</label>
                                            <input type='text' placeholder='Phone' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Email</label>
                                            <input type='text' placeholder='Email' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Fee Quoted</label>
                                            <div className='relative'>
                                                <input
                                                    type='number'
                                                    placeholder='Fee Quoted'
                                                    className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full'
                                                    defaultValue='0'
                                                />
                                            </div>
                                            <input type='text' placeholder='Batch Timing' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Stack</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Lead Status</option>
                                                <option value="status1">Not Contacted</option>
                                                <option value="status2">Attempted</option>
                                                <option value="status">Warm Lead</option>
                                                <option value="status2">Cold Lead</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Stack</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Stack</option>
                                                <option value="status1">Life Skills</option>
                                                <option value="status2">Study Abroad</option>
                                                <option value="status">HR</option>
                                            </select>

                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Class Mode</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Class Mode</option>
                                                <option value="status1">International Online</option>
                                                <option value="status2">India Online</option>
                                                <option value="status">BLR Classroom</option>
                                                <option value="status">HYD Classroom</option>
                                            </select>

                                            
                                        </div>
                                        <div className='w-1/2 pl-4'>
                                            <label className='block font-medium text-base text-[#A8C6DF]'>Oppurtunity Status</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Oppurtunity Status</option>
                                                <option value="status1">Visiting</option>
                                                <option value="status2">Visited</option>
                                                <option value="status">Demo attended</option>
                                                <option value="status2">Lost Oppurtunity</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Oppurtunity Stage</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Oppurtunity Stage</option>
                                                <option value="source1">None</option>
                                                <option value="source2">Advanced Discussion</option>
                                                <option value="status2">Ready To Join</option>
                                                <option value="status2">Visited</option>
                                                <option value="status2">Fees Negotiation</option>
                                                <option value="status2">Batch Allocation</option>
                                                <option value="status2">Intrested in Demo</option>
                                                <option value="status2">Need time this Week</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Demo Attended Stage</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Demo Attended Stage</option>
                                                <option value="stack1">None</option>
                                                <option value="stack2">Ready To Join</option>
                                                <option value="stack2">Advanced Discussion</option>
                                                <option value="stack2">Call Not Answered</option>
                                                <option value="stack2">Visiting</option>
                                                <option value="stack2">Fans Negotiation</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Visited Stage</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Visited Page</option>
                                                <option value="stack1">None</option>
                                                <option value="stack2">Call Not Answered</option>
                                                <option value="stack2">Ready To Join</option>
                                                <option value="stack2">Fees Negotiation</option>
                                                <option value="stack2">Batch Allocation</option>
                                                <option value="stack2">Fans Negotiation</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Course</label>
                                            <input type='text' placeholder='Course' className='border-0 border-b focus:border-b-black focus:outline-none bg-white hover:bg-blue-50 text-lg font-semibold text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full' />
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Class Mode</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Lead Source Code</option>
                                                <option value="mode1">None</option>
                                                <option value="mode2">Ready To Join</option>
                                            </select>
                                            <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Next Followup</label>
                                            <div className='relative'>
                                                <input
                                                    type='text'
                                                    placeholder='dd-mm-yyyy'
                                                    className='border-0 border-b focus:border-b-black focus:outline-none bg-white hover:bg-blue-50 text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'
                                                />
                                                <button type='button' className='absolute inset-y-0 right-0 px-2 flex items-center'>
                                                    <i className="fa-solid fa-calendar text-gray-600"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Description</label>
                                        <input type='text' placeholder='Description' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 justify-center pt-4'>
                                    <button className='py-2 w-32 lg:w-48 text-base font-medium text-[#0979D0] focus:outline-none bg-white rounded-lg border border-[#0979D0] hover:bg-gray-100 disabled:opacity-50'>Cancel</button>
                                    <button className='text-white bg-[#0979D0] hover:bg-[#097ad0de] rounded-lg text-base py-2 w-32 lg:w-48 text-center disabled:opacity-50'>Create</button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
        
    )
}

export default Leads;