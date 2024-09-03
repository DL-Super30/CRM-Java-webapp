"use client";
import React from 'react';
import Navbar from './../../components/navbar'
import Image from 'next/image'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { styled, alpha } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BasicTextFields from './../../components/input'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
    maxWidth: '300px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const columns = [
  { field: 'Createdon', headerName: 'Created on', width: 240 },
  { field: 'LeadStatus', headerName: 'Lead Status', width: 240 },
  { field: 'Name', headerName: 'Name', width: 240 },
  { field: 'Phone', headerName: 'Phone', width: 240 },
  {
    field: 'Stack', headerName: 'Stack', width: 240,
    renderCell: (params) => {
      return (
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            borderRadius: '20px',
            paddingRight: '30px',
            paddingLeft: '30px',
            color: 'black',
            backgroundColor: params.value === 'LifeSkills'
              ? '#F76C00'
              : params.value === 'StudyAboard'
                ? '#EFB701'
                : params.value === 'HR'
                  ? '#A8C6DF'
                  : '#D3D3D3',
          }}
        >
          {params.value}
        </Button>
      );
    }
  },
  {
    field: 'ClassMode', headerName: 'Class Mode', width: 200,
    renderCell: (params) => (
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          borderRadius: '20px',
          paddingRight: '30px',
          paddingLeft: '30px',
          color: 'black',
          backgroundColor: params.value === 'HYDClassRoom' ? '#818bf8' : params.value === 'BLRClassRoom' ? '#C6C6F7' : params.value === 'InternationalOnline' ? 'rgb(243,92,244)' : '#D3D3D3',
        }}
      >
        {params.value}
      </Button>
    )
  },


];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '72vw',
  height: '98vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const filteredData = data.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:8080/leads/getAllLeads', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRowSelection = (selection) => {
    if (selection.length > 0) {
      setSelectedRowId(selection[0]);
    } else {
      setSelectedRowId(null);
    }
  };

  const handleDelete = async () => {
    const selectedRowData = data.find((row, index) => index === selectedRowId);

    if (!selectedRowData) {
      console.error('No row selected for deletion');
      return;
    }

    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        throw new Error('No token found');
      }

      await axios.delete(`http://localhost:8080/leads/${selectedRowData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
      // After successful deletion from the backend, update the UI
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  // console.log(data);
  const [viewMode, setViewMode] = useState('table');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseForMenu = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleTableViewClick = () => setViewMode('table');
  const handleKanbanViewClick = () => setViewMode('kanban');

  return (
    <>
      <Navbar />
      <div className='p-3'>
        <div className='container mx-2 sm:mx-4 lg:mx-2 border-solid border-2 border-slate-300 rounded py-2 pe-2'>
          <div>
            <div className='flex justify-between mx-3'>
              <div className='flex flex-wrap'>
                <Image src="/employee_contact.svg" width={50} height={16} alt='employee_contact' />
                <p className='text-lg font-medium mt-2 mx-2'>ALL Leads</p>
                <Image src="/downarrow.svg" height={15} width={15} alt='downarrow.svg'
                  id="fade-button2"
                  aria-controls={open2 ? 'fade-menu2' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? 'true' : undefined}
                  onClick={handleClick2}
                  style={{ marginLeft: '20px' }} />
                <Menu
                  id="fade-menu2"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button2',
                  }}
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>All Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>My Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>Todays Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>Yesterdays Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>This Week Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>This Month Leads</MenuItem>
                  <MenuItem onClick={handleClose2} style={{ borderBottom: "2px solid #E5E5E5" }}>Last Month Leads</MenuItem>
                </Menu>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                <Button onClick={handleOpen} className='text-white w-full sm:w-auto' variant="contained" size='small'>Create Lead <Image src="/whitedownarrow.svg" height={15} width={15} alt='white downarrow.svg' /></Button>
                <Button
                  id="fade-button"
                  aria-controls={open1 ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? 'true' : undefined}
                  onClick={handleClick}
                  className='text-slate-950 border border-slate-500 w-full sm:w-auto' variant="outlined" size='small'>Actions <Image src="/downarrow.svg" height={15} width={15} alt='downarrow.svg' /></Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleCloseForMenu}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => {
                    handleCloseForMenu();
                    handleDelete();
                  }} >Delete</MenuItem>
                </Menu>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box className='rounded-md border-0' sx={style}>
                      <div className='flex justify-between mx-3  p-2'>
                        <div className='flex'>
                          <Image src="/employee_contact.svg" width={40} height={16} alt='employee_contact' />
                          <p className='text-lg font-medium mt-2 mx-2'>Create Leads</p>
                        </div>
                        <div>
                          <button onClick={handleClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button>
                        </div>
                      </div>
                      <div className='border-t-2 '>
                        <BasicTextFields onCancel={handleClose} fetchAllLeads={fetchData} />
                      </div>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div>
              <Search className='border border-slate-500  m-0 ms-3 mt-2 p-0'>
                <SearchIconWrapper >
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Search>
            </div>
            <div className='mt-2 ms-2'>
              <Button className='text-white border-r-0 w-full sm:w-auto ms-2' variant="contained" onClick={handleTableViewClick}><Image src="/whiteTable.svg" height={15} width={15} alt='whiteTable.svg' /> Table</Button>
              <Button className='text-slate-950 border border-slate-500 border-l-0 w-full sm:w-auto ' variant="outlined" onClick={handleKanbanViewClick}><Image src="/kanban.svg" height={15} width={15} alt='kanban.svg' /> kanban</Button>
            </div>
          </div>

          <div className='p-3'>
            {viewMode === 'table' ? (
              <div className='w-full' style={{ height: '65vh' }}>
                <DataGrid
                  rows={filteredData.map((item, index) => ({
                    id: index,
                    Createdon: item.nextFollowUp,
                    LeadStatus: item.leadStatus,
                    Name: item.name,
                    Phone: item.phone,
                    Stack: item.stack,
                    ClassMode: item.classmode,
                  }))}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  onRowSelectionModelChange={(newSelection) => {
                    handleRowSelection(newSelection);
                  }}
                />
              </div>
            ) : (
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  <div className='bg-green-100 p-4 md:p-2 rounded border-4 border-green-100 border-t-green-500'>
                    <p>Not Contacted</p>
                    <p>₹ 0.00 . Leads</p>
                  </div>
                  <div className='bg-[#DBEAFE] p-4 md:p-2 rounded border-4 border-[#DBEAFE] border-t-[#93C5FD]'>
                    <p>Attempted</p>
                    <p>₹ 0.00 . Leads</p>
                  </div>
                  <div className='bg-[#FFEDD5] p-4 md:p-2 rounded border-4 border-[#FFEDD5] border-t-[#A8A29E]' >
                    <p>Warm Lead</p>
                    <p>₹ 0.00 . Leads</p>
                  </div>
                  <div className='bg-[#E0E7FF] p-4 md:p-2 rounded border-4 border-[#E0E7FF] border-t-[#94A3B8]'>
                    <p>Cold Lead</p>
                    <p>₹ 0.00 . Leads</p>
                  </div>
                </div>
                <div className='grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                      {data.filter(item => item.leadStatus === "NotContacted").map((item, index) => (
                        <div key={index} className='bg-white mb-2 p-2 rounded'>
                          <p className="font-bold">{item.name}</p>
                          <p>{item.nextFollowUp}</p>
                          <p>{item.phone}</p>
                          <p>{item.description}</p>
                          <p>Nisha: she is from investment banking</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                      {data.filter(item => item.leadStatus === "Attempted").map((item, index) => (
                        <div key={index} className='bg-white mb-2 p-2 rounded'>
                          <p className="font-bold">{item.name}</p>
                          <p>{item.nextFollowUp}</p>
                          <p>{item.phone}</p>
                          <p>{item.description}</p>
                          <p>Nisha: she is from investment banking</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                      {data.filter(item => item.leadStatus === "WarmLead").map((item, index) => (
                        <div key={index} className='bg-white mb-2 p-2 rounded'>
                          <p className="font-bold">{item.name}</p>
                          <p>{item.nextFollowUp}</p>
                          <p>{item.phone}</p>
                          <p>{item.description}</p>
                          <p>Nisha: she is from investment banking</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                      {data.filter(item => item.leadStatus === "ColdLead").map((item, index) => (
                        <div key={index} className='bg-white mb-2 p-2 rounded'>
                          <p className="font-bold">{item.name}</p>
                          <p>{item.nextFollowUp}</p>
                          <p>{item.phone}</p>
                          <p>{item.description}</p>
                          <p>Nisha: she is from investment banking</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



              </div>

            )}
          </div>

        </div>
      </div>
    </>
  );

}