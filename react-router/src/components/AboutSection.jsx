function AboutSection() {
  return (
    <div className="h-[90dvh] flex flex-col gap-10 p-20">
      <h1 className="text-2xl tracking-widest font-medium">ABOUT</h1>

      <div className="grid grid-cols-[2fr_1fr] h-full">
        <p className="item-start text-4xl">
          Streamlining team discovery for the modern, scaling workforce.
        </p>
        <p className="self-end leading-7">
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

export default AboutSection;
