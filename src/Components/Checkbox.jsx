import React from "react";

export default function Checkbox() {
  return (
    <>
      <div className=" cls1">
        <div className="col">
          <input type="checkbox" name="food" id="" />
          Food
        </div>
        <div className="col">
          <input type="checkbox" name="Transport" id="" />
          Transport
        </div>
        <div className="col">
          <input type="checkbox" name="utilities" id="" />
          Utilities
        </div>
        <div className="col">
          <input type="checkbox" name="others" id="" />
          Enterntainment
        </div>
        <div className="col">
          <input type="checkbox" name="check" id="" />
          Others
        </div>
      </div>
    </>
  );
}
