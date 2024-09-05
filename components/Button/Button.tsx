import React from "react";
type Props = {
  text: string;
  color?: string;
};
const Button = ({ text, color }: Props) => {
  return (
    <button
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 10px ${color}`,
      }}
      className={`px-8 py-2 text-sm text-white b rounded-md  `}
    >
      {text}
    </button>
  );
};

export default Button;
