import React from 'react'
import Card from './Card'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


const WhyUs = () => {
    return (
        <div className='p-4 py-20 pb-10  specialBg'>

            <h1 data-aos="fade-down"
                data-aos-easing="ease-in-out" dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

                קצת עליי</h1>
            <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" dir='rtl' className=" font-medium px-4 my-4 text-base md:text-2xl max-w-[1000px] mx-auto text-center text-mainColor ">
                שמי איתי, בן 23, מתעסק בעולם השיווק בסושיאל כבר 5 שנים,
                מומחה בעיצוב גרפי, ניהול סושיאל, עריכת וידאו ועיצוב בתלת מימד.

            </h2>

            <h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
                המומחיות שלי           </h2>

            <div className="flex justify-center items-center mt-8 p-4 mx-8 ">

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl gap-8 max-w-[1200px]  ">
                    {/* Card components */}

                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <Card
                            header="עיצוב גרפי"
                            text="תוכלו לפנות אליי עבור כל עבודה גרפית שתצטרכו, 
                            בין אם זה פוסטים לרשתות החברתיות, שלטים, פלאיירים וכל מה שתרצו!"
                            icon={FaPencilAlt}
                        />
                    </div>


                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">


                        <Card

                            header="עריכת וידאו"
                            text="אערוך עבורכם סרטוני וידאו לכל מטרה, המומחיות שלי היא בעיקר סרטונים קצרים לסושיאל, חלקם הגיעו למיליוני צפיות!"
                            icon={FaPhotoVideo}
                        />
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <Card
                            header="סרטון תלת מימד"
                            text="בין אם מדובר בקליפ מוסיקה, פרסומת לעסק או כל צורך אחר, אצור עבורכם סרטון תלת מימד שיגרום ללקוחות שלכם לתהות אם הוא אמיתי!                            "
                            icon={MdVideoLibrary}
                        />
                    </div>



                </div>
            </div>


        </div>
    )
}

export default WhyUs