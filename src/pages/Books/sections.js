import React from 'react';
import Books1 from '../../images/books1.jpg'
import Books2 from '../../images/books2.jpg'
import Books3 from '../../images/boooks3.jpg'
import ImageSvg from '../../images/right-arrow-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import './style.css'
function Sections() {
    return (
        <div>
            <div className='header'>
            </div>
            <div className="container mt_countainer">
                <div className="row pt-40">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className='overlay'> </div>
                            <div className='text d-flex'>
                                <div className='text-center'>
                                    <h3 className='text-white'>
                                        Full Stack <br />
                                        Development
                                    </h3>
                                    <div className='link_section'>
                                        <Link to='/Sections/Bookgaenrate' className='link'>
                                            Learn More
                                            <img src={ImageSvg} alt='image' className='svg_image' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='image_section'>
                                <img src={Books3} className="card-img-top" alt="Image 1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row_tow">
                    <div className="col-sm-6">

                        <div className="card">
                            <div className='overlay'> </div>
                            <div className='text d-flex'>
                                <div className='text-center'>
                                    <h3 className='text-white'>
                                        Full Stack
                                        Development
                                    </h3>
                                    <div className='link_section'>
                                        <Link to='/Sections/Bookgaenrate2' className='link'>
                                            Learn More
                                            <img src={ImageSvg} alt='image' className='svg_image' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='image_section'>
                                <img src={Books2} className="card-img-top" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className='overlay'> </div>
                            <div className='text d-flex'>
                                <div className='text-center'>
                                    <h3 className='text-white'>
                                        Full Stack
                                        Development
                                    </h3>
                                    <div className='link_section'>
                                        <Link to='/Sections/Bookgaenrate3' className='link'>
                                            Learn More
                                            <img src={ImageSvg} alt='image' className='svg_image' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='image_section'>
                                <img src={Books1} className="card-img-top" alt="Image 3" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sections;
