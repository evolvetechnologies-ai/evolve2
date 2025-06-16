import React from "react";
export default function Section5(){
    
       (() => {
   const myCarousel = document.querySelector('#carouselExampleControls');
    const itemsPerSlide = 1; // Move one item per slide
    new bootstrap.Carousel(myCarousel, {
      interval: 8000,
      wrap: true
    });

    const totalItems = $('.carousel-item').length;
    const itemWidth = $('.carousel-item').outerWidth();
    const slideWidth = itemWidth * itemsPerSlide;

    $('.carousel-inner').css('width', slideWidth * totalItems);

    $('.carousel-item').css({
      'width': '100%',
      'display': 'inline-block'
    });

    $('.carousel-control-prev, .carousel-control-next').on('click', (e) => {
      const carousel = $('.carousel-inner');
      const offset = $(e.target).hasClass('carousel-control-prev') ? -slideWidth : slideWidth;
      carousel.animate({
        left: `${offset}px`
      }, 600, () => {
        // Reset the position and update the classes
        const position = carousel.position().left;
        const isPrev = $(e.target).hasClass('carousel-control-prev');
        const newActiveIndex = isPrev ? position / slideWidth - 1 : position / slideWidth + 1;
        $('.carousel-item').removeClass('active').eq(Math.round(newActiveIndex)).addClass('active');
      });
    });
  }, []);

  return (
    <>
    <div className="p-2 p-md-5">
<div className="d-flex flex-column justify-content-center align-items-center ">
    <h2 className="pt-md-4 mobile-fonts-heading text-center  pt-4" style={{ fontSize: '75px' }}>
       Trusted by Community
      </h2>

      <h4
        className="pt-4 text-center "
        style={{ color: "rgb(66, 66, 66)", fontWeight: 400, textAlign: "justify" }}
      >
       At Evolve, our commitment to innovation, reliability, and performance speaks through the voices of our clients. From  large <br/>scale  government projects to private sector giants, our solutions have earned the trust of those who demand excellence.
      </h4>
  </div>
    </div>
    <div className="p-2 p-md-5 ">

      <div id="carouselExampleControls1" className="carousel slide px-md-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
           
           


            <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>



             <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>



             <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>


             <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>


             <div className="col-md-4" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'70px'}
                          src="/images/evolve-home/test2.png"
                          alt=""
                          style={{borderRadius:"50px",border:"1px solid black"}}
                          
                        />
                  </div>
                  
                  <p className="card-text">Evolve's ceramic solutions have significantly improved our plant’s efficiency. Downtime has reduced, and maintenance costs are lower
than ever</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Sophia Mendell</h5>
                      <h5 className="card-title fw-normal" style={{color:"#00000099"}}>Chief Executive Officer</h5>
                    </div>

                    <div>
                      <span className="pe-3">
                        5.0
                      </span>
                      <img
                        height={'20px'}
                          src="/images/evolve-home/star.png"
                          alt=""
                          
                          
                        />
                    </div>

                  </div>




                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      
    </div>
    </div>
        
<div >
  
</div>

      </>
  
    )}