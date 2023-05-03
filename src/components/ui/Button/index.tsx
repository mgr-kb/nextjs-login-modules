import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  function ButtonBase({ className, ...props }, ref) {
    const buttonStyle = "btn";
    return (
      <button
        {...props}
        className={clsx(className, buttonStyle)}
        ref={ref}
      ></button>
    );
  }
);
