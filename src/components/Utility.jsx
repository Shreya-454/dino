import React from "react";
import bigimg from "../assets/images/bigimg.webp"
import cycleimg from "../assets/images/cycleimg.webp"
import greentree from "../assets/images/greentree.webp"
import utilityLayer from "../assets/images/utilitylayer.webp";
import TimelineLayer from "../assets/images/roadmaplayer.webp";

const Utility = () => {
  return (
    <div className="bg-[#0A4740] relative overflow-hidden xl:pb-[466px] md:pb-[300px] sm:pb-[190px] xl:pt-[230px] sm:pt-[150px] pt-[100px] pb-[150px] mt-[-1px]">
      <div className="container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10">
        <h2 className="font-chewy sm:text-[64px] text-[35px] font-normal text-white text-center leading-[132%]">
          Utility and Usecase
        </h2>
        <div className="relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px]  mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between items-center lg:flex-row flex-col">
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="max-w-[681px] lg:text-[32px] text-2xl font-bal font-normal text-white leading-[119%]">
              We are going to work hard in otder to add{" "}
              <span className="text-[#8EC627]">$</span>
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#FB5352]">O</span> to main platforms as a
              form of payment
            </p>
            <p className="max-w-[695px] lg:text-[32px] text-2xl font-bal  font-normal text-white mt-[28px] leading-[120%]">
              You will be able to buy a lot of things with{" "}
              <span className="text-[#8EC627]">$</span>
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#FB5352]">O</span>
            </p>
          </div>
          <img
            src={bigimg}
            alt="crocoWithGlasses"
            className="sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6  lg:h-[332px] animate-herobounceanimnate w-full "
          />
        </div>
        <div className="relative max-lg:overflow-hidden items-center z-20 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center ">
          <img
            src={cycleimg}
            alt="crocoWithCycle"
            className="sm:max-w-[267px] animate-herobounceanimnate max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]"
          />
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="lg:text-[32px] text-2xl font-normal lg:text-end font-bal text-center text-white leading-[119%]">
              We are going to have staking and buyback/ burning mechanism
            </p>
          </div>
        </div>
        <img
          src={greentree}
          alt="utilityTree"
          className="lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0"
        />
      </div>
      <img
        src={utilityLayer}
        alt="utilityLayer"
        className="absolute top-0 left-0 right-0 w-full"
      />
      <img
        src={TimelineLayer}
        alt="TimelineLayer"
        className="absolute left-0 right-0 bottom-[-13px] w-full"
      />
    </div>
  );
};

export default Utility;