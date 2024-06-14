import React from 'react';
import '../App.css';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" style={{ objectFit: "contain !imortant"  }}>
                <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                    <div className="carousel-item active">
                        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Food-Images-Download.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://thumbs.dreamstime.com/b/gourmet-fries-chicken-dish-plate-close-up-tender-juicy-white-fresh-lettuce-lemon-sauce-58668024.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i2-prod.getsurrey.co.uk/incoming/article15646507.ece/ALTERNATES/s1200/0_LNR_SAH_080119WillowPedMillichamp.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span style={{ width: "5rem" }} className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span style={{ width: "5rem" }} className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}
