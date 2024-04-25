import React from 'react';
import MessageLeadForm from './MessageLeadForm';

import { IoCall, IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return (
        <div className='dotBg py-20'>
            <MessageLeadForm />
            <section className="">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    {/* <nav className="flex flex-row-reverse justify-center  -my-2">
                        <div dir='rtl' className="px-5 py-2">
                            <Link to="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                דף בית
                            </Link>
                        </div>
                        <div dir='rtl' className="px-5 py-2">
                            <Link to="/Branding" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                מיתוג
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link to="/DigitalMarketing" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                שיווק דיגיטלי
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link to="/Digicard" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                כרטיס ביקור דיגיטלי
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link to="/Contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                יצירת קשר
                            </Link>
                        </div>
                    </nav> */}
                    <div className="flex justify-center mt-8 space-x-6">
                        {/* <a href="#" className="text-secondaryColor hover:text-gray-500">
                            <RiInstagramFill size={30} />
                            IG: digicard.il
                        </a>
                        <a href="#" className="text-secondaryColor hover:text-gray-500">
                            <FaFacebook size={30} />
                        </a> */}


                        <a href="tel:+972542003378" className="text-mainColor bg-bgColor h-12 w-12 rounded-full flex items-center justify-center shadow-xl shadow-shineColor2 hover:shadow-shineColor3 duration-300">
                            <IoIosCall size={30} />
                        </a>



                        <a href="https://wa.me/972542003378?text=היי%20הגעתי%20מהאתר,%20אשמח%20לפרטים%20בנוגע%20לנוכחות%20דיגיטלית%20לעסק%20שלי" className="text-mainColor bg-bgColor h-12 w-12 rounded-full flex items-center justify-center shadow-xl shadow-shineColor2 hover:shadow-shineColor3 duration-300" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} />
                        </a>

                        <a href="https://www.tiktok.com/@itay_shay_" className="text-mainColor bg-bgColor h-12 w-12 rounded-full flex items-center justify-center shadow-xl shadow-shineColor2 hover:shadow-shineColor3 duration-300">
                            <IoLogoTiktok size={30} />
                        </a>

                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2024 Itay Shay, Inc. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Footer;
