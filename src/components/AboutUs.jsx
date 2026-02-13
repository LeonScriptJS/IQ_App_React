import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="background min-h-screen bg-gray-50 text-gray-100">
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
        <main className="m-10">
          <h1 className="priAboutText font-semibold text-[60px] text-left mx-2 my-3">
            About Us
          </h1>

          <p className="secAboutText font-normal text-[16px] leading-7  text-left place-content-center mx-4 my-7">
            This website was created to explore how people think, not to test
            how much they remember. <br /> We noticed that many curious,
            intelligent people often doubt themselves. They learn fast, think
            deeply, and set high standards, yet still feel unsure of their
            abilities. This project was built with those people in mind. <br />{" "}
            Instead of focusing on raw scores, our quizzes focus on patterns,
            comparison, and context. The goal is to give users a clearer sense
            of where they stand, without pressure or judgment.
            <br /> The experience is designed to feel calm, supportive, and
            human. No trick questions. No harsh labels. Just a simple way to
            reflect on how you think.
            <br /> This is not a medical or clinical IQ test. It{"'"}s a
            self-reflection tool built to encourage confidence, curiosity, and
            self-awareness.
            <br /> If you{"'"}ve ever felt like you{"'"}re “not smart enough”
            despite evidence to the contrary, you{"'"}re exactly who this was
            made for.
          </p>
        </main>
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

      {/* =============================================== */}
    </div>
  );
};

export default AboutUs;
