import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="background min-h-screen bg-gray-50 text-gray-100">
      <div className="primaryContainer bg-slate-700 m-0.5 p-4 rounded-lg">
        <header className="flex items-center justify-between px-3 py-2 sticky top-0">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EFE7E7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-brain-icon lucide-brain"
            >
              <path d="M12 18V5" />
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
              <path d="M18 18a4 4 0 0 0 2-7.464" />
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
              <path d="M6 18a4 4 0 0 1-2-7.464" />
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
            </svg>
          </div>

          <div className="navBar">
            <nav>
              <ul className="navBar flex space-x-6">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* =============================================== */}

        <main className="introSection w-full h-screen flex items-center justify-between px-15 overflow-hidden">
          {/* LEFT */}
          <div className="introText max-w-lg">
            <h1 className=" primaryIntroText font-black text-[60px]">
              The Cognitive Threshold Test
            </h1>

            <p className="secondaryIntroText mt-4">
              Most people underestimate their intelligence.
              <br />
              This assessment reveals where you truly stand.
            </p>

            <button className="startButton mt-6 bg-yellow-400 rounded-lg px-4 py-2">
              Start Assessment
            </button>
          </div>

          {/* RIGHT */}
          <div className="bgImage relative">
            <img
              src="/Homepage_Light_bulb.png"
              alt="Image of a Light Bulb"
              className="w-100 rotate-24"
            />
          </div>
        </main>
      </div>

      <div className="secondaryContainer  bg-slate-700 m-6 p-3 rounded-lg">
        <p className="text-center">
          This is not a school test. <br /> This is a cognitive benchmark
          designed to estimate how your mind compares to others.
        </p>
      </div>

      {/* =============================================== */}

      <footer className=" bg-slate-700 mt-1 ml-1 mr-1  p-3 rounded-t-2xl text-center text-sm text-gray-100">
        Comparisons of IQ with well known figures like Albert Einstein are
        largely speculative and not scientifically precise; created by{" "}
        <a
          href="https://github.com/LeonScriptJS/IQ_App_React"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          LeonScriptJS
        </a>{" "}
        in partnership with ALX Nigeria — #DOHARDTHINGS
      </footer>
    </div>
  );
};

export default HomePage;
