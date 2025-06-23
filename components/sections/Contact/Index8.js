"use client";
import React from "react";

export default function Index8() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div>
        {/* BANNER */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/contact-us/banner-Contact.png" className="d-block w-100" alt="" />
              <div className="carousel-caption carousel-caption-top d-none d-md-block text-start">
                <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '50px' }}>
                  Contact us
                </h2>
                <h2 className="pt-md-4 text-white d-md-none text-center pt-3" style={{ fontSize: '25px' }}>
                  Contact us
                </h2>
                <h4 className="pt-4 text-white d-none d-md-block" style={{ color: 'rgb(66, 66, 66)', fontWeight: '400', textAlign: 'justify' }}>
                  Your inquiries are important to us! If you're looking for assistance with our products or want to discuss potential collaborations, we're just a message away.
                </h4>
              </div>
              <div className="carousel-caption d-md-none text-start">
                <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '95px' }}>
                  Contact us
                </h2>
                <h2 className="pt-md-4 text-white d-md-none text-center " style={{ fontSize: '35px' }}>
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
              <h4 className="pt-4 fs-3">Sales@evolvetechnologies.
 co.in</h4>
              <h5 className="pt-3 fw-normal">We aim to respond within 24 hours.</h5>
            </div>
            <div className="m-lg-4 mt-3 text-center w-100 p-5" style={{ backgroundColor: '#F1F9EE', borderRadius: '10px' }}>
              <img src="images/evolve-contact/2.png" alt="" />
              <h4 className="pt-4"> Evolve Technologies</h4>
              <h5 className="pt-3 fw-normal">02 Balbir Road, Dalanwala, Dehradun, Uttarakhand, 248001</h5>
            </div>
            <div className="m-lg-4 mt-3 text-center w-100 p-5" style={{ backgroundColor: '#F1F9EE', borderRadius: '10px' }}>
              <img src="images/evolve-contact/3.png" alt="" />
              <h4 className="pt-4">+91-96390 17070</h4>
              <h5 className="pt-3 fw-normal">Our calls hours are Mon-sat 9am-6:30pm.</h5>
            </div>
          </div>
        </div>
        {/* Section-1 End */}

        {/* Section-2 */}
        <div className="px-lg-5">
          <div className="px-md-5 p-3 d-lg-flex">
            <div className="w-100">
              <h3 className="mobile-fonts-heading" style={{ fontSize: '50px' }}>
                Connect with Us for Business Inquiries and Support.
              </h3>
              <h5 className="pt-3 fw-normal">
                We value your interest and are here to help! Whether you have questions about our services, need support, or want to explore partnership opportunities, please don't hesitate to reach out.
              </h5>
              <div className="d-md-flex">
                <div className="w-100">
                  <h4 className="pt-3 fw-normal" style={{ color: '#3D5D09' }}>Head Office</h4>
                  <h4 className="pt-3 fw-normal">
                    Evolve Technologies<br />
                    02 Balbir Road, Dalanwala, Dehradun, Uttarakhand, 248001
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-3 mt-md-0">
              <form
                onSubmit={handleSubmit}
                className="p-5 w-100"
                style={{ backgroundColor: 'rgb(233, 233, 233)', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              >
                <h2 className="text-center">Get in touch</h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" placeholder="Enter your Name" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter your Email" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Enter your Phone Number" id="phone" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Description</label>
                  <textarea className="form-control" name="message" id="message" rows="3" placeholder="Write your message here..." required />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5635513217844!2d78.0534711750304!3d30.306484274792737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929af2e5fb85f%3A0x569682c3dc7d3b33!2sBalbir%20Rd%2C%20Dalanwala%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1750655971238!5m2!1sen!2sin"
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
  );
}
