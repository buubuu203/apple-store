
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Macbook } from '../constants'
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


const ShoppingCart = () => {

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

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const navigate = useNavigate();

    const handleLabelClick = () => {
        // Điều hướng đến component SignIn khi label được nhấp
        navigate('/CheckOut');
    }
    return (
        <div className='font-SFPro'>


            <div className="fixed top-0 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden">
                <div className="w-full absolute right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
                    <div className="flex sm:items-end lg:flex-row flex-col sm:justify-end bg-[url('./assets/img/shoppingCart/wallpapers.webp')] bg-left-bottom" id="cart">
                        <div className="lg:w-1/2 md:w-8/12 w-full  lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <Link to='/' className="text-base pl-2 leading-none dark:hover:text-gray-200">Back</Link>
                            </div>
                            <table className="w-full my-4">
                                <thead>
                                    <tr className='mr-2'>
                                        <th className="text-left font-semibold">
                                            <Checkbox {...label}
                                                size='small'
                                                defaultChecked />
                                        </th>
                                        <th className="text-left font-semibold">Sản phẩm</th>
                                        <th className="text-center font-semibold">Giá</th>
                                        <th className="text-center font-semibold">SL</th>
                                        <th className="text-center font-semibold">Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 text-sm">
                                            <Checkbox {...label}
                                                size='small'
                                                defaultChecked />
                                        </td>
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
                                    className="bg-white gap-4  px-6 py-3 text-base tracking-wide text-black transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit mx-auto"
                                    onClick={handleLabelClick}
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
