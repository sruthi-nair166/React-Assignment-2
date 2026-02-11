import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-white px-5 pt-3 shadow-md relative h-[56px] z-20">
        <NavLink to="/" className="pb-3">
          <img src="./logo.jpg" alt="" className="w-12" />
        </NavLink>
        <ul className="sm:flex gap-20 hidden">
          <li className="pb-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 border-b-4 font-medium border-sky-600 pb-3"
                  : "hover:text-sky-600 transition hover:font-medium text-black border-0"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 border-b-4 font-medium border-sky-600 pb-3"
                  : "hover:text-sky-600 transition hover:font-medium text-black border-0"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 border-b-4 font-medium border-sky-600 pb-3"
                  : "hover:text-sky-600 transition hover:font-medium text-black border-0"
              }
            >
              Users
            </NavLink>
          </li>
        </ul>

        <a
          href=""
          className="rounded-lg bg-sky-500 hover:bg-sky-600 transition text-white tracking-wider px-4 py-1 mb-3 sm:block hidden"
        >
          Login
        </a>
        <button className="sm:hidden block mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default NavBar;
