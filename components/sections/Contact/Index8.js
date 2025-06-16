import React from "react";
export default function Index8(){
    return (
        <>

    <div>
      {/* BANNER */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        dataBsRide="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/contact-us/banner-Contact.png"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption carousel-caption-top d-none  d-md-block text-start">
              <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '95px' }}>
                Contact us
              </h2>

              <h2 className="pt-md-4  text-white d-md-none text-center pt-3" style={{ fontSize: '25px' }}>
                Contact us
              </h2>
              <h4 className="pt-4 text-white d-none d-md-block" style={{ color: 'rgb(66, 66, 66)', fontWeight: '400', textAlign: 'justify' }}>
                Your inquiries are important to us! If you're looking for assistance with our products or want to discuss potential collaborations, we're just a message away.
              </h4>
              
            </div>

            <div className="carousel-caption  d-md-none   text-start">
              <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '95px' }}>
                Contact us
              </h2>

              <h2 className="pt-md-4  text-white d-md-none text-center " style={{ fontSize: '35px' }}>
                Contact us
              </h2>
              <h4 className="pt-4 text-white d-none d-md-block" style={{ color: 'rgb(66, 66, 66)', fontWeight: '400', textAlign: 'justify' }}>
                Your inquiries are important to us! If you're looking for assistance with our products or want to discuss potential collaborations, we're just a message away.
              </h4>
              
            </div>
            
          </div>
        </div>
      </div>
      
      {/* BANNER END */}

      {/* Section-1 */}
      <div className="p-lg-5">
        <div className="p-lg-5 p-3 d-lg-flex">
          <div className="m-lg-4 mt-3 text-center w-100 p-5" style={{ backgroundColor: '#F1F9EE', borderRadius: '10px' }}>
            <img src="images/evolve-contact/1.png" alt="" />
            <h2 className="pt-4 fs-3">sales@evolve .com</h2>
            <h4 className="pt-3 fw-normal">We aim to respond within 24 hours.</h4>
          </div>

          <div className="m-lg-4 mt-3 text-center w-100 p-5" style={{ backgroundColor: '#F1F9EE', borderRadius: '10px' }}>
            <img src="images/evolve-contact/2.png" alt="" />
            <h2 className="pt-4"> Evolve Technologies</h2>
            <h4 className="pt-3 fw-normal">02 Balbir Road, Dalanwala,
 Dehradun, Uttarakhand, 248001</h4>
          </div>

          <div className="m-lg-4 mt-3 text-center w-100 p-5" style={{ backgroundColor: '#F1F9EE', borderRadius: '10px' }}>
            <img src="images/evolve-contact/3.png" alt="" />
            <h2 className="pt-4">+91-96390 17070</h2>
            <h4 className="pt-3 fw-normal">Our calls hours are Mon-sat 9am-6:30pm.</h4>
          </div>
        </div>
      </div>
      {/* Section-1 End */}

      {/* Section-2 */}
      <div className="px-lg-5">
        <div className="px-md-5 p-3 d-lg-flex">
          <div className="w-100">
            <h2 className="mobile-fonts-heading" style={{ fontSize: '90px' }}>
              Connect with Us for Business Inquiries and Support.
            </h2>
            <h4 className="pt-3 fw-normal">
              We value your interest and are here to help! Whether you have questions about our services, need support, or want to explore partnership opportunities, please don't hesitate to reach out.
            </h4>

            <div className="d-md-flex">
              

              <div className="w-100">
                <h3 className="pt-3 fw-normal" style={{ color: '#3D5D09' }}>Head Office</h3>
                <h4 className="pt-3 fw-normal">
                  Evolve Technologies<br />
                  02 Balbir Road, Dalanwala,
 Dehradun, Uttarakhand, 248001
                </h4>
              </div>
            </div>

            
          </div>

          <div className="w-100 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <form className="p-5 w-100" style={{ backgroundColor: 'rgb(233, 233, 233)', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              <h1 className="text-center">Get in touch</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your Name" id="exampleInputEmail1" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your Email" id="exampleInputEmail1" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter your Phone Number" id="exampleInputEmail1" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
              </div>

              <div className="text-center">
                <button type="submit" style={{ backgroundColor: '#679F0C', border: 'none' }} className="btn btn-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Section-2 End */}

      {/* Map */}
      <div className="p-3 p-md-5">
        <div className="px-md-5">
          <div className="ratio" style={{ height: '500px' }}>
            <iframe
              style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.228725896471!2d77.77047827621259!3d29.972856021957885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec972fdb61c17%3A0x9e5c360e9dd89286!2sBMW%20STEELS%20LTD.!5e0!3m2!1sen!2sin!4v1740722343313!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Map End */}
 </div>
        </>

    )}