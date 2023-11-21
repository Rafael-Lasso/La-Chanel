import React from "react";
import "./style.css";


function Menu({ theme }) {
  return (
    <>
      <nav className="menu">
        <div className="promo h-11 flex items-center justify-center text-white text-lg font-bold bg-rose-600">
          Desconto termina em:
          <div className="box-timer flex w-8 h-8 items-center justify-center rounded ml-4 mx-1 bg-zinc-50 text-black">03</div>
          <span>:</span>
          <div className="box-timer flex w-8 h-8 items-center justify-center rounded mx-1 bg-zinc-50 text-black"><span>04</span></div>
          <span>:</span>
          <div className="box-timer flex w-8 h-8 items-center justify-center rounded mx-1 bg-zinc-50 text-black"><span>23</span></div>
          <span>:</span>
          <div className="box-timer flex w-8 h-8 items-center justify-center rounded mx-1 bg-zinc-50 text-black"><span>56</span></div>
        </div>
        <header className={theme ? "color header" : "header"}>
          <h1 className="text-4xl text-white">La'Chanel</h1>
          <ul className="flex text-white">
            <a href="#">
              <li className="mx-3">Início</li>
            </a>
            <a href="#premiun">
              <li className="mx-3">Planos</li>
            </a>
            <li className="mx-3">Serviços</li>
            <a href="#pacotes">
              <li className="mx-3">Pacotes</li>
            </a>
          </ul>
        </header>
      </nav>
    </>
  );
}

export default Menu;
