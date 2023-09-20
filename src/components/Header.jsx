import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='fixed w-full'>
            <div className="w-full h-9 p-2.5 justify-end items-center gap-12 inline-flex ">
                <div className="text-black text-sm font-normal font-SFPro">Đăng nhập</div>
                <div className="text-black text-sm font-normal font-SFPro pr-8">Wishlist</div>
            </div>
            <div className="w-full h-16 p-2.5 bg-black justify-center items-center gap-72 inline-flex">
                <div className="text-white text-xl font-SFPro">
                    Apple Store</div>
                <div className="p-2.5 justify-center items-center gap-16 flex">
                    <Link to='' className="text-white text-base font-normal font-SFPro hover:text-gray">Trang chủ</Link>
                    <Link className="text-white text-base font-normal font-SFPro hover:text-gray ">Phân loại</Link>
                    <Link className="text-white text-base font-normal font-SFPro hover:text-gray">Sắp ra mắt</Link>
                    <Link className="text-white text-base font-normal font-SFPro hover:text-gray">Blog</Link>
                </div>
                <div className="p-2.5 justify-center items-center gap-5 flex">
                    <div className="h-5 px-1 py-0.5 justify-start items-end gap-1.5 flex">
                        <ShoppingCartIcon className='text-white'></ShoppingCartIcon>
                    </div>
                    <div className="text-white font-16 ont-normal font-SFPro">0</div>
                </div>
            </div>
        </div >

    )
}

export default Header