import uuid from 'react-uuid'
import { eye, git } from '../utils/Icons'
import snippet from '../img/portImages/snippet.png'
import js from '../img/portImages/js.png'
import tabs from '../img/portImages/tabs.png'
import figma from '../img/portImages/figma.png'

export const portfolios = [
  {
    id: uuid(),
    category: 'Web Development',
    title:
      'Hotel landing page, and shop watches  with reactjs Tailwind framework',
    image: snippet,
    link1: 'https://hotel-responsive-website-design.vercel.app/',
    link2: 'https://shop-watches.vercel.app/',
    icon1: eye,
    icon2: git,
  },
  {
    id: uuid(),
    category: 'FullStack  Real Estate Application with Mern stack',
    title: 'An application to serve as a home for its users',
    image: tabs,
    link1: 'https://responsive-design-template.vercel.app/',
    link2: 'https://full-stack-real-estate-youtube-sooty.vercel.app/',
    icon1: eye,
    icon2: git,
  },
  {
    id: uuid(),
    category: 'Web Development',
    title: 'Nextjs  responsive social media and a static reatjs blog website',
    image: js,
    link1: 'https://mern-social-media-zeta.vercel.app/',
    link2: 'https://real-estate-website-3q69.vercel.app/',
    icon1: eye,
    icon2: git,
  },
  {
    id: uuid(),
    category: 'Full stack Mern Real Etate',
    title: 'Homyz the best home for you',
    image: figma,
    link1: 'https://real-estate-front-lime.vercel.app/',
    link2: 'https://www.github.com/Nickson2511',
    icon1: eye,
    icon2: git,
  },
  {
    id: uuid(),
    category: 'Responsive Design',
    title: 'React Hotel website',
    image: tabs,
    link1: 'https://hotel-responsive-website-design.vercel.app/',
    link2: 'https://github.com/Nickson2511/hotel-responsive-website-design.git',
    icon1: eye,
    icon2: git, //
  },
  {
    id: uuid(),
    category: 'Full stack React express, node.js mysql web app',
    title: 'Full stack oKoaHousingWebApp',
    image: js,
    link1: 'https://okoahousing-kenya.onrender.com/',
    link2: 'https://github.com/Nickson2511/okoaHousing_Kenya.git',
    icon1: eye,
    icon2: git,
  },
  {
    id: uuid(),
    category: 'Full stack React express, node.js mysql web app',
    title: 'Full stack realMeHousing Web App',
    image: tabs,
    link1: 'https://realmehousingfrontend.onrender.com/',
    link2: 'https://github.com/Nickson2511/okoaHousing_Kenya.git',
    icon1: eye,
    icon2: git,
  },
]

//https://hotel-responsive-website-design.vercel.app/

//https://okoahousing-kenya.onrender.com/

//https://realmehousingfrontend.onrender.com/
