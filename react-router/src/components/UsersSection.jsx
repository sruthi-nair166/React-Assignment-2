function UsersSection({ data }) {
  return (
    <div className="mx-20 my-10">
      <h1 className="text-2xl tracking-widest mb-10 font-medium">
        EMPLOYEE DIRECTORY
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {data.map((d) => (
          <div
            className="border-2 rounded-md flex flex-col items-center p-8 relative shadow-md"
            key={d.id}
          >
            <div className="bg-sky-500 w-full top-0 left-0 absolute h-[5rem] -z-10"></div>
            <img src={d.avatar} alt="" className="w-24 h-24 rounded-full" />
            <p className="font-medium text-lg mt-3 leading-none">
              {d.first_name} {d.last_name}
            </p>
            <p className="mb-5 text-slate-500">{d.role}</p>
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white px-4 py-1 rounded-md">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersSection;
