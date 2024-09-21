"use client"
import { useState } from 'react';
import Menu from './MenuList';
import AgGrid from './AGgrid';
import KanbanBoard from './KanbanBoard';

export default function AboveTable({ rowData,
    columnDefs,
    KanbanColumnData,
    conditioncheckData,
    actionOptions,
    Options,
    buttonName,
    menuButtonName
 }) {
   
    const [viewMode, setViewMode] = useState('table'); 
    return (
        <div className='p-3'>
            <div className='container mx-2 sm:mx-4 lg:mx-2 border-solid border-2 border-slate-300 rounded py-2 pe-2'>
                <div className="flex justify-between ms-2">
                    <div className="flex">
                        <img className='me-2' src="/employee_contact.svg" alt="icon" />
                        <Menu options={Options} name= {menuButtonName} size='18px' />
                    </div>
                    <div className="flex justify-end ">
                        <button className="text-white bg-blue-500 px-2 rounded flex items-center me-2 mb-2">
                            <span className="text-sm">{buttonName}</span><img src="/whitedownarrow.svg" alt="arrow" />
                        </button>
                        <Menu options={actionOptions} name="Actions" />
                    </div>
                </div>
                <div className="mt-2 ms-2 flex ">
                    <div className="relative">
                        <img
                            src="/search.svg"
                            alt="search icon"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            className="border-2 border-slate-300 pl-10 py-2 text-sm rounded"
                            placeholder="Search"
                            type="text"
                        />
                    </div>
                    <div className="flex ">
                        <button
                            onClick={() => setViewMode('table')}
                            className={`px-2 rounded flex items-center ms-2 ${viewMode === 'table' ? 'bg-blue-500 text-white' : 'border border-slate-300'}`}
                        >
                            <span className="text-sm">Table</span><img src="/whiteTable.svg" alt="table icon" />
                        </button>
                        <button
                            onClick={() => setViewMode('kanban')}
                            className={`px-2 rounded flex items-center ${viewMode === 'kanban' ? 'bg-blue-500 text-white' : 'border border-slate-300'}`}
                        >
                            <span className="text-sm">Kanban</span><img src="/kanban.svg" alt="kanban icon" />
                        </button>
                    </div>
                </div>

                <div className='mt-2 ms-2'>
                    {/* Conditionally render the Table or Kanban based on the state */}
                    {viewMode === 'table' ? (
                        <AgGrid rowData={rowData} columnDefs={columnDefs} />
                    ) : (
                        <KanbanBoard data={rowData} columnData ={KanbanColumnData} checkData ={conditioncheckData} />
                    )}
                </div>
            </div>
        </div>
    );
}
