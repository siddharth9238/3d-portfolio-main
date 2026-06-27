import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiSpringboot,
  SiMysql,
  SiBootstrap,
  SiFlutter,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

// ─── FIX 1 ────────────────────────────────────────────────────────────────────
// Guard against undefined/empty href props that crash Next.js <Link>.
// Both `live` and `repo` are typed as `string | undefined` and checked before
// rendering the anchor.  This was already partially in place but the real crash
// keeps the repository link hidden until a GitHub URL exists.
// ──────────────────────────────────────────────────────────────────────────────
const ProjectsLinks = ({ repo }: { repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {repo && typeof repo === "string" && repo.trim() !== "" ? (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      ) : null}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShanCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  yjs: { title: "Y.js", bg: "black", fg: "white", icon: <span><strong>Y</strong>js</span> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  gsap: { title: "GSAP", bg: "black", fg: "white", icon: "" },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  java: { title: "Java", bg: "black", fg: "white", icon: <FaJava /> },
  springboot: { title: "Spring Boot", bg: "black", fg: "white", icon: <SiSpringboot /> },
  mysql: { title: "MySQL", bg: "black", fg: "white", icon: <SiMysql /> },
  bootstrap: { title: "Bootstrap 5", bg: "black", fg: "white", icon: <SiBootstrap /> },
  html: { title: "HTML5", bg: "black", fg: "white", icon: <FaHtml5 /> },
  css: { title: "CSS3", bg: "black", fg: "white", icon: <FaCss3Alt /> },
  flutter: { title: "Flutter", bg: "black", fg: "white", icon: <SiFlutter /> },
  arduino: { title: "Arduino", bg: "black", fg: "white", icon: <SiArduino /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  // ─── FIX 1 (continued) ───────────────────────────────────────────────────
  // Explicitly type both fields as `string | undefined` so TypeScript catches
  // any future accidental direct use of these in <Link href={...}> elsewhere.
  github?: string;
};

const projects: Project[] = [
  {
    id: "smart-door-lock",
    category: "IoT Dashboard",
    title: "Smart Door Lock IoT System",
    src: "/assets/projects-screenshots/portfolio/SDLS.png",
    screenshots: ["SDLS.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.arduino,
      ],
    },
    // ─── FIX 1 (continued) ─────────────────────────────────────────────────
    // Projects without a live URL must NOT omit the field entirely — omitting it
    // Keep the action button hidden until a GitHub URL is available.
    github: "https://github.com/siddharth9238/smart-door-lock",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Hardware meets Software: The Ultimate IoT Door Lock
          </TypographyP>
          <TypographyP className="font-mono ">
            This isn't your average smart lock. I engineered a highly responsive
            IoT dashboard leveraging AJAX to consume RESTful Web Services,
            successfully processing over 60 real-time device metrics per minute
            to monitor and control smart door lock states without breaking a sweat.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dashboard & Metrics</TypographyH3>
          <p className="font-mono mb-2">
            Built with HTML5, CSS3, Tailwind CSS, and Bootstrap 5, the frontend
            offers a sleek, responsive interface that tracks device metrics in real-time.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/SDLS.png`,
              `${BASE_PATH}/portfolio/SDLS.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Hardware Integration</TypographyH3>
          <p className="font-mono mb-2">
            Constructed a modular Node.js/Express backend strictly following MVC
            architecture. By exposing secure endpoints for lock management,
            hardware communication latency with the ESP32-CAM was reduced by a massive 75%.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/SDLS.png`,
              `${BASE_PATH}/portfolio/SDLS.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Biometric Magic</TypographyH3>
          <p className="font-mono mb-2">
            Applied Object-Oriented JavaScript (OOJS) principles with reusable
            ES6 modules and async/await programming to orchestrate multi-factor
            authentication, boosting biometric processing efficiency by 80%.
            Fingerprint and face-unlock integrations run seamlessly.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/SDLS.png`,
              `${BASE_PATH}/portfolio/SDLS.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Target Audience</TypographyH3>
          <p className="font-mono mb-2">
            Tech enthusiasts and security-conscious individuals looking for a
            hackable, customizable, and enterprise-grade home security solution.
          </p>
        </div>
      );
    },
  },
  {
    id: "webfix-cms",
    category: "CMS Platform",
    title: "WebFix-CMS Website Builder",
    src: "/assets/projects-screenshots/portfolio/cms.png",
    screenshots: ["cms.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mysql,
      ],
    },
    github: "https://github.com/siddharth9238/webfix-cms",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Produced a comprehensive web platform featuring an intuitive
            drag-and-drop visual builder. Built with modern ES6 JavaScript
            transpiled via Babel, it includes a massive library of 65+ custom
            templates designed to accelerate rapid website deployment times by 70%.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Drag & Drop Builder</TypographyH3>
          <p className="font-mono mb-2">
            Why code from scratch when you can drag and drop? The visual builder
            allows users to craft stunning layouts in minutes, complete with
            responsive design settings across all 65+ templates.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/cms.png`,
              `${BASE_PATH}/portfolio/cms.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Robust RESTful Backend</TypographyH3>
          <p className="font-mono mb-2">
            Built a rock-solid REST API using Node.js and Express. I applied
            strict JavaScript design patterns (MVC, Middleware) and OOJS to
            incorporate secure JWT authentication, easily handling 80+
            simultaneous user sessions without any performance drops.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/webfix/backend-1.png`,
              `${BASE_PATH}/webfix/backend-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Administrative Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Established a production-ready administrative dashboard equipped
            with role-based access control (RBAC). It empowers admins to export
            data, view analytics, and facilitate content management for up to
            75 daily scheduled tasks and automated newsletters.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/webfix/admin-1.png`,
              `${BASE_PATH}/webfix/admin-2.png`,
            ]}
          />
          <TypographyP className="my-4 mt-8">
            <strong>Impact:</strong> Cut down standard website deployment times
            drastically, providing a scalable solution for content creators and
            small businesses.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "accessiq",
    category: "Enterprise Software",
    title: "AccessIQ Workflow Management",
    src: "/assets/projects-screenshots/portfolio/Aq.png",
    screenshots: ["Aq.png", "2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.postgres,
      ],
    },
    github: "https://github.com/siddharth9238/accessiq",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AccessIQ is an enterprise-grade, multi-role backend application
            designed way beyond basic CRUD operations. It acts as a centralized
            workflow-driven approval chain automation engine, ensuring that
            organizational processes run smoothly and securely.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Infrastructure & Security</TypographyH3>
          <ul className="list-disc ml-6 mb-4">
            <li className="font-mono">
              Architected the multi-role backend owning the infrastructure end-to-end.
            </li>
            <li className="font-mono">
              Utilized JWT authentication and strict Role-Based Access Control
              (RBAC) to ensure data isolation between different corporate roles.
            </li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/Aq.png`,
              `${BASE_PATH}/portfolio/Aq.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Workflow Automation Engine</TypographyH3>
          <p className="font-mono mb-2">
            Successfully automated 60+ distinct workflow-driven approval chains
            across various organizational departments. From HR leaves to
            financial approvals, the system handles the logic seamlessly.
          </p>
          <SlideShow images={[`${BASE_PATH}/accessiq/workflow-1.png`]} />

          <TypographyH3 className="my-4 mt-8">Squashing Critical Bugs</TypographyH3>
          <p className="font-mono mb-2">
            Troubleshot and eliminated a critical token-validation bug by
            separating authentication logic into a strictly layered architecture.
            This directly decreased intermittent 401 error rates by 80% during
            heavy testing phases, resulting in a buttery smooth user experience.
          </p>
        </div>
      );
    },
  },
  {
    id: "vendor-compliance",
    category: "Risk Management",
    title: "Vendor Compliance System",
    src: "/assets/projects-screenshots/portfolio/VD.png",
    screenshots: ["VD.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.postgres,
      ],
    },
    github: "https://github.com/siddharth9238/vendor-compliance",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive backend system structured to seamlessly onboard
            enterprise vendors while strictly enforcing complex compliance
            workflows and mitigating organizational risk.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Dynamic Risk Evaluation</TypographyH3>
          <p className="font-mono mb-2">
            The core Java Spring Boot engine dynamically evaluates over 70
            unique risk score parameters. It automatically flags missing
            documents, expiring credentials, and historical compliance failures
            before they become liabilities.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/VD.png`,
              `${BASE_PATH}/portfolio/VD.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Role-Based Access Control</TypographyH3>
          <p className="font-mono mb-2">
            Executed multi-tier role-based access controls (Admin, Reviewer,
            Vendor) secured entirely with Spring Security and JSON Web Tokens
            (JWT). Each role gets a customized dashboard tailored to their
            specific compliance requirements.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/VD.png`,
              `${BASE_PATH}/portfolio/VD.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Automated Auditing</TypographyH3>
          <p className="font-mono mb-2">
            Features an immutable audit log tracking system that automates 65+
            scheduled daily compliance status checks without human intervention.
          </p>
          <ul className="list-disc ml-6">
            <li className="font-mono">Ensures 100% traceability for all vendor actions.</li>
            <li className="font-mono">
              Generates daily digest reports for Reviewers and Admins.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My 3D Portfolio",
    src: "/assets/projects-screenshots/portfolio/front.png",
    screenshots: ["front.png"],
    // ─── FIX 1 (continued) ─────────────────────────────────────────────────
    github: "https://github.com/siddharth9238/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where Full Stack Engineering meets
            stunning 3D design.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Interactive 3D Elements</TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? That interactive keyboard is
            being rendered natively in 3D on a webpage 🤯, and pressing each
            keycap reveals a skill in a unique way. Built using React Three
            Fiber and Spline.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/front.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Dark Mode & Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
            Powered by a local theme provider to prevent hydration mismatch
            errors while maintaining smooth transitions.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />

          <TypographyH3 className="my-4 mt-8">Performance First</TypographyH3>
          <p className="font-mono mb-2">
            Despite heavy 3D assets, this Next.js App Router portfolio is
            optimized for speed, utilizing deferred script loading and optimized
            image formats. This site's not just a portfolio — it's a testament
            to good architecture.
          </p>
        </div>
      );
    },
  },
];

export default projects;
