"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
import GoogleTranslate from "@/components/GoogleTranslate"; // Import the Google Translate component

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0" style={{ backgroundColor: "black",zIndex:'100' }}>
      <GoogleTranslate/>
      <div className="container-fluid d-flex justify-content-around align-items-center" style={{ backgroundColor: "#072200" }}>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/images/menu.png" alt="Menu"/>
          </button>
          <a className="navbar-brand" href="#">
            <img src="/images/evolve-header/logo.png" height="70px" alt="Logo"/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link white  ${isActive('/') ? 'active' : ''}`}
                href="/"
              >
                CFMS
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/VariableOrificeValve') ? 'active' : ''}`}
                href="/VariableOrificeValve"
              >
                Variable Orifice Valve
              </Link>
            </li>

            

          

            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle white now"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/CoalMassFlowMeasurement') ? 'active' : ''}`}
                    href="/CoalMassFlowMeasurement"
                  >
                    Coal Mass Flow Measurement
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/ParticleSizeSegregation') ? 'active' : ''}`}
                    href="/ParticleSizeSegregation"
                  >
                    Particle Size Segregation
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/CoalVelocityMeasurement') ? 'active' : ''}`}
                    href="/CoalVelocityMeasurement"
                  >
                    Coal Velocity Measurement
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/CoalTemperatureMeasurement') ? 'active' : ''}`}
                    href="/CoalTemperatureMeasurement"
                  >
                    Coal Temperature Measurement
                  </Link>
                </li>
                 <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/CoalRopeBreaker') ? 'active' : ''}`}
                    href="/CoalRopeBreaker"
                  >
                    Coal Rope Breaker
                  </Link>
                </li>

                 <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link
                    className={`dropdown-item ${isActive('/CoalRopeDetection') ? 'active' : ''}`}
                    href="/CoalRopeDetection"
                  >
                    Coal Rope Detection
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/About') ? 'active' : ''}`}
                href="/About"
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/CaseStudies') ? 'active' : ''}`}
                href="/CaseStudies"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-md-block">
         
          <Link
                className="btn "
                href="/ContactUs"
                style={{ backgroundColor: "#F3C808",color:"black" }}
              >
                Get a Quote <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>

          
        </div>
      </div>
      
    </nav>
    
  );
}
