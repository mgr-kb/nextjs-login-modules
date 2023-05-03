import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

export const AnchorText = forwardRef<
  HTMLAnchorElement,
  ComponentProps<"a"> & {
    hasArrow?: boolean;
    size?: 12 | 14 | 16;
    theme?: "white";
  }
>(function AnchorText({ className, hasArrow, theme, size, ...props }, ref) {
  return (
    <a
      {...props}
      className={clsx(className)}
      data-arrow={hasArrow}
      data-size={size}
      data-theme={theme}
      ref={ref}
      role="link"
    ></a>
  );
});
