import React from 'react';

export default function SliderBox() {
  // let array = [

  // ];
  return (
    <div id="slb-outer">
      <div className="slb-daycard">
        {/* <input
          className="slb-daycardip"
          type="radio"
          checked="checked"
          name="daydetails"
        ></input> */}
        <div className="slb-daydetails">
          <p>day</p>
          <p>
            <span>maxt</span>
            <span>mint</span>
          </p>
          <img src="/images/trial.svg" className="slb-dataicon" alt=""></img>
          <p>Clouds</p>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
