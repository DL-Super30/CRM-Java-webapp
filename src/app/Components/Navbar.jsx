// "use client"
// import React, { useState } from "react";
// import Link from 'next/link';
// import Image from 'next/image';

// function Navbar(props) {
//     const { Navbar } = props;
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleMenuToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <main>
//             <div className="container-sm border rounded bg-white flex items-center p-1 justify-between">
//                 <div className="flex">
//                     {/* Mobile Menu Button */}
//                     <div className="flex items-center p-1 lg:hidden">
//                         <button onClick={handleMenuToggle} aria-label="Toggle menu">
//                             <Image src="/images/menu.svg" width={30} height={100} alt="Menu icon" />
//                         </button>
//                     </div>

//                     {/* Logo */}
//                     <div className="w-5/12 pl-2">
//                         <Image src="/images/logo.png" width={400} height={400} alt="Logo" />
//                     </div>
//                 </div>

//                 {/* Desktop Navigation Links */}
//                 <nav className="hidden lg:flex lg:items-center lg:gap-5 lg:mx-4">
//                     <ul className="flex gap-5">
//                         <li><Link href="/" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Home <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/home/storylead" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Leads <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/home/opportunities" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Opportunities <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/learners" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Learners <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/courses" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Courses <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/activities" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Activities <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/analytics" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Analytics <i className="fa-solid fa-chevron-down"></i></Link></li>
//                     </ul>
//                 </nav>

//                 {/* Desktop Icons */}
//                 <div className="hidden lg:flex lg:items-center lg:gap-2 text-2xl">
//                     <ul className="flex gap-2">
//                         <li><a href="#" aria-label="AI Icon"><Image src="/images/iconAI.webp" width={30} height={30} alt="AI Icon" /></a></li>
//                         <li><a href="#" aria-label="Notifications"><i className="fa-regular fa-bell"></i></a></li>
//                         <li><a href="#" aria-label="User Profile"><i className="fa-regular fa-user"></i></a></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
//                 <nav className="flex flex-col items-center p-4">
//                     <ul className="flex flex-col gap-4">
//                         <li><Link href="/" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Home <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/leads" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Leads <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/opportunities" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Opportunities <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/learners" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Learners <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/courses" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Courses <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/activities" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Activities <i className="fa-solid fa-chevron-down"></i></Link></li>
//                         <li><Link href="/analytics" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Analytics <i className="fa-solid fa-chevron-down"></i></Link></li>
//                     </ul>
//                 </nav>
//             </div>
//         </main>
//     );
// }

// export default Navbar;










"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

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

        <div className="w-8 hidden lg:block">
          <Image 
            src="/menu.svg" 
            alt="Menu Icon" 
            width={32}  // Adjust width as needed
            height={32} // Adjust height as needed
          />
        </div>

        <div className="flex-1 flex justify-center lg:justify-start items-center my-2 sm:my-0">
          <Image 
            src="/skillcapital.png" 
            alt="Skill Capital" 
            width={192}  // Adjust width as needed
            height={48}  // Adjust height as needed
          />
        </div>

        <div className="hidden lg:flex justify-items-end align-end sm:space-x-2 text-sm">
          {/* Desktop Navigation Links */}
                 <nav className="hidden lg:flex lg:items-center lg:gap-5 lg:mx-4">
                     <ul className="flex gap-5">
                         <li><Link href="/homescreen" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Home <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="/leads" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Leads <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="/opportunities" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Opportunities <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Learners <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Courses <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Activities <i className="fa-solid fa-chevron-down"></i></Link></li>
                         <li><Link href="" className="underline hover:bg-red-600 hover:text-white border-none rounded p-2">Analytics <i className="fa-solid fa-chevron-down"></i></Link></li>
                     </ul>
                 </nav>
          
              
                
          <div className="flex space-x-2 sm:space-x-4 ml-2 sm:ml-4">
            <Link href="/star">
              <Image 
                src="/stars.png" 
                alt="Stars" 
                width={30}  // Adjust width as needed
                height={40} // Adjust height as needed
              />
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
                {dropdownOpen[menu] && (
                  <div className="mt-2 w-full bg-gray-100 shadow-lg rounded-md">
                    {menu === 'leads' && (
                      <>
                        <Link href="/leads/lead-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Lead Home</Link>
                        <Link href="/leads/lead-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Lead Details</Link>
                        <Link href="/leads/lead-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Lead Reports</Link>
                      </>
                    )}
                    {menu === 'opportunities' && (
                      <>
                        <Link href="/opportunities/opportunity-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Opportunity Home</Link>
                        <Link href="/opportunities/opportunity-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Opportunity Details</Link>
                        <Link href="/opportunities/opportunity-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Opportunity Reports</Link>
                      </>
                    )}
                    {menu === 'learners' && (
                      <>
                        <Link href="/learners/learner-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Learner Home</Link>
                        <Link href="/learners/learner-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Learner Profile</Link>
                        <Link href="/learners/learner-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Learner Reports</Link>
                      </>
                    )}
                    {menu === 'courses' && (
                      <>
                        <Link href="/courses/course-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Course Home</Link>
                        <Link href="/courses/course-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Course Details</Link>
                        <Link href="/courses/course-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Course Reports</Link>
                      </>
                    )}
                    {menu === 'activities' && (
                      <>
                        <Link href="/activities/activity-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Activity Home</Link>
                        <Link href="/activities/activity-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Activity Details</Link>
                        <Link href="/activities/activity-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Activity Reports</Link>
                      </>
                    )}
                    {menu === 'analytics' && (
                      <>
                        <Link href="/analytics/overview" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Overview</Link>
                        <Link href="/analytics/traffic" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Traffic</Link>
                        <Link href="/analytics/reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Reports</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-4 mt-4">
              <Link href="/star">
                <Image 
                  src="/Stars.png" 
                  alt="Stars" 
                  width={32}  // Adjust width as needed
                  height={32} // Adjust height as needed
                />
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