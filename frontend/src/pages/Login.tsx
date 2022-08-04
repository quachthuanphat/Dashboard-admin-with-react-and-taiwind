import React, { useState } from 'react'

import Layout from '../components/Layout'

type LoginInfoType = {
    username: string | undefined
    password: string | undefined
}

type Fields = {
    label: string
    placeholder?: string
    id: number
    type: string
    name: 'username' | 'password'
}

const FIELDS: Array<Fields> = [
    {
        label: 'Tên đăng nhập',
        placeholder: 'Vui lòng nhập tên đăng nhập....',
        id: 1,
        type: 'text',
        name: 'username',
    },
    { label: 'Mật khẩu', id: 2, type: 'password', name: 'password' },
]

const Login = () => {
    const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
        username: undefined,
        password: undefined,
    })

    const handleChangeInfo = (field: string, value: string) => {
        setLoginInfo({ ...loginInfo, [field]: value })
    }

    const handleValidateInfo = () => {
        const validateFields = FIELDS.map((field) => field.name)
        let valid = true
        validateFields.forEach((field) => {
            const errorField = document.getElementById(`${field}`)
            if (!errorField) return
            if (!loginInfo[field]) {
                errorField.innerHTML = `Vui lòng điền ${field}`
                valid = false
            } else errorField.innerHTML = ''
        })
        return valid
    }

    const handleLogin = async () => {
        const isValid = handleValidateInfo()
        if (!isValid) return
        console.log('123', 123)
        return true
    }

    return (
        <Layout>
            <div className='flex items-center justify-center w-screen h-[calc(100vh_-_56px)]'>
                <div className='wrapper w-96'>
                    <div className='font-semibold text-xl mb-3.5'>Đăng nhập</div>
                    {FIELDS.map((field) => (
                        <div key={field.id} className='mb-6'>
                            <label className='capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                {field.label}
                            </label>
                            <input
                                value={loginInfo[field.name]}
                                onChange={(event) =>
                                    handleChangeInfo(field.name, event.target.value)
                                }
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder={field.placeholder}
                                type={field.type}
                            />
                            <span
                                className='text-red-600 capitalize text-sm mt-2'
                                id={field.name}
                            ></span>
                        </div>
                    ))}
                    <button
                        onClick={handleLogin}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Login
