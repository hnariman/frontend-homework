import React from "react";
import "./legend.scss";
import "../Calendar/calendar.scss";

const Legend = () => {
  return (
    <div className="legend">
      <h2 className="title">Legend</h2>
      <ul>
        <li className="legend-list">
          <div className="circle green"></div>
          <span className="legend-text">text</span>
        </li>
        <li className="legend-list">
          <div className="circle blue"></div>
          <span className="legend-text">text</span>
        </li>
        <li className="legend-list">
          <div className="circle yellow"></div>
          <span className="legend-text">text</span>
        </li>
        <li className="legend-list">
          <div className="circle grey"></div>
          <span className="legend-text">text</span>
        </li>
        <li className="legend-list">
          <div className="circle darkgreen"></div>
          <span className="legend-text">text</span>
        </li>
        <li className="legend-list">
          <div className="circle darkblue"></div>
          <span className="legend-text">text</span>
        </li>
      </ul>
      <button className="new-event-button">+ Add new event</button>
    </div>
  );
};

export default Legend;
