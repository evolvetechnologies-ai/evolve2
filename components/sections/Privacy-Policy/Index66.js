import React from "react";
export default function Index66(){
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
      className="pt-5 "
      style={{ fontSize: '60px' }}
    >
      Privacy Policy
    </h2>

   
  </div>

  {/* Carousal  */}

 

  {/* Carousal END */}
</div>

{/* BANNER END */}

{/* Section 1 */}

<div className="p-md-5 mt-2">



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
          Information We Collect
      </h2>
      <ul className="case fs-3">
        <span className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Personal Information</span>  </span> <br/>
        <span className="py-2">We may collect personal information that you voluntarily provide when you contact us or submit inquiries through the website, including:</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Full Name:</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Email Address:</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Phone Number:</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Company or organization name:</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Project or technical inquiry details:</span></li>
        <span className="py-2">We may collect personal information that you voluntarily provide when you contact us or submit inquiries through the website, including:</span>
       
        
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
          Business & Technical Information
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">When discussing industrial solutions, we may receive additional project-related details such as:
</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Plant or facility information
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Technical requirements related to combustion optimization or monitoring systems</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Project scope, timelines, or operational challenges</span></li>
       
        <span className="py-2">This information is provided voluntarily for consultation or product evaluation purposes.</span>
       
        
        
      </ul>
    </div>
   
  </div>



   <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
          Technical & Usage Data
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">When you access our website, certain information may be collected automatically, including:
</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>IP address</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Browser type and version</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Device information</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Pages visited and browsing behavior</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Date and time of website access</span></li>
        <span className="py-2">This data helps us improve website performance and user experience.</span>
       
        
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
          How We Use Your Information
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">We use the collected information for the following purposes:

</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Responding to inquiries about our products and services
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Providing technical consultations and business communication</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Preparing proposals or project-related discussions</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Improving website functionality and performance</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Analyzing website usage trends</span></li>
         <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Sending company updates or industry insights (only if you have opted to receive them)</span></li>
       
        
        
      </ul>
    </div>
   
  </div>


  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
         Cookies and Tracking Technologies
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">Our website may use cookies or similar technologies to enhance user experience and collect analytical information.

</span>
<span className="py-2">Cookies help us:</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Understand how visitors interact with our website
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Improve performance and usability</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Remember user preferences</span></li>
        
         <span className="py-2">You can disable cookies through your browser settings. However, some features of the website may not function properly if cookies are disabled.</span>
        
      </ul>
    </div>
   
  </div>



    <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Sharing of Information
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">We do not sell, rent, or trade personal information with third parties.</span>
        <br/>
<span className="py-2">Information may be shared only under the following circumstances:</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>With technical consultants, engineers, or collaborators working on your project

</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>With service providers supporting website hosting, analytics, or communication tools
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>With legal or regulatory authorities when required by applicable laws
</span></li>
        
         <span className="py-2">All such parties are expected to maintain strict confidentiality.</span>
        
      </ul>
    </div>
   
  </div>




   <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Data Security
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">We implement reasonable technical and organizational measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.
</span>
        <br/>
<span className="py-2">While we strive to safeguard your information, no method of transmission over the internet is completely secure.
</span>
      </ul>
    </div>
   
  </div>



 <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Data Retention
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">We retain personal and project-related information only for as long as necessary to:
</span>
        <br/>
<span className="py-2">Information may be shared only under the following circumstances:</span>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Provide requested services or technical support

</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Maintain professional and project records
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Comply with legal or regulatory obligations
</span></li>
        
         <span className="py-2">Once the data is no longer required, it is securely deleted or anonymized.
</span>
        
      </ul>
    </div>
   
  </div>




  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Your Rights
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">You have the right to:
</span>
        <br/>

        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Request access to the personal information we hold about you

</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Request correction of inaccurate or incomplete information
</span></li>
        <li className="py-2"><span style={{color:'#3D5D09',fontWeight:'500'}}>Request deletion of your personal data, subject to legal obligations
</span></li>
        
         <span className="py-2">Requests may be submitted using the contact information provided below.
</span>
        
      </ul>
    </div>
   
  </div>
 


  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Third-Party Links
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">Our website may contain links to third-party websites or resources. We are not responsible for the privacy practices or content of those external websites.

</span>

 <span className="py-2">Users are encouraged to review the privacy policies of those websites separately.

</span>
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
        Changes to This Privacy Policy
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">We may update this Privacy Policy periodically to reflect changes in legal requirements, business practices, or website functionality.

</span>

 <span className="py-2">
  The updated policy will be posted on this page with a revised Effective Date.
</span>
        
      </ul>
    </div>
   
  </div>





  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '45px' }}
      >
       Contact Us
      </h2>
      <ul className="case fs-3">
        
        <span className="py-2">If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:
</span>
<br/>
 <span className="py-2 fw-bold">
  Evolve Technologies
</span>
<br/>

<span className="py-2 ">
  02 Balbir Road, Dalanwala
</span>
<br/>
<span className="py-2">
  Dehradun, Uttarakhand – 248001, India
</span>
<br/>
<br/>
<span className="py-2">
Email:<span className="fw-bold" style={{ fontSize: '18px' }}><br/>Sales@evolvetechnologies.co.in</span>
</span>
<br/>

<span className="py-2">
 Phone: <span className="fw-bold"> +91-9639017070</span> 
</span>
<br/>

        
      </ul>
    </div>
   
  </div>
 

























  
</div>

{/* Section 1 END */}

{/* Section 2 */}



{/* Section 2 END */}

{/* Section 3 */}





  
        </>
    )
}