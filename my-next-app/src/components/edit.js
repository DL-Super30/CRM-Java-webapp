import Navbar from "./navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import InputField from "./InputField";
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
               <InputField label="Name" value={5} />
               <InputField label="Lead Status" value={5} />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="CC" />
               <InputField label="Lead Source" />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="Phone" />
               <InputField label="Stack" />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="Email" />
               <InputField label="Course" />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="Fee Quoted" />
               <InputField label="Class Mode" />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="CC" />
               <InputField label="Lead Source" />
            </div>
            <div className=" mx-5  flex justify-between">
               <InputField label="Description" width="91rem" />
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
