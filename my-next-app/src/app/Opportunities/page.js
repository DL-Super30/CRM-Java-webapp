"use client"
import { useState } from 'react';
import Nav from './../../components/navbar'
import AboveTable from './../../components/AboveTable'
export default function Opportunities(){
    
    const [viewMode, setViewMode] = useState('table'); 
    const opportunitiesrowData = [
        {
            CreatedOn: "Task 1",
            OpportunityStatus: "Open",
            Name: "John Doe",
            Phone: "+1-555-1234",
            Stack: "Full Stack Development",
            Course: "Web Development Bootcamp"
        },
        {
            CreatedOn: "Meeting",
            OpportunityStatus: "Closed",
            Name: "Jane Smith",
            Phone: "+44-123-4567",
            Stack: "Frontend Development",
            Course: "React Masterclass"
        },
        {
            CreatedOn: "Call",
            OpportunityStatus: "In Progress",
            Name: "Alice Johnson",
            Phone: "+91-987-6543210",
            Stack: "Backend Development",
            Course: "Node.js and Express"
        },
        {
            CreatedOn: "Email",
            OpportunityStatus: "Open",
            Name: "Michael Brown",
            Phone: "+33-112-23344",
            Stack: "Mobile Development",
            Course: "Android App Development"
        },
        {
            CreatedOn: "Message",
            OpportunityStatus: "Pending",
            Name: "Emily Davis",
            Phone: "+61-499-123-456",
            Stack: "Data Science",
            Course: "Python for Data Science"
        }
    ];
    const KanbanColumnData =["visiting","Visited","Demo attended","Lost Opportunity"];
    const conditioncheckData =["Open","Attempted","In Progress","Closed"];
    const OpportunitiescolumnDefs = [
        {
            field: "CreatedOn",
            checkboxSelection: true,
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Task 1", "Meeting", "Call", "Email", "Message"],
            },
        },
        { field: "OpportunityStatus" },
        { field: "Name" },
        { field: "Phone" },
        { field: "Stack" },
        { field: "Course" },
    ];
    const actionOptions = ['Delete'];
    const opportunitiesOptions = ['All Opportunities', 'My Opportunities', "Today's Opportunities", "Yesterday's Opportunities", "This Week Opportunities", "This Month Opportunities", "Last Month Opportunities"];
    return(
        <>
        <Nav/>
        <AboveTable
       rowData={opportunitiesrowData}
       columnDefs={OpportunitiescolumnDefs}
       KanbanColumnData={KanbanColumnData}
       conditioncheckData={conditioncheckData}
       actionOptions={actionOptions}
       Options={opportunitiesOptions}
       buttonName ={"Create Opporunity"}
       menuButtonName = {"All Opportunities"}
       />
        
        </>
    )
};