import logo1 from "../assets/images/brands/logo1.svg";
import logo2 from "../assets/images/brands/logo2.svg";
import logo3 from "../assets/images/brands/logo3.svg";
import logo4 from "../assets/images/brands/logo4.svg";
import logo5 from "../assets/images/brands/logo5.svg";
import logo6 from "../assets/images/brands/logo6.svg";

import feat1 from "../assets/images/feat/feat1.svg";
import feat2 from "../assets/images/feat/feat2.svg";
import feat3 from "../assets/images/feat/feat3.svg";

function Features() {
  return (
    <>
      <div className="w-full flex-col justify-center mt-10 h-screen">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-600">Our Clients</h2>
          <p className="mt-2 text-gray-600">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Brands */}
        <div className="flex justify-center w-full mt-2 gap-32">
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
          <img src={logo6} alt="Logo 6" />
        </div>

        {/* Feature 1 */}
        <div className="text-center mt-10 ">
          <h2 className="text-4xl font-semibold min-w-80 text-slate-600">
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="mt-2 text-gray-600">Who is Nextcent suitable for?</p>
          <div className="grid grid-cols-3 w-full mx-auto mt-8">
            {/* card 1 */}
            <div className="w-full h-64 rounded-lg shadow-sm  px-16">
              <div className="w-full flex justify-center">
                <img src={feat1} alt="" />
              </div>
              <h2 className="text-2xl mt-4 font-semibold min-w-80 text-slate-600">
                Membership Organisations
              </h2>
              <p className="mt-2 text-gray-600">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            {/* card 2 */}
            <div className="w-full h-64 rounded-lg shadow-sm  px-16">
              <div className="w-full flex justify-center">
                <img src={feat2} alt="" />
              </div>
              <h2 className="text-2xl mt-4 font-semibold min-w-80 text-slate-600">
                National Associations
              </h2>
              <p className="mt-2 text-gray-600">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>

            {/* card 3 */}
            <div className="w-full h-64 rounded-lg shadow-sm  px-16">
              <div className="w-full flex justify-center">
                <img src={feat3} alt="" />
              </div>
              <h2 className="text-2xl mt-4 font-semibold min-w-80 text-slate-600">
                Clubs And Groups
              </h2>
              <p className="mt-2 text-gray-600">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
