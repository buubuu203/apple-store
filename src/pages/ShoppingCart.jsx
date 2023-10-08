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
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Macbook } from '../constants'
import { useState } from 'react';

const ShoppingCart = () => {
    // const [open, setOpen] = useState(true);
    // const checkoutRef = useRef(null); // Tham chiếu đến phần tử DOM của thanh checkout
    // const checdivRef = useRef(null); // Tham chiếu đến phần tử DOM của div chec-div

    // const checkoutHandler = () => {
    //     const checkoutElement = checkoutRef.current; // Lấy phần tử DOM của thanh checkout
    //     const checdivElement = checdivRef.current; // Lấy phần tử DOM của div chec-div

    //     if (checkoutElement && checdivElement) {
    //         if (!open) {
    //             // Đóng thanh checkout
    //             checkoutElement.classList.add("translate-x-full");
    //             checkoutElement.classList.remove("translate-x-0");
    //             setTimeout(function () {
    //                 checdivElement.classList.add("hidden");
    //             }, 1000);
    //         } else {
    //             // Mở thanh checkout
    //             setTimeout(function () {
    //                 checkoutElement.classList.remove("translate-x-full");
    //                 checkoutElement.classList.add("translate-x-0");
    //             }, 1000);
    //             checdivElement.classList.remove("hidden");
    //         }
    //         setOpen(!open);
    //     }
    // };
    const [quantity, setQuantity] = useState(1); // Initial quantity

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Filter out currency symbol and convert to a number
        const priceWithoutCurrency = parseFloat(Macbook[1].price.replace('$', ''));
        setTotalPrice(priceWithoutCurrency * quantity * 1000000);
    }, [quantity]);




    return (
        <div className='font-SFPro'>
            {/* <div className="flex items-center justify-center py-8">
                <Button
                    onClick={checkoutHandler}
                    className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
                    title='Open Modal'
                >
                </Button>
            </div> */}

            <div className="fixed top-0 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden">
                <div className="w-full absolute right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
                    <div className="flex sm:items-end lg:flex-row flex-col sm:justify-end bg-[url('./assets/img/shoppingCart/wallpapers.webp')] bg-left-bottom" id="cart">
                        <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <Link to='/' className="text-base pl-2 leading-none dark:hover:text-gray-200">Back</Link>
                            </div>
                            <table className="w-full my-4">
                                <thead>
                                    <tr className='mr-2'>
                                        <th className="text-left font-semibold">Sản phẩm</th>
                                        <th className="text-center font-semibold">Giá</th>
                                        <th className="text-center font-semibold">Số lượng</th>
                                        <th className="text-center font-semibold">Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 text-sm">
                                            <div className="flex items-center">
                                                <img className="h-16 w-16" src={Macbook[1].imgURL} alt='product img' />
                                                <span className="font-medium hidden sm:flex text-sm  sm:flex-wrap max-w-xs">{Macbook[1].name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-sm">{Macbook[1].price}</td>
                                        <td className="py-4 text-sm">
                                            <div className="flex items-center">
                                                <button className="rounded-md px-2 py-1 mr-2" onClick={decrementQuantity}>-</button>
                                                <span className="text-center">{quantity}</span>
                                                <button className="rounded-md px-2 py-1 ml-2" onClick={incrementQuantity}>+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 text-sm">{totalPrice} đ</td>
                                    </tr>
                                    {/* More product rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="lg:w-96 md:w-8/12 w-full bg-black dark:bg-gray-900 h-full text-white">
                            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 gap-4 overflow-y-auto">

                                {/* Tổng kết giỏ hàng */}
                                <h2 className="text-lg font-semibold mb-4">Tổng cộng</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Tổng tiền hàng</span>
                                    <span>{totalPrice} đ</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Thuế</span>
                                    <span>0 đ</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Giá vận chuyển</span>
                                    <span>0 đ</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Tổng cộng</span>
                                    <span className="font-semibold">{totalPrice} đ</span>
                                </div>
                                <button
                                    // onClick={() => checkoutHandler(false)}
                                    className="bg-white gap-4  px-6 py-3 text-base tracking-wide text-black transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit mx-auto"
                                >
                                    Thanh toán
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShoppingCart;
