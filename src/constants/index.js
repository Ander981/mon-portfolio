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
import docker from "../assets/docker.svg";
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
    id: "Epreuves",
    title: "Epreuves",
  },
    {
    id: "Veille",
    title: "Veille",
  },
    {
    id: "Stages",
    title: "Stages",
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "PHP",
    icon: php,
  },
    {
    name: "JavaScript",
    icon: javascript,
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
    title: "Docker",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Je prévois de continuer à approfondir mon utilisation de Docker et j'ai déjà commencé à l’utiliser en 2026 en cours de de ma formation. Bien que je sois encore en phase d’apprentissage, je me suis familiarisé avec les concepts de base comme les conteneurs, les images et la gestion des environnements. Docker est un outil que je compte intégrer pleinement dans mon parcours pour améliorer la gestion et le déploiement de mes applications.",

      "J’ai déjà commencé à utiliser Docker dans un contexte pratique, ce qui m’a permis de comprendre son fonctionnement général ainsi que ses avantages par rapport à une installation classique. Je me suis notamment intéressé à la création d’images et à l’exécution de conteneurs, tout en découvrant les différences avec un environnement local traditionnel. Ces premières expériences me donnent une base solide pour progresser davantage.",

      "Je suis actuellement en train de développer mes compétences sur Docker et j’ai acquis une première compréhension de concepts essentiels comme les volumes, les réseaux et la conteneurisation. En poursuivant ma pratique, je souhaite devenir plus autonome dans la configuration d’environnements de développement et de déploiement grâce à Docker.",
    ],
  },
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#383E56",
    date: " 2026",
    points: [
      "J'ai acquis des bases en JavaScript pour rendre mes pages web interactives. J'ai appris à manipuler les éléments HTML et à réagir aux actions des utilisateurs comme les clics, les survols et les soumissions de formulaires.",

      "J'ai une connaissance des concepts fondamentaux de JavaScript tels que les variables, les fonctions, les conditions (if/else), les boucles (for, while), les événements, et la manipulation du DOM. J'ai également appris à afficher des messages, à modifier le contenu des pages et à créer des interactions simples.",

      "J'ai une compréhension de base des méthodes JavaScript courantes comme addEventListener, innerHTML, et des concepts comme les tableaux et les objets, qui facilitent la création de fonctionnalités dynamiques sur mes sites web.",
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
