import React from "react";
import "./styles.css";

export const Checkbox = ({ isChecked, onChange, children }) => {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        className="checkbox-element"
        checked={isChecked}
        onChange={() => onChange((prev) => !prev)}
      />
      <p>{children}</p>
    </label>
  );
};
