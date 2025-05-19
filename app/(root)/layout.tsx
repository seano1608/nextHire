import React, { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

import { redirect } from "next/navigation"
import { isAuthenticated, signOut } from "@/lib/actions/auth.action"

const Layout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated()

    if (!isUserAuthenticated) redirect("/sign-in")

    return (
        <div className="root-layout">
            <nav className="flex flex-row justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-100">NextHire</h2>
                </Link>

                <form action={signOut}>
                    <button type="submit">Sign out</button>
                </form>
            </nav>
            {children}
        </div>
    )
}

export default Layout
