"use client";
import Navbar from "./navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import MyGrid from "./aggrid";
import { useState } from 'react';
export default function editPage() {
   const [activeSection, setActiveSection] = useState("Details");
   return (
      <>
         <Navbar />
         <div className="flex justify-between mx-3 border border-b-slate-500 p-2">
            <div className="flex flex-wrap">
               <Image src="/arrow.svg" width={20} height={8} alt="phone" />
               <span className="me-1 mt-2">Back</span>
               <Image
                  src="/employee_contact.svg"
                  width={45}
                  height={20}
                  alt="employee_contact"
               />
               <span className="ms-1 mt-2 font-bold">Lakshmi</span>
            </div>
            <Button
               className="text-white w-full sm:w-auto"
               variant="contained"
               size="small"
            >
               Covert
            </Button>
         </div>
         <div className="flex justify-between px-10 p-2 shadow-lg ">
            <div>
               <p className="font-medium text-sm">Email</p>
               <p className="font-medium text-sm">lakshmi@gmail.com</p>
            </div>
            <div>
               <p className="font-medium text-sm">Phone</p>
               <div className="flex">
                  <Image src="/phone.svg" width={15} height={5} alt="phone" />
                  <p className="font-medium text-[#1B96FF] text-sm">+91 8754216598</p>
               </div>
            </div>
            <div>
               <p className="font-medium text-sm">Course</p>
               <div className="flex">
                  <Image src="/schoolar.svg" width={20} height={8} alt="level" />
                  <p className="font-medium text-sm">Soft Skills, Aptitude</p>
               </div>
            </div>
            <div>
               <p className="font-medium text-sm">Lead Status</p>
               <div className="flex">
                  <Image src="/level.svg" width={20} height={8} alt="level" />
                  <p className="font-medium  text-green-500 text-sm">Warm Lead</p>
               </div>
            </div>
         </div>

         <div className="shadow-lg mx-3 p-2">
            <div className="flex justify-start mx-3 mt-4 pt-3 ">
               <button
                  className={`mx-4 border-b-2 ${activeSection === "Details" ? "border-blue-500" : "border-transparent"} hover:border-blue-500`}
                  onClick={() => setActiveSection("Details")}
               >
                  Details
               </button>
               <button
                  className={`mx-2 border-b-2 ${activeSection === "Activity" ? "border-blue-500" : "border-transparent"} hover:border-blue-500`}
                  onClick={() => setActiveSection("Activity")}
               >
                  Activity
               </button>
               <button
                  className={`mx-2 border-b-2 ${activeSection === "Notes" ? "border-blue-500" : "border-transparent"} hover:border-blue-500`}
                  onClick={() => setActiveSection("Notes")}
               >
                  Notes
               </button>
               <button
                  className={`mx-2 border-b-2 ${activeSection === "Ask Ai" ? "border-blue-500" : "border-transparent"} hover:border-blue-500`}
                  onClick={() => setActiveSection("Ask Ai")}
               >
                  Ask Ai
               </button>
            </div>
            <div className="border border-transparent border-t-slate-300 mx-5">
               {activeSection === "Details" && (
                  <>
                     <div className="flex justify-between">
                        <InputField label="Name" value={5} />
                        <InputField label="Lead Status" value={5} />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="CC" />
                        <InputField label="Lead Source" />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="Phone" />
                        <InputField label="Stack" />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="Email" />
                        <InputField label="Course" />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="Fee Quoted" />
                        <InputField label="Class Mode" />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="CC" />
                        <InputField label="Lead Source" />
                     </div>
                     <div className="flex justify-between">
                        <InputField label="Description" width="91rem" />
                     </div>
                  </>
               )}

               {activeSection === "Activity" && (
                  <>
                     <div className="mt-5">
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/new_task.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">New Task</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/new_meeting.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">Meeting</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/email.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">Email</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/log_call.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">Log call</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/whatsapp.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">Whatsapp</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/message.svg" width={20} height={8} alt="level" />
                              <span className="ms-2">Message</span>
                           </div>
                        </Button>
                        <Button className="p-0 me-4">
                           <div className="border border-black p-2 rounded flex">
                              <Image src="/slack (1).png" width={25} height={5} alt="level" />
                              <span className="ms-2">Slack</span>
                           </div>
                        </Button>
                     </div>
                     <div className="container mx-auto mt-5 border-t border-slate">
                        <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                           <div className="p-2 rounded bg-[#0284C7]">
                              <span className="ms-2 text-white">+ New Task</span>
                           </div>
                        </Button>
                     </div>
                     <div className="mt-5">
                       <MyGrid />
                     </div>

                  </>
               )}

               {activeSection === "Notes" && (
                  <div>
                     {/* Notes Content Goes Here */}
                     <p>Notes content will be displayed here.</p>
                  </div>
               )}

               {activeSection === "Ask Ai" && (
                  <div>
                     {/* Ask Ai Content Goes Here */}
                     <p>Ask Ai content will be displayed here.</p>
                  </div>
               )}
            </div>

            {activeSection === "Details" && (
               <div className="flex justify-center mt-2">
                  <Button
                     className="me-1 px-14"
                     variant="outlined"
                     size="large"
                     sx={{ textTransform: "none" }}
                  >
                     Cancel
                  </Button>
                  <Button
                     className="px-14"
                     variant="contained"
                     size="large"
                     sx={{ textTransform: "none" }}
                  >
                     Save
                  </Button>
               </div>
            )}
         </div>
      </>
   );
}