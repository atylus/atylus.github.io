"use client";

import { useCallback } from "react";

export interface QuantityBoxProps {
  value: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  inputId?: string;
  className?: string;
}

export default function QuantityBox({
  value,
  onChange,
  min = 1,
  max,
  inputId = "minQty",
  className = "qty-box",
}: QuantityBoxProps) {
  const clamped = useCallback(
    (n: number) => {
      let next = Math.max(min, Math.floor(n));
      if (max != null) next = Math.min(max, next);
      return next;
    },
    [min, max],
  );

  const handleIncrement = useCallback(() => {
    onChange(clamped(value + 1));
  }, [value, clamped, onChange]);

  const handleDecrement = useCallback(() => {
    onChange(clamped(value - 1));
  }, [value, clamped, onChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = Number.parseInt(e.target.value, 10);
      if (Number.isNaN(parsed)) return;
      onChange(clamped(parsed));
    },
    [clamped, onChange],
  );

  return (
    <div className={className}>
      <button type="button" onClick={handleIncrement} aria-label="Increase quantity">
        +
      </button>
      <input
        type="number"
        id={inputId}
        value={value}
        min={min}
        max={max}
        aria-label="Quantity"
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleDecrement} aria-label="Decrease quantity">
        -
      </button>
    </div>
  );
}
