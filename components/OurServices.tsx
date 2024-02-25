import React from "react";

const OurServices = () => {
  return (
    <div>
      <section
        id="features"
        rounded-2xl
        className="relative rounded-2xl m-4 min-w-[500px] block px-6 py-10 md:py-20 md:px-10  border-t border-b border-lime-300 bg-lime-300"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-black text-2xl font-extrabold my-3 flex items-center justify-center  uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b text-black bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            "Fresh from Farm to Table, Straight to You"
          </h2>
          <p className="mx-auto text-xl my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide  text-black">
            "Experience farm-fresh goodness delivered to your door. Enjoy the
            convenience of organic fruits and vegetables, handpicked just for
            you."
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white-800  bg-lime-400  p-8 text-center shadow">
            <h3 className="mt-6 text-black text-xl ">Fresh Produce Delivery</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
              Get farm-fresh organic fruits and vegetables conveniently
              delivered to your doorstep, ensuring you always have access to the
              highest quality produce.
            </p>
          </div>

          <div className="rounded-xl border border-white-800 bg-lime-400  p-8 text-center shadow">
            <h3 className="mt-6 text-black text-xl">
              Sustainable Farming Support
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
              By choosing us, you're not just getting fresh produce- you're also
              supporting sustainable farming practices and local farmers,
              contributing to a healthier planet for future generations.
            </p>
          </div>

          <div className="rounded-xl border border-white-800 bg-lime-400  p-8 text-center shadow">
            <h3 className="mt-6 text-black text-xl ">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
              Everything you need to succeed and launch your landing page, right
              out of the box. No need to install anything else.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default OurServices;
