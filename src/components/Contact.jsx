import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="primaryContainer bg-slate-700 m-0.5 p-4 rounded-4xl h-screen">
          <NavBar />
          <main className="px-10 py-8">
            {/* Title */}
            <div className=" priContactText mb-10">
              <h1 className="text-[60px] font-semibold text-left">
                Contact Us
              </h1>
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

        <Footer />
      </div>
    </>
  );
};

export default Contact;
