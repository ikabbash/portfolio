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
              <span className="text-primary">04.</span> Experience
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
                    "Expanded into GCP, building and owning production GKE clusters from scratch with infrastructure fully managed through Terraform.",
                    "Delivered solutions for an AI cybersecurity platform, solving complex architecture challenges around SIEM integrations and LLM serving.",
                  ],
                },
                {
                  title: "DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2023 - January 2025",
                  description: [
                    "Owned a multi-client examination platform across Azure and on-prem Kubernetes, handling deployments, incidents, and day-to-day operations.",
                    "Migrated all environments from raw Kubernetes manifests to Helm charts, standardizing deployments across all clients.",
                    "Supported cross-functional teams across multiple projects, helping resolve issues and improve overall system reliability.",
                    "Cut CI/CD pipeline execution time by 40-50% and Azure costs by 35% through targeted optimization and right-sizing.",
                  ],
                },
                {
                  title: "DevOps Engineer Intern",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "August 2022 - October 2022",
                  description: [
                    "Provisioned AWS infrastructure with Terraform, built CI/CD pipelines, and deployed developer interns' projects to Kubernetes."
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-37px] sm:before:top-0 sm:before:translate-y-[6px] sm:before:z-1 before:dark:bg-primary"
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
                  <ul className="mt-3 text-text2 list-disc list-inside space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
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
