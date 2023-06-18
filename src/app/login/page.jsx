"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google");
  };
  return (
    <main className="flex items-center justify-center h-screen ">
      <button
        onClick={handleSignIn}
        className="inline-flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        <span className="p-1 mr-2 bg-white rounded-full">
          <img src="/google-icon.svg" alt="Google Icon" className="w-5" />
        </span>
        <span>Sign in with Google</span>
      </button>
    </main>
  );
}
