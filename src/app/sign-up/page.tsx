import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="flex flex-col justify-center min-h-screen">
            <SignUp />;
        </main>
    );
}