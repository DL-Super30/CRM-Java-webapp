import Image from "next/image";
import { useState, useEffect } from "react";
import MultiselectComponent from './MultiselectComponent';
import SingleSelectDropdown from './SingleSelectComponent';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS

function InputField({ label, value = 5, width = "44rem", defaultValue = "",onChange }) {
  const [showPencil, setShowPencil] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);
  const [leadStatus, setLeadStatus] = useState(defaultValue);
  const [leadSource, setLeadSource] = useState(defaultValue);
  const [stack, setStack] = useState(defaultValue);
  const [classMode, setClassMode] = useState(defaultValue);
  const [batchTimings, setBatchTimings] = useState(defaultValue);
  const [selectedDate, setSelectedDate] = useState(null); // Date for Next FollowUp
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  // Sync default values with state whenever defaultValue changes
  useEffect(() => {
    setLeadStatus(defaultValue);
    setLeadSource(defaultValue);
    setStack(defaultValue);
    setClassMode(defaultValue);
    setBatchTimings(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (onChange && leadStatus && leadSource && stack && classMode && batchTimings && selectedValues.length > 0) {
      onChange({
        label,
        leadStatus,
        leadSource,
        stack,
        classMode,
        batchTimings,
        selectedDate,
        selectedValues,
      });
    }
  }, [leadStatus, leadSource, stack, classMode, batchTimings, selectedDate, selectedValues, onChange, label]);
  

  // Handle pencil icon click
  const handlePencilClick = () => {
    if (label === 'Next FollowUp') {
      setShowPencil(false);
      setShowDatePicker(true);
    } else {
      setShowPencil(false);
    }
  };

  // Handle calendar icon click to show date picker
  const handleCalendarClick = () => {
    setShowDatePicker(true);
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false); // Hide the date picker after selection
  };

  return (
    <div className={`mt-${value}`}>
      <p className="text text-[#A8C6DF]">{label}</p>
      <div className="relative" style={{ width }}>
        {label === 'Course' && !showPencil ? (
          <MultiselectComponent
            options={options}
            selectedValues={selectedValues}
            onSelect={(selectedList) => setSelectedValues(selectedList)}
            onRemove={(selectedList) => setSelectedValues(selectedList)}
          />
        ) : label === 'Lead Status' && !showPencil ? (
          <SingleSelectDropdown
            options={leadStatusOptions}
            defaultValue={leadStatus}
            onChange={setLeadStatus}
          />
        ) : label === 'Lead Source' && !showPencil ? (
          <SingleSelectDropdown
            options={leadSourceOptions}
            defaultValue={leadSource}
            onChange={setLeadSource}
          />
        ) : label === 'Stack' && !showPencil ? (
          <SingleSelectDropdown
            options={stackOptions}
            defaultValue={stack}
            onChange={setStack}
          />
        ) : label === 'Class Mode' && !showPencil ? (
          <SingleSelectDropdown
            options={ClassModeOptions}
            defaultValue={classMode}
            onChange={setClassMode}
          />
        ) : label === 'Batch Timing' && !showPencil ? (
          <SingleSelectDropdown
            options={BatchTimingsOptions.map(option => option.label)} // Show only the labels
            defaultValue={BatchTimingsOptions.find(option => option.value === batchTimings)?.label || batchTimings}
            onChange={(selectedLabel) => {
              const selectedOption = BatchTimingsOptions.find(option => option.label === selectedLabel);
              setBatchTimings(selectedOption ? selectedOption.value : selectedLabel); // Store the value internally
            }}
          />
        ) : label === 'Next FollowUp' && !showPencil ? (
          <div className="relative w-full h-[38px]"> {/* Consistent height */}
            {showDatePicker ? (
              <>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                  className="border border-transparent border-b-slate-300 focus:outline-none w-[44rem] h-[38px]  pr-10" // Match height to input field
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
                  <Image src="/calender.svg" alt="calendar icon" width={20} height={20} />
                </div>
              </>
            ) : (
              <input
                type="text"
                className="border border-transparent border-b-slate-300 focus:outline-none w-full h-full pr-10" // Match height to DatePicker
                defaultValue={selectedDate ? selectedDate.toLocaleString() : ''}
                readOnly
              />
            )}
          </div>
        ) : (
          <input
            type="text"
            className="border border-transparent border-b-slate-300 focus:outline-none w-full h-[38px] pr-10" // Match height to DatePicker
            defaultValue={BatchTimingsOptions.find(option => option.value === batchTimings)?.label || batchTimings} 
            style={{ padding: "8px 10px" }}
            readOnly={label === 'Next FollowUp'}
          />
        )}

        {showPencil && (
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handlePencilClick}
          >
            <Image src="/pencil.svg" alt="icon" width={20} height={20} />
          </div>
        )}
        {!showPencil && label === 'Next FollowUp' && (
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleCalendarClick}
          >
            <Image src="/calender.svg" alt="calendar icon" width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
