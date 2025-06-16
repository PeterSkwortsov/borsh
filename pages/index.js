/* eslint-disable @next/next/inline-script-id */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import ContentPrice from "./components/Content";
import Grid from "./components/Grid";
import Quetions from "./components/Quetions";
import Utp from './components/Utp';
import About from "./components/About";
import Phone from "./components/Phone";
import Step from "./components/Step";
import Map from "./components/Map";
import HamburgerMenu from "./components/HamburgerMenu";
import YandexMetrika from "./components/YandexMetrika";
import { Suspense } from "react";
import Script from "next/script";

export default function Home() {
    return (
        <>

            <Script>
                {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(102283077, "init", {
        defer:true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });   
      `}
            </Script>
            <Suspense fallback={<></>}>
                <YandexMetrika />
            </Suspense>
            <YandexMetrika />
            <HamburgerMenu />
            <Header />
            <Table />
            <About />
            <ContentPrice />
            <Grid />
            <Quetions />
            <Phone />
            <Step />
            <Map />
       



        </>
    );

}