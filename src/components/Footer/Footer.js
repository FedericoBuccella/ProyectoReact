import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="mt-5 bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-facebook"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-twitter"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-google"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-instagram"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-linkedin"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-github"></i></a>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a className="text-white" href="#"> TecnoCenter.com</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;