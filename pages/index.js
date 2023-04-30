import Cabecalho from "../components/Cabecalho";

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <main className="container">
        <div className="py-3">
          <h1 className="col text-center justify-content-center">Deputadex</h1>
        </div>
      </main>
    </div>
  );
}
