import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="h-[calc(100vh-56px)] bg-cover bg-center flex flex-col justify-center gap-5 sm:p-20 p-10"
      style={{ backgroundImage: "url('/about_bg.jpg')" }}
    >
      <div className="absolute z-0 inset-0 bg-blue-950/70"></div>

      <Link to="/" className="text-sky-200 z-10">
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

      <h1 className="text-2xl tracking-widest font-medium z-10 text-sky-300">
        ABOUT
      </h1>

      <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 lg:h-full z-10">
        <p className="lg:item-start text-4xl text-sky-200 mb-8">
          Streamlining team discovery for the modern, scaling workforce.
        </p>
        <p className="lg:self-end leading-7 text-sky-100">
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
