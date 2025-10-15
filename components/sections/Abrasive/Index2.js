import React from "react";
export default function Index2(){
    return (
        <>
        
<div className="py-md-5">
  <div className="text-center px-md-5 px-2">
    <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
      Our Fused Alumina Powder and Fused Alumina Abrasive manufacturing
      plant
    </h2>

    <div className="px-md-5 py-md-3 text-center">
      <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
        BMW has state of the art manufacturing facility of Fused Alumina
        Powder and Fused Alumina Abrasive situated at Bhagwanpur, Haridwar
        in Uttarakhand.
      </h4>
    </div>
  </div>

  {/* Carousal  */}
  <div className="p-3 px-md-5">
    <div className="px-md-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            
            <video className=" w-100"  style={{ borderRadius: '15px' }} src="/banner-video/abrasive.mp4" autoPlay loop muted />
            {/* <div
              className="p-3 section-6"
              style={{
                color: 'black',
                backgroundColor: '#d9d9d9',
                display: 'inline-block',
                position: 'relative',
                bottom: '50px',
                left: '100px',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            >
              <h4 style={{ color: 'rgb(68, 67, 67)' }}>Process</h4>
            </div> */}
          </div>

          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  {/* Carousal END */}
</div>
{/* BANNER END */}

{/* Section 1 */}
<div className="mt-3">
  <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
    <div className="w-100 p-3">
      <h2 className="mobile-fonts-heading" style={{ fontSize: '75px' }}>
        Fused Alumina Manufacturing Process
      </h2>
      <h5
        className="pt-4"
        style={{
          color: 'rgb(66, 66, 66)',
          fontWeight: 400,
          textAlign: 'justify',
        }}
      >
        Calcined Alumina when melted at 2200°C in the electric arc furnace and cooled, yields White Fused Alumina. White Fused alumina is high grade abrasive/ refractory material.
      </h5>

      <div className="d-md-flex justify-content-around pt-md-5">
        <div className="w-100 text-center p-3">
          <img
            src="images/abrasive/section-2 (1).jpeg"
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            alt=""
          />
          <h2 className="fs-4 fw-normal pt-3 p-3">Alumina melting at 2200 Degree C</h2>
        </div>

        <div className="w-100 text-center p-3">
          <img
            src="images/abrasive/section-2 (2).jpeg"
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            alt=""
          />
          <h2 className="fs-4 fw-normal pt-3 p-3">Alumina Melt after cooling and fracturing</h2>
        </div>
      </div>

      <h5
        className="pt-4"
        style={{
          color: 'rgb(66, 66, 66)',
          fontWeight: 400,
          textAlign: 'justify',
        }}
      >
        White Fused Alumina is the main raw material of fused sintered alumina which has a wide range of applications in different industries. It is composed of 99% alumina.
      </h5>

      <div className="d-md-flex justify-content-around pt-md-5">
        <div className="w-100 text-center p-3">
          <img
            src="images/abrasive/section.jpg"
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            alt=""
          />
          <h2 className="fs-4 fw-normal pt-3 p-3">Fused Alumina Powder after Ball milling</h2>
        </div>

        <div className="w-100 text-center p-3">
          
        </div>


      </div>
    </div>
  </div>

  <div className="px-md-5 p-3">
    <h2 className="px-md-3 fs-1 my-3 py-4">Properties Of Fused Alumina Powder</h2>
    <div className="d-md-flex">
      <div className="px-md-3 table-responsive w-100">
        <table className="table">
          <tbody>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Colour</td>
              <td style={{ backgroundColor: '#f48221' }}>White</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Purity</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>99% +</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Hardness</td>
              <td style={{ backgroundColor: '#f48221' }}>9 on Moh's scale</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Chemical resistance</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-md-3 table-responsive w-100">
        <table className="table">
          <tbody>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Density</td>
              <td style={{ backgroundColor: '#f48221' }}>3.90 gm/CC</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Insulation</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>Strong</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Toughness</td>
              <td style={{ backgroundColor: '#f48221' }}>High</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Crystal Formation</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>α trigonal system</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{/* Section 1 END */}

{/* Section 2 */}
<div className="d-lg-flex px-md-5 justify-content-center align-items-center">
  <div className="w-100 p-3">
    <h2 className="mobile-fonts-heading" style={{ fontSize: '75px' }}>
      Fused Aluimna Abrasive
    </h2>
    <h5
      className="pt-4"
      style={{
        color: 'rgb(66, 66, 66)',
        fontWeight: 400,
        textAlign: 'justify',
      }}
    >
      White Fused Alumina Abrasive is high grade abrasive material which is available in different mesh grit. It is used as pressure blasting, grinding, lapping media. It is also used in bonded and coated abrasives, thermal spraying. It is available in different grain sizes depending on the requirement.
    </h5>

    <div className="d-md-flex justify-content-around pt-md-5">
      <div className="w-100 text-center p-3">
        <img
          src="images/abrasive/section-3.jpeg"
          className="w-100"
          style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
          alt=""
        />
        <h2 className="fs-4 fw-normal pt-3 p-3">Calcined Fused Alumina Abrasive</h2>
      </div>

      <div className="w-100 text-center p-3">
        
      </div>
    </div>
  </div>
</div>

<div className="px-md-5 px-3 pb-5">
  <h2 className="px-md-3 fs-1 my-3 py-4">
    Properties of Calcined Fused Alumina Abrasive
  </h2>
  <div className="d-md-flex">
    <div className="px-md-3 table-responsive w-100">
      <table className="table w-75">
        <tbody>
          <tr style={{ border: '2px solid white', textAlign: 'center' }}>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>Mesh Grit</td>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>White</td>
          </tr>
          <tr style={{ border: '2px solid white', textAlign: 'center' }}>
            <td style={{ backgroundColor: '#e7e7e9', textAlign: 'center' }}>Micro powder grade</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>It is very suitable for wet sandblasting and polishing operations.</td>
          </tr>
          <tr style={{ border: '2px solid white', textAlign: 'center' }}>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>Hardness</td>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>9 on Moh's scale</td>
          </tr>
          <tr style={{ border: '2px solid white', textAlign: 'center' }}>
            <td style={{ backgroundColor: '#e7e7e9', textAlign: 'center' }}>Metal Removal</td>
            <td style={{ backgroundColor: '#e7e7e9', textAlign: 'center' }}>Minimal</td>
          </tr>
          <tr style={{ border: '2px solid white', textAlign: 'center' }}>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>Typical Applications</td>
            <td style={{ backgroundColor: '#f48221', textAlign: 'center' }}>Polishing, lapping, refractories, ceramics, fire retardants/smoke suppressant</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* Section 2 END */}

{/* Section 4 */}
<div className="d-lg-flex px-md-5 justify-content-center align-items-center">
  <div className="w-100 p-3">
    <h2 className="mobile-fonts-heading" style={{ fontSize: '75px' }}>
      Brown Fused Alumina Powder
    </h2>
    <h5
      className="pt-4"
      style={{
        color: 'rgb(66, 66, 66)',
        fontWeight: 400,
        textAlign: 'justify',
      }}
    >
      Brown fused alumina takes the high quality bauxite as the raw material, mixing with iron powder and anthracite, produced by melting in the electric arc furnace at a high temperature over 2000℃.
      <br />
      Main chemical composition is AL2O3, TiO2, and a small amount of SiO2 and Fe2O3 etc. Toughness is higher than SiC. The texture is dense, the hardness is high, and the grains appear the spherical shape
      <br />
      It is suitable for manufacturing ceramic and abrasive tools, as well as grinding, polishing, sandblasting, precision casting, etc. It can also be used for manufacturing high-grade refractory materials too.
    </h5>

    <div className="d-md-flex justify-content-around pt-md-5">
      <div className="w-100 text-center p-3">
        <img
          src="images/abrasive/section-4.jpeg"
          className="w-100"
          style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
          alt=""
        />
        <h2 className="fs-4 fw-normal pt-3 p-3">Calcined Fused Alumina Abrasive</h2>
      </div>
      <div className="w-100 text-center p-3">
        
      </div>

    </div>
  </div>
</div>

<div className="px-md-5 p-3">
  <h2 className="px-md-3 fs-1 my-3 py-4">Properties of Brown Fused Alumina</h2>
  <div className="d-md-flex">
    <div className="px-md-3 table-responsive w-100">
      <table className="table">
        <tbody>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#f48221' }}>Mohs hardness</td>
            <td style={{ backgroundColor: '#f48221' }}>9 Moh</td>
          </tr>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#e7e7e9' }}>Volume density</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>3.6-3.9g/cm</td>
          </tr>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#f48221' }}>Bulk density</td>
            <td style={{ backgroundColor: '#f48221' }}>1.75-1.95g/cm</td>
          </tr>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#e7e7e9' }}>Melting point</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>2250°C</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="px-md-3 table-responsive w-100">
      <table className="table">
        <tbody>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#f48221' }}>Specific gravity</td>
            <td style={{ backgroundColor: '#f48221' }}>3.6-3.9g/cm</td>
          </tr>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#e7e7e9' }}>Maximum service temperature</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>1900°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* Section 4 END */}

{/* Section 5 */}
<div className="mt-3">
  <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
    <div className="w-100 p-3">
      <h2 className="mobile-fonts-heading" style={{ fontSize: '75px' }}>
        Fused Mullite Flakes
      </h2>
      <h5
        className="pt-4"
        style={{
          color: 'rgb(66, 66, 66)',
          fontWeight: 400,
          textAlign: 'justify',
        }}
      >
        Mullite is obtained from fusion of high purity Silica Sand and Alumina in an electric arc furnace. It exhibits low thermal expansion and high thermal shock resistance. Its Chemical formula is 3Al2O32SiO2 or 2Al2O3SiO2. Mullite is present in the form of fine needles in alumina. It is used in high
        temperature refractory material, crucibles and electric arc furnace.
      </h5>

      <div className="d-md-flex justify-content-around pt-md-5">
        <div className="w-100 text-center p-3">
          <img
            src="images/abrasive/section-5.jpeg"
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            alt=""
          />
          <h2 className="fs-4 fw-normal pt-3 p-3">Mullite Flakes</h2>
        </div>

        <div className="w-100 text-center p-3">
          <img
            src="images/abrasive/section-2 (2).jpeg"
            className="w-100"
            style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            alt=""
          />
          <h2 className="fs-4 fw-normal pt-3 p-3">Mullite Powdered Flakes</h2>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Section 5 END */}

{/* Section-7 */}

{/* Section-7 End  */}

        </>
    )}