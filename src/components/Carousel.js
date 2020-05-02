import React from 'react';

class Carousel extends React.Component {
    render () {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./src/images/black-fork-and-knife-clip-art-940302.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>The Food Fighters</h5>
                  <p>Show what you got</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./src/images/burrito-chicken-delicious-dinner-461198.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>The Food Fighters</h5>
                  <p>Show what you got</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./src/images/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>The Food Fighters</h5>
                  <p>Show what you got</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
    }
}

export default Carousel;