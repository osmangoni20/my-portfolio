import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ProjectInformation.css';

const ProjectINformation = ({ info }) => {
    const { name, date, LiveSite, GitHub, image1, image2, image3, Technology, description1, description2, description3, description4, } = info
    return (
        <div className='containter '>
            <div className='projectsInfo shadow'>

                <div className='crousel'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>




                <div className='information'>
                    <h3>{name}</h3>
                    <p>{date}</p>
                    <ul className='description'>
                        <li>{description1}</li>
                        <li>{description2}</li>
                        <li>{description3}</li>
                        {
                            description4 && <li>{description4}</li>
                        }
                    </ul>

                    <div className='technology'>
                        <h4>Technology:</h4>
                        {
                            Technology.map(tech => <p>{tech}</p>)
                        }
                    </div>
                    <div className='link d-flex justify-content-center'>
                        <a href={LiveSite}>Live Preview</a>
                        <a href={GitHub}>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectINformation;