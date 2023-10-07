// import React, { useState } from 'react';

// function ShoppingCart() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [flag3, setFlag3] = useState(false);

//     const checkoutHandler = () => {
//         if (!isOpen) {
//             const checkout = document.getElementById('checkout');
//             const checdiv = document.getElementById('chec-div');

//             checkout.classList.add('translate-x-full');
//             checkout.classList.remove('translate-x-0');
//             setTimeout(function () {
//                 checdiv.classList.add('hidden');
//             }, 1000);

//             setFlag3(true);
//         } else {
//             setTimeout(function () {
//                 const checkout = document.getElementById('checkout');
//                 checkout.classList.remove('translate-x-full');
//                 checkout.classList.add('translate-x-0');
//             }, 1000);

//             const checdiv = document.getElementById('chec-div');
//             checdiv.classList.remove('hidden');

//             setFlag3(false);
//         }

//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <div className="flex items-center justify-center py-8">
//                 <button
//                     onClick={checkoutHandler}
//                     className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
//                 >
//                     Open Modal
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="fixed top-0 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden">
//                     <div className="w-full absolute right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
//                         <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
//                             <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
//                                 <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onClick={() => checkoutHandler(false)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                                     </svg>
//                                     <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
//                                 </div>
//                                 <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Bag</p>
//                                 {/* Nội dung của giỏ hàng */}
//                             </div>
//                             <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
//                                 <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
//                                     <div>
//                                         <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
//                                         {/* Tổng kết giỏ hàng */}
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
//                                             <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
//                                             <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">,240</p>
//                                         </div>
//                                         <button
//                                             onClick={() => checkoutHandler(false)}
//                                             className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
//                                         >
//                                             Checkout
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
import React, { useRef, useState } from 'react';


const ShoppingCart = () => {
    const [open, setOpen] = useState(true);
    const checkoutRef = useRef(null); // Tham chiếu đến phần tử DOM của thanh checkout
    const checdivRef = useRef(null); // Tham chiếu đến phần tử DOM của div chec-div

    const checkoutHandler = () => {
        const checkoutElement = checkoutRef.current; // Lấy phần tử DOM của thanh checkout
        const checdivElement = checdivRef.current; // Lấy phần tử DOM của div chec-div

        if (checkoutElement && checdivElement) {
            if (!open) {
                // Đóng thanh checkout
                checkoutElement.classList.add("translate-x-full");
                checkoutElement.classList.remove("translate-x-0");
                setTimeout(function () {
                    checdivElement.classList.add("hidden");
                }, 1000);
            } else {
                // Mở thanh checkout
                setTimeout(function () {
                    checkoutElement.classList.remove("translate-x-full");
                    checkoutElement.classList.add("translate-x-0");
                }, 1000);
                checdivElement.classList.remove("hidden");
            }
            setOpen(!open);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center py-8">
                <button
                    onClick={checkoutHandler}
                    className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                    Open Modal
                </button>
            </div>
            {open && (
                <div className="fixed top-0 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden">
                    <div className="w-full absolute right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
                        <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
                            <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                                <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onClick={() => checkoutHandler(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                    <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
                                </div>
                                <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Bag</p>
                                {/* Nội dung của giỏ hàng */}
                            </div>
                            <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
                                <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                                    <div>
                                        <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                                        {/* Tổng kết giỏ hàng */}
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">,240</p>
                                        </div>
                                        <button
                                            onClick={() => checkoutHandler(false)}
                                            className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
