import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Hero from "../components/hero";
import Carousel from "../components/carousel";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nexcess - Shopping Store</title>
        <meta
          name="description"
          content="Nexcess is an online shopping center with all brands men and women"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero/>
      <Carousel/>
      <SectionTitle
        pretitle="Reviews"
        title="Here's what our customers said">
        Reviews is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;