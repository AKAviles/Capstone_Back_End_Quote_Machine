import React from "react";

export default function TattooInkAmount({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>Amount of Ink </h3>
        <label>
          <input
            type='radio'
            value='amatuer'
            id='amatuer'
            name='inkamount'
            onChange={handleChange}
            checked={formData.inkamount === "amatuer"}
          />
          <span>Amatuer</span>
        </label>
        <label>
          <input
            type='radio'
            value='minimal'
            id='minimal'
            name='inkamount'
            onChange={handleChange}
            checked={formData.inkamount === "minimal"}
          />
          <span>Minimal</span>
        </label>
        <label>
          <input
            type='radio'
            value='moderate'
            id='moderate'
            name='inkamount'
            onChange={handleChange}
            checked={formData.inkamount === "moderate"}
          />
          <span>Moderate</span>
        </label>
        <label>
          <input
            type='radio'
            value='significant'
            id='significant'
            name='inkamount'
            onChange={handleChange}
            checked={formData.inkamount === "significant"}
          />
          <span>Significant</span>
        </label>
        <label>
          <input
            type='radio'
            value='newtattoo'
            id='newtattoo'
            name='inkamount'
            onChange={handleChange}
            checked={formData.inkamount === "newtattoo"}
          />
          <span>New Tattoo</span>
        </label>
      </form>
    </>
  );
}
