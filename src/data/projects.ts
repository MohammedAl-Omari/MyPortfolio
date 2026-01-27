// src/data/projects.ts
import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Image Gallery",
    description: "description: A full-stack image gallery with JWT authentication, password hashing, and token blocklisting. Features user signup/login, image uploads with user ownership, and a modal gallery view. Built with Flask and Vue.js.",
    tags: ["Python", "Flask", "Vue.js", "JWT", "Axios"],
    link: "#",
    github: "https://github.com/MohammedAl-Omari/Image_Gallery"
  },
{
  id: 2,
  title: "Modern React Portfolio",
  description: "The very site you are looking at! Built with React 19, Vite, and Tailwind v4. Features glassmorphism UI, custom dark mode, and smooth scroll animations.",
  tags: ["React", "TypeScript", "Tailwind v4", "Vite"],
  link: "/",
  github: "https://github.com/MohammedAl-Omari/MyPortfolio"
},
  {
  id: 3,
  title: "Campus Eats - Delivery System",
  description: "A professional food delivery backend built with C# and .NET. Implemented Domain-Driven Design (DDD) and MediatR to ensure a scalable and clean system architecture.",
  tags: [".NET", "C#", "DDD", "MediatR"],

},
{
  id: 4,
  title: "Starlink TCP Performance Analysis",
  description: "Bachelor's thesis evaluating TCP congestion control protocols (BBRv2, CUBIC, NEWRENO) over Starlink's LEO satellite network. Built a TEACUP-based testbed at UiS to conduct 300-second bulk transfer experiments, analyzing throughput, latency, and network performance using iperf3, Python, and R.",
  tags: ["Networking", "Python", "iperf3", "R", "TCP/IP", "LEO Satellite"],
},
{
  id: 5,
  title: "Embedded IoT Home Assistant",
  description: "Developed a 24/7 Linux-based IoT system on Raspberry Pi 5. Integrated various smart home devices using MQTT and REST APIs to create a unified automation hub.",
  tags: ["Raspberry Pi", "Linux", "MQTT", "REST API", "IoT"],

},
];