import React, { useState } from "react";
import backtopicon from "../assets/images/uparrow.svg";
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
            <button className="group animate-bounce flex justify-center items-center p-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#8EC627] rounded-full fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white sm:w-[30px] sm:h-[30px]" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
            </button>
        </div>
    );
};

export default BackToTop;