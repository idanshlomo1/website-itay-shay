import React from 'react'
import StepBox from '../components/StepBox'
import { IoPeople } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";

const Steps = () => {
    return (
        <div className='p-4 py-20 specialBg'>

            <h1 data-aos="fade-down"
                data-aos-easing="ease-in-out" dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

                איך זה עובד?
            </h1>
            <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" dir='rtl' className=" font-medium px-4 my-2 text-xl md:text-3xl max-w-[1000px] mx-auto text-center text-secondaryColor ">
                תהליך השיווק הדיגיטלי של העסק מורכב מ 3 שלבים פשוטים
            </h2>
            {/* 
            <h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
                השירותים שלי            </h2> */}

            <div className="flex flex-col justify-center items-center mt-8 p-4 mx-8 ">
                <div data-aos="fade-down"
                    data-aos-easing="ease-in-out">


                    <StepBox
                        header="פגישת יעוץ ללא עלות
                    "
                        text="בה אכיר אתכם ואתם אותי,
                    אבין אם אנחנו מתאימים,
                    אציג לכם את התוכנית הראשונית שמתאימה עבורכם ונצא לדרך משותפת."
                        icon={IoPeople}
                        number={1}
                    />
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="ease-in-out">
                    <StepBox
                        header=" עיצוב הקמה ואפיון

                    "
                        text="לאחר שנתחיל את הדרך שלנו, נקיים שיחה מעמיקה על העסק ומטרותיו, שמיד לאחריה אתחיל בעיצוב התשתיות הדיגיטליות כמו דף פייסבוק, לוגו, ומודעה גאונית שאותה אשווק עבורכם בפייסבוק ואינסטגרם."
                        icon={FaPenNib}
                        number={2}
                    />
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="ease-in-out">
                    <StepBox
                        header="שיגור המודעה


                    "
                        text="לאחר שאציג לכם את כל החומר, נעבור עליו יחדיו לאישור סופי, ולבסוף אשגר את המודעה בפייסבוק ואינסטגרם."
                        icon={IoRocket}
                        number={3}
                    />
                </div>
            </div>


        </div>
    )
}

export default Steps