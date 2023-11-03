import React,{useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppleIcon from '../../assets/apple.svg'
import Button from '../../components/Button'
import {login} from '../../api/login'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const SignIn = ({ loginError }) => {
    const navigate = useNavigate();

    const handleLabelClick = () => {
        // Điều hướng đến component SignIn khi label được nhấp
        navigate('/');
    }


    const userName = useRef()
    const password = useRef()
    const handleLogin = () => {
        const data={
            username:userName.current.value,
            password:password.current.value
        }
        login(data).then(({data})=>{
            console.log('data', data)
        }).catch((e)=> console.log('e', e))
        // if (userName.current.value === 'admin@gmail.com' && password.current.value === 'admin') {
        //     localStorage.setItem("userNameData", "admin@gmail.com")
        //     localStorage.setItem("passwordData", "admin")
        // }
    }
    return (
        <>
            <div className='m-5 text-gray' onClick={handleLabelClick}>
                <KeyboardDoubleArrowLeftIcon />
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-SFPro">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={AppleIcon} className='w-12 mx-auto' alt='Apple Icon' />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Đăng nhập vào Apple Store
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST"
                        onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"

                                    onChange={(e)=>{userName.current= e.target.value}}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 pl-3"
                                />
                                {loginError && <span className="error-text">{loginError}</span>}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mật khẩu
                                </label>
                                <div className="text-sm">
                                    <Link href="#" className="font-normal text-blue text-indigo-600 hover:text-indigo-500">
                                        Bạn đã quên mật khẩu?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                  
                                    onChange={(e)=>{password.current= e.target.value}}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 pl-3"
                                />
                            </div>
                        </div>

                        <div className=''>
                            <Button title='Đăng nhập' onClick={handleLogin} />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Bạn không có ID Apple? {' '}
                        <Link to='/SignUp' className="font-normal leading-6 text-blue hover:text-indigo-500 hover:text-gray">
                            Tạo tài khoản của bạn ngay bây giờ.
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}


export default SignIn