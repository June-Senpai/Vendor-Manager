import { useSession, signIn, signOut } from "next-auth/client";

function AuthButton() {
  const [session, loading] = useSession();

  if (loading) return <div>Loading...</div>;

  if (session) {
    return <button onClick={() => signOut()}>Sign out</button>;
  } else {
    return <button onClick={() => signIn()}>Sign in</button>;
  }
}

export default AuthButton;
