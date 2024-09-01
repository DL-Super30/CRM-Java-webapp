import Navbar from "./navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
export default function editPage() {
   return (
      <>
         <Navbar />
         <div className="flex justify-between mx-3 border border-b-slate-500 p-2">
            <div className="flex flex-wrap">
               <span className="me-1 mt-2">Back</span>
               <Image
                  src="/employee_contact.svg"
                  width={45}
                  height={20}
                  alt="employee_contact"
               />
               <span className="ms-1 mt-2">Lakshmi</span>
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
               <p className="font-medium text-sm">Soft Skills, Aptitude</p>
            </div>
            <div>
               <p className="font-medium text-sm">Lead Status</p>
               <p className="font-medium text-green-500 text-sm">Warm Lead</p>
            </div>
         </div>

         <div className="shadow-lg mx-3 p-2">
         <div className="flex justify-start mx-3 mt-4 pt-3 ">
            <button className="mx-4 border-b-2 border-transparent  hover:border-blue-500">Details</button>
            <button className="mx-2 border-b-2 border-transparent hover:border-blue-500">Activity</button>
            <button className="mx-2 border-b-2 border-transparent hover:border-blue-500">Notes</button>
            <span className="mx-2 border-b-2 border-transparent hover:border-blue-500">Ask Ai</span>
         </div>
         <div className="border border-transparent border-t-slate-300  mx-5  flex justify-between">
            <div className="mt-4">
               <p className="text-sm">Name</p>
               <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg"
                        alt="icon"
                        width={20}
                        height={20}
                     />
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <p className="text-sm">Lead Status</p>
               <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-2">
               <p className="text-sm">CC</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
            <div className="mt-2">
               <p className="text-sm">Lead Source</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-2">
               <p className="text-sm">Phone</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
            <div className="mt-2">
               <p className="text-sm">Stack</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-2">
               <p className="text-sm">Email</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
            <div className="mt-2">
               <p className="text-sm">Course</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-4">
               <p className="text-sm">Fee Quoted</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <p className="text-sm">Class Mode</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-4">
               <p className="text-sm">CC</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <p className="text-sm">Lead Source</p>
              <div className="relative w-[45rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className=" mx-5  flex justify-between">
            <div className="mt-4">
               <p className="text-sm">Description</p>
               <div className="relative w-[91rem]">
                  <input
                     type="text"
                     className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
                  />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Image
                        src="/pencil.svg" 
                        alt="icon"
                        width={20} 
                        height={20} 
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="flex justify-center mt-2 ">
            <Button className="me-1 px-14" variant="outlined" size="large" sx={{ textTransform: 'none' }}>
               Cancel
            </Button>
            <Button className="px-14" variant="contained" size="large" sx={{ textTransform: 'none' }}>
               Save
            </Button>
         </div>
         </div>
      </>
   );
}
