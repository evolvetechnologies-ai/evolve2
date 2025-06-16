import React, { children } from "react";
import Header from "./header";
import Footer from "./footer";
export default function Layout({children}) {
    return(
   <>
   
   <div className=" button-container ">

    <button type="button" className="btn mx-2  rotated-button" data-bs-toggle="modal" data-bs-target="#exampleModal0">
   <img src="images/evolve-header/1.png" width={30} style={{rotate:"280deg"}}  alt="" />
</button>

   <button type="button" className="btn btn-primary rotated-button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  <img src="images/evolve-header/2.png" width={30} style={{rotate:"270deg"}}  alt="" />
</button>


    </div>






    
    {/* <div className=" button-container2 ">
   

    </div> */}


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{ backgroundColor: '#072200',color:'rgb(255, 255, 255)'}}>
        
        <button type="button" style={{ backgroundColor: 'rgb(255, 255, 255)',color:'rgb(255, 255, 255)'}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="">
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
                <button type="submit" style={{ backgroundColor: 'red', border: 'none' }} className="btn btn-danger mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
      </div>
      
    </div>
  </div>
</div>



<div className="modal fade" id="exampleModal0" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{ backgroundColor: '#072200',color:'rgb(255, 255, 255)'}}>
        
        <button type="button" style={{ backgroundColor: 'rgb(255, 255, 255)',color:'rgb(255, 255, 255)'}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="">
      <div className="w-100 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <form className="p-5 w-100" style={{ backgroundColor: 'rgb(233, 233, 233)', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              <h1 className="text-center">Reach Out To Us</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Address</label>
                <p  className="now">02 Balbir Road Dalanwala, Dehradun, (U.K.)-248001</p>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                
                <p  className="now">sales@Evolve.com</p>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Phone Number</label>
                <p  className="now"> +91-96-390 170 70</p>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Whatsapp Number</label>
                <p className="now"> +91-01 234 567 89</p>
              </div>

              
            </form>
          </div>
      </div>
      
    </div>
  </div>
</div>
   <Header/>
   {children}
   
   <Footer/>
   </>
)
}