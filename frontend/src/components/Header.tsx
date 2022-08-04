import React from 'react'

const Header = () => {
    return (
        <nav className='sticky top-0 shadow-md bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
            <div className='flex flex-wrap justify-between items-center mx-auto'>
                <a href='#' className='flex items-center'>
                    <img
                        src='https://flowbite.com/docs/images/logo.svg'
                        className='mr-3 h-6 sm:h-9'
                        alt='Flowbite Logo'
                    />
                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        ZSL Admin
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Header
