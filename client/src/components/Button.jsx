import React from 'react'

const Button = (props) => {
    return (
        <div className=' bg-black gap-4 m-auto px-6 py-3 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit'>
            {props.title}
        </div>


    )
}

export default Button

