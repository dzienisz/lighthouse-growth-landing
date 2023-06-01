import { IconProps } from "@/shared/icons/IconProps";

export const ArrowDown = ({ className }: IconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      className={className}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
