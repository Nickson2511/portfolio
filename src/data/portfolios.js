import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import snippet from '../img/portImages/snippet.png'
import js from '../img/portImages/js.png'
import tabs from '../img/portImages/tabs.png'
import figma from '../img/portImages/figma.png'

export const portfolios = [
    {
        id: uuid(),
        category: "Web Development",
        title: "Hotel landing page design with nick",
        image: snippet,
        link1: "https://hotel-responsive-website-design.vercel.app/",
        link2: "https://shop-watches.vercel.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Responsive Landing Pages with static sites",
        title: "React portfolio website with okwesh",
        image: tabs,
        link1: "https://landing-page-sigma-seven-61.vercel.app/",
        link2: "https://full-stack-real-estate-youtube-sooty.vercel.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "React responsive social media and a blog",
        image: js,
        link1: "https://mern-social-media-zeta.vercel.app/",
        link2: "https://real-estate-website-3q69.vercel.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Responsive Design",
        title: "React portfolio website",
        image: figma,
        link1: "https://real-estate-front-lime.vercel.app/",
        link2: "https://www.github.com/Nickson2511",
        icon1: git,
        icon2: eye,
    },
]
