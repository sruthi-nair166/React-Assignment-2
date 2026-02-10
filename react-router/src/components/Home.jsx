import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="h-[calc(100vh-56px)] bg-sky-800 bg-cover flex flex-col text-center justify-center items-center gap-10"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <h1 className="text-5xl w-3/4 mb-5 text-sky-100">
        Welcome to the Corporate Portal. Manage your team and view department
        analytics.
      </h1>

      <div className="flex justify-center items-center w-1/2 border-2 bg-white border-slate-400 rounded-3xl p-1 relative">
        <input
          type="text"
          placeholder=""
          className="w-full rounded-s-3xl ps-2 me-1 peer"
        />

        <div className="w-full flex items-center absolute inset-0 pointer-events-none peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-slate-400 ms-2 me-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          <span className="text-slate-500">
            What profession are you looking for?
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder=""
            className="border-x-2 text-center peer"
          />
          <div className="flex justify-center items-center absolute top-0 left-10 pointer-events-none peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 stroke-slate-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span className="text-slate-500 ms-1">Location</span>
          </div>
        </div>

        <Link
          to="users"
          className="bg-sky-600 hover:bg-sky-500 transition text-white rounded-2xl ms-1 px-5 py-0.5"
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default Home;
