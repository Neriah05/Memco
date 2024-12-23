import "./index.css";
import Nav from "./MainPage/Nav";
import Hero from "./MainPage/Hero";
import Address from "./MainPage/Address";
import About from "./MainPage/About";
import WhitePaper from "./MainPage/WhitePaper";
import Faq from "./MainPage/Faq";
// import OurTeam from "./MainPage/OurTeam";
import Subscribe from "./MainPage/Subscribe";
// import ContactUs from "./MainPage/ContactUs";
import Footer from "./MainPage/Footer";
export default function App() {
  return (
    <section>
      <WebPage />
    </section>
  );
}

function WebPage() {
  return (
    <section className="">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Address />
      </section>
      <section>
        <About />
      </section>
      <section>
        <WhitePaper />
      </section>
      <section>
        <Faq />
      </section>
      {/* <section>
        <OurTeam />
      </section> */}
      <section>
        <Subscribe />
      </section>
      {/* <section>
        <ContactUs />
      </section> */}
      <section>
        <Footer />
      </section>
    </section>
  );
}
