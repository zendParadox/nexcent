import clubs from "../assets/images/feat2/clubs.svg";
import event from "../assets/images/feat2/event.svg";
import members from "../assets/images/feat2/members.svg";
import payments from "../assets/images/feat2/payments.svg";
import pana from "../assets/images/feat2/pana.svg";

function Features2() {
  return (
    <>
      <div className="px-6 md:px-16 py-16 md:py-36 flex flex-col md:flex-row justify-between items-center bg-[#F5F7FA] text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-600">
            Helping a local <br />
            <span className="text-primary font-bold">
              business reinvent itself
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-2">
          {/* Card 1 */}
          {[members, clubs, event, payments].map((icon, index) => (
            <div key={index} className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
                <img src={icon} alt="Feature Icon" />
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                  2,245,341
                </h2>
                <span className="text-gray-600">Members</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-16 px-6 md:px-16">
        <div className="w-full flex justify-center">
          <img
            src={pana}
            alt="Illustration"
            className="w-3/4 md:w-full max-w-xs sm:max-w-md lg:max-w-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-600">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta.
          </p>
          <button className="py-3 mt-6 px-8 text-sm font-medium rounded-md bg-primary text-white hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Features2;
