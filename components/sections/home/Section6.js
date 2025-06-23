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
    <div className="p-2 p-md-5 pb-md-0">
<div className="d-flex flex-column justify-content-center align-items-center container ">
    <h2 className="pt-md-4 mobile-fonts-heading text-center  pt-4" style={{ fontSize: '50px' }}>
       Trusted by Community
      </h2>

      <h5
        className="pt-4 text-center "
        style={{ color: "rgb(66, 66, 66)", fontWeight: 400, textAlign:"start" }}
      >
       At Evolve, our commitment to innovation, reliability, and performance speaks through the voices of our clients. From  large scale  government projects to private sector giants, our solutions have earned the trust of those who demand excellence.
      </h5>
  </div>
    </div>
    <div className="p-2  p-md-5 pt-md-0 ">

      <div id="carouselExampleControls1" className="carousel slide px-md-5 pt-md-0" data-bs-ride="carousel">
      <div className="carousel-inner">
        
        <div className="carousel-item container active p-5">
          <div className="row">
           


           


             <div className="col-md-12" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'100px'}
                          src="/images/evolve-home/mpl2.png"
                          alt=""
                         
                          
                        />
                  </div>
                  
                  

<p className="">Evolve Technologies successfully installed Variable Orifices and a Coal Flow Monitoring System in Unit 2, Mill D. During tests in September 2021, the system demonstrated accurate, real-time measurement and effective balancing of coal flow across all four PF pipes, achieving results within 5% of the average flow. Its diagnostic capabilities are expected to enhance combustion efficiency and support NOx emission control.
</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Maithon Power Limited </h5>
                      
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


        <div className="carousel-item container p-5 ">
          <div className="row">
           


           


             <div className="col-md-12" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'100px'}
                          src="/images/evolve-home/cs.png"
                          alt=""
                         
                          
                        />
                  </div>
                  
                  

<p className="">Variable Orifices and a Coal Flow Monitoring System supplied by M/s BMW Steel Ltd. were installed in all four mills of Unit 1 at DSPM TPS, Korba East. Post-installation and coal pipe balancing in Nov 2022, the plant reported significant improvements, including better Gross Unit Heat Rate (GUHR), reduced unburnt carbon in both bottom ash and fly ash, and lower NOx emissions in flue gases.

</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Chhattisgarh State Power Generation Company Ltd. </h5>
                      
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






        <div className="carousel-item container p-5  ">
          <div className="row">
           


           


             <div className="col-md-12" >
              <div className="card p-5 m-4" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
                <div className="card-body">
                  <div className="d-flex justify-content-between pb-3">
                                      <img
                                      height={'50px'}
                          src="/images/evolve-home/test1.png"
                          alt=""
                          
                          
                        /><img
                        height={'100px'}
                          src="/images/evolve-home/hp.png"
                          alt=""
                         
                          
                        />
                  </div>
                  
                  

<p className="">Evolve Technologies supplied ceramic Variable Orifices for Units 1 & 2 of MB Power, Anuppur in 2015. After over 25,000 hours of operation, the orifices continue to perform reliably with excellent wear and erosion resistance. Adjustments during mill operations have been smooth, and the quality of ceramic tile fixing is noted as good. Overall, the performance of the orifices is rated satisfactory.

</p>


                  <div className="d-flex justify-content-between ">

                    <div>
                     <h5 className="card-title">Hindustan Power Projects Pvt. Ltd. </h5>
                      
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







        <div className="carousel-item container p-5  ">
          <div className="row">
           


           


             <div className="col-md-12" >

             <div className="card  m-4 text-center d-flex justify-content-center align-items-center" style={{borderRadius:"30px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",border:"none"}}>
               <img
                      
                          src="/images/evolve-home/all.png"
                          alt=""

                          className="w-75 text-center"
                         
                          
                        />
             </div>
             
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
       
      </div>
      
    </div>
    </div>
        
<div >
  
</div>

      </>
  
    )}