import React from "react";
type Props = {
  text: string;
  color?: string;
};
const Button = ({ text, color }: Props) => {
  return (
    <button
      className={`px-8 py-2 text-sm text-white bg-yellow-500 rounded-md shadow-lg shadow-yellow-200 `}
    >
      {text}
    </button>
  );
};

export default Button;
