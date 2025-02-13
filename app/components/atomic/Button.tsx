// components/Button.tsx
import Link from "next/link";
import React from "react";

type ButtonProps = {
    href?: string; // Optional if the button is a normal button
    children: React.ReactNode; // Content inside the button
    className?: string; // Optional additional CSS classes
    type?: "link" | "button"; // Determines if it's a link or a button
    onClick?: () => void; // Optional onClick handler
};

const Button: React.FC<ButtonProps> = ({href, children, className = "", type = "link", onClick,}) => {
    const baseStyles = "rounded-lg px-4 py-2 bg-primary text-white hover:bg-primary hover:brightness-110 duration-300";

    if (type === "link" && href) {
        return (
            <Link href={href} passHref className={`${baseStyles} ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
