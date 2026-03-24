import SurveyNomadImage from "../../assets/SurveyNomad.png";

const projects = [
  {
    title: "Homelab",
    description:
      "A production-like personal cluster I use daily for self-hosting, automation, and experimenting with new tools. Runs on Talos Linux, with core components bootstrapped via Terraform and applications deployed through GitOps using Argo CD, observability powered by Loki and kube-prometheus-stack, secrets managed by Vault, and SSO via Authentik.",
    image: "https://raw.githubusercontent.com/ikabbash/homelab/main/docs/images/homelab-setup.png",
    link: "https://github.com/ikabbash/homelab",
    hashtags: ["Talos Linux", "Kubernetes", "Helm", "Terraform", "Argo CD", "Cilium", "Vault",
      "Authentik", "Prometheus", "Grafana", "Loki", "Alloy"],
  },
  {
    title: "SurveyNomad",
    description:
      "A fullstack web application for creating surveys, forums, and timed quizzes with customization options, and featuring results displayed in tables or charts.",
    image: SurveyNomadImage,
    link: "https://www.canva.com/design/DAFz4GKnduQ/Bsc3sCyUlHibSgl0YXsdSg/view?utm_content=DAFz4GKnduQ&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
    hashtags: ["React", "Express", "NodeJS", "MongoDB", "Redux", "Azure", "Terraform"],
  },
];

const ProjectList = () => {
  return (
    <div className="mx-auto p-2">
      {projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          key={project.link}
          className="block p-6 rounded-lg shadow-lg mb-6 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-card group"
        >
          <div className="flex flex-col md:flex-row">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/4 rounded-lg mb-4 md:mb-0 object-contain"
            />
            <div className="md:ml-6 flex-1">
              <h3 className="text-xl font-bold text-text1 group-hover:text-secondary">
                {project.title} ↗
              </h3>
              <p className="text-text3 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-tag text-secondary px-2 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
