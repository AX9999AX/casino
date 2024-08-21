'use client'

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { FaConnectdevelop } from 'react-icons/fa'
import { useState } from 'react'

import { siteConfig } from '@/config/site'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <NextUINavbar
            isMenuOpen={isMenuOpen}
            maxWidth='full'
            position='sticky'
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
                <NavbarBrand as='li' className='gap-3 max-w-fit'>
                    <NextLink
                        className='flex justify-start items-center gap-1'
                        href='/'
                    >
                        <Image
                            alt='Logo'
                            height={40}
                            src='/logo.png'
                            width={40}
                        />
                        <p className='font-bold text-orange text-2xl ml-2'>
                            Bustabit
                        </p>
                    </NextLink>
                </NavbarBrand>
                <ul className='hidden lg:flex gap-4 justify-start ml-2'>
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: 'foreground' }),
                                    'data-[active=true]:text-orange data-[active=true]:font-medium'
                                )}
                                href={item.href}
                            >
                                <div className='mr-1'>{item.icon()}</div>
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className='hidden sm:flex basis-1/5 sm:basis-full'
                justify='end'
            >
                <NavbarItem className='hidden md:flex'>
                    <Button
                        isExternal
                        as={Link}
                        className='text-sm font-normal text-default-600 bg-default-100'
                        startContent={
                            <FaConnectdevelop
                                className='text-orange'
                                size={24}
                            />
                        }
                        variant='flat'
                    >
                        Connect Wallet
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className='mx-4 mt-2 flex flex-col gap-2'>
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color='foreground'
                                href={item.href}
                                size='lg'
                                onClick={() => {
                                    setIsMenuOpen(false)
                                }}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}
