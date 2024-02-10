import React from "react";
import aeroplane from '../assets/images/aeroplane.webp'
import dino1 from '../assets/images/dino1.webp'
import dino2 from '../assets/images/dino2.webp'
import MyNav from "./Mynav";
const Header = () => {
  return (
    <div className="bg-[url(./assets/images/herobg.webp)] bg-full bg-center bg-no-repeat sm:min-h-screen relative overflow-x-clip max-sm:h-[600px] ">
       <img src={dino2} alt="dino" className=" absolute bottom-[18%] right-[40%] animate-herodino1 hidden sm:block" />
      <img src={dino1} alt="dino" className="absolute right-[10%] md:bottom-[10%] bottom-0 animate-herodino2 max-sm:w-[200px] max-sm:h-[200px]" />
     
      <MyNav/>
      <div className="max-w-[1164px] mx-auto px-3 pb-96">
        <div className="flex md:flex-row flex-col-reverse flex-wrap -mx-3">
          <div className="md:w-1/2 w-full flex items-end justify-center" data-aos="zoom-out" data-aos-duration="1000">
            <img src={aeroplane} alt="img" className=" animate-aeroplaneanimation max-[400]:w-full" />
          </div>
          <div className="md:w-1/2 w-full px-3 flex justify-center lg:block md:flex-col  items-center" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="ff-lucky lg:text-[175.64px] md:text-8xl text-6xl lg:leading-[166.85px] "><span className="text-[#FBA11D] drop-shadow-[1px_7.337px_0px_#000]">D</span><span className="text-[#23AAAC] drop-shadow-[1px_7.337px_0px_#000]">I</span><span className="text-[#D45B07] drop-shadow-[1px_7.337px_0px_#000]">N</span><span className="text-[#8EC627] drop-shadow-[1px_7.337px_0px_#000]">O</span></h1>
            <h1 className="ff-lucky lg:text-[175.64px] md:text-8xl text-6xl lg:leading-[166.85px] pl-[38px]"><span className="text-[#8EC627] webkit-stroke drop-shadow-[1px_6.4px_0px_#000]">L</span><span className="text-[#FCCA2B] webkit-stroke drop-shadow-[1px_6.39px_0px_#000]">F</span><span className=" text-[#8F78D2] webkit-stroke drop-shadow-[1px_6.96px_0px_#000] ">G</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
