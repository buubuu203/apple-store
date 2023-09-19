import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <div className='fixed w-full'>
            <div className="w-full h-9 p-2.5 justify-end items-center gap-12 inline-flex ">
                <div className="text-black text-sm font-normal font-['SF Pro Display']">Đăng nhập</div>
                <div className="text-black text-sm font-normal font-['SF Pro Display'] pr-8">Wishlist</div>
            </div>
            <div className="w-full h-16 p-2.5 bg-black justify-center items-center gap-72 inline-flex">
                <div className="text-white text-xl font-normal font-['SF Pro Display']">

                    Apple Store</div>
                <div className="p-2.5 justify-center items-center gap-16 flex">
                    <div className="text-white text-base font-normal font-['SF Pro Display']">Trang chủ</div>
                    <div className="text-white text-base font-normal font-['SF Pro Display']">Phân loại</div>
                    <div className="text-white text-base font-normal font-['SF Pro Display']">Sắp ra mắt</div>
                    <div className="text-white text-base font-normal font-['SF Pro Display']">Blog</div>
                </div>
                <div className="p-2.5 justify-center items-center gap-5 flex">
                    <div className="h-5 px-1 py-0.5 justify-start items-end gap-1.5 flex">
                        <ShoppingCartIcon color='#fff'></ShoppingCartIcon>
                    </div>
                    <div className="text-white text-sm font-normal font-['SF Pro Display']">0</div>
                </div>
            </div>
        </div>

    )
}

export default Header