import Image from "next/image"
import { signIn } from "next-auth/react"



export const Login = () => {
    return (
        <div className="grid place-items-center mt-40">
            <Image
                src="/img/fb_icon_325x325.png"
                alt=""
                width={400}
                height={400}
                objectFit="contain"
            />
            <h1
                onClick={ () => signIn('facebook', { callbackUrl: 'https://clone-fb.salcromweb.com/api/auth' } )}
                className="mt-20 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook
            </h1>
        </div>
    )
}
