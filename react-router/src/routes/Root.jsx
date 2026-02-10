import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
