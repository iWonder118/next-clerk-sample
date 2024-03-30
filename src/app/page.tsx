import { UserInfo } from "../components/userInfo";
import { AuthButtons } from "../components/authButtons";

export default async function Home() {

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      トップページ
      <AuthButtons></AuthButtons>
      <div className="mt-2">
        <UserInfo />
      </div>
    </main>
  );
}
