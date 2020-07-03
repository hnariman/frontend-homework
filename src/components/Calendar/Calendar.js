import React from "react";
import "./calendar.scss";

import Legend from "../Legend/Legend";

export default function Calendar() {
  return (
    <div className="cal-wrapper">
      <CurrentDate />
      <CalendarGrid />
      <Legend />
    </div>
  );
}

const CurrentDate = () => (
  <h2>
    {new Date()
      .toLocaleString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      })
      .replace(",", "")}
  </h2>
);

const CalendarGrid = ({ days = 7, hours = 12, width = 70, height = 80 }) => (
  <div className="cal_grid">
    <div style={{ display: "flex", textAlign: "center" }}>
      <Days days={days} width={width} />
    </div>
    <Hours show={hours} height={height} />
  </div>
);

const Days = ({ days, width, date = new Date() }) => {
  const printDate = (x) => console.log(x.target.textContent);
  return Array(days)
    .fill()
    .map((_, x) => (
      <div
        style={{ border: "1px solid red", width: `${width / days}vw` }}
        key={x}
        onClick={printDate.bind(x)}
      >
        <div className="days">
          <div className="day-title">
            {new Date(date.setDate(date.getDate() + x)).toLocaleString("en", {
              weekday: "short",
              day: "2-digit",
              month: "short",
            })}
          </div>
        </div>
      </div>
    ));
};

const Hours = ({ show = 24, height = 70 }) => {
  return Array(show)
    .fill()
    .map((_, x) => (
      <>
        <div
          style={{
            border: "1px solid red",
            height: `${height / show / 2}vh`,
          }}
          className="hours"
        >
          {x}:00
        </div>
        <div
          style={{
            border: "1px solid red",
            height: `${height / show / 2}vh`,
          }}
          className="hours"
        >
          {x}:30
        </div>
      </>
    ));
};
