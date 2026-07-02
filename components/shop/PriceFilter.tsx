"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
export default function PriceFilter() {
  const [minValue, setMinValue] = useState<number>(10);
  const [maxValue, setMaxValue] = useState<number>(1000);

  const handleChange = (values: number | number[]) => {
    if (!Array.isArray(values)) return;
    const [min, max] = values;
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <div className="filter-box">
      {/* <div className="slider-container"> */}
      <Slider
        range
        min={0}
        max={1000}
        step={10}
        allowCross={false}
        value={[minValue, maxValue]}
        onChange={handleChange}
      />
      {/* </div> */}
      <div className="price-values">
        <span id="min-value">${minValue}</span>
        <span id="max-value">${maxValue}</span>
      </div>
      <button>Apply filter</button>
    </div>
  );
}
