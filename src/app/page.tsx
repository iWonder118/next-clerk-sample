import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      トップページ
      <SignOutButton>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm">
          サインアウト
        </button>
      </SignOutButton>
    </main>
  );
}
