import Image from "next/image";
import { useState, useEffect } from "react";
import MultiselectComponent from './MultiselectComponent'; // Import the new component

function InputField({ label, value = 5, width = "44rem", defaultValue = "" }) {
  const [showPencil, setShowPencil] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);

  // Options for the multiselect dropdown
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
  // Handle pencil click to toggle input vs multiselect
  const handlePencilClick = () => {
    setShowPencil(false);
  };

  // Set the default selected values in multiselect
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
        {/* Conditionally render input or Multiselect depending on label and pencil click */}
        {label === 'Course' && !showPencil ? (
          <MultiselectComponent
            options={options}
            selectedValues={selectedValues}
            onSelect={(selectedList) => setSelectedValues(selectedList)}
            onRemove={(selectedList) => setSelectedValues(selectedList)}
          />
        ) : (
          // Regular input field when not 'courses' or pencil not clicked
          <input
            type="text"
            className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
            defaultValue={defaultValue}
            style={{
              padding: "8px 10px", // Adjust padding to make it match Multiselect
            }}
          />
        )}

        {/* Show pencil icon only if not clicked */}
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
