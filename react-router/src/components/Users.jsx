import { Link } from "react-router-dom";
import data from "../utils/data";

function Users() {
  return (
    <div className="sm:px-20 px-10 pt-5 pb-10 bg-sky-100">
      <Link to="/" className="text-sky-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Link>

      <h1 className="text-2xl tracking-widest sm:mb-6 mt-5 mb-3 text-sky-900 font-medium">
        EMPLOYEE DIRECTORY
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data.map((d) => (
          <div
            className="border-2 rounded-md flex flex-col items-center p-8 relative shadow-md bg-white"
            key={d.id}
          >
            <div className="bg-sky-500 w-full top-0 left-0 absolute h-[5rem] -z-1 rounded-t-md"></div>
            <img
              src={d.avatar}
              alt=""
              className="w-24 h-24 rounded-full z-10"
            />
            <h2 className="font-medium text-sky-900 text-lg mt-3 leading-none">
              {d.first_name} {d.last_name}
            </h2>
            <p className="mb-5 text-slate-500">{d.job_title}</p>

            <Link
              to={`/users/${d.id}`}
              className="bg-sky-500 hover:bg-sky-600 transition text-white px-4 py-1 rounded-md"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
