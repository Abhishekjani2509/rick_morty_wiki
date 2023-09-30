import React from "react";
import Status from "./Category/Status";
import Gender from "./Category/Gender";

const Filters = ({setStatus, setpageNumber, setGender}) => {
  let clear = () => {
    setStatus("")
    setpageNumber("")
    setGender("")
    window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-inderline text-primary mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setpageNumber={setpageNumber} setStatus={setStatus}/> 
        <Gender setpageNumber={setpageNumber} setGender={setGender}/>
      </div>
    </div>
  );
};

export default Filters;
