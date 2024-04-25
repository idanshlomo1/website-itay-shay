import React from 'react';

const TikTokGrid = () => {
    const videos = [
        {
            url: "https://www.tiktok.com/@ooezoo_/video/7345831585045941512?_t=8kznaHi8m5n&_r=1",
            header: "סרטון לאיזי"
        },
        {
            url: "https://www.tiktok.com/@itay_shay_/video/7348135109528259847?_r=1&_t=8kznkeAeoj4",
            header: "סרטון למען החטופים"
        },
        {
            url: "https://www.tiktok.com/@itay_shay_/video/7342592127374740754?_r=1&_t=8kznmETFa9o",
            header: "פאן ארט לנעליים של נייק"
        },
        {
            url: "https://www.tiktok.com/@itay_shay_/video/7301427498644950279?_r=1&_t=8kzno3xNjmS",
            header: "קומפזיציה ויצירת מודל וסימולציה של דרקון לסצנה"
        },
        {
            url: "https://www.tiktok.com/@itay_shay_/video/7212229029422828802?_r=1&_t=8kznrXkGP2e",
            header: "סרטון טריילר"
        }
    ];

    return (
        <div className='p-4 py-20 specialBg'>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" dir='rtl' className="font-bold text-3xl md:text-5xl text-center text-mainColor">
            עבודות תלת מימד
            </h1>
            <h2 data-aos="fade-in" data-aos-easing="ease-in-out" dir='rtl' className="font-medium px-4 my-4 text-base md:text-2xl max-w-[1000px] mx-auto text-center text-secondaryColor">
            צפו במספר עבודות נבחרות שלי
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-24 mt-12 max-w-[1200px] mx-auto">
                {videos.map(({ url, header }, index) => {
                    const tikTokEmbedUrl = `https://www.tiktok.com/embed/v2/${url.split('/').pop().split('?')[0]}?lang=en-US`;
                    return (
                        <div data-aos="fade-down" data-aos-easing="ease-in-out" key={index} className='mx-auto '>
                            <h1 className=' font-bold text-sm text-center mb-4 text-shineColor2'>{header}</h1>
                            <iframe
                                src={tikTokEmbedUrl}
                                height="100%"
                                className='min-h-[500px]  border-2 shadow-2xl border-bgPath duration-300 hover:border-secondaryColor rounded-2xl w-full'
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TikTokGrid;
