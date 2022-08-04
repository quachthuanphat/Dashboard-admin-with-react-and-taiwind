import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('login', { replace: true })
    }, [])

    return <h1>123</h1>
}

export default App
