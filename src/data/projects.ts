// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Image Gallery",
    description: "A secure image management system featuring JWT authentication, Flask backend, and a Vue-powered frontend. Supports image uploads, deletions, and a responsive modal gallery view.",
    tags: ["Python", "Flask", "Vue.js", "JWT", "Axios"],
    link: "#", // Add live link if you have it hosted
    github: "https://github.com/MohammedAl-Omari/Image_Gallery"
  },
  {
    id: 2,
    title: "Modern React Portfolio",
    description: "The very site you are looking at! Built with React 19, Vite, and Tailwind v4. Features a custom dark mode and scroll-reveal animations.",
    tags: ["React", "TypeScript", "Tailwind v4", "Vite"],
    link: "/",
    github: "https://github.com/MohammedAl-Omari/my-portfolio" 
  },
  {
  id: 3,
  title: "Campus Eats - Delivery System",
  description: "A professional food delivery backend built with C# and .NET. Implemented Domain-Driven Design (DDD) and MediatR to ensure a scalable and clean system architecture.",
  tags: [".NET", "C#", "DDD", "MediatR"],
  link: "#", // Add link if available
  github: "https://github.com/MohammedAl-Omari"
},
{
  id: 4,
  title: "Starlink TCP Performance Analysis",
  description: "My Bachelor's thesis involved evaluating TCP congestion control protocols (BBRv2, CUBIC) over Starlink satellite networks. Used Python and R to visualize and analyze network throughput and latency.",
  tags: ["Networking", "Python", "iperf3", "R", "Research"],
  link: "#",
  github: "https://github.com/MohammedAl-Omari"
},
{
  id: 5,
  title: "Embedded IoT Home Assistant",
  description: "Developed a 24/7 Linux-based IoT system on Raspberry Pi 5. Integrated various smart home devices using MQTT and REST APIs to create a unified automation hub.",
  tags: ["Raspberry Pi", "Linux", "MQTT", "REST API", "IoT"],
  link: "#",
  github: "https://github.com/MohammedAl-Omari"
},
];