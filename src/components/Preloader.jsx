import React from "react";
import bg from "../assets/images/herobg.webp";
const Preloader = () => {
  return (
    <div>
      <div className=" h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center gap-4  bg-[#0A4740] bg-full bg-no-repeat bg-center flex-col">
          <h2 className=" ff-lucky text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_3px_0px_#000]">
            D
            <span className="text-[#23AAAC] animate-bounce [animation-delay:-0.15s]">
              I
            </span>
            <span className="text-[#D45B07] animate-bounce">n</span>
            <span className="text-[#8EC627] animate-bounce [animation-delay:0.15s]">
              o
            </span>
            <span className="text-[#FCCA2B] animate-bounce [animation-delay:3s]">
              L
            </span>
            <span className="text-[#8F78D2] animate-bounce [animation-delay:4.5s]">
              F
            </span>
            <span className="text-[#8EC627] animate-bounce [animation-delay:5s]">
              G
            </span>
          </h2>
          <div class="flex gap-2 items-center">
            <span class="sr-only">Loading...</span>
            <div class="h-8 w-8 bg-[#8EC627] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="h-8 w-8 bg-[#8EC627] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="h-8 w-8 bg-[#8EC627] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
  );
};

export default Preloader;
