import React from 'react'
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicNextLink } from '@prismicio/next';

export default async function Footer() {
    const client = createClient();
    const page = await client.getSingle("home").catch(() => notFound());

    return (
        <div className="m-8 font-dm text-red-600 font-medium text-center flex justify-between">
            <ul className="flex gap-6 font-bold text-lg text-black">
                {/* Navigation links */}
                {/* chama o item de navegação e escolhe o index(link) e a info(label) */}
                {page.data.navigation.map((link, label) => (
                    <li className="transition-all duration-300 ease-in-out hover:text-xl hover:text-red-600" key={label}>
                        <PrismicNextLink field={link.link[0]}>{link.label}</PrismicNextLink>
                    </li>
                ))
                }
            </ul>
            <p>©{new Date().getFullYear()} Tecno System | All Rights Reserved</p>
        </div>
    )
}