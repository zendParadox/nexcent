import IllustrationSvg from "../assets/images/Illustration.svg";
import BlurText from "./react-bits/BlurText";
import AnimatedContent from "./react-bits/AnimatedContent";

function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}>
      <div className="bg-[#F5F7FA] py-8">
        <div className="max-w-[85rem] mx-5 md:mx-16 md:px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
            <div>
              <h1 className="block text-3xl font-semibold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight">
                Lessons and insights for{" "}
                <span className="text-primary">
                  <BlurText
                    text="photographers from 8 years"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="lg:text-6xl lg:font-bold"
                  />
                </span>
              </h1>

              <p className="mt-3 text-lg text-neutral-500">
                Where to grow your business as a photographer: site or social
                media?
              </p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#">
                  Register
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <img className="w-5/6" src={IllustrationSvg} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

export default HeroSection;
