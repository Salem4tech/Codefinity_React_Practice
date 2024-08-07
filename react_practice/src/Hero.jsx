function Hero() {
  return (
    <>
      <div className=" h-[90vh] w-full bg-blue-800 text-center flex flex-col justify-center items-center">
        <div className="">
          <h1 className=" font-bold text-white text-[50px]">
            Boost Your Career With <br />{" "}
            <span className=" text-orange-600"> AI And Machine Learning</span>
          </h1>
          <p className=" text-[20px] font-bold text-white m-5">
            Learn smarter, not harder-try AI-powered learning!
          </p>
          <button className=" font-semibold text-[18px] m-6 bg-teal-600 py-2 px-20 rounded-full">
            START LEARNING
          </button>
        </div>
        <div className=" flex flex-row justify-center m-5">
          <p className=" mx-8 text-[18px] text-slate-300 font-medium">
            <span className=" font-bold text-white">Achieve your goals</span>
            with 85+ top-rated <br /> courses and career tracks
          </p>
          <p className=" mx-8 text-[18px] text-slate-300 font-medium">
            <span className=" font-bold text-white">Excel in learning</span>
            with
            <br /> our AI Assistant
          </p>
          <p className=" mx-8 text-[18px] text-slate-300 font-medium">
            <span className=" font-bold text-white">Advance your skills </span>
            faster by
            <br /> exploring real-world projects
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
