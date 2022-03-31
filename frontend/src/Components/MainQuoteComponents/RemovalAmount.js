import React from "react";

export default function RemovalAmount({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3> Are you looking to fade or remove your tattoo?</h3>
        <label>
          <input
            type='radio'
            value='fade'
            id='fade'
            name='removalamount'
            onChange={handleChange}
            checked={formData.removalamount === "fade"}
          />
          <span>Fade</span>
        </label>
        <label>
          <input
            type='radio'
            value='remove'
            id='remove'
            name='removalamount'
            onChange={handleChange}
            checked={formData.removalamount === "remove"}
          />
          <span>Remove</span>
        </label>
        <label>
          <input
            type='radio'
            value='unsure'
            id='unsure'
            name='removalamount'
            onChange={handleChange}
            checked={formData.removalamount === "unsure"}
          />
          <span>Unsure</span>
        </label>
      </form>
    </>
  );
}
