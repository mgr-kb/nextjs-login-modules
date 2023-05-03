import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

type Props = ComponentProps<"input">;

export const PasswordBox = forwardRef<HTMLInputElement, Props>(
  function PasswordBox({ className, ...props }, ref) {
    return (
      <input
        type="password"
        {...props}
        className={clsx(
          className,
          "input input-bordered w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        )}
        ref={ref}
      />
    );
  }
);
