import { signIn } from "next-auth/react"

export const logged_in = async (
    email: string,
    password: string
) => {

    const status = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,

    })
    return status

} 