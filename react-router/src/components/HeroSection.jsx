function HeroSection() {
  return (
    <div className="h-[90dvh] flex flex-col text-center justify-center items-center gap-10">
      <h1 className="text-5xl w-3/4 mb-5">
        Welcome to the Corporate Portal. Manage your team and view department
        analytics.
      </h1>

      <div className="flex justify-center w-1/2 border-2 border-black rounded-3xl p-1">
        <input
          type="text"
          placeholder="What profession are you looking for?"
          className="w-full rounded-s-3xl ps-2 me-1"
        />
        <input
          type="text"
          placeholder="Location"
          className="border-x-2 text-center"
        />
        <button className="border-2 border-black rounded-2xl ms-1 px-5 py-0.5">
          Search
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
