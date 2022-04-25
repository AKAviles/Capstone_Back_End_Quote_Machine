import React from "react";

export default function SkinType({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>What is your skin type?</h3>
        <label>
          <input
            type='radio'
            value='one'
            id='one'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "one"}
          />
          <span> I. White, very fair, red/blonde, freckles </span>
        </label>
        <label>
          <input
            type='radio'
            value='two'
            id='two'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "two"}
          />
          <span>II. White, fair, red/blonde hair</span>
        </label>
        <label>
          <input
            type='radio'
            value='three'
            id='three'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "three"}
          />
          <span>
            {" "}
            III. White or olive skin, fair with any eye or hair color
          </span>
        </label>
        <label>
          <input
            type='radio'
            value='four'
            id='four'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "four"}
          />
          <span> IV. Brown, common in Mediterranean descent</span>
        </label>
        <label>
          <input
            type='radio'
            value='five'
            id='five'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "five"}
          />
          <span> V. Dark brown, common in Middle Eastern descent</span>
        </label>
        <label>
          <input
            type='radio'
            value='six'
            id='six'
            name='skintype'
            onChange={handleChange}
            checked={formData.skintype === "six"}
          />
          <span>VI. Black</span>
        </label>
      </form>
    </>
  );
}
