import React from 'react';

export default function GraphBox() {
  return (
    <div id="gb-outer">
      <div id="gb-details1">
        <h1>26°C</h1>
        <img className="curr-image" src="/images/trial.svg" alt="cloud"></img>
      </div>
      <div id="gb-graph1"></div>
      <div id="gb-details2">
        <div className="gb-d1">
          <span className="bold">Pressure</span>
          <span>998 hpa</span>
        </div>
        <div className="gb-d2">
          <span className="bold">Humidity</span>
          <span>91 %</span>
        </div>
      </div>
      <div id="gb-graph2">
        <div className="gb-graph2-details">
          <div className="gb-g2-d">
            <span className="bold">Sunrise</span>
            <span>6:17am</span>
          </div>
          <div className="gb-g2-d">
            <span className="bold">Sunset</span>
            <span>7:10pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
