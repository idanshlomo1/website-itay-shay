import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "דף הבית", link: "/" },
        // { name: "שיווק דיגיטלי", link: "/DigitalMarketing" },
        // { name: "Digicard - כרטיס ביקור דיגיטלי", link: "/Digicard" },
        // { name: "מיתוג", link: "/Branding" },
        { name: "יצירת קשר", link: "/Contact" }

    ];
    let [open, setOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is at the top of the page
            setIsTop(window.scrollY === 0);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const location = useLocation();

    return (
        <div className={`navbar  w-full fixed top-0 left-0 ${isTop ? 'bg-transparent' : 'bg-bgColor p-2'} text-white z-1000`}>
            <div className='md:flex items-center justify-between bg-dark py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer text-main flex items-center gap-1'>
                    <span lang='en'>Itay Shay</span>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <MdOutlineClose color='white' size={20} /> : <RxHamburgerMenu color='white' size={20} />
                    }
                </div>
                <ul className={`md:flex text-right md:flex-row-reverse md:items-center md:pb-0 ${isTop && !open ? 'bg-transparent' : 'bg-bgColor p-2'} md:bg-none md:h-auto h-[90vh] absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-out ${open ? 'top-0 ' : 'top-[-850px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:my-0 mr-8 my-20 text-center font-semibold'>
                                <a href={link.link} className={`text-mainColor text-lg hover:text-shineColor1 duration-500 ${location.pathname === link.link ? 'text-shineColor1' : ''}`}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>



            </div>
        </div>
    );
}

export default Navbar