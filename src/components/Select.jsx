import React, { useId } from "react";

function Select({ label, className = "", options, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full ">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full duration-200 border border-gray-200 ${className}`}
      >
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
