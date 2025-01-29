import NavBar from "./components/NavBar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <NavBar />
      {
        //bg-gradient-to-br from-azul-500 to-morado-800
      }
      <div className="gradient-background h-screen">
        <div
          id="inicio"
          className="max-w-4xl h-full mx-auto  flex flex-col justify-center items-center "
        >
          <h1 className="text-5xl font-bold text-white mb-5">
            Desarrollador Web
          </h1>
          <h2 className="text-8xl text-white font-bold text-center">
            Alexis Hojas
          </h2>
          <div className="w-full flex justify-center mt-10 gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              
            >
            <a href="https://www.linkedin.com/in/alexis-hojas/" target="_blank">
              
              <FaLinkedin className="w-10 h-10 text-white hover:text-blue-600  hover:scale-110 transition-all" />
            </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
            <a href="https://github.com/LexyysS" target="_blank">
              <FaGithub className="w-10 h-10 text-white hover:text-black hover:scale-110 transition-all" />
            </a>
            </motion.button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto h-screen">
          <h2
            id="proyectos"
            className="text-3xl text-white font-bold mt-10 text-center"
          >
            Proyectos
          </h2>

          <div className="w-full flex mt-20 flex-wrap items-center hover:scale-105 transition-all">
            <div className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Sintomas de enfermedades</h2>
              <p className="text-sm mt-3">
                Esta aplicación permite realizar diagnósticos de enfermedades
                basados en los síntomas presentados, utilizando la API de
                Infermedica y procesando las peticiones con Axios. Incluye un
                diccionario de enfermedades que proporciona información sobre
                causas, prevención y tratamientos.
              </p>
              <div className="flex mt-2">
                <img src="reactLogo.png" className="w-10 h-10" />
                <img src="tailwindLogo.png" className="w-10 h-10" />
              </div>

              <a
                href="https://symptocl.netlify.app"
                target="_blank"
                className="py-1 px-4 bg-azul-900 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700 mt-5"
              >
                Ver proyecto
              </a>
            </div>

            <div className="md:w-3/5 w-full h-full bg-morado-950 flex justify-center rounded-r-lg items-center p-2">
              <img src="Sintomas.png" className="w-full h-full" />
            </div>
          </div>

          <div className="w-full flex mt-20 flex-wrap items-center hover:scale-105 transition-all">
            <div className="md:w-3/5 w-full h-full bg-morado-950 flex justify-center rounded-l-lg items-center p-2">
              <img src="Lavado.png" className="w-full h-full" />
            </div>

            <div className="md:w-2/5 w-full h-80 bg-azul-800 rounded-lg p-5 text-white shadow-lg flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Lavado de autos</h2>
              <p className="text-sm mt-3">
                Landing Page sobre el servicio de lavado de autos. Utilizando
                hooks y componentes para el diseño. Alertas , formularios y uso
                de formsubmit para enviar datos de registro del usuario.
              </p>
              <div className="flex mt-2">
                <img src="reactLogo.png" className="w-10 h-10" />
                <img src="tailwindLogo.png" className="w-10 h-10" />
              </div>

              <a
                href="https://lavadomrgreen.netlify.app/"
                target="_blank"
                className="py-1 px-4 bg-azul-900 rounded-3xl flex justify-center items-center text-white hover:bg-morado-700 mt-5"
              >
                Ver proyecto
              </a>
            </div>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-2 mt-20 gap-4">
            <a
              className="w-full h-[400px] bg-azul-800 rounded-lg  text-white hover:scale-105 cursor-pointer transition-all"
              href="https://comprascarritoguitarla.netlify.app/"
              target="_blank"
            >
              <img src="Carrito.png" className="w-full rounded-t-lg h-2/3" />
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
              <img src="Calorias.png" className="w-full rounded-t-lg h-2/3" />
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
              <img src="Gastos.png" className="w-full rounded-t-lg h-2/3" />
              <div className="flex flex-col p-5 w-full h-1/2">
                <h2 className="text-2xl font-bold ">Planificador de gastos</h2>
                <p className="text-sm mt-3 ">
                  Control de gastos y presupuestos utilizando React, Context API
                  para la gestión de estados globales, useReducer , localStorage
                  y TailwindCSS.
                </p>
              </div>
            </a>
            <a
              className="w-full h-[400px] bg-azul-800 rounded-lg text-white hover:scale-105 cursor-pointer transition-all"
              href="https://propinaconsumo.netlify.app/"
              target="_blank"
            >
              <img src="Comida.png" className="w-full rounded-t-lg h-2/3" />
              <div className="flex flex-col p-5 w-full h-1/2">
                <h2 className="text-2xl font-bold ">Calculadora de Propinas</h2>
                <p className="text-sm mt-3 ">
                  Calculadora de Propinas y consumo , utilizando React,
                  TypeScript, TailwindCSS , useMemo , useCallback y useReducer
                </p>
              </div>
            </a>
          </div>

          <div
            id="sobremi"
            className="bg-azul-950 w-full rounded-xl text-white mt-32 flex  justify-center items-center flex-wrap gap-3"
          >
            <div className="w-80 h-80">
              <img src="Sobre mi.png" className="w-full h-full" />
            </div>
            <div className="md:w-1/2 w-full h-full">
              <p className="text-lg mt-5 p-5 text-left ml-5">
                Hola, soy Alexis Hojas, tengo 23 años y desde pequeño me
                apasiona la tecnología y la programación. Soy autodidacta y
                disfruto trabajando en equipo, donde puedo compartir ideas y
                aprender de los demás. Mi objetivo es seguir creciendo como
                desarrollador web y crear soluciones innovadoras. Estoy siempre
                abierto a nuevos desafíos y oportunidades para colaborar.
              </p>
            </div>
          </div>

          <div className="h-screen mt-32 flex flex-col items-center">
            <h2
              id="habilidades"
              className="text-3xl font-bold text-center text-white mb-20"
            >
              Habilidades
            </h2>
            <div className="w-1/2 h-1/2 justify-center items-center grid grid-cols-3  ">
              <div className="flex justify-center items-center">
                <img src="LogosHtml5.svg" className="w-20 h-20" />
              </div>

              <div className="flex justify-center items-center">
                <img src="LogosCss3.svg" className="w-20 h-20" />
              </div>

              <div className="flex justify-center items-center">
                <img src="LogosJavascript.svg" className="w-20 h-20" />
              </div>
              <div className="flex justify-center items-center">
                <img src="LogosTypeScript.svg" className="w-20 h-20" />
              </div>
              <div className="flex justify-center items-center">
                <img src="LogosReact.svg" className="w-20 h-20" />
              </div>
              <div className="flex justify-center items-center">
                <img src="tailwindLogo.png" className="w-20 h-20" />
              </div>

              <div className="flex justify-center items-center">
                <img src="LogosMysql.svg" className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
