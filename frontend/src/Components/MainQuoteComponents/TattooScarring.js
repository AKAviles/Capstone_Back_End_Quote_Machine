import React from "react";

export default function TattooScarring({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>Scarring</h3>
        <label>
          <input
            type='radio'
            value='minimal'
            id='minimal'
            name='scarring'
            onChange={handleChange}
            checked={formData.scarring === "minimal"}
          />
          <span>Minimal</span>
        </label>
        <label>
          <input
            type='radio'
            value='moderate'
            id='moderate'
            name='scarring'
            onChange={handleChange}
            checked={formData.scarring === "moderate"}
          />
          <span>Moderate</span>
        </label>
        <label>
          <input
            type='radio'
            value='significant'
            id='significant'
            name='scarring'
            onChange={handleChange}
            checked={formData.scarring === "significant"}
          />
          <span>Significant</span>
        </label>
      </form>
    </>
  );
}
