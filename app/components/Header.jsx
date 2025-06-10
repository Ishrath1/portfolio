import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <div
      id="accueil"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-rufina"
      >
        Muhammad Ishrath
      </motion.h1>
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-sintony"
      >
        étudiante en informatique
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className="max-w-2xl mx-auto font-sintony"
      >
        Diplômée d'une licence en informatique, j'ai eu l'opportunité d'explorer
        différents domaines : de la programmation aux réseaux, en passant par la
        logique. J’ai développé un vrai goût pour la résolution de problèmes…
        mais aussi pour le design ! Toujours partante pour un défi, j’adore
        faire chauffer mon cerveau quand il s’agit de créer, comprendre et
        améliorer.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          me contacter
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>*/}

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-sintony
          dark:text-darkHover dark:bg-lightTheme"
        >
          CV
          <Image
            src={assets.download_icon}
            alt="icône téléchargement"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
