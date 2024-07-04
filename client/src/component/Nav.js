import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <img src='https://www.karinternationalinfotech.com/img/logo1.png' style={{height:'50px', width:'50px'}} alt='' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/aboutus' className="nav-link" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/service' className="nav-link" >Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className="nav-link">Product</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to='/contactus'>
                            <button className='btn btn-primary'>
                                contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav