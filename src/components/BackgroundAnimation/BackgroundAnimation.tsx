'use client'
import React from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className={`light x${index + 1}`}></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;