import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const GoogleSuccess = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const token =
            params.get("token");

        const user =
            JSON.parse(
                decodeURIComponent(
                    params.get("user")
                )
            );

        if (token && user) {

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            navigate("/user/dashboard");
        }

    }, []);

    return <div>Logging in...</div>;
};

export default GoogleSuccess;