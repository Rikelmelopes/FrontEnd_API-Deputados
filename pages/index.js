import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deputadex</title>
        <link
          rel="icon"
          href="https://e7.pngegg.com/pngimages/345/512/png-clipart-pokemon-diamond-and-pearl-unown-pokedex-poke-ball-others-text-logo.png"
        />
      </Head>
      <main className="container">
        <div className="py-3">
          <h1 className="col text-center justify-content-center">Deputadex</h1>
        </div>
      </main>
    </div>
  );
}
