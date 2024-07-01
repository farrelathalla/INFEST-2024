import React from "react";
import TimeLineHorizontal from "./TimeLineHorizontal";

const TimeLineHome = ({ title, description, prizes }) => {
  return (
    <div className="wrapper mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center ">
          <span className="text-white bg-clip-text text-transparent">Timeline</span>
        </h1>
        <TimeLineHorizontal />
    </div>
  );
};

export default TimeLineHome;