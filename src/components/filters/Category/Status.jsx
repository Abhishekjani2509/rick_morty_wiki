import React from "react";
import FilterBtn from "./FilterBtn";
const Status = ({ setStatus, setpageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn task={setStatus} setpageNumber ={setpageNumber} key={index} name="status" index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
