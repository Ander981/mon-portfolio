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
    
    Cette rubrique regroupe mes expériences professionnelles issues de mes deux stages en développement logiciel, réalisés dans le cadre de mon BTS Services Informatiques aux Organisations (SIO), spécialité Solutions Logicielles et Applications Métiers (SLAM).
    Le premier stage a été effectué en première année au sein de la CTG, tandis que le second a été réalisé en deuxième année au sein de l’entreprise APYNOW.
    <br />
    <br />
    Ces expériences professionnelles m’ont permis de mettre en pratique les compétences acquises durant ma formation, de travailler dans des contextes réels et de répondre à des problématiques concrètes rencontrées en entreprise. Elles ont également contribué au développement de mon autonomie, de mon sens de l’analyse et de ma capacité à m’adapter à des environnements professionnels variés.
    <br />
    <br />
    Vous trouverez ci-dessous les rapports de stage correspondants, disponibles en téléchargement, présentant de manière détaillée les missions réalisées, les compétences mobilisées ainsi que les résultats obtenus au cours de chacune de ces périodes en milieu professionnel.
    <br />
    <br />
     <div>
    <motion.a 
    href="/RAPPORT_DE_STAGE_Anderson-MICHEL^L@.pdf" 
    download
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    whileHover={{ 
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px"
    }}
  >
    <motion.svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      animate={{ y: [0, -3, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut"
      }}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
      />
    </motion.svg>
    <span className="text-lg tracking-wide">Télécharger mon rapport de stage de 1ère année </span>
  </motion.a>
  </div>

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
