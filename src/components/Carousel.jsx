import React from 'react'
import iphone15_1 from '../assets/img/iphone15/hero_iphone15pro_announce__c1coc7n3a0uq_largetall_2x.jpg'
import iphone15_2 from '../assets/img/iphone15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg'
import watch_1 from '../assets/img/watch/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.jpg'
import logo_watch from '../assets/img/watch/logo.png'
import logo_ultra2 from '../assets/img/watch/logo_ultra2.png'
import logo_carbon from '../assets/img/watch/carbon_neutral.png'
import apple_watch_ultra2 from '../assets/img/watch/promo_apple_watch_ultra2_order__dyxqj5ia98om_large_2x.jpg'
import promo_carbon_neutral from '../assets/img/watch/promo_carbon_neutral__fmzt9ypcw9e2_large_2x.jpg'
const Carousel = () => {
    return (
        <div>
            <div className="h-52 sm:h-96 carousel carousel-vertical font-SFPro ">
                <div className="carousel-item h-full">
                    <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-gray w-full'>iPhone 15 Pro
                        <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-gray w-full'>
                            Titan. Thật bền chắc. Thật nhẹ. Thật Pro.
                        </div>

                    </span>

                    <img src={iphone15_1} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={iphone15_2} alt='' />

                </div>

            </div>
            <div className="carousel-item sm:h-96 -my-2 h-52 font-SFPro">
                <img src={watch_1} alt='' />
                <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-white w-full '>
                    <img src={logo_watch} className='sm:w-32 w-20  absolute left-[40%] lg:left-[45%]' alt=''></img>
                    <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-white w-full sm:mt-12 mt-8'>
                        Thông minh hơn. Sáng hơn. Quyền năng hơn.
                    </div>

                </span>
            </div>

            <div className='lg:flex mt-4 h-full font-SFPro '>
                <div className=" m-2 ">
                    <img src={logo_ultra2} alt='' className='absolute lg:w-1/12 lg:left-[21%] w-[100px] left-[38%] md:left-[43%]' />

                    <div className='text-center font-extralight py-2 text-xs sm:text-xl  text-black w-full lg:w-1/2 absolute sm:mt-12 mt-8'>
                        Một đẳng cấp phiêu lưu mới.
                    </div>

                    <img src={apple_watch_ultra2} alt='' />

                </div>

                <div className="m-2">
                    <img src={logo_carbon} alt='' className='absolute lg:w-1/12 lg:left-[70%] w-[140px] left-[32%] md:left-[40%]' />
                    <div className='text-center font-extralight py-2 text-xs sm:text-xl w-full text-black lg:w-1/2 absolute sm:mt-12 mt-6'>
                        Thành tựu đầu tiên từ Apple Watch. Và Apple.
                    </div>
                    <img src={promo_carbon_neutral} alt='' />

                </div>

            </div>
        </div>
    )
}

export default Carousel