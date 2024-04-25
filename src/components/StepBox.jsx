import React from 'react';

const StepBox = ({ header, text, icon: Icon, number }) => {
    return (
        <div className='cursor-default py-8 flex flex-col border-bgPath border-t-2 justify-center items-center max-w-[800px] relative'>
            {/* Circle with number */}
            <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-bgColor1 rounded-full h-12 w-12 flex items-center justify-center'>
                <span className='text-shineColor2 text-lg font-semibold'>{number}</span>
            </div>
            <Icon size={80} className="text-shineColor2 mx-auto my-4" />
            <h1 className='text-white font-bold text-2xl my-4 text-center'>{header}</h1>
            <p dir='rtl' className='text-secondaryColor text-center text-base md:text-xl'>{text}</p>
        </div>
    );
};

export default StepBox;
