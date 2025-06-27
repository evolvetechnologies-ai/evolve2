"use client";

import React, { useRef } from "react";
import Link from 'next/link';
const VideoSection = () => {
  const videoRef = useRef(null);

  const playVid = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <video
      ref={videoRef}
      poster="/images/section-4.jpg"
      onClick={playVid}
      id="myVideo"
      src="/images/evolve-home/bmw-1001.mp4"
      type="video/mp4"
      loop
      crossOrigin="anonymous"
      className="hover-to-play w-100 video-2"
      style={{
        borderRadius: "10px",
        cursor: "pointer",
        height: "800px",
      }}
    ></video>
  );
};

const Section4 = () => {
  return (
    <div className="p-md-5 py-md-0 p-4" >

      <div className="p-md-5 mt-3">
      <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
        <div className="w-100 p-3 pt-0">
          <h2
            className="pt-md-4 mobile-fonts-heading"
            style={{ fontSize: '50px' }}
          >
            Coal Combustion Optimization with Cutting Edge Technology
          </h2>
          <h5
            className="pt-4"
            style={{
              color: 'rgb(66, 66, 66)',
              fontWeight: 400,
              textAlign: 'start',
            }}
          >
            Evolve Technologies Dynamic Coal Flow Monitoring System is an innovative solution
            that continuously measures critical parameters like coal mass flow,
            temperature, and velocity in real-time. Using advanced
            microwave-based sensors, it ensures accurate and balanced coal
            distribution to burners, optimizing combustion efficiency while
            reducing harmful emissions such as NOx and CO. By controlling coal
            flow across all pipes, the system minimizes inefficiencies,
            improves fuel utilization, and enhances the overall heat rate of
            power plants.
          </h5>
          <h5
            className="pt-4"
            style={{
              color: 'rgb(66, 66, 66)',
              fontWeight: 400,
              textAlign: 'start',
            }}
          >
            The system is designed to support flexible power generation,
            allowing plants to efficiently operate at varying loads while
            maintaining flame stability. Its user-friendly software provides
            real-time data for seamless monitoring and adjustment of combustion
            processes, reducing manual intervention and enabling predictive
            maintenance. This leads to significant cost savings and offers a
            sustainable, high-performance approach to coal-fired power
            generation.
          </h5>
        </div>
        <div className="text-center p-3 ps-md-5">
          <img
            src="/images/CFMS/section-1.png"
            width={600}
            height={400}
            alt="Dynamic CFMS"
            className="img-fluid"
            style={{
              borderRadius: '10px'
             
            }}
          />
          <div className="pt-2">
            <h3>Dynamic CFMS</h3>


            <Link style={{ color: 'red', textDecoration: 'none' }} href="/images/evolve-pdf/cfms-pdf.pdf" download>
       Download PDF
      </Link>
           
              
           
          </div>
        </div>
      </div>
    </div>
     

      <div className="p-md-5 pt-md-0 pt-3">
        <VideoSection /> {/* ✅ Use the VideoSection component inside Section4 */}
      </div>
    </div>







  );
};

export default Section4; // ✅ Only one export default
