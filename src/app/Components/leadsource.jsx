"use client";

import React, { useState, useEffect } from 'react';

function LeadSourceDropdown() {
  const [selectedLeadSource, setSelectedLeadSource] = useState('None');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    setIsClient(true);
  }, []);

  const leadSources = [
    'None', 'WalkIn', 'StudentReferral', 'Demo', 'WebSite', 'WebsiteChat', 
    'InboundCall', 'GoogleAdWords', 'FacebookAds', 'GoogleMyBusiness', 'WhatsApp'
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/leads/lead-source', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ leadSource: selectedLeadSource }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        alert('Lead source submitted successfully!');
      } else {
        console.error('Failed to submit lead source');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isClient) {
    // Render nothing or a loading state on the server side
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="leadSource">Select Lead Source:</label>
      <select
        id="leadSource"
        value={selectedLeadSource}
        onChange={(e) => setSelectedLeadSource(e.target.value)}
      >
        {leadSources.map((source) => (
          <option key={source} value={source}>
            {source}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LeadSourceDropdown;
