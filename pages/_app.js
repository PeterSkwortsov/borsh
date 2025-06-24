/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable react/jsx-no-undef */
import './globals.css'
import HamburgerMenu from './components/HamburgerMenu'
import { Nunito } from 'next/font/google'
import Head from 'next/head'
import Footer from './components/Footer' 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Script from 'next/script'
export default function MyApp({ Component, pageProps }) {

  
  return (

    
    <>
      <Head>
        <title>Творческая студия Вики Борщ</title>
        <meta name="description" content="Рисование и гончарное мастерство для взрослых и детей" />
        <meta name="keywords" content="Рисование, мастер-класс, живопись, лепка, гончарное мастерство, гончарный круг, выжиганию по дереву, свечеварение" />
        <meta name="author" content="Виктория Борщ" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Творческая студия Вики Борщ" />
        <meta property="og:description" content="Рисование и гончарное мастерство для взрослых и детей" />
        <meta property="og:image" content="/vika.png" />
        <meta property="og:url" content="https://borsch-art.ru/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="yandex-verification" content="4677ee3f6a2214af" />
      </Head>
     
     
 
      <main>
      
   
        <Component {...pageProps} />
        <Footer />
        
      </main>
    </>
  )
}
