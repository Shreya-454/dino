import React from "react";
import FooterForest from "../assets/images/footerforestimg.webp";
import footertwit from "../assets/images/svg/footertwitr.svg";
import footerdis from "../assets/images/svg/footerdiscord.svg";
import footerins from "../assets/images/svg/footerinsta.svg";
import footerdino from "../assets/images/footerdino.webp";

const Footer = () => {
  return (
    <div>
      <div className="relative mt-[-1px] lg:pt-[248px] md:pt-[150px] sm:pt-[100px] pt-[100px] pb-[100px] lg:pb-[267px] md:pb-[150px] bg-[#0A4740]">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10 flex flex-col lg:gap-[33px] gap-[20px] justify-center items-center"
        >
          <h2 className=" ff-lucky text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_3px_0px_#000]">
            D<span className="text-[#23AAAC]">i</span>
            <span className="text-[#D45B07]">n</span>
            <span className="text-[#8EC627]">o</span>
            <span className="text-[#FCCA2B]">L</span>
            <span className="text-[#8F78D2]">F</span>
            <span className="text-[#8EC627]">G</span>
          </h2>
          <p className="text-[14px] font-normal font-bal text-center text-white max-w-[376px] leading-[122%]">
            Sed tempus pretium est, vestibulum dapibus mauris viverra id.
            Curabitur feugiat porta lorem,{" "}
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              className=" hover:-translate-y-1 duration-300 rounded-full"
              href="https://twitter.com/i/flow/login"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footertwit} alt="tw" />
            </a>
            <a
              className=" hover:-translate-y-1 duration-300 rounded-full"
              href="https://discord.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerdis} alt="di" />
            </a>
            <a
              className=" hover:-translate-y-1 duration-300 rounded-full "
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerins} alt="in" />
            </a>
          </div>
        </div>

        <img
          src={FooterForest}
          alt="FooterForest"
          className="absolute 2xl:bottom-[-5%] bottom-0 left-0 right-0 w-full "
        />
        <img
          src={footerdino}
          alt="dino"
          className="absolute right-[10%] animate-movebike3 lg:bottom-[-2%] bottom-0 hidden md:block max-lg:w-[150px] max-lg:h-[200px]"
        />
      </div>
    </div>
  );
};

export default Footer;
