'use client'

import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <header className='header'>
            <Link href={'/'}>
 
                <Image
                    src='/assets/images/transformAI-logo.png'
                    alt="logo"
                    width={180}
                    height={28}
                />
                {/* <p>TransformAi</p> */}
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src='/assets/icons/menu.svg'
                                alt="logo"
                                width={32}
                                height={32}
                                className='cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                {/* <Image
                                    src='/assets/images/log-text.svg'
                                    alt="logo"
                                    width={152}
                                    height={23}
                                    className='cursor-pointer'
                                /> */}
                                 <ul className='header-nav_elements'>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname
                                return <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                    <Link className='sidebar-link cursor-pointer' href={link.route} >
                                        <Image
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            })}


                        </ul>

                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
            </nav>
        </header>
    )
}

export default MobileNav