import React from 'react';

export const EyeIcon = ({
  className,
  fill = "none",
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`feather feather-eye ${className}`}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};
