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
                  title: "Mid-Level DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2025 - Present",
                  description: [
                    "Deployed and managed a containerized multi-service AI system, ensuring smooth integration across 20+ components.",
                    "Optimized and scaled LLM workloads by deploying and load balancing multiple instances with Ollama before transitioning to vLLM.",
                    "Set up centralized log shipping with Fluentd pulling from SIEM tools like Azure Sentinel, and supported developers with troubleshooting and system design input.",
                  ],
                },
                {
                  title: "DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2023 - January 2025",
                  description: [
                    "Provisioned and managed AKS and on-prem Kubernetes clusters, deploying .NET and Rails apps using Helm and GitOps.",
                    "Tackled complex issues by tracing root causes and improving system reliability.",
                    "Automated tasks with Python and Bash, migrated legacy apps to Kubernetes with zero-downtime,",
                    "set up monitoring with Prometheus and Grafana, and worked closely with clients and devs to support",
                    "environments and deliver enhancements, ensuring system reliability.",
                    "Also lead internal sessions on DevSecOps and Azure AI services."
                  ],
                },
                {
                  title: "DevOps Engineer Intern",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "August 2022 - October 2022",
                  description: [
                    "Dockerized apps, managed Kubernetes clusters, and automated deployments with CI/CD. Provisioned AWS EC2 with Terraform, set up Jenkins, and implemented PostgreSQL replication for high availability.",
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
                  <p className="mt-3 text-text2">
                    {exp.description.join(" ")}
                  </p>
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
