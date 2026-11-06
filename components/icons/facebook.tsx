import { ComponentPropsWithRef } from "react";

export const Facebook = ({
  size = 24,
  color = "currentColor",
  ...props
}: ComponentPropsWithRef<"svg"> & { size?: number; color?: string }) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.021 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.968h-1.513c-1.491 0-1.956.931-1.956 1.887v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.098 24 12.073Z"
        fill={color}
      />
    </svg>
  );
};
