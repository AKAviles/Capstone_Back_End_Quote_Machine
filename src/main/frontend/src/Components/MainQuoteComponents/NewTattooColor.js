import React from "react";
import MemoAllBlack from "../colorimages/AllBlack";
import MemoBlackColor from "../colorimages/BlackColor";
import MemoBlackRed from "../colorimages/BlackRed";
import MemoMultiColor from "../colorimages/MultiColor";

export default function NewTattooColor({
  clickState,
  formData,
  handleColorChange,
}) {
  return (
    <>
      <div
        className='test-div'
        name='color'
        value='black'
        onClick={(event) => handleColorChange(event, 1)}
      >
        <MemoAllBlack clickState={clickState} />
      </div>
      <div
        className='test-div'
        name='color'
        value='blackred'
        onClick={(event) => handleColorChange(event, 2)}
      >
        <MemoBlackRed clickState={clickState} />
      </div>
      <div
        className='test-div'
        name='color'
        value='blackcolor'
        onClick={(event) => handleColorChange(event, 3)}
      >
        <MemoBlackColor clickState={clickState} />
      </div>
      <div
        className='test-div'
        name='color'
        value='multi'
        onClick={(event) => handleColorChange(event, 4)}
      >
        <MemoMultiColor clickState={clickState} />
      </div>
    </>
  );
}
