import Link from "next/link";

export default function Footer() {
  return (
    <>
       <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "#072200", color: "#D9D9D9" }}>
          <div className="me-5 d-none d-lg-block">
            
            <span>Get connected with us on social networks:</span>

          </div>

          <div>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="" style={{ backgroundColor: "#072200", color: "#D9D9D9" }}>
          <div className="text-center text-md-start pt-5">
            <div className="row mx-0 mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <a className="navbar-brand" href="#">
                  <img src="images/evolve-header/logo.png" height="100px" alt="" />
                </a>
                <p>
                  
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">UseFul Links</h6>
                <p>
                  <Link href="/CoalMassFlowMeasurement" className="text-reset text-decoration-none now">
                   Coal Mass Flow Measurement
                  </Link>
                </p>


                <p>
                  <Link href="/ParticleSizeSegregation" className="text-reset text-decoration-none now">
                   Particle Size Segregation
                  </Link>
                </p>



                <p>
                  <Link href="/CoalVelocityMeasurement" className="text-reset text-decoration-none now">
                   Coal Velocity Measurement
                  </Link>
                </p>



                <p>
                  <Link href="/CoalTemperatureMeasurement" className="text-reset text-decoration-none now">
                   Coal Temperature Measurement
                  </Link>
                </p>

                <p>
                  <Link href="/CoalRopeBreaker" className="text-reset text-decoration-none now">
                   Coal Rope Breaker
                  </Link>
                </p>

                <p>
                  <Link href="/CoalRopeDetection" className="text-reset text-decoration-none now">
                   Coal Rope Detection
                  </Link>
                </p>

                 <p>
                  <Link href="/VariableOrificeValve" className="text-reset text-decoration-none now">
                   Variable Orifice Valve
                  </Link>
                </p>

              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <Link href="/" className="text-reset text-decoration-none now">
                   Home
                  </Link>
                </p>
               
              
                <p>
                  <Link href="/About" className="text-reset text-decoration-none now">
                    About Us  
                  </Link>
                </p>
                <p>
                  <Link href="/CaseStudies" className="text-reset text-decoration-none now">
                    Case Studies
                    
                  </Link>
                </p>
                {/* <p>
                  <Link href="/ChemicallyBondedCompoundSeries" className="text-reset text-decoration-none now">
                    CBC Series
                    
                  </Link>
                </p>
                <p>
                  <Link href="/WearSealDiamondPutty" className="text-reset text-decoration-none now">
                    Wear Seal Diamond Putty
                    
                  </Link>
                </p>
                <p>
                  <Link href="/BasalticMineralFertilizer" className="text-reset text-decoration-none now">
                    Basaltic Mineral Fertilizer
                    
                  </Link>
                </p>
                <p>
                  <Link href="ContactUs" className="text-reset text-decoration-none now">
                    Contact
                  </Link>
                </p> */}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                
                <a style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9",textDecoration:"none" }} href="https://maps.app.goo.gl/u543ZrLhnKP9ePDT8"><p className="now">
                  <i className="fas fa-location me-3 "></i>
                  <b>Marketing Office</b><br />  02 Balbir Road, Dalanwala,<br/>Dehradun, Uttarakhand, 248001
                </p></a>
                <p className="now">
                  <i className="fas fa-envelope me-3 "></i>
                  Sales@evolvetechnologies.co.in
                </p>
                <p className="now">
                  <i className="fas fa-phone me-3"></i> +91-9639017070
                </p>
                
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "#072200", color: "#D9D9D9" }}>
          © 2025 Copyright: 
          <a className="text-reset fw-bold now" href="https://www.starnexxt.com/">
             Starnexxt.com
          </a>
        </div>
      </footer>
    </>
  );
}