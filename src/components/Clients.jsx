import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import ClientBox from './ClientBox';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Clients = () => {


    const clientData = [
        {
            name: "אברהם מוריה",
            imageUrl: "path/to/image2.jpg",
            feedback: "איתי תלתיסט מעולה, מאוד נהניתי לעבוד איתו על פרסומת לאפליקציה שלי.העבודה הייתה מאוד מקצועית ואיתי היה קשוב וזמין לכל תיקון או שאלה שהייתה לי, ממליץ מאוד! ",
        },
        {
            name: "בר כהן",
            imageUrl: "path/to/image2.jpg",
            feedback: "איתי ערך עבורי סרטונים לעמוד טיקטוק שלי, אני יוטיובר מתחיל והיה לי חשוב מאוד רמת העריכה, מהר מאוד איתי הוכיח לי שמצאתי את העורך הנכון, מדויק, מבין את עולם הסושיאל והסרטונים הקצרים, ואפילו הוסיף אפקטים וניואנסים לסרטון שלא חשבתי עליהם בעצמי,  בקיצור לכל מי שמחפש עורך- זה הבן אדם בשבילכם.",
        },
        {
            name: "אסף שמואל",
            imageUrl: "path/to/image2.jpg",
            feedback: "איתי עיצב עבורי סביבה באנריל אנג'ין- תוכנת תלת מימד, והאמת שהוא עלה על הציפיות שלי! לא ידעתי שסביבה יכולה להיות כל כך מציאותית ויצירתית, איתי היה מאוד זמין לכל תיקון שלי, והיה לו חשוב להבין כל הערה שלי וליישם לאורך כל הפרוייקט, נהניתי מאוד לעבוד איתו ואני בטוח שנעבוד שוב ביחד!",
        },
        {
            name: "אדם דרור",
            imageUrl: "path/to/image2.jpg",
            feedback: "איתי יצר בצורה מפורטת את ביתו של זיגמונד פרויד, העבודה הייתה יחד עם שרטוטים מקוריים שנשלחו אליו מוינה, ואני אשמח מאוד להמליץ עליו.  הסביבה הייתה מדויקת להפליא, לאחר מכן שהייתי צריך גם אנימציה וליצור את הדמות עצמו, איתי יצר אותה ובנה לה אנימציה לפי ההוראות שלי,  עבודה מדהימה, יצירתית ומדויקת, מומלץ מאוד לכל פרויקט.",
        },
        {
            name: "hatopia",
            imageUrl: "path/to/image2.jpg",
            feedback: "איתי עיצב עבורנו את החברה, בין אם זה הלוגו, השפה העיצובית והכובעים הממותגים של החברה, איתי היה קשוב לצרכינו ועבד בצורה יצירתית ומהירה, מומלץ!",
        },

        {
            name: "סטודיו בלזה",
            imageUrl: "path/to/image2.jpg",
            feedback: 'איתי יצר יחד איתנו קליפ מוזיקלי לאמן "עידו בי", איתי היה נחוש ללמוד כדי לספק את כל הצרכים שלנו, ובנה סצנות תלת מימד עבור הקליפ, ואף את כל הסביבה בה צולם הקליפ,  אנו ממליצים לעבוד עם איתי! '

        },

    ];







    return (
        <div className='p-4 py-20   specialBg'>
            <div className="my-4">
                <h1 data-aos="fade-down"
                    data-aos-easing="ease-in-out"
                    dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

המון לקוחות מרוצים
                    </h1>
                {/* <h2 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className=" font-medium px-4 my-2 text-xl md:text-3xl max-w-[1000px] mx-auto text-center text-secondaryColor ">
                    תראו מקרוב מה הלקוחות כותבים על השירות
                </h2> */}
                <div className="relative swiper2">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 800, disableOnInteraction: true }}
                        slidesPerView={1}
                        loop
                        speed={1000}
                        pagination={{ clickable: true }}
                        navigation={{ nextEl: '.arrow-right2', prevEl: '.arrow-left2' }}
                        className="my-20 cursor-default rounded-2xl mx-auto max-w-[1200px]"
                        breakpoints={{
                            // when window width is >= 320px (small screen)
                            0: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px (medium screen)
                            768: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 1024px (large screen)
                            1024: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {clientData.map((client, index) => (
                            <SwiperSlide key={index}>
                                <ClientBox
                                    name={client.name}
                                    imageURL={client.imageURL}
                                    feedback={client.feedback}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <button className='arrow-left2 arrow m-2 '>
                        <IoIosArrowBack size={35} className="text-white" />
                    </button>
                    <button className='arrow-right2 arrow m-2'>
                        <IoIosArrowForward size={35} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Clients;
