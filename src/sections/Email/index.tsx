const GetEmail = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-auto sm:h-60vh">
        <h2 className="max-w-xl m-10 text-center text-2xl font-Rajdhani font-bold max-w sm:text-5xl">
          Se inscreva e receba novidades exclusivas do La'Chanel!
        </h2>
        <form
          className="flex flex-wrap items-center justify-center"
          action=""
          method="post"
        >
          <input
            className="w-60 h-14 m-1 text-center outline-indigo-500 shadow-lg"
            placeholder="Digite seu Email Aqui 👇"
            type="email"
          />
          <button
            className="font-Rajdhani font-semibold w-52 h-14 m-1 text-white bg-zinc-700 hover:bg-blue-600 transition-all"
            type="submit"
          >
            Quero Ficar Por Dentro
          </button>
        </form>
      </section>
    </>
  );
};

export default GetEmail;
