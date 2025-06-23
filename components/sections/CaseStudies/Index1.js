import React from "react";
export default function Index1(){
    return (
        <>
{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const indicatorsContainer = document.querySelector(
      ".carousel-indicators"
    );

    const scrollActiveIndicatorIntoView = () => {
      const activeIndicator = document.querySelector(
        ".carousel-indicators .active"
      );

      if (activeIndicator) {
        // Get the bounding rectangle of the active indicator
        const indicatorRect = activeIndicator.getBoundingClientRect();
        const containerRect = indicatorsContainer.getBoundingClientRect();

        // Calculate the scroll offset
        const indicatorLeft = indicatorRect.left - containerRect.left;
        const indicatorRight = indicatorRect.right - containerRect.left;

        // Check if the active indicator is outside the visible area of the container
        if (
          indicatorLeft < 0 ||
          indicatorRight > indicatorsContainer.offsetWidth
        ) {
          indicatorsContainer.scrollTo({
            left:
              indicatorLeft -
              indicatorsContainer.offsetWidth / 2 +
              activeIndicator.offsetWidth / 2, // Center the active indicator
            behavior: "smooth",
          });
        }
      }
    };

    // Listen for slide events to update the active indicator scroll position
    carousel.addEventListener("slid.bs.carousel", () => {
      // Use setTimeout to ensure the DOM update happens before scrolling
      setTimeout(() => {
        scrollActiveIndicatorIntoView();
      }, 100); // Delay to ensure that the active indicator has been updated
    });

    // Initial scroll on page load (in case the page is loaded with an active slide)
    setTimeout(() => {
      scrollActiveIndicatorIntoView();
    }, 100); // Initial delay to ensure everything has loaded
  });
</script> */}

{/* <script>
  $('#myModal').on('shown.bs.modal', function () {
    $('#video1')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
  })
</script> */}



{/* BANNER */}
<div className="">
  <div className="text-center px-md-5 px-2">
    <h2
      className="pt-4 mobile-fonts-heading"
      style={{ fontSize: '50px' }}
    >
      Case Studies of Proven Results
    </h2>

    <div className="px-md-5 py-md-3 text-center">
      <h5 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
        Tests at 2x600 MW LANCO Anpara and 2x250 MW DSPM Korba resulted in improvements in coal mass flow balancing,
reducing unburnt carbon and enhancing combustion efficiency.
      </h5>
    </div>
  </div>

  {/* Carousal  */}

 

  {/* Carousal END */}
</div>

{/* BANNER END */}

{/* Section 1 */}

<div className="p-md-5 mt-3">



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        1. CSPGCL DSPM, Korba
      </h2>
      <ul className="case fs-3">
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>Project:</span> Dynamic Coal Flow Monitoring at CSPGCL DSPM, Korba. </li>
        <li className="py-3"><span style={{color:'#3D5D09' ,fontWeight:'500'}}>Objective:</span> Balance coal flow in 4 mills to improve efficiency and reduce emissions. </li>
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>System:</span> BMW's Dynamic Coal Flow Monitoring and Balancing Valves. </li>
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>Results:</span> <ul className="case2"><li>Coal savings of ~1% (~₹6 Crore annually).</li> <li>Reduction in Gross Heat Rate and unburnt carbon in fly ash.</li>  <li>Decrease in NOx emissions by 25.18%.</li> </ul> </li>
        
      </ul>
    </div>
    <div className="text-center p-3 ps-md-5">
      <img
        src="images/evolve-case/e1.png"
        style={{
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
        className="w-100"
        alt=""
      />
      <div className="pt-3">
        <h3>DSPM Final Report</h3>
        <a
          href="pdf/CFM Catalogue.pdf"
          download=""
          style={{ color: '#3D5D09', textDecoration: 'none' }}
        >
          Download Now
        </a>
      </div>
    </div>
  </div>








<div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        2. LANCO Anpara
      </h2>
      <ul className="case fs-3">
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>Project Objective:</span> Balance coal velocities and mass flow in six mills to optimize combustion and improve efficiency.</li>
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>System Overview:</span> Utilizes non-intrusive microwave technology for real-time monitoring of coal flow and velocity. </li>
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>Results:</span>  Achieved velocity balance within ±5%, and reduced carbon in ash by 19.27%. </li>
        <li className="py-3"><span style={{color:'#3D5D09',fontWeight:'500'}}>Conclusion:</span>  The system demonstrated significant improvements in operational parameters, combustion efficiency, and emission control, leading to cost savings. </li>
        
      </ul>
    </div>
    <div className="text-center p-3 ps-md-5">
      <img
        src="images/evolve-case/e1.png"
        style={{
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
        className="w-100"
        alt=""
      />
      <div className="pt-3">
        <h3>DSPM Final Report</h3>
        <a
          href="pdf/CFM Catalogue.pdf"
          download=""
          style={{ color: '#3D5D09', textDecoration: 'none' }}
        >
          Download Now
        </a>
      </div>
    </div>
  </div>
















  
</div>

{/* Section 1 END */}

{/* Section 2 */}

<div className="p-md-5 p-4 pt-md-0" style={{backgroundColor:'#EFF7EC'}}>
 

  <div className="d-lg-flex justify-content-center align-items-center p-3 p-md-5 flex-row-reverse">
    

    <div className="w-100 ps-md-5 d-flex flex-column justify-content-between">
      <h3 className="pt-md-4 mobile-fonts-heading text-start  pt-4" style={{ fontSize: '50px' }}>
       Proven Results in Power Plant Operations
      </h3>

     
        <div >
          <h3 className="pt-3 fs-3" style={{ color: '#3D5D09' }}>
            Heat Rate Improvement:
          </h3>
          <h5 className="fw-normal">
            The system has resulted in reduced unburnt ash, improved boiler efficiency, and a decrease in gross heat rate by up to 1.05%.
          </h5>
        </div>

         <div >
          <h2 className="pt-3 fs-3" style={{ color: '#3D5D09' }}>
            Emission Control:
          </h2>
          <h5 className="fw-normal">
            NOx emissions were reduced by approximately 25% in test cases after coal flow balancing.
          </h5>
        </div>


         <div >
          <h2 className="pt-3 fs-3" style={{ color: '#3D5D09' }}>
            Improved Efficiency:
          </h2>
          <h5 className="fw-normal">
            Enhances combustion efficiency and stability at low load operations.
          </h5>
        </div>


         <div >
          <h2 className="pt-3 fs-3" style={{ color: '#3D5D09' }}>
            Cost Savings:
          </h2>
          <h5 className="fw-normal">
            Achieved a daily benefit of Rs. 0.77 Lacs through a 19.27% reduction in carbon in ash.
          </h5>
        </div>


        <div >
          <h2 className="pt-3 fs-3" style={{ color: '#3D5D09' }}>
            Real-Time Monitoring:
          </h2>
          <h5 className="fw-normal">
            Enables continuous, non-intrusive measurement of coal flow parameters and velocity, ensuring dynamic balancing, optimized coal consumption, and improved overall operational control.
          </h5>
        </div>
     
    </div>

    <div className="w-100 text-center">
      <img
        src="/images/evolve-case/2.webp"
        alt=""
        className="w-75"
        style={{ borderRadius: '' }}
      />
    </div>
  </div>
</div>

{/* Section 2 END */}

{/* Section 3 */}





  
        </>
    )
}