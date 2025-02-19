import React from "react";
import Image from "next/image";
import Button from "./atomic/Button";
export default function Header() {
    const links = [
        { name: "Home", href: "https://masihisahityasanstha.com/" },
        { name: "Who Are We", href: "https://masihisahityasanstha.com/" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects/" },
        { name: "Image Gallery", href: "https://masihisahityasanstha.com/image-gallery/" },
        { name: "Contact Us", href: "/contact-us/" }
    ];


    return (
        <header className="container mx-auto">
            <div className="flex justify-between">
                <div className="flex justify-start">
                    <a href="/" id="logo">
                        <Image
                            src="/mss/logos/mss_logo.jpg"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            alt="MSS Logo"
                        />
                    </a>
                </div>
                <div className="flex justify-end gap-3">
                    <nav className="flex items-center">
                        <ul className="flex justify-end">
                            { links.map((item, index) => (
                                <li key={item.name} className={`flex bg-secondary hover:bg-gray-300 hover:text-primary border-b-3  hover:border-primary transition-all duration-200 ease-in-out ${index === 0 ? "text-primary font-bold border-primary" : ""}`}>
                                    <a className="px-4 py-2" href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        <ul className="flex gap-3">
                            <li className="flex justify-center">
                                <Button
                                    type="link"
                                    href="https://masihisahityasanstha.com/donation-2/?preview_id=3662&preview_nonce=fc14ef11cd&preview=true">Donation</Button>
                            </li>
                            <li className="flex justify-center">
                                <Button type="link" href="https://masihi.store/">Buy Now!</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
