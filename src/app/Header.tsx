'use client'
import {Bars3Icon} from "@heroicons/react/24/solid";
import Link from 'next/link';
import NavLinks from './NavLinks';
import dynamic from "next/dynamic";
const SearchBox = dynamic(() => import('./SearchBox'),{ssr:false});
const DarkMode =dynamic(()=>import('./DarkMode'),{ssr:false});
import { redirect, useRouter } from "next/navigation";
import {  useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
function Header () {
    const router = useRouter();
    console.log("super")
    const [log ,setLog]=useState(true);
    const handleLogout = async () => {
        await signOut({ redirect: false });
        setLog(false);
        router.replace('/signin');
      };
    const session=useSession({
        required:true,
        onUnauthenticated(){ 
            
                setLog(true);
          
        },
    });
    console.log("gggg");
       return(
    <header>
            <div className='grid grid-cols-3 p-10 items-center'>
                <Bars3Icon className='h-8 w-8 cursor-pointer'/>
                    <Link href='/' prefetch={false}>
                        <h1 className='font-serif text-4xl text-center'>The <span className='underline decorate-6 decoration-orange-400'>speed</span>
                         News</h1>
                    </Link>
                    <div className='ml-10 grid grid-cols-3 flex-item-center justify-end space-x-1 md:space-x-3'>
                        <DarkMode/>
                        {log?(
                        <div className="grid grid-cols-2"><Link href="/signup">
                            <h3 className="mt-2 justify-center text-center bg-slate-900 text-white px-2 lg:px-2 py-2 lg:py-3 rounded-full dark:bg-slate-800 sm:py-3 sm:text-sm sm:px-3  md:py-3 md:px-3">
                              Sign up
                            </h3>
                          </Link>
                          <Link href="/signin">
                            <h3 className="mt-2 justify-center text-center bg-slate-900 text-white px-2 lg:px-2  lg:py-3 rounded-full dark:bg-slate-800 sm:py-3 sm:text-sm sm:px-3  md:py-3 md:px-3 py-3">
                              Sign in
                            </h3>
                          </Link>
                          </div>)
            :(<div>
            <button className="text-white" onClick={handleLogout}>Logout</button>
            <p className="text-white">Hello </p>
            
            </div>)}
                    </div>
                    </div>
                    <NavLinks/>
                    <SearchBox/>
                </header>
   )

}
Header.requireAuth=true;
export default Header;