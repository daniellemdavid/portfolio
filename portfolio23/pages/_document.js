import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="normalize.css"/>
        {/* <link rel="stylesheet" href="../styles/globals.css"/> */}
        {/* <script src="./app2.js"></script> */}
        <link rel="icon" href="../public/faviocn.ico" type="image/x-icon"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100&family=Major+Mono+Display&display=swap" rel="stylesheet"/>
      </Head >
      
      <body>
        
        <Main />
        
        <NextScript />
        
      </body>
    </Html>
  )
}
