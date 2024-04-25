import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const LeadForm = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        subject: "שיווק דיגיטלי",
        otherMessage: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "שדה חובה";
        }
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "מספר טלפון תקין (10 ספרות)";
        }

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);

            try {
                const response = await fetch("https://getform.io/f/nbdorkga", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    setFormData({
                        name: "",
                        phone: "",
                        subject: "עריכת וידאו",
                        otherMessage: ""
                    });
                    setErrors({});
                    setIsSuccess(true);
                } else {
                    console.error("Error sending data to getform.io");
                }
            } catch (error) {
                console.error("Error sending data to getform.io:", error);
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
            otherMessage: selectedSubject === 'אחר' ? '' : formData.otherMessage // Clear message if not 'אחר'
        });
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 dialog flex items-center justify-center bg-black bg-opacity-80" onClick={onRequestClose}>
                    <div
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:max-w-[800px] p-10 sm:p-20 border-2 border-bgPath rounded-xl shadow-xl specialBg"
                        onClick={(e) => e.stopPropagation()} // Prevent click inside the dialog from closing it
                    >
                        <button
                            className="absolute top-4 left-4 text-xl hover:opacity-80"
                            onClick={onRequestClose}
                        >
                            <IoCloseOutline size={30} className="text-mainColor" />
                        </button>

                        {!isSuccess && (
                            <div>
                                <h1 className="font-bold text-4xl my-4 text-center text-mainColor">לפרטים והצעת מחיר</h1>
                                <form onSubmit={handleSubmit} dir="rtl">
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        <div className="relative my-4 flex-1">
                                            <input
                                                type="text"
                                                id="leadForm-name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full border-b border-secondaryColor py-1 text-mainColor focus:border-b-2 focus:border-secondaryColor focus:shadow-2xl transition-colors focus:outline-none bg-inherit"
                                            />
                                            {formData.name.length === 0 && (
                                                <label
                                                    htmlFor="leadForm-name"
                                                    className="absolute text-secondaryColor right-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all"
                                                >
                                                    שם מלא
                                                </label>
                                            )}
                                            {errors.name && <div className="error text-red-400 text-sm mt-1">{errors.name}</div>}
                                        </div>
                                        <div className="relative my-4 flex-1">
                                            <input
                                                type="text"
                                                id="leadForm-phone"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full border-b border-secondaryColor py-1 text-mainColor focus:border-b-2 focus:border-secondaryColor focus:shadow-2xl transition-colors focus:outline-none bg-inherit"
                                            />
                                            {formData.phone.length === 0 && (
                                                <label
                                                    htmlFor="leadForm-phone"
                                                    className="absolute text-secondaryColor right-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all"
                                                >
                                                    טלפון
                                                </label>
                                            )}
                                            {errors.phone && <div className="error text-red-400 text-sm mt-1">{errors.phone}</div>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-4 md:justify-center max-w-[300px]">
                                        <label className="text-shineColor2 text-lg my-2 font-bold" htmlFor="leadForm-subject">
                                            התעניינתי ב
                                        </label>
                                        <select
                                            id="leadForm-subject"
                                            value={formData.subject}
                                            onChange={handleSubjectChange}
                                            className="bg-bgColor text-white px-2 py-1 rounded-full text-lg cursor-pointer font-bold"
                                        >
                                            <option value="עיצוב גרפי">עיצוב גרפי</option>
                                            <option value="עריכת וידאו">עריכת וידאו</option>
                                            <option value="סרטון תלת מימד">סרטון תלת מימד</option>
                                            <option value="אחר">אחר</option>
                                        </select>
                                    </div>

                                    {formData.subject === 'אחר' && (
                                        <div className="my-4">
                                            <textarea
                                                value={formData.otherMessage}
                                                onChange={(e) => setFormData({ ...formData, otherMessage: e.target.value })}
                                                className="w-full rounded-2xl max-h-32 h-32 border border-secondaryColor p-2 text-mainColor focus:border-secondaryColor focus:outline-none bg-bgColor"
                                                placeholder="פרט על הפרוייקט/העבודה שאתה מעוניין בה.."
                                            />
                                        </div>
                                    )}

                                    <button
                                        className="w-full mt-4 font-bold btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2 py-2 sm:text-2xl text-xl rounded-full duration-300"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        שליחה
                                    </button>
                                </form>
                            </div>
                        )}

                        {isSuccess && (
                            <div>
                                <div className="success-message text-center shadow-2xl shadow-green-400 bg-green-400  p-2 underline text-slate-800 font-bold rounded-full mt-8">
                                    פרטייך התקבלו בהצלחה
                                </div>
                                <button
                                    className="w-full mt-4 font-bold btnGradient text-mainColor hover:shadow-2xl hover:shadow-shineColor2 py-2 sm:text-2xl text-xl rounded-full duration-300"
                                    onClick={onRequestClose}
                                >
                                    אישור
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default LeadForm;
