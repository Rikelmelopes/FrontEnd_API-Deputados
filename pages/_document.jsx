import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <title>Deputadex</title>
      <link
        rel="icon"
        href="https://media.discordapp.net/attachments/954503804676603998/1112484623402926150/Pokebola.png"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
