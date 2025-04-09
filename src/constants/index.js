import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import portfolio from "../assets/portfolio1.png";
import contries from "../assets/contries.png";
import cocacola from "../assets/cocacola.png";
import javaPng from "../assets/java.png";
import cPng from "../assets/c.png";
import java from "../assets/java.svg";
import c from "../assets/c.svg";
import php from "../assets/php.png";

export const navLinks = [
  {
    id: "about",
    title: "À_propos",
  },
  {
    id: "work",
    title: "EXpérience",
  },
  {
    id: "epreuveE4",
    title: "EpreuveE4",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web Front-End",
    icon: web,
  },
  {
    title: "Développeur Backend ",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "PHP",
    icon: php,
  },
 
];

const experiences = [
  {
    title: " Html",
    icon: html,
    iconBg: "#383E56",
    date: " 2024",
    points: [
      "J'ai acquis une solide compréhension des concepts fondamentaux d'HTML (HyperText Markup Language).",

      "J'ai appris à structurer et à organiser efficacement le contenu d'une page web en utilisant les balises HTML appropriées.",

      "J'ai également appris à intégrer des images, des vidéos, des liens et d'autres éléments multimédias à l'aide des balises appropriées. En outre, j'ai compris l'importance de la validation du code HTML pour garantir une compatibilité et une accessibilité optimales.",
    ],
  },
  {
    title: "Css",
    icon: css,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "J'ai acquis une expertise en CSS (Cascading Style Sheets) pour donner un style et une présentation attrayante à mes pages web. J'ai appris à utiliser des sélecteurs CSS pour cibler et styliser spécifiquement les éléments HTML.",

      " J'ai une connaissance approfondie des propriétés CSS telles que la couleur, la typographie, les marges, les arrière-plans, les bordures, les animations, les transitions, etc. J'ai également appris à créer des mises en page responsives en utilisant des techniques telles que les médias queries et les grilles CSS. ",

      "J'ai une compréhension de base des préprocesseurs CSS tels que Sass ou Tailwind Css, qui facilitent l'écriture et la gestion du code CSS.",
    ],
  },

  {
    title: "Php",
    icon: php,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "J'ai acquis de bonnes bases en PHP et je continue à développer mes compétences pour atteindre un niveau plus avancé. Je maîtrise les fondamentaux du PHP et suis en mesure de créer des sites web dynamiques simples, avec l'ambition d'approfondir mes connaissance",

      "Je dispose d'un socle solide en PHP qui me permet de comprendre et modifier du code existant, et j'ai pour objectif d'améliorer continuellement mes compétences. Avec mon niveau intermédiaire en PHP, je peux créer des fonctionnalités web standard et j'aspire à maîtriser les aspects plus avancés du langage.",

      "J'ai acquis des compétences solides en PHP qui me permettent de créer des applications web fonctionnelles, tout en sachant qu'il me reste encore à explorer certaines fonctionnalités avancées.",
    ],
  },

  {
    title: "Java",
    icon: javaPng,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Je débute actuellement mon apprentissage de Java et je maîtrise les concepts fondamentaux comme les variables, les boucles et les conditions. Bien que je sois novice en Java, j'ai déjà réalisé quelques petits projets pour mettre en pratique mes connaissances de base.",

      "Je me familiarise avec la programmation orientée objet en Java et je comprends les concepts de classes et d'objets. En tant que débutant en Java, je suis capable de créer des programmes simples et je travaille activement à améliorer mes compétences. ",

      "J'ai récemment commencé à apprendre Java et je suis à l'aise avec la syntaxe de base et la structure des programmes. Mes connaissances en Java sont encore modestes, mais j'ai une bonne compréhension des principes fondamentaux et je progresse rapidement.",
    ],
  },
  {
    title: "C++",
    icon: cPng,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Je prévois de commencer à apprendre le C++ prochainement et j'ai déjà acquis des connaissances théoriques sur ce langage. Bien que je n'aie pas encore commencé la pratique du C++, je me suis familiarisé avec ses concepts fondamentaux à travers mes lectures. Le C++ est le prochain langage que je compte explorer dans mon parcours d'apprentissage et j'ai déjà une compréhension de base de sa structure.",

      "Je n'ai pas encore codé en C++, mais j'ai étudié ses similarités et différences avec Java, ce qui me donnera une base pour débuter. Grâce à mes connaissances en programmation, je suis déjà familier avec certains concepts du C++ comme la programmation orientée objet et la gestion de la mémoire, bien que je n'aie pas encore commencé à pratiquer ce langage..",

      "Je suis sur le point de débuter mon apprentissage du C++ et dispose déjà d'une compréhension théorique des pointeurs, des classes et de l'héritage. Actuellement en préparation pour apprendre le C++, j'ai acquis des bases conceptuelles qui me permettront d'aborder ce langage avec plus d'aisance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " Portfolio",
    description:
      "Mon premier portfolio personnel",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://netlify.com/",
    link: "/",
  },
  // {
  //   name: "coca cola",
  //   description:
  //     "Exemple de landing page pour Coca-Cola avec une magnifique slide.",
  //   tags: [
  //     {
  //       name: "Html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: cocacola,
  //   source_code_link: "https://github.com/",
  //   link: "https://cocacolapage.netlify.app/",
  // },
  // {
  //   name: "Application React",
  //   description:
  //     "Exemple d'application listant les pays et leurs nombres d'habitants",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: contries,
  //   source_code_link: "https://www.netlify.com/",
  //   link: "https://countries-react-app-ex.netlify.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
