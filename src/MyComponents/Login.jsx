import React from 'react'
import Logo from '../assets/Image/svg/netflix-logo-png.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className='login_bg_image vh_100 d-flex flex-column' >
            <div className='container-fluid nav_bg_linear'>
                <nav className='pt-3'>
                    <Link to='/'>  <img className='w_100px' src={Logo} alt="Netflix logo" /></Link >
                </nav>
            </div>
            <div className='container-fluid d-flex flex_grow_1 align-items-center'>
                <div className='max_width_700 mx-auto'>
                    <h1 className='text-white fs_xl fw-bold text-center'>Unlimited movies, TV shows and more.</h1>
                    <p className='text-white fs_sm fw_md text-center'>Watch anywhere. Cancel anytime.</p>
                    <div className='bg-white max_width_600 px-2 py-1 mx-auto py-sm-2 d-flex justify-content-between align-items-center rounded'>
                        <input type="text" className='py-2 border-0 outline_none' placeholder='Enter your email to login' />
                        <Link className='bg_danger text-white py-2 px-3 fw-bold fs_xsm rounded ' to='/Home'>LOGIN </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
