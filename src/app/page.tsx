'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/signin');
  //   },
  // });
  // return (
  //   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

  //     <div className='text-white'>{session?.data?.user?.email }</div>
  //     <button className='text-white' onClick={() => signOut()}>Logout</button>
  //   </div>
  // )
  

}

Home.requireAuth = true