import React from "react";

export default function TattooColor({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3> What color is your tattoo? </h3>
        <label>
          <input
            type='radio'
            value='black'
            id='black'
            name='color'
            onChange={handleChange}
            checked={formData.color === "black"}
          />
          <span>Only Black</span>
        </label>
        <label>
          <input
            type='radio'
            value='blackred'
            id='blackred'
            name='color'
            onChange={handleChange}
            checked={formData.color === "blackred"}
          />
          <span>Mostly black/some red</span>
        </label>
        <label>
          <input
            type='radio'
            value='blackcolor'
            id='blackcolor'
            name='color'
            onChange={handleChange}
            checked={formData.color === "blackcolor"}
          />
          <span>Mostly black with other colors</span>
        </label>
        <label>
          <input
            type='radio'
            value='multi'
            id='multi'
            name='color'
            onChange={handleChange}
            checked={formData.color === "multi"}
          />
          <span>Multiple colors</span>
        </label>
      </form>
    </>
  );
}
