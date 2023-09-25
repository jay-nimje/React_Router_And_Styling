import React from 'react'
import { Link } from 'react-router-dom'

function Sign_In() {
    return (
        <div>
            <div>
                <section className="banner-bottom py-5">
                    <div className="container">
                        <div className="content-grid">
                            <div className="text-center icon">
                                <span className="fa fa-unlock-alt" />
                            </div>
                            <div className="content-bottom">
                                <form action="#" method="post">
                                    <div className="field-group">
                                        <div className="content-input-field">
                                            <input name="text1" id="text1" type="text"  placeholder="User Name" required />
                                        </div>
                                    </div>
                                    <div className="field-group">
                                        <div className="content-input-field">
                                            <input name="password" id="myInput" type="Password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="content-input-field">
                                        <button type="submit" className="btn">Sign In</button>
                                    </div>
                                    <ul className="list-login">
                                        <li>
                                            <a href="#" className="text-right">Forgot password?</a>
                                        </li>
                                        <li className="clearfix" />
                                    </ul>
                                    <ul className="list-login-bottom">
                                        <li className>
                                            <Link to="/register" className>Don't have an Account?</Link>
                                        </li>
                                        <li className="clearfix" />
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /login */}
                {/*/shipping*/}
                <section className="shipping-wthree">
                    <div className="shiopping-grids d-lg-flex">
                        <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                            <div className="icon-gd"><span className="fa fa-truck" aria-hidden="true" />
                            </div>
                            <div className="icon-gd-info">
                                <h3>FREE SHIPPING</h3>
                                <p>On all order over $2000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
                            <div className="icon-gd"><span className="fa fa-bullhorn" aria-hidden="true" /></div>
                            <div className="icon-gd-info">
                                <h3>FREE RETURN</h3>
                                <p>On 1st exchange in 30 days</p>
                            </div>
                        </div>
                        <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                            <div className="icon-gd"> <span className="fa fa-gift" aria-hidden="true" /></div>
                            <div className="icon-gd-info">
                                <h3>MEMBER DISCOUNT</h3>
                                <p>Register &amp; save up to $29%</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//shipping*/}
            </div>
        </div>
    )
}

export default Sign_In