import React from "react";

function About() {
  return (
    <>
      <div className="mb-[200px] scroll-mt-24" id="about">
        <div className="container max-w-5xl mx-auto py-4 px-4 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="my-auto flex flex-col gap-3">
          {/* Bar and Header container */}
          <div className="flex flex-col items-center sm:items-start">
            {/* Bar */}
            <div className="w-24 h-1 mb-4 rounded-md bg-secondary" />
            {/* Header */}
            <h1 className="font-bold text-3xl text-text1 mb-4">
              <span className="text-primary">01. </span>About
            </h1>
          </div>

            {/* Content Box */}
            <div className="bg-card rounded-lg shadow-lg p-6 relative">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-text2 leading-relaxed">
                    I'm a DevOps engineer who really enjoys learning and figuring things out.
                    I'm always exploring, whether it's a new approach, a different methodology,
                    a new tool, or just digging into how things work and where they can add real value.
                    I like getting into the details, solving real problems, optimizing and enhancing wherever I can,
                    and building robust automated solutions that help improve systems, increase stability, and keep everything reliable.
                  </p>

                  <p className="text-text2 leading-relaxed">
                    I'm also especially into DevSecOps, looking for ways to build security into automation and infrastructure without adding friction.
                    I'm also interested in MLOps, experimenting with AI, and how they fit into real-world cases.
                  </p>

                  <p className="text-text2 leading-relaxed">
                    You can reach out to me at{" "}
                    <a
                      href="mailto:ikabbash@proton.me"
                      className="text-primary hover:underline font-medium"
                    >
                      ikabbash@proton.me
                    </a>{" "}
                    for inquiries.
                  </p>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-xl font-semibold text-text2 mb-4">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Kubernetes",
                      "Docker",
                      "Azure",
                      "Helm",
                      "ArgoCD",
                      "Azure DevOps",
                      "Gitlab",
                      "Prometheus",
                      "AWS",
                      "AI",
                      "DevSecOps",
                      "Terraform",
                      "GCP",
                      "Jenkins",
                      "Python",
                      "Ansible",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-tag text-secondary rounded-lg text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-1 border-r-1 border-primary rounded-br-lg translate-x-1 translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
