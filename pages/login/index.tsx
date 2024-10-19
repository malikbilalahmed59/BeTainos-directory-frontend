import { logged_in } from '@/app/services/next_auth_login';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("user@strapi.io")
    const [password, setPassword] = useState<string>("strapiPassword")
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await logged_in(email, password);
            console.log("res", result?.status)
            if (result?.status == 200) {
                console.log("logged in")
                toast.success("Successfully signed in");
            } else {
                toast.info("Invalid email or password");
                console.log(result);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }

    };
    return (
        <>

        </>
    )
}

export default Login