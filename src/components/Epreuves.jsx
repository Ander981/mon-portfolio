import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Importez l'image illustrant les Epreuves


const Epreuves = () => {
  return (
    <>
     <a href="#Epreuves"></a>
         <motion.div variants={textVariant() }>
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>Les Épreuves</h2>
      </motion.div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    
    <p>
            Le BTS Services Informatiques aux Organisations (SIO), option SLAM
            (Solutions Logicielles et Applications Métiers), repose sur un
            ensemble d’épreuves visant à évaluer aussi bien les compétences
            techniques que les capacités d’analyse, de communication et de
            professionnalisation de l’étudiant.
          </p>

          <br />

          <p>
            Chaque épreuve joue un rôle essentiel dans la validation des acquis
            et prépare l’étudiant aux exigences concrètes du monde
            professionnel.
          </p>

          <br />

          <h3 className="text-white text-[20px] font-semibold">
            Détail des épreuves du BTS SIO SLAM
          </h3>

          <br />

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>E1 – Culture et communication : </strong>  
              Épreuve écrite de 4 heures évaluant les capacités d’expression
              écrite, d’analyse de documents et de communication professionnelle.
            </li>

            <li>
              <strong>E2 – Mathématiques pour l’informatique : </strong>  
              Épreuve écrite de 2 heures portant sur les outils mathématiques
              indispensables à l’informatique (logique, algorithmes,
              probabilités).
            </li>

            <li>
              <strong>
                E3 – Culture économique, juridique et managériale pour
                l’informatique : </strong>  
              Épreuve écrite de 4 heures visant à analyser le fonctionnement des
              organisations et leur environnement économique, juridique et
              managérial.
            </li>

            <li>
              <strong>
                E4 – Support et mise à disposition de services informatiques : </strong>  
              Épreuve orale de 40 minutes basée sur des situations
              professionnelles réelles, évaluant la capacité à fournir,
              maintenir et documenter des services informatiques.
            </li>

            <li>
              <strong>
                E5 – Conception et développement d’applications :
              </strong> Épreuve pratique et orale comprenant 1h30 de préparation suivie
              d’un oral de 40 minutes. Elle mesure les compétences en analyse,
              conception, développement et maintenance d’applications.
            </li>

            <li>
              <strong>
                E6 – Cybersécurité des services informatiques :
              </strong> Épreuve sous forme d’une étude de cas écrite de 4 heures (modalités
              variables selon les académies), portant sur la sécurisation des
              systèmes, des réseaux et des données.
            </li>
          </ul>

          <br />

          <p>
            L’ensemble de ces épreuves permet de valider une formation complète,
            orientée vers les réalités du métier de développeur et de
            professionnel de l’informatique.
          </p>
        

    
  </motion.p>

  <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    className="flex justify-center items-center flex-1"
  >
    <img
      src="/Epreuve.jpg"
      alt="Illustration des épreuves"
      className="w-full h-auto max-w-md rounded-lg shadow-lg"
    />
  </motion.div>

</div>
    </>
  );
};

export default SectionWrapper(Epreuves, "Epreuves");
