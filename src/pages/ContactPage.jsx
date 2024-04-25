import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div className=" px-4  specialBg pt-48 pb-20 flex flex-col items-center justify-center bg-black  " dir="rtl">
            <div className="text-center text-white max-w-[900px] px-4">
                <h1 dir='ltr' className="font-bold  text-3xl md:text-5xl">
                    יצירת קשר
                </h1>
                <h2 className="font-light my-2 text-xl md:text-3xl ">
                    מלאו את הטופס למטה או
                </h2>
            </div>
            <div data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-delay="400"
            >

                <button

                    className='m-4 button my-4  sm:m-8 bg-gradient-to-tr btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2  font-bold  sm:text-2xl text-xl rounded-full duration-300'
                    onClick={() => {
                        const phoneNumber = '972542003378';
                        const message = encodeURIComponent('היי, הגעתי מהאתר. אשמח לפרטים בנוגע לנוכחות דיגיטלית לעסק שלי');
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.location.href = whatsappUrl;
                    }}

                >
                    <span className="button-content justify-around items-center flex">
                        <span className="pl-2">שלחו לי הודעה</span> <FaWhatsapp size={35} />
                    </span>
                </button>

            </div>

        </div>
    )
}

export default ContactPage