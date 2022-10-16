import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <img src={Logo} alt=""/>
            </Link>
            <span><strong>Lama dev</strong> inspired.</span>
        </footer>
    )
}

export default Footer
