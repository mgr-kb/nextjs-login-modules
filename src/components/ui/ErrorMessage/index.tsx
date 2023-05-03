import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

type Props = ComponentProps<"p">;

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(
  function ErrorMessage({ className, ...props }, ref) {
    const errorStyle = "text-red-500 mt-2";
    return (
      <p
        {...props}
        aria-live="off"
        className={clsx(className, errorStyle)}
        ref={ref}
        role="alert"
      />
    );
  }
);
