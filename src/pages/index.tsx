import { LoginForm } from "@/components/model/LoginForm";

export default function Home() {
  const handleGet = async () => {
    const res = await fetch("/api/prisma-sample/get");
    if (res.ok) {
      console.log("成功だ");
      console.log(await res.json());
    } else {
      console.log("失敗だ", await res.text());
    }
  };
  const handleCreate = async () => {
    const res = await fetch("/api/prisma-sample/create", {
      method: "POST",
      body: JSON.stringify({
        title: "テストのタイトルだよお",
        description: "そうなのかあ",
      }),
    });
    if (res.ok) {
      console.log("成功だ");
      console.log(await res.json());
    } else {
      console.log("失敗だ", await res.text());
    }
  };
  const handleDelete = async () => {
    const res = await fetch("/api/prisma-sample/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id: 1,
      }),
    });
    if (res.ok) {
      console.log("成功だ");
      console.log(await res.json());
    } else {
      console.log("失敗だ", await res.text());
    }
  };
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
      <div>
        <button className="mt-2 btn btn-info" onClick={handleGet}>
          get!
        </button>
        <button className="ml-2 btn btn-primary" onClick={handleCreate}>
          create!
        </button>
        <button className="ml-2 btn btn-warning" onClick={handleDelete}>
          delete!
        </button>
      </div>
    </main>
  );
}
