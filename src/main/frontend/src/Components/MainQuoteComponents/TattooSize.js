import React from "react";

export default function TattooSize({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>What size is your tattoo? </h3>
        <label>
          <input
            type='radio'
            value='xs'
            id='xs'
            name='size'
            onChange={handleChange}
            checked={formData.size === "xs"}
          />
          <span>Extra Small</span>
        </label>
        <label>
          <input
            type='radio'
            value='small'
            id='small'
            name='size'
            onChange={handleChange}
            checked={formData.size === "small"}
          />
          <span>Small</span>
        </label>
        <label>
          <input
            type='radio'
            value='medium'
            id='medium'
            name='size'
            onChange={handleChange}
            checked={formData.size === "medium"}
          />
          <span>Medium</span>
        </label>
        <label>
          <input
            type='radio'
            value='large'
            id='large'
            name='size'
            onChange={handleChange}
            checked={formData.size === "large"}
          />
          <span>Large</span>
        </label>
        <label>
          <input
            type='radio'
            value='xl'
            id='xl'
            name='size'
            onChange={handleChange}
            checked={formData.size === "xl"}
          />
          <span>Extra Large</span>
        </label>
        <label>
          <input
            type='radio'
            value='eyebrows'
            id='eyebrows'
            name='size'
            onChange={handleChange}
            checked={formData.size === "eyebrows"}
          />
          <span>Eyebrows</span>
        </label>
        <label>
          <input
            type='radio'
            value='eyeliner'
            id='eyeliner'
            name='size'
            onChange={handleChange}
            checked={formData.size === "eyeliner"}
          />
          <span>Eyeliner or Eyelid</span>
        </label>
      </form>
    </>
  );
}
