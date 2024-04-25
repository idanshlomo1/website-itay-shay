import React from 'react';

const Card = ({ icon: Icon, header, text }) => {
    return (
        <div className='group cursor-default p-8 min-h-64 flex flex-col border-bgPath border-2 justify-center items-center bg-gradient-to-tr from-bgColor to-bgColor1 rounded-2xl relative  duration-300 hover:border-secondaryColor'>
            {/* Icon and Header */}
            <div className='mb-4'>
                <Icon size={80} className="text-shineColor2 mx-auto m-4" />
                <h1 className='text-white font-bold text-2xl text-center'>{header}</h1>
            </div>
            {/* Text always visible below the header */}
            <p dir='rtl' className=' text-center text-shineColor2 text-light'>{text}</p>
        </div>
    );
}

export default Card;
