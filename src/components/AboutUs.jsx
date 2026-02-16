import NavBar from "./NavBar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="primaryContainer bg-slate-700 m-0.5 p-4 rounded-4xl h-screen">
          <NavBar />
          <main className="px-10 py-8">
            <h1 className="priAboutText font-semibold text-[60px] text-left mx-2 my-3">
              About Us
            </h1>

            <p className="secAboutText font-normal text-[16px] leading-7  text-left place-content-center mx-4 my-7">
              This website was created to explore how people think, not to test
              how much they remember. <br /> We noticed that many curious,
              intelligent people often doubt themselves. They learn fast, think
              deeply, and set high standards, yet still feel unsure of their
              abilities. This project was built with those people in mind.{" "}
              <br /> Instead of focusing on raw scores, our quizzes focus on
              patterns, comparison, and context. The goal is to give users a
              clearer sense of where they stand, without pressure or judgment.
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

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
