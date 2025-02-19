"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = "/api/auth/register";

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            router.push("/admin/login");
        } else {
            const { message } = await res.json();
            setError(message);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
                <p className="mt-2 text-center text-gray-600">MSS Admin</p>
                {error && <p className="mt-2 text-center text-red-500">{error}</p>}

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-2 mt-3 w-full h-8 rounded-lg border-gray-300 shadow-sm focus:border-primary "
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="pl-2 mt-3 w-full h-8 rounded-lg border-gray-300 shadow-sm focus:border-primary "
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2 rounded" /> Remember me
                        </label>
                        <a href="#" className="text-sm text-primary hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Have an account?{" "}
                    <button className="font-medium text-primary hover:underline" onClick={()=> router.push("/admin/login")}>
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
}
