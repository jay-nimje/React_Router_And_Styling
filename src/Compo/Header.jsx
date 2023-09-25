import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="main-sec inner-page">
                {/* //header */}
                <header className="py-sm-3 pt-3 pb-2" id="home">
                    <div className="container">
                        {/* nav */}
                        <div className="top-w3pvt d-flex">
                            <div id="logo">
                                <h1> <NavLink to="/"><span className="log-w3pvt">B</span>aggage</NavLink> <label className="sub-des">Online Store</label></h1>
                            </div>
                            <div className="forms ml-auto">
                                <NavLink to="/login" className="btn"><span className="fa fa-user-circle-o" /> Sign In</NavLink>
                                <NavLink to="/register" className="btn"><span className="fa fa-pencil-square-o" /> Sign Up</NavLink>
                            </div>
                        </div>
                        <div className="nav-top-wthree">
                            <nav>
                                <label htmlFor="drop" className="toggle"><span className="fa fa-bars" /></label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    <li><NavLink to="/shop">Collections</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </nav>
                            {/* //nav */}
                            <div className="search-form ml-auto">
                                <div className="form-w3layouts-grid">
                                    <form action="#" method="post" className="newsletter">
                                        <input className="search" type="search" placeholder="Search here..." required />
                                        <button className="form-control btn" value><span className="fa fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </header>
                {/* //header */}
            </div>

        </div>
    )
}

export default Header