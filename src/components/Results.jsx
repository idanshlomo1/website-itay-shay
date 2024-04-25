import React from 'react'
import Result1 from '../images/results/result1.png'
import Result2 from '../images/results/result2.png'
import Result3 from '../images/results/result3.png'

const Results = () => {
    return (
        <div className='p-4 py-20 specialBg '>

            <h1 data-aos="fade-down"
                data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl text-center text-white " >

                אני מדבר בתוצאות</h1>
            <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" className=" font-medium my-2 text-xl md:text-3xl text-center text-secondaryColor ">
                הנה כמה   תוצאות אגרסיביות מהקמפיינים השיווקיים שניהלתי בפייסבוק ואינסטגרם
            </h2>

            <div className='p-4 max-w-[800px] mx-auto cursor-default'>
                <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                    <div dir='rtl' className="my-16 mt-8 text-center text-white hover:scale-105 duration-300">
                        <h2 className="font-bold text-xl md:text-2xl">
                            <span className='text-shineColor2'>84 לידים </span> בתחום עיצוב גרפי
                        </h2>
                        <span className='block text-green-400 text-lg md:text-xl font-bold'>7.22 ש"ח לליד</span>
                        <img src={Result1} className='my-8 bg-white mx-auto' alt="" />

                    </div>
                </div>
                <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">


                    <div  dir='rtl' className="my-16 text-center text-white hover:scale-105 duration-300">
                        <h2 className="font-bold text-xl md:text-2xl">
                            <span className='text-shineColor2'>101 לידים </span> בתחום ניקוי מזגנים
                        </h2>
                        <span className='block text-green-400 text-lg md:text-xl font-bold'>17.26 ש"ח לליד</span>
                        <img src={Result2} className='my-8 bg-white mx-auto' alt="" />

                    </div>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="ease-in-out">
                    <div dir='rtl' className="my-16 mb-8 text-center text-white hover:scale-105 duration-300">
                        <h2 className="font-bold text-xl md:text-2xl">
                            <span className='text-shineColor2'>58 לידים </span> בתחום הקוסמטיקה
                        </h2>
                        <span className='block text-green-400 text-lg md:text-xl font-bold'>10.15 ש"ח לליד</span>
                        <img src={Result3} className='my-8 bg-white mx-auto' alt="" />

                    </div>
                </div>
            </div>




        </div>

    )
}

export default Results