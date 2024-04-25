import React from 'react'
import Image01 from '../images/atmospheric/image01.jpg'
const Responsibilty = () => {
    return (
        <div className='p-4 py-20 pb-10  specialBg '>

            <h1 dir='rtl' data-aos="fade-down"
                data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

                הנוכחות הדיגיטלית שלכם היא האחריות שלי
            </h1>
            <div className='flex flex-col lg:flex-row-reverse mx-auto  max-w-[768px]  lg:max-w-[1200px] p-4 md:p-8 my-8 specialBg rounded-2xl' >

                <div className='rounded-2xl lg:mx-4 max-w-[768px] lg:max-w-[500px] border-2 border-bgPath duration-300 overflow-hidden'>
                    <img src={Image01} className='object-cover w-full h-auto min-h-full hover:scale-105 duration-300' alt="" />
                </div>

                <div className='max-w-[768px] my-4 '>
                    <h2 dir='rtl' className=" font-medium px-4 my-2 text-base md:text-2xl max-w-[1000px] mx-auto text-right text-mainColor ">

                        אם אתם במסע ארוך של חיפושים אחרי מישהו שיכול לתת לכם פתרון מלא לכל העניינים בעולם המדיה, ממיתוג ושיווק דיגיטלי, ועד כרטיס ביקור דיגיטלי שישאיר רושם לאורך זמן - הגעתם למקום הנכון.
                    </h2>

                    <h2 dir='rtl' className=" font-light px-4 my-2 text-lg md:text-xl max-w-[1000px] mx-auto text-right text-mainColor ">
                        השירות שלי מתחיל במיתוג ומשם, אנחנו נעבור לשיווק דיגיטלי, שזה לא רק להוציא פרסומות בפייסבוק או באינסטגרם, אלא לבנות אסטרטגיה שמחברת אתכם עם הלקוחות שלכם בדרכים שתומכות במטרות שלכם לטווח הארוך.
                    </h2>


                    <h2 dir='rtl' className=" font-light px-4 my-2 text-base md:text-xl max-w-[1000px] mx-auto text-right text-mainColor ">
                        ולא לשכוח את הכרטיס הביקור הדיגיטלי, שהוא משמש לחותמת העסק בעולם הדיגיטלי. זה לא סתם כרטיס ביקור, זה גם דף נחיתה, זה הדרך שלכם להשאיר רושם ראשוני שלא נשכח. אני כאן כדי לדאוג שכשאנשים נתקלים בעסק שלכם  אונליין, הם יזהו מייד מי אתם ומה אתה מציעים, ולמה הם צריכים להתחיל לדבר אתכם, בקיצור - כרטיס ביקור דיגיטלי שסוגר עסקאות.
                    </h2>
                </div>

            </div>


            {/* <h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
                השירותים שלי            </h2> */}




        </div>
    )
}

export default Responsibilty