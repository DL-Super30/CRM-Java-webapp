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
  { field: 'Created on', headerName: 'Created on', width: 250 },
  { field: 'Lead Status', headerName: 'Lead Status', width: 250 },
  { field: 'Name', headerName: 'Name', width: 250 },
  { field: 'Phone', headerName: 'Phone', width: 250 },
  { field: 'Stack', headerName: 'Stack', width: 250 },
  { field: 'Course', headerName: 'Course', width: 250 },


];

const rows = [
  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 250 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  width: 1100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Leads() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar />
      <div className='p-3'>
        <div className='container mx-2 me-10 border-solid border-2 border-slate-300 rounded py-2 pe-2 '>
          <div>
            <div className='flex justify-between mx-3'>
              <div className='flex'>
                <Image src="/employee_contact.svg" width={50} height={16} alt='employee_contact' />
                <p className='text-lg font-medium mt-2 mx-2'>ALL Leads</p>
                <Image src="/downarrow.svg" height={15} width={15} alt='downarrow.svg' />
              </div>
              <div className='mt-2'>
                <Button onClick={handleOpen} className='text-white me-1' variant="contained">Create Lead <Image src="/whitedownarrow.svg" height={15} width={15} alt='white downarrow.svg' /></Button>
                <Button className='text-slate-950 border border-slate-500' variant="outlined">Actions <Image src="/downarrow.svg" height={15} width={15} alt='downarrow.svg' /></Button>
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
                          <Image src="/employee_contact.svg" width={40} height={16} alt='employee_contact'/>
                          <p className='text-lg font-medium mt-2 mx-2'>Create Leads</p>
                        </div>
                        <div>
                          <button onClick={handleClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button>
                        </div>
                      </div>
                      <div className='border-t-2'>
                      <BasicTextFields/>
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
                />
              </Search>
            </div>
            <div className='mt-2 ms-2'>
              <Button className='text-white border-r-0' variant="contained"><Image src="/whiteTable.svg" height={15} width={15} alt='whiteTable.svg' /> Table</Button>
              <Button className='text-slate-950 border border-slate-500 border-l-0' variant="outlined"><Image src="/kanban.svg" height={15} width={15} alt='kanban.svg' /> kanban</Button>
            </div>
          </div>

          <div className='p-3'>
            <div style={{ height: 550, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );

}