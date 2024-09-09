import Image from "next/image";
import { useState, useEffect } from "react";
import MultiselectComponent from './MultiselectComponent'; 
import SingleSelectDropdown from './SingleSelectComponent'; 

function InputField({ label, value = 5, width = "44rem", defaultValue = "" }) {
  const [showPencil, setShowPencil] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);
  const [leadStatus, setLeadStatus] = useState(defaultValue);
  const [leadSource, setLeadSource] = useState(defaultValue);
  const [stack, setStack] = useState(defaultValue);
  const [classMode, SetClassMode] = useState(defaultValue);

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
  const ClassModeOptions = [ "Select Class Mode","InternationalOnline","IndiaOnline","BLRClassRoom","HYDClassRoom"];

  // Sync default values with state whenever defaultValue changes
  useEffect(() => {
    setLeadStatus(defaultValue);
    setLeadSource(defaultValue);
    setStack(defaultValue);
    SetClassMode(defaultValue);
  }, [defaultValue]);

  // Log default values when component renders or updates
  useEffect(() => {
  }, [leadStatus, leadSource, stack, classMode]);

  const handlePencilClick = () => {
    setShowPencil(false);
  };

  useEffect(() => {
    let defaultSelected;
    if (Array.isArray(defaultValue)) {
      defaultSelected = options.filter(option =>
        defaultValue.includes(option.name)
      );
    } else if (typeof defaultValue === 'string') {
      const defaultValuesArray = defaultValue.split(',').map(value => value.trim());
      defaultSelected = options.filter(option =>
        defaultValuesArray.includes(option.name)
      );
    } else {
      defaultSelected = [];
    }
    setSelectedValues(defaultSelected);
  }, [defaultValue]);

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
        ) :label === 'Lead Source' && !showPencil ? (
          <SingleSelectDropdown
            options={leadSourceOptions}
            defaultValue={leadSource}
            onChange={setLeadSource}
          />
        ) :label === 'Stack' && !showPencil ? (
          <SingleSelectDropdown
            options={stackOptions}
            defaultValue={stack}
            onChange={setStack}
          />
        ) :label === 'Class Mode' && !showPencil ? (
          <SingleSelectDropdown
            options={ClassModeOptions}
            defaultValue={classMode}
            onChange={SetClassMode}
          />
        ) : (
          <input
            type="text"
            className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
            defaultValue={defaultValue}
            style={{
              padding: "8px 10px",
            }}
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
      </div>
    </div>
  );
}

export default InputField;
