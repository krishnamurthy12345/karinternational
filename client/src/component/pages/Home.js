import React from 'react';
import AboutUs from './About_us';
import Service from './Service';
import Product from './Product';

const Home = () => {
  return (
    <div className='container'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src='https://www.karinternationalinfotech.com/img/01.jpg' className="d-block w-100" style={{ height: "500px" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className=''>First slide label</h5>
              <p className='text-info'>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src='https://www.karinternationalinfotech.com/img/02.jpg' className="d-block w-100" style={{ height: "500px" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className=''>First slide label</h5>
              <p className='text-info'>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='https://www.karinternationalinfotech.com/img/03.jpg' style={{ height: "500px" }} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-dark'>First slide label</h5>
              <p className='text-info'>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-info">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Custom web development, responsive design, maintenance, support. Expertise, collaboration, innovation, customer satisfaction.</p>
            </div>

          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-info">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">Elevate your brand with our digital marketing services. From strategy to execution, we're here to help you achieve success online</p>
            </div>

          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-info">
              <h5 className="card-title">Graphic Designing</h5>
              <p className="card-text">Transforming brands through captivating design. From logos to social media content, we bring your vision to life with creativity.</p>
            </div>

          </div>
        </div>
      </div>
      <AboutUs />
      <Service />
      <Product />
    </div>
  )
}

export default Home