import type { ComponentProps } from "react";
import { forwardRef } from "react";

import clsx from "clsx";

type Props = ComponentProps<"input">;

export const TextBox = forwardRef<HTMLInputElement, Props>(function TextBox(
  { className, ...props },
  ref
) {
  // 読み取り専用の場合はそのためのスタイルを設定する
  const readonlyStyle =
    props.readOnly &&
    "bg-gray-100 border-gray-200 text-gray-900 cursor-default";
  return (
    <input
      type="text"
      {...props}
      className={clsx(
        className,
        "input input-bordered w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        readonlyStyle
      )}
      ref={ref}
    ></input>
  );
});
