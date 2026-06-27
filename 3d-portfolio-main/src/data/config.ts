const config = {
  title: "Siddharth Singh | Full Stack Engineer",
  description: {
    long: "Explore the portfolio of Siddharth Singh, a Full Stack Engineer specializing in React, Node.js, Spring Boot, and building secure, role-based enterprise systems and IoT solutions. Let's build something amazing together!",
    short:
      "Discover the portfolio of Siddharth Singh, a Full Stack Engineer creating scalable enterprise web applications and innovative IoT projects.",
  },
  keywords: [
    "Siddharth Singh",
    "portfolio",
    "Full Stack Engineer",
    "Software Developer",
    "React",
    "Node.js",
    "Spring Boot",
    "Java",
    "IoT",
    "Smart Door Lock",
    "AccessIQ",
    "WebFix-CMS",
    "SAP",
  ],
  author: "Siddharth Singh",
  email: "singhsiddharth9238@gmail.com",
  site: "https://linktr.ee/siddharthsingh9238", // Make sure to update this to your actual Vercel/Netlify domain later!

  // for github stars button
  githubUsername: "siddharth9238",
  githubRepo: "3d-portfolio",

  get ogImg() {
    // Fixed: Using a relative path so Next.js can resolve it locally
    return "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/siddharth-singh-3241b8241",
    instagram: "https://www.instagram.com/__siddharth.singh__?igsh=MmJsYjk2aDIzcHd4",
    facebook: "https://www.facebook.com/profile.php?id=100005442254224&mibextid=rS40aB7S9Ucbxw6v",
    github: "https://github.com/siddharth9238",
  },
};
export { config };