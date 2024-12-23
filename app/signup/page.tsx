import React from 'react';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const SignIn = () => {
    return (
        <main className={`w-full min-h-screen bg-pageBackground flex items-center justify-center`}>
            <div className={`container mx-auto`}>
                <div className={`grid grid-cols-12`}>
                    <div className={`col-span-12 md:col-span-6`}>
                        <div className={`flex items-center justify-center h-full`}>
                            <div className={``}>
                                <h1 className={`text-primaryTextColor text-5xl font-bold`}>Welcome back</h1>
                                <h4 className={`text-secondaryTextColor text-base font-normal mt-2`}>Welcome back!
                                    Please enter your details.</h4>
                                <div className={`mt-8`}>
                                    <form>
                                        <div className={`flex flex-col gap-1.5 mb-4`}>
                                            <label htmlFor={'email'}
                                                   className={`text-primaryTextColor text-sm px-1`}>Email</label>
                                            <input
                                                type={'email'}
                                                id={'email'}
                                                name={'email'}
                                                placeholder={'Enter your email'}
                                                className={`bg-white rounded-lg border border-[##E4E4E4] p-3 text-secondaryTextColor font-normal text-base outline-none`}/>
                                        </div>
                                        <div className={`flex flex-col gap-1.5 mb-4`}>
                                            <label htmlFor={'password'}
                                                   className={`text-primaryTextColor text-sm px-1`}>Password</label>
                                            <input
                                                type={'password'}
                                                id={'password'}
                                                name={'password'}
                                                placeholder={'**********'}
                                                className={`bg-white rounded-lg border border-[##E4E4E4] p-3 text-secondaryTextColor font-normal text-base outline-none`}/>
                                        </div>
                                        <div className={`flex flex-col gap-1.5 mb-4`}>
                                            <label htmlFor={'password'}
                                                   className={`text-primaryTextColor text-sm px-1`}>Confirm Password</label>
                                            <input
                                                type={'password'}
                                                id={'password'}
                                                name={'password'}
                                                placeholder={'**********'}
                                                className={`bg-white rounded-lg border border-[##E4E4E4] p-3 text-secondaryTextColor font-normal text-base outline-none`}/>
                                        </div>
                                        <button type={'submit'}
                                                className={`text-base text-whiteColor font-semibold py-2.5 bg-primaryColor hover:bg-primaryColor/90 transition-all rounded-lg w-full mb-5`}>Sign
                                            up
                                        </button>
                                        <div className={`mt-7 flex items-center justify-center gap-2`}>
                                            <span
                                                className={`text-sm text-secondaryTextColor`}>already have an account? </span>
                                            <Link href={'/signin'}
                                                  className={`text-sm text-primaryColor font-semibold hover:underline`}>Sign
                                                in</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`hidden md:block md:col-span-6`}>
                        <img src={'/bg-signin.png'} alt={''} className={`w-full h-screen object-cover`}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;