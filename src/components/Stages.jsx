import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Importez des images illustrant les stages


const Stages = () => {
  return (
    <>
     <a href="#Stages"></a>
         <motion.div variants={textVariant() }>
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>Mes stages</h2>
      </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    
    Ce contenu concerne mes deux stages réalisés dans le cadre du BTS SIO, option SLAM.
    Le premier stage a été effectué en première année au sein de la CTG, tandis que le second a été réalisé en deuxième année au sein de l’entreprise APYNOW.
    <br />
    <br />
    Ces expériences professionnelles m’ont permis de mettre en pratique les compétences acquises durant ma formation, de travailler dans des contextes réels et de répondre à des problématiques concrètes rencontrées en entreprise. Elles ont également contribué au développement de mon autonomie, de mon sens de l’analyse et de ma capacité à m’adapter à des environnements professionnels variés.
    <br />
    <br />
    Vous trouverez ci-dessous les rapports de stage correspondants, disponibles en téléchargement, présentant de manière détaillée les missions réalisées, les compétences mobilisées ainsi que les résultats obtenus au cours de chacune de ces périodes en milieu professionnel.
    
  </motion.p>

  <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    className="flex justify-center items-center flex-1"
  >
    <img
      src="/Entreprises.png"
      alt="Illustration des entreprises"
      className="w-full h-auto max-w-md rounded-lg shadow-lg"
    />
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(Stages, "Stages");
