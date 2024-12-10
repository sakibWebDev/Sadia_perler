"use client"
import Link from 'next/link';
import React from 'react';
import imglog from "../../../public/assets/logo.png";
import Image from 'next/image';
import {signOut, useSession } from 'next-auth/react';


const Navber = () => {
    const session = useSession();
    console.log(session, "My country is bangladesh",session?.data?.email);
    
    const navpath = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Our Portfolio",
            path: "/dashboard",
        },
        {
            title: "Our Team",
            path: "/team",
        },
        {
            title: "Contact Us",
            path: "/contact",
        },
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navpath.map((navlink) => (
                        <li key={navlink.title}>
                            <Link href={navlink.path}>{navlink.title}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <Image src={imglog} alt='Logo Img ' height={100} width={100} />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex font-bold justify-between items-center space-x-3  menu-horizontal px-1">
                    {navpath.map((navlink) => (
                        <li className='hover:underline hover:decoration-[#3D5300]  hover:decoration-4' key={navlink.title}>
                            <Link href={navlink.path}>{navlink.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
            { session?.status === 'loading' &&
            <h6>Loading....</h6>
            }
          { session?.status === 'unauthenticated' &&
            <Link href="/login" className="btn btn-primary px-8">Login</Link>
            }
          { session?.status === 'authenticated' &&
            <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>
            }
            </div>
        </div>
    );
};

export default Navber;
