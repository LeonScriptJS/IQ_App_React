import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="background min-h-screen bg-gray-50 text-gray-100 ">
      <div className="priAboutContainer bg-slate-700 mx-1 my-1 p-4 w-full h-screen rounded-lg">
        <header className="sticky top-0">
          <div className="navBar flex items-center justify-end px-3 py-2 ">
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
        <main className="px-10 py-8">
          {/* Title */}
          <div className=" priContactText mb-10">
            <h1 className="text-[60px] font-semibold text-left">Contact Us</h1>
          </div>

          {/* Two-column section */}
          <div className="priContent flex justify-between items-start">
            {/* LEFT — Form */}
            <div className="contactForm w-1/2">
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="nameInput bg-gray-400 p-3 rounded-4xl "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="emailInput bg-gray-400 p-3 rounded-4xl "
                />

                <textarea
                  placeholder="Message"
                  rows="5"
                  className="messageInput bg-gray-400 p-3 rounded-4xl "
                ></textarea>
              </form>

              <button className="startButton mt-6 bg-yellow-400 rounded-4xl px-4 py-4 w-60">
                Send Message
              </button>
            </div>

            {/* RIGHT — Image */}
            <div className="contactImage w-1/2 flex justify-end">
              <div className="w-100 h-100">
                <img src="/Phone.svg" alt="Image of a Telephone" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =============================================== */}
      <footer className=" bg-slate-700 mt-1 ml-1 mr-1 p-3 rounded-t-2xl text-center text-sm text-gray-100">
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

export default Contact;
