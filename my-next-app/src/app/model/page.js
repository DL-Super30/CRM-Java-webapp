// pages/index.js
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-dropdown-select to handle client-side rendering
const DropdownSelect = dynamic(() => import('react-dropdown-select'), { ssr: false });

const Home = () => {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const handleChange = (values) => {
    setSelected(values);
    console.log('Selected:', values);
  };

  return (
    <div>
      <h1>Welcome to My Page</h1>
      <DropdownSelect
        options={options}
        values={selected}
        onChange={handleChange}
        multi
        className="dropdown-select"
      />
      <style jsx>{`
        .dropdown-select {
          width: 300px;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
