import NavBar from "./NavBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="primaryContainer bg-slate-700 m-0.5 p-4 rounded-4xl">
          <NavBar />
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

              <button className="startButton mt-6 bg-yellow-400 rounded-4xl px-4 py-4 w-60">
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

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
