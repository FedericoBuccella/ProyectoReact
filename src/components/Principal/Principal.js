import React from 'react';
import '../Principal/Principal.css'
import { Link } from 'react-router-dom';

const Principal = () => {

    return (
        
        <div>
            <div className='d-flex flex-flow justify-content-center my-5'>
                <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="../images/Almacenamiento.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block recuadro">
                                <h5 className='mb-3'>Almacenamientos:</h5>
                                <Link to={'/category/Almacenamiento'}>
                                    <button className='btn btn-outline-light btn-floating m-1'>
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Auris.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block recuadro">
                                <h5 className='mb-3'>Auriculares:</h5>
                                <Link to={'/category/Auriculares'}>
                                    <button className='btn btn-outline-light btn-floating m-1'>
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Mouse.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block recuadro">
                                <h5 className='mb-3'>Mouse:</h5>
                                <Link to={'/category/Mouse'}>
                                    <button className='btn btn-outline-light btn-floating m-1'>
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Teclado1.webp" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block recuadro">
                                <h5 className='mb-3'>Teclados:</h5>
                                <Link to={'/category/Teclados'}>
                                    <button className='btn btn-outline-light btn-floating m-1'>
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>   
        </div>
    );
};

export default Principal;