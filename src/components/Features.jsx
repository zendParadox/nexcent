import logo1 from "../assets/images/brands/logo1.svg";
import logo2 from "../assets/images/brands/logo2.svg";
import logo3 from "../assets/images/brands/logo3.svg";
import logo4 from "../assets/images/brands/logo4.svg";
import logo5 from "../assets/images/brands/logo5.svg";
import logo6 from "../assets/images/brands/logo6.svg";

import feat1 from "../assets/images/feat/feat1.svg";
import feat2 from "../assets/images/feat/feat2.svg";
import feat3 from "../assets/images/feat/feat3.svg";

import illustration1 from "../assets/images/illustration1.svg";

function Features() {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-4 lg:px-16">
      {/* Our Clients */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">
          Our Clients
        </h2>
        <p className="mt-2 text-gray-600">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Brand Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-6 place-items-center">
        <img src={logo1} alt="Logo 1" className="w-20 md:w-24" />
        <img src={logo2} alt="Logo 2" className="w-20 md:w-24" />
        <img src={logo3} alt="Logo 3" className="w-20 md:w-24" />
        <img src={logo4} alt="Logo 4" className="w-20 md:w-24" />
        <img src={logo5} alt="Logo 5" className="w-20 md:w-24" />
        <img src={logo6} alt="Logo 6" className="w-20 md:w-24" />
      </div>

      {/* Features Section */}
      <div className="text-center mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">
          Manage your entire community <br className="hidden md:block" /> in a
          single system
        </h2>
        <p className="mt-2 text-gray-600">Who is Nextcent suitable for?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          {/* Card 1 */}
          <div className="w-full bg-white shadow-sm rounded-lg p-6 flex flex-col items-center">
            <img src={feat1} alt="Feature 1" className="w-20" />
            <h3 className="text-xl font-semibold mt-4 text-slate-600 text-center">
              Membership Organisations
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white shadow-sm rounded-lg p-6 flex flex-col items-center">
            <img src={feat2} alt="Feature 2" className="w-20" />
            <h3 className="text-xl font-semibold mt-4 text-slate-600 text-center">
              National Associations
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white shadow-sm rounded-lg p-6 flex flex-col items-center">
            <img src={feat3} alt="Feature 3" className="w-20" />
            <h3 className="text-xl font-semibold mt-4 text-slate-600 text-center">
              Clubs And Groups
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>

      {/* Illustration & Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-16">
        <div className="w-full flex justify-center">
          <img
            src={illustration1}
            alt="Illustration"
            className="w-3/4 md:w-full"
          />
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
    </div>
  );
}

export default Features;
