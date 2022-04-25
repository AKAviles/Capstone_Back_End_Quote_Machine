import React from "react";
import DateSelector from "./DateSelector";

export default function TattooAge({ formData, handleChange }) {
  return (
    <>
      <form>
        <h3>What is the age of your tattoo?</h3>
        <label>
          <input
            type='radio'
            value='three'
            id='three'
            name='age'
            onChange={handleChange}
            checked={formData.age === "three"}
          />
          <span>Less than 3 months</span>
        </label>
        <label>
          <input
            type='radio'
            value='six'
            id='six'
            name='age'
            onChange={handleChange}
            checked={formData.age === "six"}
          />
          <span>6 months or less</span>
        </label>
        <label>
          <input
            type='radio'
            value='sixtoeleven'
            id='sixtoeleven'
            name='age'
            onChange={handleChange}
            checked={formData.age === "sixtoeleven"}
          />
          <span>6 - 11 months</span>
        </label>
        <label>
          <input
            type='radio'
            value='oneyear'
            id='oneyear'
            name='age'
            onChange={handleChange}
            checked={formData.age === "oneyear"}
          />
          <span> 1 - 3 years </span>
        </label>
        <label>
          <input
            type='radio'
            value='fiveyears'
            id='fiveyears'
            name='age'
            onChange={handleChange}
            checked={formData.age === "fiveyears"}
          />
          <span>5 - 10 years </span>
        </label>
        <label>
          <input
            type='radio'
            value='tenplus'
            id='tenplus'
            name='age'
            onChange={handleChange}
            checked={formData.age === "tenplus"}
          />
          <span>10+ years</span>
        </label>
      </form>
      {formData.age === "three" ? (
        <div>
          {" "}
          <DateSelector />{" "}
        </div>
      ) : null}
    </>
  );
}
