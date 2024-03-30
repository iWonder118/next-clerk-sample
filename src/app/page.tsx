import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link"
import '../component/userInfo'
import { UserInfo } from "../component/userInfo";

export default async function Home() {

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      トップページ
      <div className="flex justify-center items-center">
        <Link className="m-1 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm" href="/sign-in">サインイン</Link>
        <Link className="m-1 px-4 py-2 rounded-lg bg-secondary-500 text-gray-600 text-sm border border-black" href="/sign-up">サインアップ</Link>
        <SignOutButton>
          <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm">
            サインアウト
          </button>
        </SignOutButton>
      </div>
      <div className="mt-2">
        <UserInfo />
      </div>
    </main>
  );
}
