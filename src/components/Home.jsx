import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Achievements from "./Achievements";
import Categories from "./Categories";
import PopularTutors from "./PopularTutors";

function Home() {
  return (
    <div className="flex flex-col ">
      
        <Navbar />
        <div className=" pl-10 pr-10 ">

        <HeroSection/>
        </div>
        <Achievements className ="relative z-[99999999] " />
        <Categories />
        <PopularTutors/>
    </div>
  );
}

export default Home;
