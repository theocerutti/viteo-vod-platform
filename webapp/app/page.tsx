'use client';
import { useRouter } from 'next/navigation';

export default function Root() {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => router.push('/login')}>Login</button>
      <button onClick={() => router.push('/register')}>Register</button>
    </div>
  );
}
