import React from 'react'
import Header from './Header'

interface Props {
    children: JSX.Element
}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout
