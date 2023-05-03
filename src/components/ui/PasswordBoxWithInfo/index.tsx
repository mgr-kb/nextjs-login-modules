import type { ComponentProps, ReactNode } from "react";
import { forwardRef, useId } from "react";

import clsx from "clsx";

import { DescriptionMessage } from "@/components/ui/DescriptionMessage";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { PasswordBox } from "@/components/ui/PasswordBox";
import { TextBox } from "@/components/ui/TextBox";

type Props = ComponentProps<typeof PasswordBox> & {
  description?: string;
  error?: string;
  info?: ReactNode;
  showPassword: boolean;
  title: string;
};

export const PasswordBoxWithInfo = forwardRef<HTMLInputElement, Props>(
  function PasswordBoxWithInfo(
    { title, showPassword, info, description, error, className, ...props },
    ref
  ) {
    // コンポーネントIDを生成する (ユニークな値を生成)
    const componentId = useId();
    const passwordBoxId = `${componentId}-passwordbox`;
    const descriptionId = `${componentId}-description`;
    const errorMessageId = `${componentId}-errorMessage`;
    return (
      <section className={clsx(className)}>
        <header className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          <label htmlFor={passwordBoxId}>{title}</label>
          {info}
        </header>
        <div className="mt-2">
          {showPassword ? (
            <TextBox
              {...props}
              aria-describedby={description ? descriptionId : undefined}
              aria-errormessage={errorMessageId}
              aria-invalid={!!error}
              id={passwordBoxId}
              ref={ref}
            ></TextBox>
          ) : (
            <PasswordBox
              {...props}
              aria-describedby={description ? descriptionId : undefined}
              aria-errormessage={errorMessageId}
              aria-invalid={!!error}
              id={passwordBoxId}
              ref={ref}
            ></PasswordBox>
          )}
          {(error || description) && (
            <footer className="mt-2">
              {description && (
                <DescriptionMessage id={descriptionId}>
                  {description}
                </DescriptionMessage>
              )}
              {error && (
                <ErrorMessage id={errorMessageId}>{error}</ErrorMessage>
              )}
            </footer>
          )}
        </div>
      </section>
    );
  }
);
