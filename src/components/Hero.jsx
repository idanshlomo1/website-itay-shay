import React, { useState } from "react";
import LeadForm from "./LeadForm";
import { FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className=" px-4  pt-48 pb-20  flex flex-col items-center justify-center dotBg   " dir="rtl">

            <div className="text-center text-mainColor max-w-[900px] px-4">
                {/* <h3 className="font-medium my-2 text-base  text-secondaryColor md:text-xl ">
                    Web & Marketing
                </h3> */}
                <h1 className="font-bold flex-col  text-3xl md:text-5xl">
                    {/* להפוך את העסק שלך    <span className="text-shineColor1">לסיפור הצלחה</span> */}
                    איתי
                </h1>
                <h2 className="font-bold my-2 text-xl text-mainColor md:text-3xl ">
                    מומחה בשיווק בדיגיטל
                </h2>
            </div>

            <div data-aos="fade-down"
                data-aos-easing="ease-in-out">
                <button

                    onClick={openDialog}
                    className='m-4 my-4 mt-8  bg-gradient-to-tr btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2  font-bold px-6 py-2 sm:text-2xl text-xl rounded-full duration-300'
                >
                    לשיחת ייעוץ והצעת מחיר
                </button>
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

            <LeadForm isOpen={isDialogOpen} onRequestClose={closeDialog} />


        </div>
    );
};

export default Hero;
