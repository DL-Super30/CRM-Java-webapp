"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CancelIcon from '@mui/icons-material/Cancel';

const LeadStatus = [
  {
    value: "Select Lead Status",
    label: "Select Lead Status",
  },
  {
    value: "USD",
    label: "Not Contacted",
  },
  {
    value: "EUR",
    label: "Attempted",
  },
  {
    value: "BTC",
    label: "Warm Lead",
  },
  {
    value: "JPY",
    label: "Cold Lead",
  },
];

const LeadSource = [
  {
    value: "Select Lead Source",
    label: "Select Lead Source",
  },
  {
    value: "None",
    label: "None",
  },
  {
    value: "Walk In",
    label: "Walk In",
  },
  {
    value: "Student Referal",
    label: "Student Referal",
  },
  {
    value: "Demo",
    label: "Demo",
  },
  {
    value: "Website",
    label: "Website",
  },
  {
    value: "USD",
    label: "Website Chat",
  },
  {
    value: "EUR",
    label: "Inbound Call",
  },
  {
    value: "BTC",
    label: "Google AdWords",
  },
  {
    value: "Facebook Ads",
    label: "Facebook Ads",
  },
  {
    value: "JPY",
    label: "WhatsApp - Skill Capital",
  },
];

const Stacks = [
  {
    value: "Select Stack",
    label: "Select Stack",
  },
  {
    value: "BTC",
    label: "Life Skills",
  },
  {
    value: "Facebook Ads",
    label: "Study Aboard",
  },
  {
    value: "JPY",
    label: "HR",
  },
];

const ClassMode = [
  {
    value: "Select Class Mode",
    label: "Select Class Mode",
  },
  {
    value: "International Online",
    label: "International Online",
  },
  {
    value: "India Online",
    label: "India Online",
  },
  {
    value: "BLR ClassRoom",
    label: "BLR ClassRoom",
  },
  {
    value: "HYD ClassRoom",
    label: "HYD ClassRoom",
  },

]

const BatchTimings = [
  {
    value: "Select Class Mode",
    label: "7AM-8AM",
  },
  {
    value: "International Online",
    label: "8AM-9AM",
  },
  {
    value: "India Online",
    label: "9AM-10AM",
  },
  {
    value: "BLR ClassRoom",
    label: "11AM-12AM",
  },
  {
    value: "HYD ClassRoom",
    label: "12PM-1PM",
  },
  {
    value: "1PM-2PM",
    label: "1PM-2PM",
  },
  {
    value: "2PM-3PM",
    label: "2PM-3PM",
  },
  {
    value: "3PM-4PM",
    label: "3PM-4PM",
  },
  {
    value: "4PM-5PM",
    label: "4PM-5PM",
  },
  {
    value: "6PM-7PM",
    label: "6PM-7PM",
  },
  {
    value: "7PM-8PM",
    label: "7PM-8PM",
  },
  {
    value: "8PM-9PM",
    label: "8PM-9PM",
  },



]
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "HR Business Partner",
  "HR Generalist Core HR",
  "HR Analytics",
  "Spoken English",
  "Public Speaking",
  "Communication Skills",
  "Soft Skills",
  "Personality Development",
  "Aptitude",
  "IELTS",
  "TOEFL",
  "PTE",
  "GRE",
  "GMAT",
  "Recruitment Specialist",
  "Payroll Specialist",
  "Learning and Development",
  "Others",
  "Finance",
  "Competitive Exams",
];

function getStyles(name, courses, theme) {
  return {
    fontWeight:
      courses.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function BasicTextFields() {

  const [name, setName] = React.useState("");
  const [leadStatus, setLeadStatus] = React.useState("Select Lead Status");
  const [cc, setCc] = React.useState("91");
  const [leadSource, setLeadSource] = React.useState("Select Lead Source");
  const [phone, setPhone] = React.useState("");
  const [stack, setStack] = React.useState("Select Stack");
  const [email, setEmail] = React.useState("");
  const [feeQuoted, setFeeQuoted] = React.useState(0);
  const [classMode, setClassMode] = React.useState("Select Class Mode");
  const [batchTiming, setBatchTiming] = React.useState("Select Class Mode");
  const [nextFollowUp, setNextFollowUp] = React.useState(null);
  const [description, setDescription] = React.useState("");

  const handleCreate = () => {
    const formData = {
      name,
      leadStatus,
      cc,
      leadSource,
      phone,
      stack,
      email,
      feeQuoted,
      classMode,
      batchTiming,
      nextFollowUp: nextFollowUp ? nextFollowUp.format('YYYY-MM-DD HH:mm:ss') : null,
      description,
      courses: courses,
    };
  
    console.log(JSON.stringify(formData, null, 2));
  };
  


  const theme = useTheme();
  const [courses, setcourses] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcourses(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleDelete = (valueToDelete) => {
    setcourses(courses.filter(value => value !== valueToDelete));
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="name" style={{ color: '#A8C6DF' }}>Name</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="name"
            variant="standard"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="leadStatus" style={{ color: '#A8C6DF' }} >Leads Status</label>
          <TextField
            select
            defaultValue="Select Lead Status"
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Leads Status"
            InputProps={{ style: { fontWeight: "bold" } }}
            value={leadStatus}
            onChange={(e) => setLeadStatus(e.target.value)}
          >
            {LeadStatus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="cc" style={{ color: '#A8C6DF' }}>CC</label>
          <TextField
            className="me-10"
            defaultValue="91"
            style={{ width: "31rem" }}
            id="cc"
            variant="standard"
            placeholder="Name"
            InputProps={{ style: { fontWeight: "bold" } }}
            value={cc}
            onChange={(e) => setCc(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="leadsource" style={{ color: '#A8C6DF' }}>Leads Source</label>
          <TextField
            select
            defaultValue="Select Lead Source"
            style={{ width: "31rem" }}
            id="leadSource"
            variant="standard"
            placeholder="Leads Source"
            InputProps={{ style: { fontWeight: "bold" } }}
            value={leadSource}
            onChange={(e) => setLeadSource(e.target.value)}
          >
            {LeadSource.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="phone" style={{ color: '#A8C6DF' }} >Phone</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="phone"
            variant="standard"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="stack" style={{ color: '#A8C6DF' }}>Stack</label>
          <TextField
            select
            defaultValue="Select Stack"
            style={{ width: "31rem" }}
            id="stack"
            variant="standard"
            placeholder="stack"
            InputProps={{ style: { fontWeight: "bold" } }}
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          >
            {Stacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="email" style={{ color: '#A8C6DF' }}>Email</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="email"
            variant="standard"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="courses" style={{ color: '#A8C6DF' }}>Courses</label>
          <TextField
            className="me-10"
            select
            style={{ width: "31.2rem" }}
            id="courses"
            variant="standard"
            placeholder="Courses"
            value={courses}
            onChange={handleChange}
            InputProps={{
              style: { fontWeight: "bold" },
              inputComponent: OutlinedInput,
            }}
            SelectProps={{
              multiple: true,
              renderValue: (selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={() => handleDelete(value)}
                      deleteIcon={<CancelIcon sx={{ color: '#fff' }} />}
                      sx={{ backgroundColor: '#007bff', color: '#fff' }}
                    />
                  ))}
                </Box>
              ),
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflowY: 'auto',
                  },
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderBottom: '2px solid #cacaca',
              },
            }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, courses, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </TextField>
        </div>

      </div>
      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="feequoted" style={{ color: '#A8C6DF' }}>Fee Quoted</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="feequoted"
            variant="standard"
            placeholder="Fee Quoted"
            type="number"
            value={feeQuoted}
            onChange={(e) => setFeeQuoted(e.target.value)}
            defaultValue={1}
            InputProps={{
              inputProps: {
                min: 0,
                step: 1
              }
            }}
          />
        </div>
        <div className="">
          <label htmlFor="classMode" style={{ color: '#A8C6DF' }}>Class Mode</label>
          <TextField
            select
            defaultValue="Select Class Mode"
            style={{ width: "31rem" }}
            id="classMode"
            variant="standard"
            placeholder="Leads Status"
            value={classMode}
            onChange={(e) => setClassMode(e.target.value)}
            InputProps={{ style: { fontWeight: "bold" } }}
          >
            {ClassMode.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="batchTiming" style={{ color: '#A8C6DF' }}>Batch Timing</label>
          <TextField
            className="me-10 mt-5"
            select
            style={{ width: "31rem" }}
            id="batchTiming"
            variant="standard"
            placeholder="Batch Timing"
            value={batchTiming}
            onChange={(e) => setBatchTiming(e.target.value)}
            InputProps={{ style: { fontWeight: "bold" } }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflowY: 'auto',
                  },
                },
              },
            }}
          >
            {BatchTimings.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="">
          <label htmlFor="nextFollowUp" style={{ color: '#A8C6DF' }}>Next FollowUp</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker
                variant="standard"
                className="w-[31.5rem] "
                value={nextFollowUp}
                onChange={(newValue) => setNextFollowUp(newValue)}
                sx={{
                  '.MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                      marginBottom: '9px',
                      marginTop: '20px',
                      borderBottom: '2px solid #cacaca',
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <label htmlFor="Description" style={{ color: '#A8C6DF' }}>Description</label>
        <TextField variant="standard" id="fullWidth" style={{ width: "65rem" }} value={description}
            onChange={(e) => setDescription(e.target.value)} />
      </div>


      <Stack className="flex justify-center  border-b-2 " direction="row" spacing={2} style={{ width: "64rem" }}>
        <Button variant="outlined" size="large" sx={{ textTransform: 'none' }}>
          Cancel
        </Button>
        <Button variant="contained" size="large" sx={{ textTransform: 'none' }} onClick={handleCreate}>
          Create
        </Button>
      </Stack>


    </Box>
  );
}
