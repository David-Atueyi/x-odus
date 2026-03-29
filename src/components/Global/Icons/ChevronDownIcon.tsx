export const ChevronDownIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="12"
        strokeDashoffset="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 16l-7 -7M12 16l7 -7"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="12;0"
        />
      </path>
    </svg>
  );
};
