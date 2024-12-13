import { logged_in } from '@/app/services/next_auth_login';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'rsuite';
import Logo from "/public/images/logo.png";
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (session) {
        // Redirect to the dashboard if user is already logged in
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const result = await logged_in(email, password);
            if (result?.status == 200) {
                router.push('dashboard');
                toast.success("Connexion réussie");
            } else {
                toast.info("E-mail ou mot de passe invalide");
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            toast.info("E-mail ou mot de passe invalide");
            setLoading(false);
        }

    };
    const title = "Connectez-vous | BeTaïnos";
    const description =
        "Connectez-vous à votre compte BeTaïnos pour accéder à des offres exclusives, des services professionnels, et bien plus encore.";
    const keywords = "BeTaïnos, connexion, se connecter, compte";

    return (
        <>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
            />
            <div className="login-form-con">
                <figure className=''>
                    <Image width={216} height={63} src={Logo} alt="logo" />
                </figure>
                <div className="text-center login-title form-main-con">
                    <h4 className="text-uppercase">Connexion</h4>
                    <span className="d-block">Accéder au tableau de bord</span>
                    <form className="form-box" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}>
                        <ul className="list-unstyled">
                            <li>
                                <label className="d-inline-block">E-mail</label>
                                <input required type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <label className="d-inline-block">Mot de passe</label>
                                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </li>
                        </ul>
                        <Button block loading={loading} type="submit" disabled={loading}>{'Login'}</Button>
                        <span className="d-block text-center">Vous n&apos;avez pas encore de compte ? <Link href="/register">S&apos;inscrire</Link></span>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login