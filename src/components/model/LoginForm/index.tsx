import type { FC } from "react";
import { useState, useId } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { PasswordBoxWithInfo } from "@/components/ui/PasswordBoxWithInfo";
import { TextBoxWithInfo } from "@/components/ui/TextBoxWithInfo";
import { loginFormInputSchema } from "@/lib/schema/LoginSchema";

import type { LoginFormInput } from "@/lib/schema/LoginSchema";
import type { FieldValues } from "react-hook-form";

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: session } = useSession();
  console.log("session: ", session);

  const componentId = useId();
  const errorId = `${componentId}-error`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({ resolver: zodResolver(loginFormInputSchema) });

  const onSubmit = async (data: FieldValues) => {
    setIsError(false);
    const input = data as LoginFormInput;
    console.log(input);
    const isLogin = false;
    await signIn();
    // TODO ログイン処理
    // const isLogin = await loginWithPassword({ input });
    if (isLogin) {
      router.push("/");
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            ログイン
          </h3>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <TextBoxWithInfo
            title="login id"
            {...register("loginId")}
            className="sm:border-t sm:border-gray-200 sm:pt-5"
            error={errors.loginId?.message}
          />
        </div>
        <div className="space-y-6 sm:space-y-5">
          <PasswordBoxWithInfo
            showPassword={showPassword}
            title="password"
            {...register("password")}
            className="sm:border-t sm:border-gray-200 sm:pt-5"
            error={errors.password?.message}
          />
        </div>
      </div>
      <div className="flex">
        <label className="label cursor-pointer flex gap-2">
          <input
            checked={showPassword}
            className="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            type="checkbox"
          />
          <span className="label-text">パスワードを表示する</span>
        </label>
      </div>
      {isError ? (
        <ErrorMessage id={errorId}>
          emailかパスワードが間違っています。
        </ErrorMessage>
      ) : null}
      <div className="pt-5 flex justify-center flex-col gap-4">
        <button
          className="btn btn-block bg-indigo-600  hover:bg-indigo-700"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
