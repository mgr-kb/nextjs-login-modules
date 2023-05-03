import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

type Props = ComponentProps<"p">;

export const DescriptionMessage = forwardRef<HTMLParagraphElement, Props>(
  function DescriptionMessage({ className, ...props }, ref) {
    return <p {...props} className={clsx(className)} ref={ref} />;
  }
);
