import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section className="bg-white dark:bg-gray-900 font-SFPro">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')" }}>
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold  capitalize dark:text-white">
                            Tạo ID Apple
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Chỉ cần có một ID Apple để truy cập vào tất cả dịch vụ của Apple.
                        </p>



                        <form className="grid grid-cols-1 gap-4 md:gap-6 mt-8 md:grid-cols-2">
                            <div className=''>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Họ</label>
                                <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Tên</label>
                                <input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Số điện thoại</label>
                                <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mật khẩu</label>
                                <input type="password" placeholder="Nhập mật khẩu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Xác nhận mật khẩu</label>
                                <input type="password" placeholder="Nhập lại mật khẩu" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div >
                                <Link to='/SignIn' onClick={() => { <span className="loading loading-ring loading-lg"></span> }} className='hover:text-gray text-blue  m-auto items-center'>Bạn đã có tài khoản. Đăng nhập ngay</Link>

                            </div>
                            <button
                                className="flex items-center bg-black gap-4 m-auto col-span-2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50">
                                <span>Sign Up </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default SignUp;