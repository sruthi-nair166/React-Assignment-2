import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="h-[calc(100vh-56px)] bg-sky-800 bg-cover flex flex-col text-center justify-center items-center gap-10"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <h1 className="text-5xl w-3/4 mb-5 text-sky-50">
        Welcome to the Corporate Portal. Manage your team and view department
        analytics.
      </h1>

      <div className="flex gap-5">
        <Link
          to="/about"
          className="rounded-lg bg-blue-100 hover:bg-blue-100 transition text-sky-800 font-medium tracking-wider px-5 py-3"
        >
          Learn More
        </Link>
        <Link
          to="/users"
          className="rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium tracking-wider px-5 py-3"
        >
          View Directory
        </Link>
      </div>
    </div>
  );
}

export default Home;
