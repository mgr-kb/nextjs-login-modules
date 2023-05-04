import type { ComponentProps, ReactNode } from "react";
import { forwardRef, useId, FC } from "react";

import clsx from "clsx";

import { DescriptionMessage } from "@/components/ui/DescriptionMessage";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { TextBox } from "@/components/ui/TextBox";

type Props = ComponentProps<typeof TextBox> & {
  description?: string;
  error?: string;
  info?: ReactNode;
  title: string;
};

export const TextBoxWithInfo = forwardRef<HTMLInputElement, Props>(
  function TextBoxWithInfo(
    { title, info, description, error, className, ...props },
    ref
  ) {
    // コンポーネントIDを生成する (ユニークな値を生成)
    const componentId = useId();
    const textboxId = `${componentId}-textbox`;
    const descriptionId = `${componentId}-description`;
    const errorMessageId = `${componentId}-errorMessage`;
    return (
      <section className={clsx(className)}>
        <header className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          <label htmlFor={textboxId}>{title}</label>
          {info}
        </header>
        <div className="mt-2">
          <TextBox
            id={textboxId}
            ref={ref}
            {...props}
            aria-describedby={description ? descriptionId : undefined}
            aria-errormessage={errorMessageId}
            aria-invalid={!!error}
          />
          {(error || description) && (
            <footer className="mt-2">
              {description && (
                <DescriptionMessage id={descriptionId}>
                  {description}
                </DescriptionMessage>
              )}
              {error && (
                <ErrorMessage className="" id={errorMessageId}>
                  {error}
                </ErrorMessage>
              )}
            </footer>
          )}
        </div>
      </section>
    );
  }
);
