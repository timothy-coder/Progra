import { useEffect, useState } from "react";

export default function Clock() {

  const [time,setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="flex items-center justify-center">
    <div className="relative w-[20px] h-[20px]">
    <div className="absolute rounded-[50%] border-[15px] border-solid border-[black] w-[20px] h-[20px]">
    </div>
    <div className="relative flex items-center justify-center text-[130%] opacity-50 pt-[150px] w-[20px] h-[20px]">
        <span id="texto-hora-digital">00:00:00</span>
    </div>
    <div className=" relative bg-black">
        <svg id="puntos" className=" absolute w-[300px] h-[300px]">
        </svg>
        <div id="horas" className="absolute">
            <svg className="w-[100px] h-[100px]">
                <line x1="150" y1="50" x2="150" y2="150" stroke="black" stroke-width="6" stroke-linecap="round" />
            </svg>
        </div>
        <div id="minutos" className="absolute">
            <svg className="w-[100px] h-[100px]">
                <line x1="150" y1="30" x2="150" y2="150" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
        </div>
        <div id="segundos" className="absolute">
            <svg className="w-[100px] h-[100px]">
                <line x1="150" y1="30" x2="150" y2="150" stroke="red" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    </div>
    </div>
    </div>
  );
  
}