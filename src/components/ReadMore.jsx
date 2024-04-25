import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const ReadMore = ({ links }) => {
    return (
        <div dir='rtl' className='py-20 p-4 specialBg'>
            <h2 className="font-bold px-4 mt-8 text-lg md:text-xl my-4 mx-auto text-center text-shineColor2">
                לפרטים נוספים ודוגמאות
            </h2>
            <div className='flex flex-col max-w-[600px] mx-auto' data-aos="fade-down" data-aos-easing="ease-in-out">
                {links.map((linkObj, index) => (
                    <a
                        key={index}
                        href={linkObj.link}
                        className='m-4 flex justify-between items-center my-8 sm:m-8 bg-gradient-to-tr btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2 font-bold px-6 py-2 sm:text-2xl text-xl rounded-full duration-300'
                    >
                        <p dir="rtl">
                            {linkObj.text}
                        </p>
                        <IoIosArrowBack className='text-mainColor' size={40} />
                    </a>
                ))}
            </div>
        </div>
    )
}
export default ReadMore