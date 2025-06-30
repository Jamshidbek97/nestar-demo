import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/img/logo/favicon.svg" type="img/png" />

        <meta
          name="keywords"
          content="Nestar, Nestar.uz Jamshid97, Jamshid's Website"
        />
        <meta
          name="description"
          content={
            "Buy and sell anytime and anywhere in South Korea. |" +
            "한국에서 언제 어디서나 사고팔 수 있습니다." +
            "Janubiy Koreyada istalgan vaqtda va istalgan joyda sotib oling va soting."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
