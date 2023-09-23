import React from 'react'
import { carbon_neutral, hero_apple_watch_series_9, hero_iphone15, hero_iphone15pro, logo_watchSE, promo_airpods_pro, promo_apple_watch_se, promo_apple_watch_ultra2, promo_carbon_neutral, promo_ipadpro, promo_m2_chip, promo_macbook_air_15, watch_logo, watch_logo_ultra2 } from '../assets/img/index';

const Hero = () => {
    return (
        <div className='bg-[#fbfbfd]'>
            <div className="h-52 sm:h-96 carousel carousel-vertical font-SFPro ">
                <div className="carousel-item h-full">
                    <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-gray w-full'>iPhone 15 Pro
                        <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-gray w-full'>
                            Titan. Thật bền chắc. Thật nhẹ. Thật Pro.
                        </div>

                    </span>

                    <img src={hero_iphone15} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={hero_iphone15pro} alt='' />

                </div>

            </div>
            <div className="carousel-item sm:h-96 -my-2 h-52 font-SFPro  animate-fade-up animate-once animate-duration-1000 animate-ease-in">
                <img src={hero_apple_watch_series_9} alt='' />
                <span className='text-center font-medium text-2xl sm:text-3xl py-2 mt-2 absolute text-white w-full '>
                    <img src={watch_logo} className='sm:w-32 w-20  absolute left-[40%] lg:left-[45%]' alt=''></img>
                    <div className='text-center font-extralight py-2 text-sm sm:text-xl absolute text-white w-full sm:mt-12 mt-8'>
                        Thông minh hơn. Sáng hơn. Quyền năng hơn.
                    </div>

                </span>
            </div>

            <div className='lg:flex mt-4 h-full font-SFPro '>
                <div className=" m-2 ">
                    <img src={watch_logo_ultra2} alt='' className='absolute lg:w-1/12 lg:left-[21%] w-[100px] left-[38%] md:left-[43%]' />

                    <div className='text-center font-extralight py-2 text-xs sm:text-xl  text-black w-full lg:w-1/2 absolute sm:mt-14 mt-8'>
                        Một đẳng cấp phiêu lưu mới.
                    </div>

                    <img src={promo_apple_watch_ultra2} alt='' />

                </div>

                <div className="m-2">
                    <img src={carbon_neutral} alt='' className='absolute lg:w-1/12 lg:left-[70%] w-[140px] left-[32%] md:left-[40%]' />
                    <div className='text-center font-extralight py-2 text-xs sm:text-xl w-full text-black lg:w-1/2 absolute sm:mt-12 mt-6'>
                        Thành tựu đầu tiên từ Apple Watch. Và Apple.
                    </div>
                    <img src={promo_carbon_neutral} alt='' />

                </div>

            </div>

            <div className='lg:flex mt-4 h-full font-SFPro '>
                <div className=" m-2 ">
                    <img src={logo_watchSE} alt='' className='absolute lg:w-1/12 lg:left-[21%] w-[100px] left-[38%] md:left-[43%]' />

                    <div className='text-center font-extralight py-2 text-xs sm:text-xl  text-black w-full lg:w-1/2 absolute sm:mt-14 mt-8'>
                        Một mối quá tuyệt.
                    </div>

                    <img src={promo_apple_watch_se} alt='' />

                </div>

                <div className="m-2">
                    <h4 className='text-center text-2xl font-semibold ' >
                        MacBook Air 15”
                    </h4>
                    <div className='text-center font-extralight py-2 text-xs sm:text-xl w-full text-black lg:w-1/2 absolute '>
                        Lớn ấn tượng. Mỏng không tưởng.
                    </div>
                    <img src={promo_macbook_air_15} alt='' />
                </div>
            </div>

            <div className='lg:flex mt-4 h-full font-SFPro gap-1'>
                <div className="">
                    <div class="absolute lg:w-1/2 w-full">
                        <div className='font-extralight py-2 text-sm sm:text-xl flex  text-white  text-center justify-center sm:w-full lg:leading-[56px]'>
                            Siêu mạnh mẽ với
                            <img src={promo_m2_chip} className='px-2 w-14 lg:w-20' alt='' />
                        </div>

                    </div>
                    <img src={promo_ipadpro} alt='' />

                </div>

                <div className="">
                    <div className='text-center sm:text-2xl font-medium absolute z-10 text-white pt-3 lg:w-1/2 w-full text-base' >
                        AirPods Pro
                        <div className=' text-center sm:text-base font-light pt-2 text-sm'>
                            Âm Thanh Thích Ứng. Đang phát.
                        </div>
                    </div>

                    <img src={promo_airpods_pro} alt='' />

                </div>

            </div>

        </div>
    )
}

export default Hero