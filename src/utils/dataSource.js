import { portfolio1, portfolio2, portfolio3 } from "../assets/img/images";

export const services = ["design", "development", "maintenance"];


export const categories = [
    { key: "all", label: "All" },
    { key: "coded", label: "Coded" },
    { key: "designed", label: "Designed" },
]


export const portfolioItems = [
    {
        id: 1,
        title: "Hexagon Shader",
        subtitle: "Generative art fragment shader",
        category: "coded",
        image: portfolio1,
    },
    {
        id: 2,
        title: "Eatsome WebApp",
        subtitle: "Restaurant browsing in React18 (using Web API)",
        category: "coded",
        image: portfolio2,
    },
    {
        id: 3,
        title: "Classic Car Shoot",
        subtitle: "Product photography & color‑grading",
        category: "designed",
        image: portfolio3,
    },
    {
        id: 4,
        title: "Neon Gateway",
        subtitle: "3D render & lighting study",
        category: "designed",
        image: portfolio2,
    },
    {
        id: 5,
        title: "Street Car Series",
        subtitle: "Retouching & grading",
        category: "designed",
        image: portfolio3,
    },
    {
        id: 6,
        title: "Hexagon Pattern 02",
        subtitle: "Variant exploration",
        category: "coded",
        image: portfolio1,
    },
]

export const menuItems = [
  { id: "about", link: "about" },
  { id: "skills", link: "skills" },
  { id: "portfolio", link: "portfolio" },
  { id: "contact", link: "contact" }
];