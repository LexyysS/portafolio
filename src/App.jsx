import NavBar from "./components/NavBar";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiSpringboot,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava, FaNode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

import { motion } from "motion/react";
import Footer from "./components/Footer";
import IconSkill from "./components/IconSkill";

function App() {
  return (
    <>
      <NavBar />

      <div
        id="inicio"
        className=" h-screen  gradient-background flex flex-col justify-center items-center "
      >
        <h1 className="text-5xl font-bold text-white mb-5">
          Full Stack Developer
        </h1>
        <h2 className="text-8xl text-white font-bold text-center">
          Alexis Hojas
        </h2>
        <div className="w-full flex justify-center mt-10 gap-2">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="https://www.linkedin.com/in/alexis-hojas/" target="_blank">
              <FaLinkedin className="w-10 h-10 text-white hover:text-[#0a66c2]  hover:scale-110 transition-all" />
            </a>
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="https://github.com/LexyysS" target="_blank">
              <FaGithub className="w-10 h-10 text-white hover:text-black hover:scale-110 transition-all" />
            </a>
          </motion.button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex-[1]">
        <h2
          id="proyectos"
          className="text-3xl text-white font-bold mt-10 text-center"
        >
          Proyectos
        </h2>

        <div className="w-full flex mt-20 flex-wrap items-center  transition-all">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">TruequeMundo</h2>
              <p className="text-sm mt-3">
                Plataforma web de trueques que permite a los usuarios
                intercambiar productos que ya no utilizan por otros que
                necesitan, fomentando el reciclaje y la economía colaborativa.
              </p>
              <div className="flex my-3 gap-2">
                <FaJava className="w-10 h-10 text-blue-400" />
                <SiSpringboot className="w-10 h-10 text-blue-400" />
                <SiReact className="w-10 h-10 text-blue-400" />
                <SiTailwindcss className="w-10 h-10 text-blue-400" />
                <SiMysql className="w-10 h-10 text-blue-400" />
                <SiJsonwebtokens className="w-10 h-10 text-blue-400" />
              </div>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <div className="flex gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <a
                    href="https://github.com/LexyysS/TruequeMundo---Backend"
                    target="_blank"
                    className="w-full p-1 cursor-pointer bg-azul-900 rounded-3xl flex gap-1 justify-center items-center text-white hover:bg-morado-700 "
                  >
                    <FaGithub className="w-6 h-6" />
                    Backend
                  </a>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <a
                    href="https://github.com/LexyysS/TruequeMundo-Frontend"
                    target="_blank"
                    className="w-full p-1 cursor-pointer bg-azul-900 rounded-3xl flex gap-1 justify-center items-center text-white hover:bg-morado-700 "
                  >
                    <FaGithub className="w-6 h-6" />
                    Frontend
                  </a>
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://truequemundos.netlify.app/"
                  target="_blank"
                  className="p-1 gap-1 bg-azul-900 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700 "
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  Ver proyecto
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-3/5  w-full h-full flex justify-center rounded-lg items-center p-2"
          >
            <video
              className="w-full h-full rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="VideoTruequeMundo.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        <div className="w-full flex mt-20 flex-wrap items-center  transition-all">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-2/5  w-full h-full flex justify-center rounded-lg items-center p-2"
          >
            <video
              className="w-[250px] h-[400px] rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="poster-sympto.jpg"
            >
              <source src="SymptoCL.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="md:w-3/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">SymptoCL</h2>
              <p className="text-sm mt-3">
                SymptoCL es una aplicación móvil de diagnóstico de enfermedades
                desarrollada en React Native. Permite ingresar síntomas y
                recibir un diagnóstico estimado, interactuar con un chat de IA
                para orientación en tiempo real y acceder a un diccionario
                médico con información detallada sobre enfermedades.
              </p>
              <div className="flex my-2">
                <TbBrandReactNative className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <span className="text-sm p-2 w-1/2 rounded-lg bg-azul-900 flex justify-center items-center">
              Pronto disponible en Play Store
            </span>
          </motion.div>
        </div>

        <div className="w-full flex mt-20 flex-wrap items-center  transition-all">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">Sintomas de enfermedades</h2>
              <p className="text-sm mt-3">
                Esta aplicación permite realizar diagnósticos de enfermedades
                basados en los síntomas presentados, utilizando la API de
                Infermedica y procesando las peticiones con Axios. Incluye un
                diccionario de enfermedades que proporciona información sobre
                causas, prevención y tratamientos.
              </p>
              <div className="flex my-2">
                <SiReact className="w-10 h-10 text-blue-400" />
                <SiTailwindcss className="w-10 h-10 text-blue-400" />
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://github.com/LexyysS/sympto-cl"
                  target="_blank"
                  className="w-full p-1 bg-azul-900 gap-1 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700 "
                >
                  <FaGithub className="w-6 h-6" />
                  Repositorio
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://symptocl.netlify.app"
                  target="_blank"
                  className="w-full p-1 bg-azul-900 rounded-3xl flex gap-1 justify-center items-center text-white hover:bg-morado-700 "
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  Ver proyecto
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-3/5  w-full h-full flex justify-center rounded-lg items-center p-2"
          >
            <video
              className="w-full h-full rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="SymptoWeb.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        <div className="w-full flex mt-20 flex-wrap items-center  transition-all">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-3/5  w-full h-full bg-[rgba(255,255,255,0.35] flex justify-center rounded-lg items-center p-2"
          >
            <video
              className="w-full h-full rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="Memorize.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">Memorizewords</h2>
              <p className="text-sm mt-3">
                MemorizeWords es una aplicación web para aprender palabras en
                inglés de forma efectiva. Permite buscarlas manualmente o con
                inteligencia artificial, mostrando traducciones, ejemplos y
                significados. Además, incluye una actividad interactiva para
                repasar y reforzar el aprendizaje.
              </p>
              <div className="flex my-2">
                <SiReact className="w-10 h-10 text-blue-400" />
                <SiTailwindcss className="w-10 h-10 text-blue-400" />
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://github.com/LexyysS/MemorizeWords"
                  target="_blank"
                  className="w-full p-1 gap-1 bg-azul-900 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700"
                >
                  <FaGithub className="w-6 h-6" />
                  Repositorio
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://memorizewords.netlify.app/"
                  target="_blank"
                  className="w-full p-1 bg-azul-900 rounded-3xl flex gap-1 justify-center items-center text-white hover:bg-morado-700 "
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  Ver proyecto
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex mt-20 flex-wrap items-center  transition-all">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">Lavado de autos</h2>
              <p className="text-sm mt-3">
                Landing Page sobre el servicio de lavado de autos. Utilizando
                hooks y componentes para el diseño. Alertas , formularios y uso
                de formsubmit para enviar datos de registro del usuario.
              </p>
              <div className="flex my-2">
                <SiReact className="w-10 h-10 text-blue-400" />
                <SiTailwindcss className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://github.com/LexyysS/lavado-autos"
                  target="_blank"
                  className="w-full p-1 gap-1 bg-azul-900 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700"
                >
                  <FaGithub className="w-6 h-6" />
                  Repositorio
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <a
                  href="https://lavadomrgreen.netlify.app/"
                  target="_blank"
                  className="w-full p-1 bg-azul-900 rounded-3xl flex gap-1 justify-center items-center text-white hover:bg-morado-700 "
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  Ver proyecto
                </a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-3/5  w-full h-full bg-[rgba(255,255,255,0.35] flex justify-center rounded-lg items-center p-2"
          >
            <video
              className="w-full h-full rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="Lavado.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        <div className="grid gird-cols-1 md:grid-cols-2 mt-20 gap-4">
          <a
            className="w-full h-[400px] bg-azul-800 rounded-lg  text-white hover:scale-105 cursor-pointer transition-all"
            href="https://comprascarritoguitarla.netlify.app/"
            target="_blank"
          >
            <img
              src="Carrito.png"
              loading="lazy"
              decoding="async"
              className="w-full rounded-t-lg h-2/3"
            />
            <div className="flex flex-col p-5 w-full h-1/2">
              <h2 className="text-2xl font-bold ">Carrito de compras</h2>
              <p className="text-sm mt-3 ">
                Carrito de compras con TypeScript , React con hooks, useState,
                useReducer y localStorage.
              </p>
            </div>
          </a>

          <a
            className="w-full h-[400px] bg-azul-800 rounded-lg text-white hover:scale-105 cursor-pointer transition-all"
            href="https://trackercalorias.netlify.app/"
            target="_blank"
          >
            <img
              src="Calorias.png"
              loading="lazy"
              decoding="async"
              className="w-full rounded-t-lg h-2/3"
            />
            <div className="flex flex-col p-5 w-full h-1/2">
              <h2 className="text-2xl font-bold ">Contador de calorias</h2>
              <p className="text-sm mt-3 ">
                Contador de calorias con TypeScript , React , TailwindCSS,
                useContext, y localStorage.
              </p>
            </div>
          </a>

          <a
            className="w-full h-[400px] bg-azul-800 rounded-lg text-white hover:scale-105 cursor-pointer transition-all"
            href="https://controlgastopresupuesto.netlify.app/"
            target="_blank"
          >
            <img
              src="Gastos.png"
              loading="lazy"
              decoding="async"
              className="w-full rounded-t-lg h-2/3"
            />
            <div className="flex flex-col p-5 w-full h-1/2">
              <h2 className="text-2xl font-bold ">Planificador de gastos</h2>
              <p className="text-sm mt-3 ">
                Control de gastos y presupuestos utilizando React, Context API
                para la gestión de estados globales, useReducer , localStorage y
                TailwindCSS.
              </p>
            </div>
          </a>
          <a
            className="w-full h-[400px] bg-azul-800 rounded-lg text-white hover:scale-105 cursor-pointer transition-all"
            href="https://propinaconsumo.netlify.app/"
            target="_blank"
          >
            <img
              src="Comida.png"
              loading="lazy"
              decoding="async"
              className="w-full rounded-t-lg h-2/3"
            />
            <div className="flex flex-col p-5 w-full h-1/2">
              <h2 className="text-2xl font-bold ">Calculadora de Propinas</h2>
              <p className="text-sm mt-3 ">
                Calculadora de Propinas y consumo , utilizando React,
                TypeScript, TailwindCSS , useMemo , useCallback y useReducer
              </p>
            </div>
          </a>
        </div>
      </div>

      <div
        id="sobremi"
        className="bg-azul-950 w-full  mx-auto py-8 text-white mt-32 flex flex-col justify-center items-center gap-3"
      >
        <h2 className="text-3xl font-bold text-center text-white mt-3">
          Sobre mí
        </h2>
        <div className="flex flex-col md:flex-row p-4 max-w-4xl h-full gap-5 justify-between items-center">
          <div className="w-80 h-80">
            <img
              src="Perfil.jpeg"
              className="w-full h-full rounded-full border-4 border-blue-600"
              loading="lazy"
              decoding="async"
            />
          </div>

          <motion.div
            className="md:w-1/2 w-full h-full flex justify-center items-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="text-lg mt-5 p-5 ">
              ¡Hola! Soy Alexis Hojas, un Desarrollador Full Stack de 23 años
              apasionado por crear soluciones tecnológicas innovadoras y
              centradas en el usuario. Actualmente, estoy terminando un Bootcamp
              Full Stack Java en Coding Dojo, donde profundizo en tecnologías
              como Spring Boot, APIs REST y arquitectura de microservicios,
              complementando mi formación autodidacta en frontend con React, JavaScript,
              TypeScript y Node.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="h-[80vh] mt-28 flex flex-col items-center">
        <h2
          id="habilidades"
          className="text-3xl font-bold text-center text-white mb-20"
        >
          Habilidades
        </h2>
        <div className="max-w-4xl md:w-[600px] h-[450px] justify-center items-center grid grid-cols-4 gap-5 ">
          <IconSkill name="HTML">
            <SiHtml5 className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="CSS">
            <SiCss3 className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="JavaScript">
            <SiJavascript className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="TypeScript">
            <SiTypescript className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="React">
            <SiReact className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="TailwindCSS">
            <SiTailwindcss className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="MySQL">
            <SiMysql className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="Java">
            <FaJava className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="Spring Boot">
            <SiSpringboot className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="Node">
            <FaNode className="w-20 h-20 text-azul-700" />
          </IconSkill>
          <IconSkill name="React Native">
            <TbBrandReactNative className="w-20 h-20 text-azul-700" />
          </IconSkill>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
