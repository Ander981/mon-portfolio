import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Importez l'image illustrant l'épreuve E4


const Veille = () => {
  return (
    <>
     <a href="#Veille"></a>
         <motion.div variants={textVariant() }>
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>La Veille Technologique</h2>
      </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
          <h3 className="text-white text-[20px] font-semibold mb-2">
            QU’EST-CE QUE JAVASCRIPT ?
          </h3>

          <p>
             JavaScript est un langage de programmation principalement utilisé pour rendre les pages web interactives. Il permet d'ajouter du dynamisme aux sites internet, comme des animations, des interactions utilisateur ou encore la mise à jour de contenu sans recharger la page.
          </p>

          <br />

          <p>
                Il est aujourd’hui incontournable dans le développement web et fonctionne aussi bien côté client (navigateur) que côté serveur grâce à des technologies comme Node.js.
          </p>

          <br />

          <h3 className="text-white text-[20px] font-semibold mb-2">
            MA VEILLE TECHNOLOGIQUE (JAVASCRIPT)
          </h3>

          <p>
            Pour ma veille technologique, j’ai choisi comme thématique JavaScript. Ce langage évolue constamment et occupe une place centrale dans le développement web moderne.
          </p>

          <br />

          <p>
           De nombreuses mises à jour, frameworks et outils apparaissent régulièrement, ce qui rend la veille essentielle pour rester à jour.
          </p>

          <br />

          <h4 className="text-white font-semibold">
                Les technologies et outils liés à JavaScript :
          </h4>

          <ul className="list-disc list-inside mt-2">
           <li>React</li>
           <li>Node.js</li>
           <li>Vue.js</li>
           <li>Express.js</li>
           <li>Next.js</li>
           <li>TypeScript</li>
          </ul>

          <br />

          <h4 className="text-white font-semibold">
             Les usages principaux de JavaScript :
          </h4>

          <ul className="list-disc list-inside mt-2">
          <li>Développement web front-end</li>
          <li>Développement back-end (Node.js)</li>
          <li>Applications mobiles (React Native)</li>
          <li>Applications desktop</li>
          <li>Jeux vidéo en navigateur</li>
          </ul>

          <br />
          <a 
  href="https://veille-technologique-three.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:text-blue-300 transition"
>
  Voir ma veille complète 🚀
</a>
  </motion.p>

  <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    className="flex justify-center items-center flex-1"
  >
    <img
      src="/VeilleTech.jpeg"
      alt="Illustration de la veille technologique"
      className="w-full h-auto max-w-md rounded-lg shadow-lg"
    />
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(Veille, "Veille");
