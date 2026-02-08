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

const data = [
  {
    id: 1,
    first_name: "Hobart",
    last_name: "Beynon",
    email: "hbeynon0@cornell.edu",
    phone: "917-127-5980",
    avatar: url1,
    role: "Engineer",
    city: "Hernandez",
    date: "9/29/2023",
    exp: "2 years 4 months",
    salary: "$108,780",
  },
  {
    id: 2,
    first_name: "Barnaby",
    last_name: "MacGillacolm",
    email: "bmacgillacolm1@mac.com",
    phone: "443-828-5463",
    avatar: url2,
    role: "Research Associate",
    city: "Stanovoye",
    date: "10/10/2024",
    exp: "1 year 3 months",
    salary: "$70,646",
  },
  {
    id: 3,
    first_name: "Johnathon",
    last_name: "Spillane",
    email: "jspillane2@soup.io",
    phone: "488-117-1006",
    avatar: url3,
    role: "Office Assistant",
    city: "Glendale",
    date: "5/7/2025",
    exp: "9 months",
    salary: "$38,770",
  },
  {
    id: 4,
    first_name: "Anthia",
    last_name: "Bault",
    email: "abault3@list-manage.com",
    phone: "551-599-3891",
    avatar: url4,
    role: "Civil Engineer",
    city: "Primorsko-Akhtarsk",
    date: "5/20/2025",
    exp: "8 months",
    salary: "$99,590",
  },
  {
    id: 5,
    first_name: "Aigneis",
    last_name: "O'Kynsillaghe",
    email: "aokynsillaghe4@toplist.cz",
    phone: "409-608-2859",
    avatar: url5,
    role: "Marketing Assistant",
    city: "New York",
    date: "1/25/2025",
    exp: "1 year",
    salary: "$55,170",
  },
  {
    id: 6,
    first_name: "Vernen",
    last_name: "Parkyn",
    email: "vparkyn5@blogger.com",
    phone: "846-293-8288",
    avatar: url6,
    role: "Media Manager",
    city: "Lelystad",
    date: "1/3/2026",
    exp: "1 month",
    salary: "$81,200",
  },
  {
    id: 7,
    first_name: "Corbie",
    last_name: "Sabin",
    email: "csabin6@msu.edu",
    phone: "818-396-2459",
    avatar: url7,
    role: "Librarian",
    city: "Whitchurch",
    date: "3/26/2025",
    exp: "10 months",
    salary: "$65,190",
  },
  {
    id: 8,
    first_name: "Emlyn",
    last_name: "Ackroyd",
    email: "eackroyd7@istockphoto.com",
    phone: "756-214-0234",
    avatar: url8,
    role: "Administrative Officer",
    city: "Tamansari",
    date: "9/27/2025",
    exp: "4 months",
    salary: "$83,980",
  },
  {
    id: 9,
    first_name: "Ingeborg",
    last_name: "McGeown",
    email: "imcgeown8@noaa.gov",
    phone: "720-223-2880",
    avatar: url9,
    role: "Financial Analyst",
    city: "Būlaevo",
    date: "4/3/2025",
    exp: "10 months",
    salary: "$81,830",
  },
  {
    id: 10,
    first_name: "Janetta",
    last_name: "Allred",
    email: "jallredc@skype.com",
    phone: "450-482-4496",
    avatar: url10,
    role: "Occupational Therapist",
    city: "Saint-Lin-Laurentides",
    date: "8/20/2025",
    exp: "5 months",
    salary: "$94,400",
  },
  {
    id: 11,
    first_name: "Averill",
    last_name: "Duddin",
    email: "aduddind@oakley.com",
    phone: "290-192-8223",
    avatar: url11,
    role: "Sales Associate",
    city: "Srubec",
    date: "5/10/2025",
    exp: "8 months",
    salary: "$70,080",
  },
  {
    id: 12,
    first_name: "Reena",
    last_name: "McMennum",
    email: "rmcmennumi@godaddy.com",
    phone: "378-149-7834",
    avatar: url12,
    role: "Executive Secretary",
    city: "Kolkata",
    date: "3/31/2023",
    exp: "2 years 8 months",
    salary: "$52,440",
  },
];

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/*<HeroSection />*/}
        {/*<AboutSection />*/}
        <UsersSection data={data} />
      </main>
    </>
  );
}

export default App;
