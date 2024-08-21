
"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = ({ onNotificationClick, onUserClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    leads: false,
    opportunities: false,
    analytics: false,
    learners: false,
    courses: false,
    activities: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleDropdownToggle = (menu) => {
    // Close all other dropdowns if a different menu is opened
    setDropdownOpen(prev => {
      const newDropdownOpen = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menu ? !prev[key] : false;
        return acc;
      }, {});
      return newDropdownOpen;
    });
    setActiveMenu(menu);
  };

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header>
      <div className="relative flex flex-col lg:flex-row bg-white shadow-md lg:p-2 shadow-gray-400">
        <div className="lg:hidden absolute left-4 flex items-end z-4">
          <button onClick={handleMobileMenuToggle} aria-label="Toggle mobile menu" className="text-gray-700">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="2x" />
          </button>
        </div>

        
        <div className="flex-1 flex justify-center lg:justify-start items-center my-2 sm:my-0">
          <img src="https://dev.crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=3840&q=75" alt="Skill Capital" className="w-48 sm:w-60 md:w-80 lg:w-40" />
        </div>
        <div className="hidden lg:flex justify-items-end align-end sm:space-x-2 text-sm">
          {['Home', 'leads', 'opportunities', 'learners', 'courses', 'activities', 'analytics'].map(menu => (
            <div className="relative" key={menu}>
              <button
                onClick={() => handleDropdownToggle(menu)}
                className={`text-gray-700 hover:bg-red-100 rounded px-2 py-2 sm:px-3 sm:py-2 flex items-end text-sm sm:text-base ${activeMenu === menu ? 'bg-red-100 border-b-2 border-red-500' : ''}`}
                aria-label={`Toggle ${menu} menu`}
              >
                <span className='capitalize text-sm ml-2'>{menu}</span>
                <FontAwesomeIcon icon={faAngleDown} className="ml-4 sm:ml-2 space-y-4" />
              </button>
              
            </div>
          ))}
          <div className="flex space-x-2 sm:space-x-4 ml-2 sm:ml-4">
            <Link href="/star">
              <img src="https://dev.crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStars.684c7122.png&w=3840&q=75" className='w-6 sm:w-8' alt="Stars" />
            </Link>
            <button onClick={onNotificationClick} aria-label="Open notifications">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </button>
            <button onClick={onUserClick} aria-label="Open user menu">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white shadow-lg z-50">
          <div className="p-4 flex flex-col">
            <div className="flex justify-end mb-4">
              <button onClick={handleMobileMenuToggle} aria-label="Close mobile menu" className="text-gray-700">
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
            </div>
            {['learners', 'courses', 'activities', 'leads', 'opportunities', 'analytics'].map(menu => (
              <div className="relative mb-4" key={menu}>
                <button
                  onClick={() => handleDropdownToggle(menu)}
                  className={`text-gray-700 hover:bg-red-100 rounded px-3 py-2 flex items-center w-full justify-between text-lg ${activeMenu === menu ? 'bg-red-100 border-b-2 border-red-500' : ''}`}
                  aria-label={`Toggle ${menu} menu`}
                >
                  <span className='capitalize'>{menu}</span>
                  <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                </button>
                
              </div>
            ))}
            <div className="flex space-x-4 mt-4">
              <Link href="/star">
                <img src="/Stars.png" className='w-8' alt="Stars" />
              </Link>
              <button onClick={onNotificationClick} aria-label="Open notifications">
                <FontAwesomeIcon icon={faBell} size="2x" />
              </button>
              <button onClick={onUserClick} aria-label="Open user menu">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

