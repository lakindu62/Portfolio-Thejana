import React ,{useState ,useEffect} from "react"





export default function Navbar(){


const [sideMenuActive , setSideMenuActive] = useState(false)



function sideMenu() {
  setSideMenuActive(!sideMenuActive);
}



 const activeStyle ={
    transform: "translateX(-1vw) translateY(14.5vh)",
    zIndex:"10",
    opacity:"1"
    
 }











    return(
        <div className="navbar flex justify-between items-center bg-black p-8 relative w-[100vw] h-[10vh]">
            <span className="flex gap-2 flex-shrink-0">
                <img className="h-10 w-10" src="src/assets/HeroSection/instagram.png" alt="" />
                <img className="h-10 w-10" src="src/assets/HeroSection/linkedin.png" alt="" />
            </span>
            <div className="navMenu absolute right-[2.778vw] " onClick={sideMenu}    >
                <span  className={`navMenuRods ${sideMenuActive ? "rod--01" : ''}`} onClick={sideMenu} ></span>
                <span  className={`navMenuRods ${sideMenuActive ? "rod--02" : ''}`} onClick={sideMenu} ></span>
                <span  className={`navMenuRods ${sideMenuActive ? "rod--03" : ''}`} onClick={sideMenu} ></span>
            </div>
            <ul className="flex gap-10 mr-[2.778vw]" style={sideMenuActive ? activeStyle : {}}>
                <div className="">
                    <li className="text-center text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Home</a></li>
                </div>
                <div className="">
                    <li className="text-center  text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Projects</a></li>
                </div> 
                <div className="">
                    <li className="text-center  text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Testimonials</a></li>
                </div>
                <div className="">
                    <li className="text-center text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#">Contact</a></li>
                </div>
            </ul>
            
            
        </div>
    )
}