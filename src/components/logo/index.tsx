'use client'
import Image from "next/image";
import Link from "next/link";
const im = require("@/app/logo.svg")

export default function Logo() {
    return (
        <>
            <Link href="/">
                <Image
                    width="102"
                    height="32"
                    alt="Logo"
                    src={im}
                    className=""
                />
            </Link>
        </>
    )
}