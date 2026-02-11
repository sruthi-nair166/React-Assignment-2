import { Link } from "react-router-dom";
import data from "../utils/data";

function Users() {
  return (
    <div className="sm:px-20 px-10 py-10 bg-sky-100">
      <h1 className="text-2xl tracking-widest sm:mb-10 mb-5 text-sky-900 font-medium">
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
