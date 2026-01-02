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
            QU’EST-CE QUE LA CYBERSÉCURITÉ ?
          </h3>

          <p>
            La cybersécurité concerne la protection des systèmes informatiques,
            des réseaux et des données contre les cybermenaces. Cela inclut la
            prévention des attaques, la détection des intrusions, la réponse aux
            incidents et la récupération après une violation de sécurité.
          </p>

          <br />

          <p>
            Les professionnels de la cybersécurité utilisent des outils et des
            techniques pour protéger les informations confidentielles et
            garantir la confidentialité, l’intégrité et la disponibilité des
            données.
          </p>

          <br />

          <h3 className="text-white text-[20px] font-semibold mb-2">
            MA VEILLE TECHNOLOGIQUE (ARTICLES)
          </h3>

          <p>
            Pour ma veille technologique, j’ai choisi comme thématique la
            cybersécurité. À l’ère numérique actuelle, la cybersécurité est
            devenue une préoccupation centrale pour les organisations et les
            particuliers.
          </p>

          <br />

          <p>
            L’évolution est rapide et les menaces en ligne sont omniprésentes.
          </p>

          <br />

          <h4 className="text-white font-semibold">
            Les types d’attaques informatiques les plus utilisées :
          </h4>

          <ul className="list-disc list-inside mt-2">
            <li>Phishing</li>
            <li>Malware</li>
            <li>Spyware</li>
            <li>DDoS</li>
            <li>Ingénierie sociale</li>
            <li>Injection SQL</li>
            <li>Man-in-the-Middle (MitM)</li>
            <li>Brute Force</li>
          </ul>

          <br />

          <h4 className="text-white font-semibold">
            Les types de sécurités pour lutter contre les cyberattaques :
          </h4>

          <ul className="list-disc list-inside mt-2">
            <li>Sécurité des réseaux</li>
            <li>Sécurité des systèmes</li>
            <li>Sécurité des applications</li>
            <li>Sécurité des données</li>
            <li>Sensibilisation à la sécurité des utilisateurs</li>
          </ul>

          <br />
  </motion.p>

  <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    className="flex justify-center items-center flex-1"
  >
    <img
      src="/VeilleTech.jpg"
      alt="Illustration de la veille technologique"
      className="w-full h-auto max-w-md rounded-lg shadow-lg"
    />
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(Veille, "Veille");
