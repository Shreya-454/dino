import React, { useState } from "react";
import backtopicon from "../assets/images/CenterDragon.webp";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            setVisible(true);
        } else if (scrolled <= 1000) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce flex justify-center items-center p-2 w-[70px] h-[70px] bg-[#09655A] rounded-full fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <div className=" rounded-full flex justify-center w-[50px] h-[50px] items-center"><img className="w-full" src={backtopicon} alt="backtoptop" /></div>
            </button>
        </div>
    );
};

export default BackToTop;