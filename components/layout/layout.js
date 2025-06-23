"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Floating Buttons */}
      <div className="button-container">
        <button
          type="button"
          className="btn mx-2 rotated-button"
          data-bs-toggle="modal"
          data-bs-target="#infoModal"
        >
          <img
            src="/images/evolve-header/1.png"
            width={30}
            style={{ rotate: "280deg" }}
            alt="Info"
          />
        </button>

        <button
          type="button"
          className="btn btn-primary rotated-button"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          <img
            src="/images/evolve-header/2.png"
            width={30}
            style={{ rotate: "270deg" }}
            alt="Contact"
          />
        </button>
      </div>

      {/* Contact Form Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#072200", color: "#fff" }}
            >
              <h5 className="modal-title" id="contactModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <form
                id="contactForm"
                className="p-3"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                    message: e.target.message.value,
                  };

                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(formData),
                    });

                    if (response.ok) {
                      alert("Message sent successfully!");
                      e.target.reset();
                    } else {
                      alert("Failed to send message.");
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Error sending message.");
                  }
                }}
                style={{
                  backgroundColor: "#e9e9e9",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <h4 className="text-center mb-4">Get in Touch</h4>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      required
                  ></textarea>

                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    style={{ backgroundColor: "red", border: "none" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#072200", color: "#fff" }}
            >
              <h5 className="modal-title" id="infoModalLabel">
                Contact Info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div
                className="p-4"
                style={{
                  backgroundColor: "#e9e9e9",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <h4 className="text-center mb-4">Reach Out To Us</h4>
                <div className="mb-3">
                  <strong>Address:</strong>
                  <p>02 Balbir Road Dalanwala, Dehradun, (U.K.)-248001</p>
                </div>
                <div className="mb-3">
                  <strong>Email:</strong>
                  <p>sales@evolvetechnologies.co.in</p>
                </div>
                <div className="mb-3">
                  <strong>Phone:</strong>
                  <p>+91-96-390 170 70</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Header />
        <div style={{marginTop:'60px'}}>

   </div>
      {children}
      <Footer />
    </>
  );
}
