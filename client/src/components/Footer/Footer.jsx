import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (


        <div className="footer">
       <span className="footercontent"> @GreenFuture.Com</span>
        <span className="adminLink"> <Link>Admin</Link></span>
        </div>


    )
}

export default Footer