// import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const FilterBtn = ({ index, name, items, task, setpageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: blue;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setpageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
