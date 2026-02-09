function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center px-5 pt-3 shadow-md">
        <a href="" className="pb-3">
          Logo
        </a>
        <ul className="flex gap-20">
          <li className="text-sky-600 border-b-4 border-sky-600 pb-3">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Users</a>
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
