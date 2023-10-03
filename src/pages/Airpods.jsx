import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Airpods_max_2x,
    Webstore_AirPods_Collection_Banner
} from '../assets/img/index';
import Footer from '../components/Footer';
// import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import { AirPods } from '../constants';


const AirpodsPage = () => {
    return (
        <div>
            {/* Bread Crumb */}
            <div className="text-sm breadcrumbs text-gray font-SFPro ml-6 p-2">
                <ul>
                    <li><Link>Home</Link></li>
                    <li>Airpods</li>
                </ul>
            </div>
            {/* Hero section */}
            {/* {Airpods_max_2x} */}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal '>

                <div class="w-full flex align-middle justify-center"><img src={Airpods_max_2x} alt='Airpods_max_2x' className='w-full' /></div>
            </div>

            {/* Airpods*/}
            <div className='w-full font-SFPro text-center animate-fade-up animate-once animate-duration-[1000ms] animate-ease-linear animate-normal bg-[#fafafa] pt-2'>

                <div className='text-5xl my-2 font-medium text-black'>Airpods</div>
                <div className='text-2xl font-medium text-black'>
                    Thế hệ thứ 2
                </div>
                {/* <p className='text-xl text-black font-normal my-3'>Từ 22.999.000đ</p> */}
                <div class="flex justify-center align-middle gap-5">
                    <button className='bg-blue text-white text-base py-1 px-3 my-4 rounded-2xl hover:text-blue hover:bg-gray'>
                        Mua
                    </button>
                    <Link className='text-blue text-base py-1 px-3 my-4 hover:opacity-50' href='#'>
                        Tìm hiểu thêm<ChevronRightIcon className='text-base' />
                    </Link>
                </div>
                <div class="w-full flex align-middle justify-center"><img src={Webstore_AirPods_Collection_Banner} alt='Webstore_AirPods_Collection_Banner' className='w-full' /></div>
            </div>


            <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
                <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
                    <h2 className='text-5xl font-medium '>
                        AirPods
                    </h2>
                    <p className=' mt-2 text-center text-slate-gray'>
                        Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn lùng của chúng tôi. Khám phá thế giới tiện nghi, thiết kế và giá trị
                    </p>
                </div>
            </section>
            <ProductList products={AirPods} />
            {/* <Pagination /> */}
            <Footer />
        </div>
    )
}

export default AirpodsPage;