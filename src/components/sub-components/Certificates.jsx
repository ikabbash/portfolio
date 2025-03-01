import React from "react";

function Certificates() {
  return (
    <>
      <div className="container max-w-screen-lg my-20 px-6 mx-auto">
        <section className="mb-32 text-text2 text-center">
          <h2 className="text-3xl font-bold mb-12 text-text1">
            Certificates
          </h2>
          {/* Certificate block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
          <a 
              href="https://www.credly.com/badges/2f4403b1-9814-4485-bba4-c4be45b5d64f/public_url" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">CKS: Certified Kubernetes Security Specialist</h5>
              <p className="text-sm text-text3">Feb 2025</p>
            </a>

            <a 
              href="https://www.credly.com/badges/3795ed6d-3fe9-45c9-9775-171f5220110d/linked_in_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">CKA: Certified Kubernetes Administrator</h5>
              <p className="text-sm text-text3">Jan 2025</p>
            </a>

            <a 
              href="https://www.credly.com/badges/78af68be-2cfc-48e6-aa0f-de8c6760408e/linked_in_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">GCP: Associate Cloud Engineer</h5>
              <p className="text-sm text-text3">Nov 2024</p>
            </a>

            <a 
              href="https://learn.microsoft.com/en-us/users/ibrahimkabbash-7790/credentials/e12e8e020e37bf41" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">Microsoft Certified: Azure AI Fundamentals</h5>
              <p className="text-sm text-text3">May 2024</p>
            </a>

            <a 
              href="https://www.credly.com/badges/f3c433e8-28c8-4466-8b6b-21402ebeecde/linked_in_profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">AWS: Certified Cloud Practitioner</h5>
              <p className="text-sm text-text3">Apr 2023Z</p>
            </a>

            <a 
              href="https://www.udacity.com/certificate/S46SRKVF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">Udacity Nanodegree: Cloud DevOps Engineer</h5>
              <p className="text-sm text-text3">Oct 2021</p>
            </a>

            <a 
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/CKNCLXQ343PD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">Professional Certificate: Google IT Support</h5>
              <p className="text-sm text-text3">Sep 2020</p>
            </a>

            <a className="flex justify-between items-center p-2 px-4 rounded-md transition-all">
              <h5 className="text-base font-semibold">More coming..</h5>
            </a>
          </div>
          <a className="py-3 px-4 rounded-md border-2 transition duration-300 ease group hover:border-secondary ease-in-out"
          href="https://www.linkedin.com/in/ikabbash/details/certifications/"
          target="_blank"><div className="inline-block mt-16 text-lg transition ease-in-out group-hover:text-secondary">View More</div></a>
        </section>
      </div>
    </>
  );
}

export default Certificates;
