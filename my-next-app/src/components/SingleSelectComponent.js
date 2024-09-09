import { useState, useEffect } from 'react';

export default function SingleSelectDropdown({ options, defaultValue, onChange }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]);
  

  useEffect(() => {
    setSelectedValue(defaultValue); 
  }, [defaultValue]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="border border-transparent border-b-slate-300 focus:outline-none w-full pr-10"
      style={{ padding: '8px 10px' }}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

