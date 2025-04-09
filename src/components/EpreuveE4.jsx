import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Importez l'image illustrant l'épreuve E4


const EpreuveE4 = () => {
  return (
    <>
     <a href="#epreuveE4"></a>
         <motion.div variants={textVariant() }>
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>L'épreuve E4</h2>
      </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    
    L'épreuve E4 constitue une étape déterminante dans le parcours du BTS SIO. Elle vous demande de développer au moins deux projets en lien avec l'option SLAM, qui se déroulent dans un contexte commun, afin de simuler des situations professionnelles réelles.
    <br />
    <br />
    Cette épreuve vise à évaluer votre capacité à mobiliser l’ensemble des compétences acquises durant votre formation. Vous serez amené(e) à présenter des projets détaillés et à compléter un tableau des compétences qui illustre vos réalisations techniques et professionnelles.
    <br />
    <br />
    En relevant ce défi, vous démontrez non seulement votre expertise technique, mais aussi votre aptitude à répondre à des problématiques concrètes en entreprise. Préparez-vous à mettre en lumière l'intégralité de vos compétences et à faire preuve d'initiative dans des scénarios proches du monde professionnel.
    
  </motion.p>

  <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    className="flex justify-center items-center flex-1"
  >
    <img
      src="../public/epreuveE4.png"
      alt="Illustration de l'épreuve E4"
      className="w-full h-auto max-w-md rounded-lg shadow-lg"
    />
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(EpreuveE4, "epreuveE4");
