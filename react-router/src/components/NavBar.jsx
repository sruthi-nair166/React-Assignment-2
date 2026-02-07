function NavBar() {
  return (
    <>
      <nav className="flex justify-between px-5 py-3">
        <a href="">Logo</a>
        <ul className="flex gap-20">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Users</a>
          </li>
        </ul>

        <a href="">Login</a>
      </nav>
    </>
  );
}

export default NavBar;
