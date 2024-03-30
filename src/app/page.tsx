import { UserInfo } from "../component/userInfo";
import { AuthButtons } from "../component/authButtons";

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
