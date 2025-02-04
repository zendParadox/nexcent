import clubs from "../assets/images/feat2/clubs.svg";
import event from "../assets/images/feat2/event.svg";
import members from "../assets/images/feat2/members.svg";
import payments from "../assets/images/feat2/payments.svg";

import pana from "../assets/images/feat2/pana.svg";

function Features2() {
  return (
    <>
      <div className="px-16 py-36 flex justify-between items-center bg-[#F5F7FA]">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">
            Helping a local <br />{" "}
            <span className="text-primary font-bold">
              business reinvent itself
            </span>
          </h2>
          {/* <p className="mt-2 text-gray-600">
            We reached here with our hard work and dedication
          </p> */}
        </div>
        <div className="grid grid-cols-2 items-center gap-10">
          {/* card 1 */}
          <div className="flex items-center">
            <div className="w-12 h-12 me-4">
              <img src={members} alt="" />
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                2,245,341
              </h2>
              <span className="text-gray-600">Members</span>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex items-center">
            <div className="w-12 h-12 me-4">
              <img src={clubs} alt="" />
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                2,245,341
              </h2>
              <span className="text-gray-600">Members</span>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex items-center">
            <div className="w-12 h-12 me-4">
              <img src={event} alt="" />
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                2,245,341
              </h2>
              <span className="text-gray-600">Members</span>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex items-center">
            <div className="w-12 h-12 me-4">
              <img src={payments} alt="" />
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                2,245,341
              </h2>
              <span className="text-gray-600">Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-16">
        <div className="w-full flex justify-center">
          <img src={pana} alt="Illustration" className="w-3/4 md:w-full" />
        </div>
        <div className="text-center lg:text-left px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">
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
