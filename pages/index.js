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
import ComeToMe from "./components/ComeToMe";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
    return (
        <>
            <HamburgerMenu />

            <Header />
            <Table />
            <About />
            <ContentPrice />
            {/* <ComeToMe /> */}
            <Grid />
            <Quetions />
            <Phone />
            <Step />
            <Map />
       



        </>
    );

}