// components/Button.tsx
import Link from "next/link";
import React from "react";

const Button = ({href, children, className = "", type = "link", onClick,}) => {
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
