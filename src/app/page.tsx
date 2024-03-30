import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link"
import '../component/userInfo'
import { UserInfo } from "../component/userInfo";

export default async function Home() {

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      トップページ
      <div className="flex justify-center items-center">
        <Link href="/sign-in">サインイン</Link>
        <Link href="/sign-up">サインアップ</Link>
      </div>
      {}
      <SignOutButton>
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm">
          サインアウト
        </button>
      </SignOutButton>
      <UserInfo />
    </main>
  );
}
