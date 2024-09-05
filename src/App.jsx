import React from "react";
import Nav from "./components/Nav";
import CustomerReviews from "./setions/CustomerReviews";
import Footer from "./setions/Footer";
import Hero from "./setions/Hero";
import PopularProducts from "./setions/PopularProducts";
import Services from "./setions/Services";
import SpecialOffer from "./setions/SpecialOffer";
import Subscribe from "./setions/Subscribe";
import SuperQuality from "./setions/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-blue-400 padding">
        <CustomerReviews />
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-y bg-gray-400">
        <Footer />
      </section>
    </main>
  );
};

export default App;
