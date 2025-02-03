import Icon from "../assets/Icon.svg";

function Header() {
  return (
    <>
      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 bg-[#F5F7FA]">
        <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-3 flex items-center">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/creative-agency/index.html"
              aria-label="Preline">
              <div className="flex  items-center gap-2">
                <div className="flex ">
                  <img className="w-full " src={Icon} alt="Hero Image" />
                </div>

                <h1 className="text-2xl font-bold">Nextcent</h1>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <button
              type="button"
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-md bg-white border border-gray-200 text-primary  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
              Login
            </button>
            <button
              type="button"
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-md border border-transparent bg-primary text-white hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none">
              Sign Up
            </button>
          </div>

          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-12 lg:mt-0">
              <div>
                <a
                  className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
                  href="#"
                  aria-current="page">
                  Home
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  href="#">
                  Service
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  href="#">
                  Feature
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  href="#">
                  Product
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  href="#">
                  Testimonial
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  href="#">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
