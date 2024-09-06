"use client";

import Navbar from "./navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import InputField from "./inputField";
import MyGrid from "./AGgrid";
import { useState, useEffect} from "react";
import axios from 'axios';


export default function EditPage({ id }) {
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
      const idInt = parseInt(id, 10);
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

  return (
    <>
      <Navbar />
      <div className="flex justify-between mx-3 border border-b-slate-500 p-2">
        <div className="flex flex-wrap">
          <Image src="/arrow.svg" width={20} height={8} alt="phone" />
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
              {Array.isArray(data.courses)
                ? data.courses.length > 0
                  ? data.courses.length === 1
                    ? data.courses[0]
                    : data.courses.join(', ')
                  : 'No courses available'
                : 'No courses available'}
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
                <InputField label="Name" value={5} defaultValue={data.name} />
                <InputField label="Lead Status" value={5} defaultValue={data.leadStatus} />
              </div>
              <div className="flex justify-between">
                <InputField label="CC" defaultValue={data.cc} />
                <InputField label="Lead Source" defaultValue={data.leadSource} />
              </div>
              <div className="flex justify-between">
                <InputField label="Phone" defaultValue={data.phone} />
                <InputField label="Stack" defaultValue={data.stack} />
              </div>
              <div className="flex justify-between">
                <InputField label="Email" defaultValue={data.email} />
                <InputField label="Course" defaultValue={Array.isArray(data.courses)
                  ? data.courses.length > 0
                    ? data.courses.length === 1
                      ? data.courses[0]
                      : data.courses.join(', ')
                    : 'No courses available'
                  : 'No courses available'} />
              </div>
              <div className="flex justify-between">
                <InputField label="Fee Quoted" defaultValue={data.feeQuoted} />
                <InputField label="Class Mode" defaultValue={data.classmode} />
              </div>
              <div className="flex justify-between">
                <InputField label="Description" width="91rem" defaultValue={data.description} />
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
            <div>
              <p>Ask Ai content will be displayed here.</p>
            </div>
          )}
          {activeSection === "Details" && (
            <div className="flex justify-center mt-2">
              <Button className="me-1 px-14" variant="outlined" size="large" sx={{ textTransform: "none" }}>
                Cancel
              </Button>
              <Button className="px-14" variant="contained" size="large" sx={{ textTransform: "none" }}>
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
