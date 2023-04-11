import React ,{useState} from "react"




export default function Navbar(){
    return(
        <div className="navbar flex justify-between items-center bg-black p-8 relative">
            <span className="flex">
                <img className="h-10 w-10" src="src/assets/HeroSection/instagram.png" alt="" />
                <img className="h-10 w-10" src="src/assets/HeroSection/linkedin.png" alt="" />
            </span>
            <div className="navMenu absolute right-[2.778vw]" >
                <span  className="navMenuRods"></span>
                <span  className="navMenuRods"></span>
                <span  className="navMenuRods"></span>
            </div>
            <ul className="flex gap-10 mr-[2.778vw]">
                <div className="">
                    <li className="text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Home</a></li>
                </div>
                <div className="">
                    <li className=" text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Projects</a></li>
                </div>
                <div className="">
                    <li className=" text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Testimonials</a></li>
                </div>
                <div className="">
                    <li className="text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Contact</a></li>
                </div>
            </ul>
            
            
        </div>
    )
}