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
                                        <div className={`flex items-center justify-between mb-6`}>
                                            <div className={`flex items-center gap-2`}>
                                                <div className="flex h-6 shrink-0 items-center">
                                                    <div className="group grid size-4 grid-cols-1">
                                                        <input
                                                            id="candidates"
                                                            name="candidates"
                                                            type="checkbox"
                                                            aria-describedby="candidates-description"
                                                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                        />
                                                        <svg
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                        >
                                                            <path
                                                                d="M3 8L6 11L11 3.5"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-[:checked]:opacity-100"
                                                            />
                                                            <path
                                                                d="M3 7H11"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-sm/6">
                                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                                        Remember for 30 days
                                                    </label>
                                                </div>
                                            </div>
                                            <Link href={''}
                                                  className={`text-sm text-primaryColor font-medium hover:underline`}>Forgot
                                                Password</Link>
                                        </div>
                                        <button type={'submit'}
                                                className={`text-base text-whiteColor font-semibold py-2.5 bg-primaryColor hover:bg-primaryColor/90 transition-all rounded-lg w-full mb-5`}>Sign
                                            in
                                        </button>
                                        <button type={'submit'}
                                                className={`text-base text-primaryTextColor font-semibold py-2.5 bg-whiteColor border border-[##E4E4E4] transition-all rounded-lg w-full place-items-center`}>
                                            <div className={`flex items-center gap-3`}>
                                                <FcGoogle className={`size-5  relative top-[2px]`}/>
                                                <span className={`h-5`}>Sign in with Google</span>
                                            </div>
                                        </button>
                                        <div className={`mt-7 flex items-center justify-center gap-2`}>
                                            <span
                                                className={`text-sm text-secondaryTextColor`}>Don’t have an account? </span>
                                            <Link href={'/signup'}
                                                  className={`text-sm text-primaryColor font-semibold hover:underline`}>Sign
                                                up</Link>
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