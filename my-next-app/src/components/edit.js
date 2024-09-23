"use client";

import Navbar from "./navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import InputField from "./inputField";
import MyGrid from "./AGgrid";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function EditPage({ id }) {
  const options = [
    { name: "HRManager", id: 1 },
    { name: "HRBusinessPartner", id: 2 },
    { name: "HRGeneralistCoreHR", id: 3 },
    { name: "HRAnalytics", id: 4 },
    { name: "SpokenEnglish", id: 5 },
    { name: "PublicSpeaking", id: 6 },
    { name: "CommunicationSkills", id: 7 },
    { name: "SoftSkills", id: 8 },
    { name: "PersonalityDevelopment", id: 9 },
    { name: "Aptitude", id: 10 },
    { name: "IELTS", id: 11 },
    { name: "TOEFL", id: 12 },
    { name: "PTE", id: 13 },
    { name: "GRE", id: 14 },
    { name: "GMAT", id: 15 },
    { name: "RecruitmentSpecialist", id: 16 },
    { name: "PayrollSpecialist", id: 17 },
    { name: "LearningAndDevelopment", id: 18 },
    { name: "Others", id: 19 },
    { name: "Finance", id: 20 },
    { name: "CompetitiveExams", id: 21 }
  ];

  const leadStatusOptions = ["Not Contacted", "Attempted", "Warm Lead", "Cold Lead"];
  const leadSourceOptions = [
    "Select Lead Source",
    "None",
    "WalkIn",
    "StudentReferal",
    "Demo",
    "WebSite",
    "WebsiteChat",
    "InboundCall",
    "GoogleAdWords",
    "FacebookAds",
    "WhatsAppDigitalLync",
    "GoogleMyBusiness"
  ];
  const stackOptions = [
    "Select Stack",
    "LifeSkills",
    "StudyAboard",
    "HR"
  ];
  const ClassModeOptions = ["Select Class Mode", "InternationalOnline", "IndiaOnline", "BLRClassRoom", "HYDClassRoom"];
  const BatchTimingsOptions = [
    { value: "SEVEN_AM_TO_EIGHT_AM", label: "7AM-8AM" },
    { value: "EIGHT_AM_TO_NINE_AM", label: "8AM-9AM" },
    { value: "NINE_AM_TO_TEN_AM", label: "9AM-10AM" },
    { value: "TEN_AM_TO_ELEVEN_AM", label: "10AM-11AM" },
    { value: "ELEVEN_AM_TO_TWELVE_PM", label: "11AM-12AM" },
    { value: "TWELVE_PM_TO_ONE_PM", label: "12PM-1PM" },
    { value: "ONE_PM_TO_TWO_PM", label: "1PM-2PM" },
    { value: "TWO_PM_TO_THREE_PM", label: "2PM-3PM" },
    { value: "THREE_PM_TO_FOUR_PM", label: "3PM-4PM" },
    { value: "FOUR_PM_TO_FIVE_PM", label: "4PM-5PM" },
    { value: "FIVE_PM_TO_SIX_PM", label: "5PM-6PM" },
    { value: "SIX_PM_TO_SEVEN_PM", label: "6PM-7PM" },
    { value: "SEVEN_PM_TO_EIGHT_PM", label: "7PM-8PM" },
    { value: "EIGHT_PM_TO_NINE_PM", label: "8PM-9PM" },
  ];

  const idInt = parseInt(id, 10);
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };
  const handleSave = async (id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        throw new Error('No token found');
      }
  
      const response = await fetch(`http://localhost:8080/leads/updateLeadById/${idInt}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Data updated successfully");
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };  
  const router = useRouter();
  const platformOptions = {
    "New Task": "new_task",
    "Meeting": "new_meeting",
    "Email": "email",
    "call": "phone",
    "whatsapp": "whatsapp",
    "message": "message",
    "slack": "slack"
  };

  const [data, setData] = useState({});
  const [activeSection, setActiveSection] = useState("Details");
  const [platform, setPlatform] = useState("New Task");

  useEffect(() => {
    getLeadbyId()
  }, [id]);

  const getLeadbyId = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        throw new Error('No token found');
      }

      console.log('Token:', `Bearer ${token}`);
      console.log('Fetching data for ID:', typeof id);
      console.log('Fetching data for ID:', typeof idInt);
      const response = await axios.get(`http://localhost:8080/leads/getLeadById/${idInt}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const activityrowData = [
    { Subject: "Task 1", DueDate: "2024-09-01", Priority: "High", Owner: true },
    { Subject: "Meeting", DueDate: "2024-09-02", Priority: "Medium", Owner: false },
  ];

  const activitycolumnDefs = [
    {
      field: "Subject",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "DueDate" },
    { field: "Priority" },
    { field: "Owner" },
  ];

  const notesrowData = [
    { CreatedAt: "Task 1", Content: "2024-09-01", Action: "High" },
    { CreatedAt: "Meeting", Content: "2024-09-02", Action: "Medium" },
  ];

  const notescolumnDefs = [
    {
      field: "CreatedAt",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "Content" },
    { field: "Action" },
  ];
  const meetingrowData = [
    { NewMeeting: "Task 1", Location: "2024-09-01", From: "High", To: "bvrm", Host: "nikhil", Participants: "5" },
    { NewMeeting: "Meeting", Location: "2024-09-01", From: "High", To: "bvrm", Host: "akhil", Participants: "10" },
  ];

  const meetingcolumnDefs = [
    {
      field: "NewMeeting",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "Location" },
    { field: "From" },
    { field: "To" },
    { field: "Host" },
    { field: "Participants" },
  ];

  const emailrowData = [
    { From: "Task 1", To: "2024-09-01", Bcc: "High", Subject: "bvrm", Body: "nikhil" },
    { From: "Meeting", To: "2024-09-01", Bcc: "High", Subject: "bvrm", Body: "Akhil" },
  ];

  const emailcolumnDefs = [
    {
      field: "From",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "To" },
    { field: "Bcc" },
    { field: "Subject" },
    { field: "Body" },
  ];
  const callrowData = [
    { FileName: "Task 1", CreatedOn: "2024-09-01", CallerId: "id", AnsweredSeconds: "AgentNo", AgentNo: "1", Status: "bvrm", Direction: "nikhil" },
  ];

  const callcolumnDefs = [
    {
      field: "FileName",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "CreatedOn" },
    { field: "CallerId" },
    { field: "AnsweredSeconds" },
    { field: "AgentNo" },
    { field: "Status" },
    { field: "Direction" },
  ];
  const whatsapprowData = [
    { Phone: "Task 1", Message: "2024-09-01" },
  ];

  const whatsappcolumnDefs = [
    {
      field: "Phone",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "Message" },
  ];

  const messagerowData = [
    { Phone: "Task 1", Message: "2024-09-01" },
  ];

  const messagecolumnDefs = [
    {
      field: "Phone",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "Message" },
  ];
  const slackrowData = [
    { Phone: "Task 1", Message: "2024-09-01" },
  ];

  const slackcolumnDefs = [
    {
      field: "Phone",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Task 1", "Meeting", "Call", "Email", "Message"],
      },
    },
    { field: "Message" },
  ];

  const backfunc = () => {
    router.push(`/Leads`);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-between mx-3 border border-b-slate-500 p-2">
        <div className="flex flex-wrap">
          <Image src="/arrow.svg" width={20} height={8} alt="phone" onClick={backfunc} />
          <span className="me-1 mt-2">Back</span>
          <Image src="/employee_contact.svg" width={45} height={20} alt="employee_contact" />
          <span className="ms-1 mt-2 font-bold">{data.name}</span>
        </div>
        <Button className="text-white w-full sm:w-auto" variant="contained" size="small">
          Convert
        </Button>
      </div>
      <div className="flex justify-between px-10 p-2 shadow-lg">
        <div>
          <p className="font-medium text-sm"> Email</p>
          <p className="font-medium text-sm">{data.email}</p>
        </div>
        <div>
          <p className="font-medium text-sm">Phone</p>
          <div className="flex">
            <Image src="/phone.svg" width={15} height={5} alt="phone" />
            <p className="font-medium text-[#1B96FF] text-sm">+91 {data.phone}</p>
          </div>
        </div>
        <div>
          <p className="font-medium text-sm">Course</p>
          <div className="flex">
            <Image src="/schoolar.svg" width={20} height={8} alt="level" />
            <p className="font-medium text-sm">
              {Array.isArray(data.courses) && data.courses.length > 0
                ? data.courses.length === 1
                  ? data.courses[0]
                  : data.courses.join(', ')
                : ''}
            </p>


          </div>
        </div>
        <div>
          <p className="font-medium text-sm">Lead Status</p>
          <div className="flex">
            <Image src="/level.svg" width={20} height={8} alt="level" />
            <p className="font-medium text-green-500 text-sm">{data.leadStatus}</p>
          </div>
        </div>
      </div>

      <div className="shadow-lg mx-3 p-2">
        <div className="flex justify-start mx-3 mt-4 pt-3">
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
                <InputField label="Name" value={5} defaultValue={data.name} onChange={handleInputChange}  />
                <InputField label="Lead Status" value={5} defaultValue={data.leadStatus} onChange={handleInputChange}  />
              </div>
              <div className="flex justify-between">
                <InputField label="CC" defaultValue={data.cc} onChange={handleInputChange}  />
                <InputField label="Lead Source" defaultValue={data.leadSource} onChange={handleInputChange}  />
              </div>
              <div className="flex justify-between">
                <InputField label="Phone" defaultValue={data.phone} onChange={handleInputChange}  />
                <InputField label="Stack" defaultValue={data.stack} onChange={handleInputChange}  />
              </div>
              <div className="flex justify-between">
                <InputField label="Email" defaultValue={data.email} onChange={handleInputChange} />
                <InputField label="Course" defaultValue={Array.isArray(data.courses)
                  ? data.courses.length === 1
                    ? data.courses[0]
                    : data.courses.join(', ')
                  : ''} onChange={handleInputChange} />
              </div>
              <div className="flex justify-between">
                <InputField label="Fee Quoted" defaultValue={data.feeQuoted} onChange={handleInputChange}  />
                <InputField label="Class Mode" defaultValue={data.classmode} onChange={handleInputChange}  />
              </div>
              <div className="flex justify-between">
                <InputField label="Batch Timing" defaultValue={data.batchTiming} onChange={handleInputChange}  />
                <InputField label="Next FollowUp" defaultValue={data.nextFollowUp} onChange={handleInputChange}  />
              </div>
              <div className="flex justify-between">
                <InputField label="Description" width="90rem" defaultValue={data.description} onChange={handleInputChange}  />
              </div>
            </>
          )}

          {activeSection === "Activity" && (
            <>
              <div className="mt-5">
                {Object.entries(platformOptions).map(([displayText, imageName]) => (
                  <Button key={displayText} className="p-0 me-4" onClick={() => setPlatform(displayText)}>
                    <div className="border border-black p-2 rounded flex">
                      <Image
                        src={`/${imageName}${displayText === 'slack' ? '.png' : '.svg'}`}
                        width={20}
                        height={8}
                        alt={displayText}
                      />
                      <span className="ms-2">{displayText}</span>
                    </div>
                  </Button>

                ))}
              </div>

              {platform === "New Task" && (
                <>
                  <div className="container mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New Task</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={activityrowData} columnDefs={activitycolumnDefs} />
                  </div>
                </>
              )}
              {platform === "Meeting" && (
                <>
                  <div className="container mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New Meeting</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={meetingrowData} columnDefs={meetingcolumnDefs} />
                  </div>
                </>
              )}
              {platform === "Email" && (
                <>
                  <div className="container mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New Email</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={emailrowData} columnDefs={emailcolumnDefs} />
                  </div>
                </>
              )}
              {platform === "call" && (
                <>
                  <div className="container flex mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New call</span>
                      </div>
                    </Button>
                    <Button className="p-0 me-4 mt-8  block">
                      <div className="p-2 rounded flex">
                        <Image src="/download.svg" width={20} height={8} alt="download" />
                        <p className="ms-2">Download</p>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={callrowData} columnDefs={callcolumnDefs} />
                  </div>
                </>
              )}
              {platform === "whatsapp" && (
                <>
                  <div className="container flex mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8  block">
                      <div className="p-2 rounded flex">
                        <Image src="/refresh.svg" width={20} height={8} alt="download" />
                        <p className="ms-2">Refresh</p>
                      </div>
                    </Button>
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New Message</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={messagerowData} columnDefs={messagecolumnDefs} />
                  </div>
                </>
              )}
              {platform === "message" && (
                <>
                  <div className="container flex mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8  block">
                      <div className="p-2 rounded flex">
                        <Image src="/refresh.svg" width={20} height={8} alt="download" />
                        <p className="ms-2">Refresh</p>
                      </div>
                    </Button>
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New SMS</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={whatsapprowData} columnDefs={whatsappcolumnDefs} />
                  </div>
                </>
              )}
              {platform === "slack" && (
                <>
                  <div className="container flex mx-auto mt-5 border-t border-slate">
                    <Button className="p-0 me-4 mt-8  block">
                      <div className="p-2 rounded flex">
                        <Image src="/refresh.svg" width={20} height={8} alt="download" />
                        <p className="ms-2">Refresh</p>
                      </div>
                    </Button>
                    <Button className="p-0 me-4 mt-8 bg-[#0284C7] block">
                      <div className="p-2 rounded bg-[#0284C7]">
                        <span className="ms-2 text-white">+ New SMS</span>
                      </div>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <MyGrid rowData={slackrowData} columnDefs={slackcolumnDefs} />
                  </div>
                </>
              )}
            </>
          )}
          {activeSection === "Notes" && (
            <>
              <div className="flex justify-between mt-5">
                <div><span className="font-bold mt-2">Notes</span></div>
                <div>
                  <Button className="p-0 me-4 bg-[#0284C7] block">
                    <div className="p-2 rounded bg-[#0284C7]">
                      <span className="ms-2 text-white">+ New Note</span>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="mt-5">
                <MyGrid rowData={notesrowData} columnDefs={notescolumnDefs} />
              </div>
            </>
          )}

          {activeSection === "Ask Ai" && (
            <>
              <div>
                <textarea placeholder=" Ask me anything" className="w-full border mt-5 h-40 rounded-lg border border-gray-300 focus:outline-none placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 "></textarea>
              </div>
              <div className="bg-gray-200 rounded-md mt-4 py-8">
                <p className="flex gap-5 bg-sky-200 p-4"><Image src="/bulb.svg" width={20} height={8} alt="bulb" />Power of AI at your fingertips. Ask me anything.</p>
              </div>
            </>
          )}
          {activeSection === "Details" && (
            <div className="flex justify-center mt-2">
              <Button className="me-1 px-14" variant="outlined" size="large" sx={{ textTransform: "none" }}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="px-14" variant="contained" size="large" sx={{ textTransform: "none" }}>
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
