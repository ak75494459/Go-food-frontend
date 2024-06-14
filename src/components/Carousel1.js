import React from 'react';

export default function Carousel1() {
    return (
        <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="https://i2-prod.getsurrey.co.uk/incoming/article15646507.ece/ALTERNATES/s1200/0_LNR_SAH_080119WillowPedMillichamp.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }}/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Food-Images-Download.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }}/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://thumbs.dreamstime.com/b/gourmet-fries-chicken-dish-plate-close-up-tender-juicy-white-fresh-lettuce-lemon-sauce-58668024.jpg" className="d-block w-100" alt="..." style={{ objectFit: "cover", maxHeight: "500px" }}/>
                </div>
            </div>
            <button className="carousel-control-prev prev carousel-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" style={{fontSize:"18px"}}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next next carousel-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <form className="serach-bar" class="d-flex" role="search" style={{    position: "relative",top: "-118px",width: "80%",margin: "auto", zIndex:"1"}} >
        <input className="form-control me-2 bs-dark-bg-subtle" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
        </div>
    );
}
