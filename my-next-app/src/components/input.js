"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BasicTextFields() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Box
      className="py-5"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="name">Name</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="name"
            variant="standard"
            placeholder="Name"
          />
        </div>
        <div className="">
          <label htmlFor="leadStatus">Leads Status</label>
          <TextField
            select
            defaultValue="Select Lead Status"
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Leads Status"
            InputProps={{ style: { fontWeight: "bold" } }}
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
          <label htmlFor="cc">CC</label>
          <TextField
            className="me-10"
            defaultValue="91"
            style={{ width: "31rem" }}
            id="name"
            variant="standard"
            placeholder="Name"
            InputProps={{ style: { fontWeight: "bold" } }}
          />
        </div>
        <div className="">
          <label htmlFor="leadsource">Leads Source</label>
          <TextField
            select
            defaultValue="Select Lead Source"
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Leads Status"
            InputProps={{ style: { fontWeight: "bold" } }}
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
          <label htmlFor="cc">Phone</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="phone"
            variant="standard"
            placeholder="Phone"
          />
        </div>
        <div className="">
          <label htmlFor="stack">Stack</label>
          <TextField
            select
            defaultValue="Select Stack"
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Leads Status"
            InputProps={{ style: { fontWeight: "bold" } }}
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
          <label htmlFor="email">Email</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="phone"
            variant="standard"
            placeholder="Phone"
          />
        </div>
        <div className="">
          <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-multiple-chip-label">Courses</InputLabel>
            <Select
              className="w-[31.2rem]  border-b-2 border-gray-400 "
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="">
          <label htmlFor="feequoted">Fee Quoted</label>
          <TextField
            className="me-10"
            style={{ width: "31rem" }}
            id="name"
            variant="standard"
            placeholder="Fee Quoted"
            type="number"
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
          <label htmlFor="leadStatus">Class Mode</label>
          <TextField
            select
            defaultValue="Select Class Mode"
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Leads Status"
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
        <div>
          <label htmlFor="batchtiming">Batch Timing</label>
          <TextField
            className="me-10"
            select
            style={{ width: "31rem" }}
            id="leadStatus"
            variant="standard"
            placeholder="Batch Timing"
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
          <label htmlFor="nextfollowup">Next FollowUp</label>
          <TextField
            select
            style={{ width: "31rem" }}
            id="Next Followup"
            variant="standard"
            placeholder="Leads Status"
            InputProps={{ style: { fontWeight: "bold" } }}
          >
          </TextField>
        </div>
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <TextField variant="standard" id="fullWidth" style={{ width: "65rem" }} />
      </div>

      
        <Stack className="flex justify-center  border-b-2 p-2" direction="row" spacing={2} style={{ width: "64rem" }}>
          <Button variant="outlined" size="large" sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>
            Create
          </Button>
        </Stack>
      

    </Box>
  );
}
