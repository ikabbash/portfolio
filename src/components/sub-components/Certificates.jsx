import React from "react";
import {
  SiCoursera,
  SiUdacity,
  SiAmazonaws,
} from "react-icons/si";

function Certificates() {
  return (
    <>
      <div className="container max-w-screen-lg my-20 px-6 mx-auto">
        <section className="mb-32 text-text2 text-center">
          <h2 className="text-3xl font-bold mb-12 text-text1">
            <a
              href="https://www.linkedin.com/in/ibrahim-k-426770ab/details/certifications/"
              target="_blank"
            >
              Certificates
            </a>
          </h2>
          {/* Certificate block */}
          <div className="grid md:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            <div className="mb-12 md:mb-0">
              <a
                className="p-4 rounded-lg shadow-lg inline-block mb-6
                transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary bg-card"
                href="https://www.credly.com/badges/f3c433e8-28c8-4466-8b6b-21402ebeecde/linked_in_profile"
                target="_blank"
              >
                <SiAmazonaws className="text-3xl" />
              </a>
              <h5 className="text-lg font-bold mb-4">AWS Cloud Practitioner</h5>
              <p>
                AWS' fundamentals exam earned since April 2023, expires on April
                2026
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <a
                className="p-4 rounded-lg shadow-lg inline-block mb-6
                transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary bg-card"
                href="https://graduation.udacity.com/confirm/S46SRKVF"
                target="_blank"
              >
                <SiUdacity className="text-3xl" />
              </a>
              <h5 className="text-lg font-bold mb-4">Cloud DevOps Engineer</h5>
              <p>
                Nanodegree from Udacity earned since October 2021
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <a
                className="p-4 rounded-lg shadow-lg inline-block mb-6
                transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary bg-card"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/CKNCLXQ343PD"
                target="_blank"
              >
                <SiCoursera className="text-3xl" />
              </a>
              <h5 className="text-lg font-bold mb-4">Google IT Support</h5>
              <p>
                Professional certificate on Coursera earned since September 2020
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Certificates;
