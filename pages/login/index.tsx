import { logged_in } from '@/app/services/next_auth_login';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Image from "next/image";
import Logo from "/public/images/logo.png"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'rsuite';
const Login = () => {
    const [email, setEmail] = useState<string>("user@strapi.io")
    const [password, setPassword] = useState<string>("strapiPassword")
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const result = await logged_in(email, password);
            console.log("res", result?.status)
            if (result?.status == 200) {
                router.push('/dashboard')
                toast.success("Successfully signed in");
            } else {
                toast.info("Invalid email or password");
            }
            setLoading(false);
        } catch (error) {
            toast.info("Invalid email or password");
            setLoading(false);
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
                    <form className="form-box" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}>
                        <ul className="list-unstyled">
                            <li>
                                <label className="d-inline-block">Email</label>
                                <input required type="email" placeholder="example@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <label className="d-inline-block">Password</label>
                                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </li>
                        </ul>
                        <Button block loading={loading} type="submit" disabled={loading}>{'Login'}</Button>
                        <span className="d-block text-center">Don&apos;t have an account yet? <Link href="/register">Register</Link></span>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login