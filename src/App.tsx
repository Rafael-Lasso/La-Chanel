import{ useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";

import Menu from "./components/menu";
import Footer from "./components/footer";
import GetEmail from "./sections/Email";
import Premiun from "./sections/Premiun";

import emails from "./imgs/emails.png";
import notemail from "./imgs/not-email.png";
import Characters from "./imgs/Chacacters.png";
import Seal from "./imgs/Selo-de-Garantia-de-7-Dias.png";

function App() {

  const [color, setColor] = useState(false);

  useEffect(function () {
    function ScrollPosition() {
      if (window.scrollY > 520) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
    window.addEventListener("scroll", ScrollPosition);
  });

  return (
    <>
      <div className="menu h-90vh">
        <Menu theme={color} />
        <div className="content-message flex h-60vh">
          <form className="message flex flex-col justify-center items-center w-full h-90vh">
            <label className="text-center text-white text-6xl font-bold">
              Eu vou Criar
              <br />
              <span>
                <Typewriter
                  words={[
                    "Toda sua Documentação",
                    "Seu Briefing",
                    "Sua Thumbnail",
                    "Seu Email",
                    "Sua Marca",
                    "Seu Canal por Completo!",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </label>
            <input
              type="email"
              placeholder="Insira seu email"
              className="relative flex justify-center items-center rounded-full w-80 h-12 my-8 px-5 "
            />
            <input
              type="submit"
              value="Começar!"
              className="absolute font-Rajdhani font-semibold bg-rose-500 text-white cursor-pointer w-24 h-10 rounded-full"
            />
          </form>
        </div>
        <div className="bg-image-main"></div>
      </div>

      <section className="flex flex-col flex-wrap relative bg-rose-500 w-full h-168 mt-20 z-10">
        <div className="title flex justify-start">
          <h1 className="text-8xl text-start text-white w-168 pt-8 ml-20  font-Rajdhani font-bold">
            Para Todos os Publicos
          </h1>
        </div>
        <div className="container-ninchos flex justify-start text-2xl mt-10 ml-14">
          <ul className="text-white mx-14">
            <li className="transition-all hover:text-rose-300">Jogos</li>
            <li className="transition-all hover:text-rose-300">Animes</li>
            <li className="transition-all hover:text-rose-300">Minecraft</li>
            <li className="transition-all hover:text-rose-300">Quadrinhos</li>
          </ul>
          <ul className="text-white mx-5">
            <li className="transition-all hover:text-rose-300">Unbox</li>
            <li className="transition-all hover:text-rose-300">Educação</li>
            <li className="transition-all hover:text-rose-300">Tecnologia</li>
            <li className="transition-all hover:text-rose-300">Comentário</li>
          </ul>
        </div>
        <div className="container-button flex justify-start mt-8 ml-44">
          <button className="flex justify-center items-center shadow-2xl w-44 h-12 bg-white text-black rounded-lg transition-all hover:bg-black hover:text-white">
            Conhecer
          </button>
        </div>
        <img
          src={Characters}
          className=" absolute h-168 top-0 right-0 bottom-0 -z-10 max-xl:hidden"
          alt="Geek Culture Characters"
        />
      </section>

      <section className="relative w-full h-168 mb-10 z-10 max-md:h-auto">
        <h1 className="text-6xl text-white w-full h-96 pt-8 ml-20 font-Rajdhani font-bold">
          Passe Profissionalismo <br />e Objetividade
        </h1>
        <div className="flex flex-wrap absolute top-0 right-0 left-0 bottom-0 items-center justify-center">
          <img src={emails} width={700} alt="" />
          <img className="max-xl:hidden" src={notemail} width={500} alt="" />
        </div>
        <div className="paper-texture -z-20 opacity-30"></div>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-blue-900 w-full h-168 mb-10 -z-30 max-md:h-auto"></div>
      </section>

      {/* Premiun */}
      <Premiun />

      {/* Pakages */}
      <section
        id="pacotes"
        className="section-topics flex relative h-80vh justify-center items-center bg-violet-100 mt-24 max-xl:h-auto"
      >
        <div className="container-select-topic flex flex-col">
          <div className="content-title my-5 z-10">
            <h1 className="flex justify-start text-white font-Rajdhani font-bold text-2xl max-xl:justify-center">
              Veja Um Pacote
            </h1>
            <h2 className="flex justify-start text-white font-Rajdhani font-bold text-5xl max-xl:justify-center">
              Que Te Atraia
            </h2>
          </div>
          <div className="content-topics flex flex-wrap justify-center items-center">
            <div className="select-topic m-2 w-60 h-60 bg-white z-10 cursor-pointer flex justify-center items-center text-center hover:bg-black hover:text-zinc-100 transition-all">
              <h3 className="text-3xl font-Rajdhani font-semibold">
                Thumbs
                <br />
                Banners
              </h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-white z-10 cursor-pointer flex justify-center items-center text-center hover:bg-black hover:text-zinc-100 transition-all">
              <h3 className="text-3xl font-Rajdhani font-semibold">
                Briefing e Documentações
              </h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-white z-10 cursor-pointer flex justify-center items-center text-center hover:bg-black hover:text-zinc-100 transition-all">
              <h3 className="text-3xl font-Rajdhani font-semibold">
                Templates Customizáveis
              </h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-white z-10 cursor-pointer flex justify-center items-center text-center hover:bg-black hover:text-zinc-100 transition-all">
              <h3 className="text-3xl font-Rajdhani font-semibold">
                Criação
                <br />
                Total
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </section>
      <section className="flex flex-col bg-gray-900 items-center justify-center w-full h-90vh">
        <h1 className="text-white text-3xl font-Rajdhani font-bold">
          GARANTIA INCONDICIONAL DE 7 DIAS
        </h1>
        <h2 className="text-white text-2xl mb-10 font-Rajdhani font-bold">
          Seu <span className="text-green-500">dinheiro de volta</span> sem dor de
          cabeça
        </h2>
        <div className="container-seal flex items-center justify-around w-11/12">
          <p className="text-white w-1/3">
            É muito simples e muito fácil...
            <br />
            <br />
            Você acessa os seviços da La Chanel agora, e tem até 07 dias
            para pedir seu dinheiro de volta caso não goste de alguma, qualquer
            coisa...
            <br />
            <br />O objetivo é adicionar valor real à sua vida, mostrando as
            técnicas e métodos extremamente eficazes que irão levar você até seu
            sucesso extremo.
            <br />
            <br />
            Se por algum motivo você achar que não valeu à pena, achar que o
            produto não é para você, ou qualquer que seja o motivo devolvo seu
            dinheiro 100%.
          </p>
          <img
            src={Seal}
            alt="selo de garantia de 7 dias ou dinheiro de volta"
          />
        </div>
          <h3 className="text-white text-3xl font-bold font-Rajdhani mt-16">Nesse caso, os <span className="text-red-600">riscos</span> são todos meus.</h3>
      </section>

      {/* Get Email */}
      <GetEmail />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
