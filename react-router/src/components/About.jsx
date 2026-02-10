function About() {
  return (
    <div
      className="h-[calc(100vh-56px)] bg-cover bg-center flex flex-col gap-10 p-20"
      style={{ backgroundImage: "url('/about_bg.jpg')" }}
    >
      <div className="absolute z-0 inset-0 bg-blue-950/70"></div>

      <h1 className="text-2xl tracking-widest font-medium z-10 text-sky-300">
        ABOUT
      </h1>

      <div className="grid grid-cols-[2fr_1fr] h-full z-10">
        <p className="item-start text-4xl text-sky-200">
          Streamlining team discovery for the modern, scaling workforce.
        </p>
        <p className="self-end leading-7 text-sky-100">
          The Corporate Portal was designed to bridge the gap between growing
          departments. As organizations scale, keeping track of 'who does what'
          becomes a challenge. Our mission is to provide a centralized,
          real-time directory that empowers Team Leads to manage contact
          information, roles, and professional backgrounds in one seamless
          interface. By simplifying internal discovery, we help teams stay
          connected and collaborative.
        </p>
      </div>
    </div>
  );
}

export default About;
