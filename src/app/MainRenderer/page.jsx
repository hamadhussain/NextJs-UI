import React from "react";
import Boxes from "./../Boxes/page";
import Criteria from "./../Criteria/page";
import Navbar from "../Navbar/page";
import CompanyScreening from "./../CompanyScreening/page";
const App = () => {
  return (
    <>
      <div className=" ">
        <div className="  bg-black">
          <Navbar />
        </div>
        <div className="background">
          <CompanyScreening />
          <Criteria />
          <Boxes />
        </div>
      </div>
    </>
  );
};

export default App;
