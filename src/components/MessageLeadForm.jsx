import React, { useState } from 'react';

const MessageLeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: 'שיווק דיגיטלי',
        otherMessage: '' // Ensure this state is initialized if it's being used
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'שדה חובה';
        }
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'מספר טלפון תקין (10 ספרות)';
        }

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);

            try {
                const response = await fetch("https://getform.io/f/nbdorkga", {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    setFormData({
                        name: '',
                        phone: '',
                        subject: '',
                        otherMessage: ''
                    });
                    setErrors({});
                    setIsSuccess(true);
                } else {
                    console.error('Error sending data to getform.io');
                }
            } catch (error) {
                console.error('Error sending data to getform.io:', error);
            }

            setIsSubmitting(false);
        } else {
            setErrors(newErrors);
        }
    };

    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setFormData({
            ...formData,
            subject: selectedSubject,
        });
    };

    return (
        <div className='mx-4'>
            <div data-aos="zoom-in"
                data-aos-easing="ease-in-out" className="mx-auto px-8 py-10 pb-10 specialBg rounded-xl max-w-[1000px] border-2 border-bgPath  ">

                <div>
                    <div className='mb-8'>
                        <h1 dir='rtl' className="font-bold text-4xl md:text-5xl text-center text-mainColor">
                            בואו נדבר!
                        </h1>
                        <h2 className="font-medium my-2 text-2xl md:text-3xl text-center text-secondaryColor">
                            השאירו פרטים ואחזור אליכם בהקדם
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} dir="rtl">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="w-full md:ml-10 md:w-1/2 md:mr-2 mb-2 md:mb-0">
                                <div className="relative my-4 h-12 ">
                                    <input
                                        type="text"
                                        id="messageLeadForm-name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="border-b border-secondaryColor text-mainColor py-1 focus:border-b-2 focus:border-secondaryColor focus:shadow-2xl transition-colors focus:outline-none peer bg-inherit w-full"
                                    />
                                    {formData.name.length === 0 && (
                                        <label
                                            htmlFor="messageLeadForm-name"
                                            className="absolute text-secondaryColor right-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-secondaryColor"
                                        >
                                            שם מלא
                                        </label>
                                    )}
                                    {errors.name && <div className="error text-red-400 text-sm mt-1">{errors.name}</div>}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:ml-2">
                                <div className="relative my-4 h-12 ">
                                    <input
                                        type="text"
                                        id="messageLeadForm-phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="border-b border-secondaryColor text-mainColor py-1 focus:border-b-2 focus:border-secondaryColor focus:shadow-2xl transition-colors focus:outline-none peer bg-inherit w-full"
                                    />
                                    {formData.phone.length === 0 && (
                                        <label
                                            htmlFor="messageLeadForm-phone"
                                            className="absolute text-secondaryColor right-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-secondaryColor"
                                        >
                                            טלפון
                                        </label>
                                    )}
                                    {errors.phone && <div className="error text-red-400 text-sm mt-1">{errors.phone}</div>}
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex flex-col mb-4 md:justify-center max-w-[300px]">
                            <label className="text-shineColor2 text-lg my-2 font-bold" htmlFor="messageLeadForm-subject">
                                התעניינתי ב
                            </label>
                            <select
                                id="messageLeadForm-subject"
                                value={formData.subject}
                                onChange={handleSubjectChange}
                                className="bg-bgColor text-white px-2 py-1 rounded-full text-lg cursor-pointer font-bold"
                            >
                                <option value="שיווק דיגיטלי">שיווק דיגיטלי</option>
                                <option value="כרטיס ביקור דיגיטלי">כרטיס ביקור דיגיטלי</option>
                                <option value="מיתוג">מיתוג</option>
                                <option value="בניית אתרים">בניית אתרים</option>

                                <option value="אחר">אחר</option> 
                            </select>
                        </div> */}

                        <div className="my-4">
                            <textarea
                                id="messageLeadForm-otherMessage"
                                value={formData.otherMessage}
                                onChange={(e) => setFormData({ ...formData, otherMessage: e.target.value })}
                                className="border rounded-2xl border-secondaryColor p-2 text-mainColor focus:border-secondaryColor focus:outline-none w-full max-h-32 h-32 bg-bgColor"
                                placeholder="פרט על הפרוייקט/העבודה שאתה מעוניין בה.."
                            />
                        </div>

                        <button
                            className="px-6 mt-4 w-full font-bold btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2 py-2 sm:text-2xl text-xl rounded-full duration-300"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            שליחה
                        </button>
                    </form>
                </div>


                {isSuccess && (
                    <div className="text-center ">
                        <div className="success-message max-w-[400px] mx-auto shadow-2xl shadow-green-400 bg-green-400 p-2 underline text-slate-800 font-bold rounded-full mt-8">
                            פרטייך התקבלו בהצלחה
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageLeadForm;
