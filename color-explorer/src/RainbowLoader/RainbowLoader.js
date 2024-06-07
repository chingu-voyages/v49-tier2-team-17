import React from "react";
import "./RainbowLoader.css";

const RainbowLoader = () => {
    return (
        <div className="w-20 h-20 flex justify-center">
            <div className="rainbow w-20 h-10 relative overflow-hidden">
                <div className="one w-[70px] h-[70px] bg-transparent absolute -rotate-70"></div>
                <div className="two w-[60px] h-[60px] bg-transparent absolute top-5px left-5px -rotate-80"></div>
                <div className="three w-[50px] h-[50px] bg-transparent absolute top-2.5 left-2.5 -rotate-90"></div>
                <div className="four w-10 h-10 bg-transparent absolute top-15px left-15px -rotate-100"></div>
                <div className="five w-[30px] h-[30px] bg-transparent absolute top-5 left-5 -rotate-110"></div>
                <div className="six w-5 h-5 bg-transparent absolute top-25px left-25px -rotate-120"></div>
                <div className="seven w-2.5 h-2.5 bg-transparent absolute top-30px left-30px -rotate-130"></div>
            </div>
        </div>
    );
};

export default RainbowLoader;