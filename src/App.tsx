import "./App.css";
import Footer from "./components/footer";
import GetEmail from "./sections/Email";
import Premiun from "./sections/Premiun";

import Characters from "./imgs/Chacacters.png";

function App() {
  return (
    <>
      <div className="menu h-90vh">
        <header className="header h-15vh items-center flex justify-around font-Rajdhani font-semibold">
          <h1 className="text-4xl text-white">La'Chanel</h1>
          <ul className="flex text-white">
            <li className="mx-3">Início</li>
            <li className="mx-3">Planos</li>
            <li className="mx-3">Serviços</li>
            <li className="mx-3">Pacotes</li>
          </ul>
        </header>
        <div className="content-message flex justify-center items-center h-60vh">
          <form className="message flex flex-col">
            <label className="text-white text-6xl font-bold">
              Eu crio o seu
            </label>
            <label className="text-white text-4xl font-bold">Banner</label>
            <input
              type="text"
              className="relative my-8 w-80 h-12 rounded-full"
            />
            <input
              type="button"
              value="Começar!"
              className="absolute font-Rajdhani font-semibold bg-rose-500 text-white cursor-pointer w-24 h-10 rounded-full"
            />
          </form>
        </div>
        <div className="bg-image-main"></div>
      </div>

      <section className="flex flex-col flex-wrap relative bg-rose-500 w-full h-168 mt-20">
        <div className="title flex justify-start">
          <h1 className="text-8xl text-start text-white w-168 pt-8 ml-20  font-Rajdhani font-bold">
            Para Todos os Publicos
          </h1>
        </div>
        <div className="container-ninchos flex justify-start text-2xl mt-10 ml-14">
          <ul className="text-white mx-14">
            <li>Jogos</li>
            <li>Animes</li>
            <li>Minecraft</li>
            <li>Quadrinhos</li>
          </ul>
          <ul className="text-white mx-5">
            <li>Unbox</li>
            <li>Educação</li>
            <li>Tecnologia</li>
            <li>Comentário</li>
          </ul>
        </div>
        <div className="container-button flex justify-start mt-8 ml-44">
          <button className="flex justify-center items-center shadow-2xl w-44 h-12 bg-white text-black rounded-lg">
            Conhecer
          </button>
        </div>
        <img src={Characters} className=" absolute h-168 top-0 right-0 bottom-0 max-xl:hidden" alt="Geek Culture Characters"/>
      </section>

      <section className="relative bg-blue-600 w-full h-168 mb-10 z-10">
        <h1 className="text-6xl text-black w-full h-96 pt-8 ml-20 font-Rajdhani font-bold">
          Para Todos os Publicos
        </h1>
        <div className="paper-texture"></div>
      </section>

      {/* Premiun */}
      <Premiun />

      {/* Pakages */}
      <section className="section-topics flex relative h-60vh justify-center items-center bg-violet-100 mt-24 max-xl:h-auto">
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

      {/* Get Email */}
      <GetEmail />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
