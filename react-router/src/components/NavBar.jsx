import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-white px-5 pt-3 shadow-md relative z-20">
        <NavLink to="/" className="pb-3">
          Logo
        </NavLink>
        <ul className="flex gap-20">
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
              to="about"
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
              to="users"
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
          className="rounded-full bg-sky-500 hover:bg-sky-600 transition text-white tracking-wider px-4 py-1 mb-3"
        >
          Login
        </a>
      </nav>
    </>
  );
}

export default NavBar;
