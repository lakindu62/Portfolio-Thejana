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

 const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
 const [navbarVisible, setNavbarVisible] = useState(true);

 useEffect(() => {
   window.onscroll = function () {
     const currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
       setNavbarVisible(true);
     } else {
       setNavbarVisible(false);
     }
     setPrevScrollpos(currentScrollPos);
   };
 }, [prevScrollpos]);










    return(
        <div className={` ${navbarVisible ? "" : '-translate-y-14'}   duration-500     fixed z-50 navbar flex justify-between items-center bg-black p-8 w-[100vw] h-[10vh] rounded-b-xl nav-shadow`}>
            <span id="home" className="flex gap-2 flex-shrink-0">
                <a href=""><img className="h-10 w-10" src="public/assets/HeroSection/instagram.png" alt="" /></a>
                <a href=""><img className="h-10 w-10" src="public/assets/HeroSection/linkedin.png" alt="" /></a>
            </span>
            <div className="navMenu absolute right-[2.778vw] " onClick={sideMenu}    >
                <span  className={`navMenuRods ${sideMenuActive ? "rod--01" : ''}`} onClick={sideMenu} ></span>
                <span  className={`navMenuRods ${sideMenuActive ? "rod--02" : ''}`} onClick={sideMenu} ></span>
                <span  className={`navMenuRods ${sideMenuActive ? "rod--03" : ''}`} onClick={sideMenu} ></span>
            </div>
            <ul className="flex gap-10 mr-[2.778vw]" style={sideMenuActive ? activeStyle : {}}>
                <div className="">
                    <li  className="text-center text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#HOME">Home</a></li>
                </div>
                <div className="">
                    <li className="text-center  text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#projects">Projects</a></li>
                </div> 
                <div className="">
                    <li className="text-center  text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#about">About</a></li>
                </div>
                <div className="">
                    <li className="text-center text-[#EFBCD5] font-iceland text-[3vh]"><a className="links" href="#contact">Contact</a></li>
                </div>
            </ul>
            
            
        </div>
    )
}