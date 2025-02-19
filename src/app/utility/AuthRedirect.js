import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthRedirect = ({ protectedRoute, unprotectedRoute }) => {
    const router = useRouter();
    const token = Cookies.get("token"); // Replace with your cookie or auth check

    useEffect(() => {
        if (protectedRoute && !token) {
            // Redirect unauthenticated users from protected routes
            router.push("/admin/login");
        }

        if (unprotectedRoute && token) {
            // Redirect authenticated users from unprotected routes
            router.push("/admin/dashboard");
        }
    }, [router, protectedRoute, unprotectedRoute, token]);

    return null; // This component only handles redirection
};

export default AuthRedirect;