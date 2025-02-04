import React from "react";

export default function Checkbox({ categories2, handleCheck }) {
  return (
    <>
      <div className="cls1">
        <div className="col">
          {categories2.map((value, index) => {
            return (
              <label key={index}>
                <input type="checkbox" value={value} onChange={handleCheck} />
                {value}
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}
