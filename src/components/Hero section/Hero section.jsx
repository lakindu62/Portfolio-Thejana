
import React from "react"
import Navbar from "./sub components/navbar.jsx"
import HeroImage from "./sub components/heroImage.jsx"
import "./Hero.css"


export default function HeroSection(){
    return(
        <div className="sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] h-[100vh] flex items-center">
            <Navbar />
            <HeroImage />

            
        </div>
    )
}