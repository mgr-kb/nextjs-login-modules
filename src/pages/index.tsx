import { LoginForm } from "@/components/model/LoginForm";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-1 flex-col items-center py-12 sm:px-6 lg:px-8`}
    >
      <h2 className="text-lg font-medium leading-6 text-gray-900">
        ログイン画面
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full w-4/5 sm:max-w-[480px]">
        <LoginForm />
      </div>
    </main>
  );
}
