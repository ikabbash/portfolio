import React from "react";
import Certificates from "./sub-components/Certificates";

function Experience() {
  return (
    <section className="mb-[200px] scroll-mt-24" id="experience">
      <div className="container max-w-5xl mx-auto py-4 md:px-4">
        <div className="grid gap-4 sm:grid-cols-12 mx-4">
          {/* Section Header */}
          <div className="sm:col-span-3 text-center sm:text-left mb-4">
            <div className="before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary" />
            <h3 className="text-3xl font-bold text-text1">
              <span className="text-primary">02.</span> Experience
            </h3>
            <span className="text-sm font-bold tracking-wider uppercase text-text2">
              Where I've worked
            </span>
          </div>

          {/* Experience Content */}
          <div className="sm:col-span-9 relative px-4 space-y-6">
            <div className="space-y-12 relative sm:space-y-8 sm:before:absolute sm:before:top-0 sm:before:bottom-0 sm:before:w-0.5 sm:before:left-[-30px] before:dark:bg-gray-700">
              
              {/** Experience Items */}
              {[
                {
                  title: "DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2023 - Present",
                  description: [
                    "Created, managed, and configured Kubernetes clusters (AKS and on-premise) for clients, deploying and maintaining microservices apps to ensure high availability, seamless operation, and alignment with project needs across production environments.",
                    "Managed and optimized cloud infrastructure on Azure, implementing cost-saving strategies and ensuring efficient resource utilization.",
                    "Worked closely with development teams through Jira to troubleshoot deployment issues, enhance CI/CD pipelines, configure application integrations, and improve system stability across multiple projects.",
                    "Migrated legacy apps from standalone servers to Kubernetes clusters using a GitOps approach, securely decommissioning old servers and streamlining deployment workflows.",
                    "Implemented monitoring and logging solutions using Prometheus, Grafana, and Loki to track system performance, detect issues proactively, and improve observability.",
                    "Worked with a client on an AI-driven startup, integrating SIEM tools, Kafka, Kafka Connect, and Elasticsearch. Led environment setup and streamlined data flow between components.",
                    "Researched and configured Sentinel and Splunk SIEM tools to export logs and alerts via Fluentd, enabling data flow into Kafka for centralized processing and client application use.",
                    "Delivered sessions on Azure AI services for the company and a sponsored event, and led internal DevOps team sessions on DevSecOps and Certified Kubernetes Security (CKS) practices.",
                  ],
                },
                {
                  title: "DevOps Engineer Intern",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "August 2022 - September 2022",
                  description: [
                    "Gained hands-on experience with Docker, Jenkins, Kubernetes, and Terraform through practical tasks.",
                    "Deployed and managed a Kubernetes cluster for two intern-led projects, integrating CI/CD pipelines for automated workflows.",
                    "Worked on database replication and failover strategies to enhance system reliability.",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-37px] sm:before:top-0 sm:before:translate-y-[6px] sm:before:z-[1] before:dark:bg-primary"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-text1">
                    {exp.title}{" "}
                    <span className="text-secondary">@ </span>
                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-secondary hover:underline transition-all duration-500"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <time className="text-xs tracking-wide text-text2">
                    {exp.duration}
                  </time>
                  <ul className="mt-3 text-text2 list-disc list-inside space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </section>
  );
}

export default Experience;
