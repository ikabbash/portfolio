import React from "react";

const certificates = [
  {
    title: "CKS: Certified Kubernetes Security Specialist",
    link: "https://www.credly.com/badges/2f4403b1-9814-4485-bba4-c4be45b5d64f/public_url",
    date: "Feb 2025",
  },
  {
    title: "CKA: Certified Kubernetes Administrator",
    link: "https://www.credly.com/badges/3795ed6d-3fe9-45c9-9775-171f5220110d/linked_in_profile",
    date: "Jan 2025",
  },
  {
    title: "GCP: Associate Cloud Engineer",
    link: "https://www.credly.com/badges/78af68be-2cfc-48e6-aa0f-de8c6760408e/linked_in_profile",
    date: "Nov 2024",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    link: "https://learn.microsoft.com/en-us/users/ibrahimkabbash-7790/credentials/e12e8e020e37bf41",
    date: "May 2024",
  },
  {
    title: "AWS: Certified Cloud Practitioner",
    link: "https://www.credly.com/badges/f3c433e8-28c8-4466-8b6b-21402ebeecde/linked_in_profile",
    date: "Apr 2023",
  },
  {
    title: "Udacity Nanodegree: Cloud DevOps Engineer",
    link: "https://www.udacity.com/certificate/S46SRKVF",
    date: "Oct 2021",
  },
  {
    title: "Professional Certificate: Google IT Support",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/CKNCLXQ343PD",
    date: "Sep 2020",
  },
];

function Certificates() {
  return (
    <div className="container max-w-screen-lg my-20 px-6 mx-auto">
      <section className="mb-32 text-text2 text-center">
        <h2 className="text-2xl font-bold mb-12 text-text1">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto text-left">
          {certificates.map(({ title, link, date }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-2 px-4 rounded-md transition-all duration-200 hover:bg-card hover:shadow-md"
            >
              <h5 className="text-base text-text2 font-semibold">{title}</h5>
              <p className="text-sm text-text3 whitespace-nowrap min-w-[70px] text-right">{date}</p>
            </a>
          ))}
        </div>
        <a
          className="py-3 px-4 rounded-md border-2 transition duration-300 ease group hover:border-secondary ease-in-out"
          href="https://www.linkedin.com/in/ikabbash/details/certifications/"
          target="_blank"
        >
          <div className="inline-block mt-16 text-lg transition ease-in-out group-hover:text-secondary">
            View More
          </div>
        </a>
      </section>
    </div>
  );
}

export default Certificates;
