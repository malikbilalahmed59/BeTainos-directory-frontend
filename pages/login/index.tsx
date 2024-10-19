import { logged_in } from '@/app/services/next_auth_login';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Image from "next/image";
import Logo from "/public/images/logo.png"
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
        <div className="login-form-con">
                <figure className=''>
                    <Image width={216} height={63} src={Logo} alt="logo" />
                </figure>
            <div className="text-center login-title form-main-con">
                <h4 className="text-uppercase">Login</h4>
                <span className="d-block">Access to dashboard</span>
                <form className="form-box">
                    <ul className="list-unstyled">
                        <li>
                            <label className="d-inline-block">email or username</label>
                            <input type="email" placeholder="example@topboffin.com" />
                        </li>
                        <li>
                            <label className="d-inline-block">Password</label>
                            <input type="password" />
                        </li>
                    </ul>
                    <button type="button">Login</button>
                    <span className="d-block text-center">Don’t have an account yet? <a href="#">Register</a></span>
                </form>
            </div>
     </div>

        </>
    )
}

export default Login