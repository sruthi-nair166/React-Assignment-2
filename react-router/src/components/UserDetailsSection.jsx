import url1 from "../assets/1.jpg";

function UserDetailsSection() {
  return (
    <div className="h-[80dvh] mx-20 mt-10">
      <h1 className="text-2xl tracking-widest text-sky-900 font-medium mb-3">
        EMPLOYEE DETAILS
      </h1>
      <div className="grid grid-cols-[1fr_2fr] h-full">
        <div className="bg-sky-300 flex flex-col items-center pt-10">
          <img src={url1} alt="" className="rounded-full w-52 h-52" />
          <h3 className="text-2xl mt-5 font-medium leading-none text-sky-900">
            Hobart Beynon
          </h3>
          <p className="text-slate-600 text-lg mt-1 mb-4">Engineer</p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="bg-sky-200 rounded-md p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="bg-sky-200 rounded-md p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </a>
            <a
              href="https://secure.skype.com/"
              target="_blank"
              className="bg-sky-200 rounded-md p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-skype"
                viewBox="0 0 16 16"
              >
                <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.42 7.42 0 0 1 6.02 2.118 7.37 7.37 0 0 1 2.167 5.215q0 .517-.072 1.026a4.66 4.66 0 0 1 .6 2.281 4.64 4.64 0 0 1-1.37 3.294A4.67 4.67 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.42 7.42 0 0 1-6.114-2.107A7.37 7.37 0 0 1 .529 8.035q0-.545.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7 7 0 0 0 1.257.653q.737.308 1.145.523c.229.112.437.264.615.448.135.142.21.331.21.528a.87.87 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.6 2.6 0 0 1-1.048-.206 11 11 0 0 1-.532-.253 1.3 1.3 0 0 0-.587-.15.72.72 0 0 0-.501.176.63.63 0 0 0-.195.491.8.8 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.1 5.1 0 0 0 2.212.419 4.6 4.6 0 0 0 1.624-.265 2.3 2.3 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.1 2.1 0 0 0-.279-1.101 2.5 2.5 0 0 0-.772-.792A7 7 0 0 0 8.486 7.3a1 1 0 0 0-.145-.058 18 18 0 0 1-1.013-.447 1.8 1.8 0 0 1-.54-.387.73.73 0 0 1-.2-.508.8.8 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096q.412.119.802.293c.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.7.7 0 0 0 .18-.496.72.72 0 0 0-.17-.476 1.4 1.4 0 0 0-.556-.354 3.7 3.7 0 0 0-.708-.183 6 6 0 0 0-1.022-.078 4.5 4.5 0 0 0-1.536.258 2.7 2.7 0 0 0-1.174.784 1.9 1.9 0 0 0-.45 1.287c-.01.37.076.736.25 1.063" />
              </svg>
            </a>
          </div>
        </div>

        <div className="ms-10">
          <div className="flex flex-col gap-10 mt-3">
            <h2 className="text-xl tracking-wide font-medium text-sky-950">
              PERSONAL INFORMATION
            </h2>
            <div className="flex flex-wrap gap-12">
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  FIRST NAME:
                </span>{" "}
                <span>Hobart</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  LAST NAME:
                </span>{" "}
                <span>Beynon</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  CITY:
                </span>{" "}
                <span>Hernandez</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  DATE OF BIRTH:
                </span>{" "}
                <span>19 April, 1996</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  EMAIL:
                </span>{" "}
                <span>hbeynon0@cornell.edu</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  PHONE:
                </span>{" "}
                <span>917-127-5980</span>
              </p>
            </div>

            <hr className="border-2" />

            <h2 className="text-xl tracking-wide font-medium text-sky-950 ">
              EMPLOYMENT DETAILS
            </h2>
            <div className="flex flex-wrap gap-12">
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  JOB TITLE:
                </span>{" "}
                <span>Engineer</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  DEPARTMENT:
                </span>{" "}
                <span>Product Development</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  ROLE:
                </span>{" "}
                <span>Senior Technical Lead</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  EMPLOYMENT TYPE:
                </span>{" "}
                <span>Full-time</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  EMPLOYMENT STATUS:
                </span>{" "}
                <span className="bg-green-200 text-green-800 text-sm font-medium rounded-full px-2 py-1">
                  ● Active
                </span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  SALARY:
                </span>{" "}
                <span>$108,780</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  DATE OF JOINING:
                </span>{" "}
                <span>29 September, 2023</span>
              </p>
              <p>
                <span className="text-sm font-medium tracking-widest text-slate-500 me-2">
                  TENURE:
                </span>{" "}
                <span>2 years 4 months</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsSection;
