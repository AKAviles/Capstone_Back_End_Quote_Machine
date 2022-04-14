import React from "react";
import "../../css/card.css";

export default function TattooLayering({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>Layering</h3>
        <label>
          <input
            type='radio'
            value='nolayering'
            id='nolayering'
            name='layering'
            onChange={handleChange}
            checked={formData.layering === "nolayering"}
          />
          <span>No layering</span>
        </label>
        <label>
          <input
            type='radio'
            value='yeslayering'
            id='yeslayering'
            name='layering'
            onChange={handleChange}
            checked={formData.layering === "yeslayering"}
          />
          <span>Yes - multiple tattoos layered on top of eachother </span>
        </label>
        {/* <button onClick={handleCalculateTotal}> Calculate </button> */}
      </form>
    </>
  );
}
