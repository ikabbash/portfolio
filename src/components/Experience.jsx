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
                    "Managed and optimized multiple Ollama model deployments with Nginx load balancing for high availability under concurrent load.",
                    "Deployed and managed a 20+ service containerized system for an AI startup in UK using Docker Compose, ensuring smooth integration and operation across Java (Spring Boot), FastAPI, vLLM, PostgreSQL, Elasticsearch, and Kafka with custom connectors.",
                    "Integrated SIEM tools like Azure Sentinel with Fluentd and Kafka to build a unified log pipeline for centralized security event processing and incident detection.",
                    "Collaborated with dev teams to support root cause analysis, review system designs, and provide input on technical approaches."
                  ],
                },
                {
                  title: "DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2023 - January 2025",
                  description: [
                    "Built and managed Kubernetes clusters on-prem and in AKS, deployed .NET microservices with Helm and oversaw system stability.",
                    "Worked directly with clients to support and maintain multiple environments, deliver enhancements, and provide tailored solutions for their users.",
                    "Worked with dev teams via Jira on multiple Ruby on Rails projects to troubleshoot problems, add new configurations, and deploy with zero downtime.",
                    "Tackled challenging issues by tracing root causes across systems, eliminating recurring faults, and hardening reliability.",
                    "Containerized a legacy Rails app, migrated it to Kubernetes with zero downtime, implemented GitOps with ArgoCD, and decommissioned the old server.",
                    "Set up Prometheus, Grafana, and Loki for monitoring, issue detection, and improved observability.",
                    "Automated operational tasks with Python and Bash to reduce manual effort and accelerate environment setup.",
                    "Delivered sessions on Azure AI services and led internal DevOps team sessions on DevSecOps practices.",
                  ],
                },
                {
                  title: "DevOps Engineer Intern",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "August 2022 - September 2022",
                  description: [
                    "Dockerized applications and managed a Kubernetes cluster for intern-led projects, integrating CI/CD pipelines and automating deployments.",
                    "Deployed AWS EC2 instances via Terraform, set up and configured Jenkins with CI/CD pipelines, and installed and managed Kubernetes clusters.",
                    "Worked on database replication and failover strategies using PostgreSQL repmgr to enhance system reliability.",
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
