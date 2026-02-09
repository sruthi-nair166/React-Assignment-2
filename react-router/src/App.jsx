import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import UsersSection from "./components/UsersSection";
import url1 from "./assets/1.jpg";
import url2 from "./assets/2.jpg";
import url3 from "./assets/3.jpg";
import url4 from "./assets/4.jpg";
import url5 from "./assets/5.jpg";
import url6 from "./assets/6.jpg";
import url7 from "./assets/7.jpg";
import url8 from "./assets/8.jpg";
import url9 from "./assets/9.jpg";
import url10 from "./assets/10.jpg";
import url11 from "./assets/11.jpg";
import url12 from "./assets/12.jpg";
import UserDetailsSection from "./components/UserDetailsSection";

const data = [
  {
    id: 1,
    first_name: "Hobart",
    last_name: "Beynon",
    dob: "19 April, 1996",
    email: "hbeynon0@cornell.edu",
    phone: "917-127-5980",
    avatar: url1,
    job_title: "Engineer",
    city: "Hernandez",
    date: "29 September, 2023",
    exp: "2 years 4 months",
    salary: "$108,780",
    department: "Product Development",
    role: "Senior Technical Lead",
    status: "Active",
  },
  {
    id: 2,
    first_name: "Barnaby",
    last_name: "MacGillacolm",
    dob: "28 July, 1993",
    email: "bmacgillacolm1@mac.com",
    phone: "443-828-5463",
    avatar: url2,
    job_title: "Research Associate",
    city: "Stanovoye",
    date: "10 October 2024",
    exp: "1 year 3 months",
    salary: "$70,646",
    department: "Research & Development",
    role: "Project Coordinator",
    status: "Inactive",
  },
  {
    id: 3,
    first_name: "Johnathon",
    last_name: "Spillane",
    dob: "3 November, 1997",
    email: "jspillane2@soup.io",
    phone: "488-117-1006",
    avatar: url3,
    job_title: "Office Assistant",
    city: "Glendale",
    date: "7 May, 2025",
    exp: "9 months",
    salary: "$38,770",
    department: "Operations",
    role: "Front Desk Supervisor",
    status: "Active",
  },
  {
    id: 4,
    first_name: "Anthia",
    last_name: "Bault",
    dob: "23 September, 2003",
    email: "abault3@list-manage.com",
    phone: "551-599-3891",
    avatar: url4,
    job_title: "Civil Engineer",
    city: "Primorsko-Akhtarsk",
    date: "20 May, 2025",
    exp: "8 months",
    salary: "$99,590",
    department: "Infrastructure & Planning",
    role: "Department HOD",
    status: "Active",
  },
  {
    id: 5,
    first_name: "Aigneis",
    last_name: "O'Kynsillaghe",
    dob: "27 August, 1991",
    email: "aokynsillaghe4@toplist.cz",
    phone: "409-608-2859",
    avatar: url5,
    job_title: "Marketing Assistant",
    city: "New York",
    date: "25 January, 2025",
    exp: "1 year",
    salary: "$55,170",
    department: "Marketing & Communications",
    role: "Junior Content Strategist",
    status: "Active",
  },
  {
    id: 6,
    first_name: "Vernen",
    last_name: "Parkyn",
    dob: "12 May, 2006",
    email: "vparkyn5@blogger.com",
    phone: "846-293-8288",
    avatar: url6,
    job_title: "Media Manager",
    city: "Lelystad",
    date: "3 January, 2026",
    exp: "1 month",
    salary: "$81,200",
    department: "Marketing & Communications",
    role: "Director of Communications",
    status: "Inctive",
  },
  {
    id: 7,
    first_name: "Corbie",
    last_name: "Sabin",
    dob: "5 July, 1976",
    email: "csabin6@msu.edu",
    phone: "818-396-2459",
    avatar: url7,
    job_title: "Librarian",
    city: "Whitchurch",
    date: "26 March, 2025",
    exp: "10 months",
    salary: "$65,190",
    department: "Information & Knowledge Management",
    role: "Chief Archivist",
    status: "Inactive",
  },
  {
    id: 8,
    first_name: "Emlyn",
    last_name: "Ackroyd",
    dob: "16 May, 2000",
    email: "eackroyd7@istockphoto.com",
    phone: "756-214-0234",
    avatar: url8,
    job_title: "Administrative Officer",
    city: "Tamansari",
    date: "27 September, 2025",
    exp: "4 months",
    salary: "$83,980",
    department: "Administration",
    role: "Operations Manager",
    status: "Active",
  },
  {
    id: 9,
    first_name: "Ingeborg",
    last_name: "McGeown",
    dob: "20 October, 1994",
    email: "imcgeown8@noaa.gov",
    phone: "720-223-2880",
    avatar: url9,
    job_title: "Financial Analyst",
    city: "Būlaevo",
    date: "3 April, 2025",
    exp: "10 months",
    salary: "$81,830",
    department: "Finance & Accounting",
    role: "Senior Risk Consultant",
    status: "Active",
  },
  {
    id: 10,
    first_name: "Janetta",
    last_name: "Allred",
    dob: "21 March, 1998",
    email: "jallredc@skype.com",
    phone: "450-482-4496",
    avatar: url10,
    job_title: "Occupational Therapist",
    city: "Saint-Lin-Laurentides",
    date: "20 August, 2025",
    exp: "5 months",
    salary: "$94,400",
    department: "Health & Wellness",
    role: "Clinical Supervisor",
    status: "Inactive",
  },
  {
    id: 11,
    first_name: "Averill",
    last_name: "Duddin",
    dob: "19 June, 2001",
    email: "aduddind@oakley.com",
    phone: "290-192-8223",
    avatar: url11,
    job_title: "Sales Associate",
    city: "Srubec",
    date: "10 May, 2025",
    exp: "8 months",
    salary: "$70,080",
    department: "Sales & Business Development",
    role: "Regional Sales Lead",
    status: "Active",
  },
  {
    id: 12,
    first_name: "Reena",
    last_name: "McMennum",
    dob: "31 January, 2003",
    email: "rmcmennumi@godaddy.com",
    phone: "378-149-7834",
    avatar: url12,
    job_title: "Executive Secretary",
    city: "Kolkata",
    date: "31 March, 2023",
    exp: "2 years 8 months",
    salary: "$52,440",
    department: "Executive Office",
    role: "Chief of Staff (Admin)",
    status: "Active",
  },
];

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/*<HeroSection />
        <AboutSection />
        <UsersSection data={data} />*/}
        <UserDetailsSection />
      </main>
    </>
  );
}

export default App;
