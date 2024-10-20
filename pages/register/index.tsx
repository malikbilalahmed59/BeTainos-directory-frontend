import { useRegister } from '@/app/hooks/useRegister';
import { registrationSchema } from '@/app/validation/registrationSchema';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'rsuite';
import Logo from "/public/images/logo.png";

const Register = () => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("0")
    const { mutate, isPending: loading } = useRegister()
    const router = useRouter();

    const handleSubmit = async () => {
        const { error } = registrationSchema.validate({ username, email, password });
        if (error) {
            toast.info(error.details[0].message);
            return;
        }
        mutate(
            {
                username,
                email,
                password
            },
            {
                onSuccess: () => {
                    router.push('/login')
                }
            }
        );
    };
    return (
        <>
            <div className="login-form-con">
                <figure className=''>
                    <Image width={216} height={63} src={Logo} alt="logo" />
                </figure>
                <div className="text-center login-title form-main-con">
                    <h4 className="text-uppercase">Register</h4>
                    <span className="d-block">Access to dashboard</span>
                    <form className="form-box" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        <ul className="list-unstyled">
                            <li>
                                <label className="d-inline-block">Username</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="example@mail.com"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} />
                            </li>
                            <li>
                                <label className="d-inline-block">Email</label>
                                <input required type="email" placeholder="example@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <label className="d-inline-block">Password</label>
                                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </li>
                        </ul>
                        <Button loading={loading} type="submit" disabled={loading}>Register</Button>
                        <span className="d-block text-center">Don&apos;t have an account yet? <Link href="/login">Login</Link></span>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register