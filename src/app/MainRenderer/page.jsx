import React from "react";
import Boxes from "./../Boxes/page";
import Criteria from "./../Criteria/page";
import Navbar from "../Navbar/page";
import CompanyScreening from './../CompanyScreening/page'
const App = () => {
  return (
    <>
         <div className="relative -top-2">
         <div className="relative z-10 bg-black">


<Navbar/>
<CompanyScreening/>
</div>

<div className="relative z-10">
<Criteria />
<Boxes />
</div>{" "}
<div className="background fixed z-0  top-0 left-0  "></div>
         </div>
    </>
  );
};

export default App;
