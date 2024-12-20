import { useState } from "react"

export default function Card ({title, desc, points, color, pic, enter, z}){
    const [h, setH] = useState(false);
    return(
        <>
            <div className={`2xl:w-[15vw] 2xl:h-[22vw] lg:w-[19vw] lg:h-[25vw] md:w-[25vw] md:h-[25vw]  sm:w-[32vw] sm:h-[40vw] rounded-3xl text-white ${enter===1 ? `mx-3`: `-m-8`} z-${z} relative `}
                style={{ backgroundColor: color , transform: h ? 'translateY(-5vw)' : 'translateY(0)', transition: 'transform 0.3s ease' }} // Set background color using inline style
                onMouseEnter={()=>setH(true)}
                onMouseLeave={()=>setH(false)}
                >
                <div className="flex justify-around mt-[1vw]">
                    <div>
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <h3 className="font-semibold">{desc}</h3>
                    </div>
                    <span className="w-fit border-white border-2 h-fit rounded-xl px-2 flex">
                        <div className=" bg-transparent rounded-full px-1"><i className="ri-vip-diamond-fill"></i></div>
                        
                        {points}
                    </span>
                </div>
                <div className="flex justify-center items-center mt-[1vw]">
                    <img src={pic} alt="" className="2xl:h-[15vw] 2xl:w-[12vw] lg:h-[14vw] lg:w-[11vw] md:h-[14vw] md:w-[11vw] sm:w-[22vw] sm:h-[30vw] "/>
                </div>
            </div>  
        </>
    )
}