import { FaMedium, FaHashnode} from "react-icons/fa6";
import { BiLogoGithub, BiLogoLinkedinSquare,BiLogoDevTo } from "react-icons/bi";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ikabbash/", icon: <BiLogoLinkedinSquare /> },
  { href: "https://github.com/ikabbash", icon: <BiLogoGithub /> },
  { href: "https://ikabbash.hashnode.dev", icon: <FaHashnode /> },
  { href: "https://medium.com/@ikabbash", icon: <FaMedium /> },
  { href: "https://dev.to/ikabbash", icon: <BiLogoDevTo /> },
];

export default function Footer() {
  return (
    <>
      <footer className="mt-52 md:hidden text-2xl">
        <div className="flex justify-center gap-8 mb-9">
          {socialLinks.map(({ href, icon }, index) => (
            <a key={index} href={href} target="_blank" className="text-text1 hover:scale-110 hover:text-secondary transition-transform">
              {icon}
            </a>
          ))}
        </div>
      </footer>
      <p className="text-center mb-4 text-primary text-md">Built and designed by Ibrahim Kabbash.</p>
      <div className="p-3 text-center bg-card text-text1"></div>
    </>
  );
}
