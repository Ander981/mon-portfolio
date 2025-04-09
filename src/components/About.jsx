import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Passionné par le développement, je vise à devenir hacker éthique et
        créateur d’applications web ou mobiles. Pour cela, je développerai des
        compétences en : <br />
        <br />
        <b>- Développement</b>: Maîtrise des langages web/mobile et technologies
        backend (Python, PHP, Java). <br />
        <br />
        <b>- Cybersécurité</b> : Tests d’intrusion, analyse des vulnérabilités, usage
        d’outils comme Kali Linux et Metasploit.
        <br />
        <br />
        <b>- Gestion de projet</b> : Planification, communication et méthodes agiles.
        Mes projets incluraient la création d’une application d’évaluation des vulnérabilités
        et d’un laboratoire de hacking éthique pour tester et sécuriser des systèmes.
      </motion.p>
  
      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");