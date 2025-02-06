import clubs from "../assets/images/feat2/clubs.svg";
import event from "../assets/images/feat2/event.svg";
import members from "../assets/images/feat2/members.svg";
import payments from "../assets/images/feat2/payments.svg";
import pana from "../assets/images/feat2/pana.svg";

import image1 from "../assets/images/image1.png";

import logo1 from "../assets/images/brands/logo1.svg";
import logo2 from "../assets/images/brands/logo2.svg";
import logo3 from "../assets/images/brands/logo3.svg";
import logo4 from "../assets/images/brands/logo4.svg";
import logo5 from "../assets/images/brands/logo5.svg";
import logo6 from "../assets/images/brands/logo6.svg";

import arrowr from "../assets/images/icon/arrowr.svg";

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
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <img src={members} alt="Feature Icon" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                2,245,341
              </h2>
              <span className="text-gray-600">Members</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <img src={clubs} alt="Feature Icon" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                46,328
              </h2>
              <span className="text-gray-600">Clubs</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <img src={event} alt="Feature Icon" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                828,867
              </h2>
              <span className="text-gray-600">Event Bookings</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <img src={payments} alt="Feature Icon" />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-slate-600 tracking-wider">
                1,926,436
              </h2>
              <span className="text-gray-600">Payments</span>
            </div>
          </div>
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
            How to design your site footer like we did
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="py-3 mt-6 px-8 text-sm font-medium rounded-md bg-primary text-white hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Section */}
      <div className="mt-12">
        <div className="px-6 md:px-16 lg:px-36 py-8 w-full grid grid-cols-1 md:flex  items-center">
          {/* Bagian Gambar */}
          <div className="w-full md:w-3/5 flex justify-center ">
            <img
              src={image1}
              alt=""
              className="w-full sm:w-60 md:w-80 h-52 md:h-full object-cover bg-black md:bg-transparent rounded-lg"
            />
          </div>

          {/* Bagian Teks */}
          <div className="text-gray-600 text-center w-full md:text-left">
            <p className="text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="text-lg mt-4 font-semibold text-primary">
              Tim Smith
            </h5>
            <p className="mt-2 text-sm">
              British Dragon Boat Racing Association
            </p>

            {/* Bagian Logo */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <img src={logo1} alt="Logo 1" className="w-10 sm:w-12" />
              <img src={logo2} alt="Logo 2" className="w-10 sm:w-12" />
              <img src={logo3} alt="Logo 3" className="w-10 sm:w-12" />
              <img src={logo4} alt="Logo 4" className="w-10 sm:w-12" />
              <img src={logo5} alt="Logo 5" className="w-10 sm:w-12" />
              <img src={logo6} alt="Logo 6" className="w-10 sm:w-12" />
              <div className="flex gap-1 md:ms-6 px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-slate-100">
                <button className="">Meet all customers</button>
                <img src={arrowr} alt="" className="w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features2;
