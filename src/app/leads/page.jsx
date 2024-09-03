


// const Leads = () => {
//   const handleCreate = () => {
//     const formData = {
//       Name,
//       cc,
//       phone,
//       email,
//       feeQuoted,
//       batchTiming,
//       LeadStatus,
//       LeadSource,
//       Stack,
//       ClassMode,
//       nextFollowUp: nextFollowUp ? nextFollowUp.format('YYYY-MM-DD HH:mm:ss') : null,
//       description,
//       courses: courses,
//     };

//     console.log(JSON.stringify(formData, null, 2));
//   };




//   // const validate = () => {
//   //   const errors = {};

//   //   if (!details.name) errors.name = "Name is required";
//   //   if (!details.cc) errors.cc = "CC is required";
//   //   if (!details.phone || !/^\d+$/.test(details.phone)) errors.phone = "Valid phone number is required";
//   //   if (!details.email || !/\S+@\S+\.\S+/.test(details.email)) errors.email = "Valid email is required";
//   //   if (!details.fee_quoted || isNaN(parseFloat(details.fee_quoted))) errors.fee_quoted = "Valid fee is required";
//   //   if (!details.batch_timing) errors.batch_timing = "Batch timing is required";
//   //   if (!details.description) errors.description = "Description is required";
//   //   if (!details.lead_status) errors.lead_status = "Lead status is required";
//   //   if (!details.lead_source) errors.lead_source = "Lead source is required";
//   //   if (!details.stack) errors.stack = "Stack is required";
//   //   if (!details.course) errors.course = "Course is required";
//   //   if (!details.class_mode) errors.class_mode = "Class mode is required";
//   //   if (!details.next_followup) errors.next_followup = "Next follow-up date is required";

//   //   setErrors(errors);
//   //   return Object.keys(errors).length === 0;
//   // };

//   const rows = [
//   ]
//   const columns = [
//     { field: 'Created on', headerName: 'Created on', width: 240 },
//     { field: 'Lead Status', headerName: 'Lead Status', width: 240 },
//     { field: 'Name', headerName: 'Name', width: 240 },
//     { field: 'Phone', headerName: 'Phone', width: 240 },
//     { field: 'Stack', headerName: 'Stack', width: 240 },
//     { field: 'Course', headerName: 'Course', width: 200 },
//   ];
//   function Leads() {
//       </main>
//     );
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCreateLeadsOpen, setIsCreateLeadsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <main className="min-h-screen bg-gray-100">
//       <NavBar
//         onNotificationClick={() => setNotificationDialogOpen(true)}
//         onUserClick={() => setUserDialogOpen(true)}
//       />

//       <div className='min-h-screen'>



//         <div>
//           <div className='mx-5 my-2.5 py-2.5 px-5 mb-4 shadow-lg border-2 bg-[#FFF] rounded-lg'>
//             <div className='first-row flex items-center justify-between'>
//               <div className='flex items-center'>
//                 <div>
//                   <img src='https://crm.skill-capital.com/_next/static/media/employee_contact.2d215fd6.svg'></img>
//                 </div>
//                 <div>
//                   <Menu as="div" className="relative inline-block text-left">
//                     <div>
//                       <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-2xl font-medium text-gray-900 items-center">
//                         All Leads
//                         <ChevronDownIcon aria-hidden="true" className="-mr-1 h-10 w-9 font-light text-gray-900" />
//                       </MenuButton>
//                     </div>

//                     <MenuItems
//                       transition
//                       className="absolute z-50 right-8 w-48 origin-top-right rounded-md bg-white shadow-lg border border-current ring-1 ring-black ring-opacity-5 focus:outline-none transform translate-x-full"
//                     >
//                       <div className="py-0">
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 border-b border-b-neutral-300 bg-neutral-200"
//                           >
//                             All Leads
//                           </a>
//                         </MenuItem>
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
//                           >
//                             My Leads
//                           </a>
//                         </MenuItem>
//                       </div>
//                       <div className="py-1">
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
//                           >
//                             Todays Leads
//                           </a>
//                         </MenuItem>
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
//                           >
//                             Yesterday's Leads
//                           </a>
//                         </MenuItem>
//                       </div>
//                       <div className="py-1">
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
//                           >
//                             This Week Leads
//                           </a>
//                         </MenuItem>
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900  border-b border-b-neutral-300"
//                           >
//                             This Month Leads
//                           </a>
//                         </MenuItem>
//                       </div>
//                       <div className="py-0">
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                           >
//                             Last Month Leads
//                           </a>
//                         </MenuItem>
//                       </div>
//                     </MenuItems>
//                   </Menu>
//                 </div>
//               </div>
//               <div className='flex gap-2 items-center'>
//                 <button
//                   onClick={() => setIsCreateLeadsOpen(true)}
//                   className="inline-flex items-center px-4 h-8 justify-center rounded-md bg-[#0176D3] p-1 text-sm font-normal leading-6 text-white">
//                   Create Lead
//                   <span className="ml-2 inline-block">
//                     <img className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://crm.skill-capital.com/_next/static/media/whitedownarrow.25a55fea.svg"></img>
//                   </span>
//                 </button>
//                 <Menu as="div" className="relative inline-block text-left">
//                   <div>
//                     <MenuButton className="inline-flex items-center w-full justify-center px-4 rounded-md border border-neutral-400 p-1 text-sm font-normal leading-6">
//                       Actions
//                       <span className="ml-2 inline-block">
//                         <img className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg"></img>
//                       </span>
//                     </MenuButton>
//                   </div>

//                   <MenuItems
//                     transition
//                     className="absolute left-0 z-10 mt-0 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                   >
//                     <div className="py-1">
//                       <MenuItem>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                         >Delete
//                         </a>
//                       </MenuItem>
//                     </div>
//                   </MenuItems>
//                 </Menu>
//               </div>
//             </div>



//             {/* Search Option */}
//             <div className='search-container mt-3 flex items-center relative gap-3'>
//               <input type='text' placeholder='Search' className='search-input p-4 px-9 pl-10 h-8 rounded-md border border-[#969492] pl-8 p-1.5 text-gray-900' />
//               <i className="fa-solid fa-magnifying-glass search-icon absolute left-3 text-slate-400"></i>
//               <div class="inline-flex rounded-md shadow-sm" role="group">
//                 <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700 rounded-s-lg bg-[#0176D3] text-[#FFFFFF]">Not Contacted <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
//                 <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700  text-gray-900 bg-transparent">Attempted <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
//                 <button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700  text-gray-900 bg-transparent">Warm Lead <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button><button type="button" class="inline-flex gap-2 items-center px-4 py-1 text-sm font-normal border border-[#747474] focus:border-transparent' transition duration-700 rounded-e-lg text-gray-900 bg-transparent">Cold Lead <p class="bg-rose-600 py-1 px-2.5 rounded-full">0</p></button>
//               </div>
//               <div class="inline-flex rounded-md shadow-sm" role="group">
//                 <button type="button" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-normal border border-[#747474] rounded-s-lg focus:border-transparent transition duration-700 bg-[#0176D3] text-[#FFFFFF]">
//                   <img alt="Table icon" width="16" height="16" src="https://crm.skill-capital.com/_next/static/media/whiteTable.fafaee25.svg" />
//                   Table
//                 </button>
//                 <button type="button" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-normal border border-[#747474] rounded-e-lg transition duration-700 text-gray-900 bg-transparent">
//                   <img alt="Kanban icon" width="13" height="12" src="https://crm.skill-capital.com/_next/static/media/kanban.701f61e4.svg" />
//                   Kanban
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* Table */}
//         <div className='w-full' style={{ height: '65vh' }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//           />
//         </div>








//         {/* Modal for create leads */}
//         <Dialog open={isCreateLeadsOpen} onClose={() => setIsCreateLeadsOpen(false)} className="relative z-10">
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//           />

//           <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//               <DialogPanel
//                 transition
//                 className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl px-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
//               >
//                 <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                   <div className='first-row-h flex justify-between items-center pb-4'>
//                     <div className='flex items-center gap-4 mb-2'>
//                       <img src='https://crm.skill-capital.com/_next/static/media/employee_contact.2d215fd6.svg' />
//                       <p>Create Leads</p>
//                     </div>
//                     <div>
//                       <i
//                         onClick={() => setIsCreateLeadsOpen(false)}
//                         className="fa-solid fa-xmark text-xl text-slate-400 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black"></i>
//                     </div>
//                   </div>
//                   <div className='second-div border-b border-t py-5'>
//                     <div className='flex'>
//                       <div className='w-1/2 pr-4'>
//                         <label htmlFor="Name" className='block font-medium text-base text-[#A8C6DF]'>Name</label>
//                         <input type='text' id="Name" placeholder='Name' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                         <label htmlFor="cc" className='block font-medium text-base text-[#A8C6DF] mt-5'>CC</label>
//                         <input type='text' id="cc" placeholder='CC' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                         <label htmlFor="phone" className='block font-medium text-base text-[#A8C6DF] mt-5'>Phone</label>
//                         <input type='text' id="phone" placeholder='Phone' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                         <label htmlFor="email" className='block font-medium text-base text-[#A8C6DF] mt-5'>Email</label>
//                         <input type='text' id="email" placeholder='Email' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                         <label htmlFor="feeQuoted" className='block font-medium text-base text-[#A8C6DF] mt-5'>Fee Quoted</label>
//                         <div className='relative text-lg font-medium text-blue-gray-700 pb-1 pt-1 '>
//                           <input
//                             type='number'
//                             id="feeQuoted"
//                             placeholder='Fee Quoted'
//                             className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full'
//                             defaultValue='0'
//                           />
//                         </div>
//                         <label htmlFor="batchTiming" className='block font-medium text-base text-[#A8C6DF]'>Batch Timing</label>
//                         <input id="batchTiming" type='text' placeholder='Batch Timing' className='text-lg font-medium text-blue-gray-700 pb-1 pt-2 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                         {/* <input type='text' placeholder='Batch Timing' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' /> */}



//                       </div>
//                       <div className='w-1/2 pl-4'>
//                         <label value="LeadStatus" className='block font-medium text-base text-[#A8C6DF]'>Lead Status</label>
//                         <select id="LeadStatus" className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
//                           <option value="None">Select Lead Status</option>
//                           <option value="NotContacted">Not Contacted</option>
//                           <option value="Attempted">Attempted</option>
//                           <option value="WarmLead">Warm Lead</option>
//                           <option value="Opportunity">Opportunity</option>
//                           <option value="ColdLead">Cold Lead</option>
//                         </select>
//                         <label value="LeadSource" className='block font-medium text-base text-[#A8C6DF] mt-5'>Lead Source</label>
//                         <select id="LeadSource" className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
//                           <option value="None">Select Lead Source</option>
//                           <option value="WalkIn">Walk In</option>
//                           <option value="StudentReferral">Student Referral</option>
//                           <option value="Demo">Demo</option>
//                           <option value="WebSite">WebSite</option>
//                           <option value="WebsiteChat">Website Chat</option>
//                           <option value="InboundCall">Inbound Call</option>
//                           <option value="GoogleAdWords">Google Ad Words</option>
//                           <option value="FacebookAds">Facebook Ads</option>
//                           <option value="GoogleMyBusiness">Google My Business</option>
//                           <option value="WhatsApp">WhatsApp</option>

//                         </select>


//                         <label value="Stack" className='block font-medium text-base text-[#A8C6DF] mt-5'>Stack</label>
//                         <select id="Stack" className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
//                           <option value="">Select Stack</option>
//                           <option value="LifeSkills">Life Skills</option>
//                           <option value="StudyAbroad">Study Abroad</option>
//                           <option value="HR">HR</option>
//                         </select>

//                         <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Course</label>
//                         <input type='text' placeholder='Course' className='border-0 border-b focus:border-b-black focus:outline-none bg-white hover:bg-blue-50 text-lg font-semibold text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full' />

//                         <label value="ClassMode" className='block font-medium text-base text-[#A8C6DF] mt-5'>Class Mode</label>
//                         <select id="ClassMode" className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
//                           <option value="">Select Class Mode</option>
//                           <option value="HYDClassRoom">HYD Class Room</option>
//                           <option value="BLRClassRoom">BLR Class Room</option>
//                           <option value="IndiaOnline">India Online</option>
//                           <option value="InternationalOnline">International Online</option>

//                         </select>
//                         <label value="nextFollowUp" className='block font-medium text-base text-[#A8C6DF] mt-5'>Next Followup</label>
//                         <div className='relative'>
//                           <input
//                             type='text'
//                             id="nextFollowUp"
//                             placeholder='dd-mm-yyyy'
//                             className='border-0 border-b focus:border-b-black focus:outline-none bg-white hover:bg-blue-50 text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'
//                           />
//                           <button type='button' className='absolute inset-y-0 right-0 px-2 flex items-center'>
//                             <i className="fa-solid fa-calendar text-gray-600"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Description</label>
//                       <input type='text' placeholder='Description' className='text-lg font-medium text-blue-gray-700 pb-1 pt-1 border-b border-[#0003] focus:border-b-black focus:outline-none w-full' />
//                     </div>
//                   </div>



//                   {/* Create and Cancel */}
//                   <Stack className="flex justify-center  border-b-2 " direction="row" spacing={2} style={{ width: "64rem" }}>
//                     <Button variant="outlined" size="large" sx={{ textTransform: 'none' }}>
//                       Cancel
//                     </Button>
//                     <Button variant="contained" size="large" sx={{ textTransform: 'none' }} onClick={handleCreate}>
//                       Create
//                     </Button>
//                   </Stack>
//                 </div>
//               </DialogPanel>
//             </div>
//           </div>
//         </Dialog>
//       </div>

// };

// export default Leads;










"use client";

import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'; // Import the Image component



const Leads = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCreateLeadsOpen, setIsCreateLeadsOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    

    <div className='min-h-screen'>
      <Navbar
        onNotificationClick={() => setNotificationDialogOpen(true)}
        onUserClick={() => setUserDialogOpen(true)}
      />
      


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
                <Image className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="downarrow.svg"/>
                </span>
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex items-center w-full justify-center px-4 rounded-md border border-neutral-400 p-1 text-sm font-normal leading-6">
                    Actions
                    <span className="ml-2 inline-block">
                      <Image className='inline-block align-middle' alt="down arrow" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="downarrow.svg"/>
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
              <Image alt="Table icon" width="13" height="12" src="table.svg" />
                Table
              </button>
              <button type="button" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-normal border border-[#747474] rounded-e-lg transition duration-700 text-gray-900 bg-transparent">
                <Image alt="Kanban icon" width="13" height="12" src="kanban.svg" />
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
                      className="fa-solid fa-circle-xmark px-2 py-2 cursor-pointer rounded-sm"></i>

                    <i
                      onClick={() => setIsCreateLeadsOpen(false)}
                      className="fa-solid fa-xmark text-black  px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black"></i>
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
                        <option value="status3">Warm Lead</option>
                        <option value="status4">Cold Lead</option>
                      </select>
                      {/* <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Stack</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Stack</option>
                                                <option value="status1">Life Skills</option>
                                                <option value="status2">Study Abroad</option>
                                                <option value="status">HR</option>
                                            </select> */}

                      {/* <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Class Mode</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Class Mode</option>
                                                <option value="status1">International Online</option>
                                                <option value="status2">India Online</option>
                                                <option value="status">BLR Classroom</option>
                                                <option value="status">HYD Classroom</option>
                                            </select> */}


                    </div>
                    <div className='w-1/2 pl-4'>
                      <label className='block font-medium text-base text-[#A8C6DF]'>Lead Status</label>
                      <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                        <option value="">Select Lead Status</option>
                        <option value="status1">NotContacted</option>
                        <option value="status2">Attempted</option>
                        <option value="status3">WarmLead</option>
                        <option value="status4">ColdLead</option>
                      </select>
                      <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Lead Source</label>
                      <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                        <option value="">Select Lead Source</option>
                        <option value="source1">None</option>
                        <option value="source2">WalkIn</option>
                        <option value="status2">StudentReferal</option>
                        <option value="status2">Demo</option>
                        <option value="status2">Website</option>
                        <option value="status2">WebsiteChat</option>
                        <option value="status2">InboundCall</option>
                        <option value="status2">GoogleAdworks</option>
                        <option value="status2">FacebookAds</option>
                        <option value="status2">GoogleMyBusiness</option>
                        <option value="status2">WhatsAppSkillCapital</option>
                      </select>
                      {/* <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Stack</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Stack</option>
                                                <option value="stack1">Life Skills</option>
                                                <option value="stack2">Study Abroad</option>
                                                <option value="stack2">HR</option>
                    
                                            </select> */}
                      {/* <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Visited Stage</label>
                                            <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                                                <option value="">Select Visited Page</option>
                                                <option value="stack1">None</option>
                                                <option value="stack2">Call Not Answered</option>
                                                <option value="stack2">Ready To Join</option>
                                                <option value="stack2">Fees Negotiation</option>
                                                <option value="stack2">Batch Allocation</option>
                                                <option value="stack2">Fans Negotiation</option>
                                            </select> */}
                      <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Course</label>
                      <input type='text' placeholder='Course' className='border-0 border-b focus:border-b-black focus:outline-none bg-white hover:bg-blue-50 text-lg font-semibold text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full' />
                      <label className='block font-medium text-base text-[#A8C6DF] mt-5'>Class Mode</label>
                      <select className='border-0 border-b focus:border-b-black focus:outline-none bg-white  text-lg font-medium text-blue-gray-700 pb-2 pt-1 border-[#0003] w-full'>
                        <option value="">HYDClassRoom</option>
                        <option value="mode1">BLRClassRoom</option>
                        <option value="mode2">IndiaOnline</option>
                        <option value="mode3">InternationalOnline</option>
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
      <div className="mt-6">
        <hr className="border-gray-300 my-2" />
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
          {/* Check-in Box */}
          <div className="flex items-center justify-center w-1/12">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </div>

          {/* Table Headings */}
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Created On</div>
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Lead Status</div>
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Name</div>
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Phone</div>
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Stack</div>
          <div className="w-1/6 text-center cursor-pointer border-r border-gray-300 font-bold">Course</div>
        </div>
      </div>
      <hr className="border-gray-300 my-2" />
    </div>


  )
}

export default Leads;

















