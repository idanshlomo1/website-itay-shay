import React from 'react';

const ClientBox = ({ imageURL, feedback, name }) => {
    return (
        <div >
            <div className="flex-col border-2 mx-auto  border-bgPath bg-gradient-to-tr from-bgColor to-bgColor1 text-mainColor rounded-2xl p-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px]  items-center">
                {/* {imageURL ? (
                    <img className="w-20 h-20 mx-auto border-2 rounded-2xl " src={imageURL} alt="" />
                ) : null} */}
                <p dir='rtl' className="text-base md:text-xl font-light text-center my-4">"{feedback}"</p>
                <p className="text-sm md:text-lg text-center  font-bold  text-shineColor2">{name}</p>
            </div>
        </div>
    );
};

export default ClientBox;
