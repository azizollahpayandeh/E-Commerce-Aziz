import AboutCategory from "@/Components/Template/AboutCatory/AboutCatory";
import MainSecAbout from "@/Components/Template/ManSecAbout/MainSecAbout";
import Services from "@/Components/Template/Services/Services";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <MainSecAbout/>
        <AboutCategory/>
        <Services/>
      </div>
    </>
  );
}
