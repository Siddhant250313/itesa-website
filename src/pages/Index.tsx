import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsPreview from "@/components/EventsPreview";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          ITESA - D.Y. Patil College of Engineering
        </title>

        <meta
          name="description"
          content="Information Technology Engineering Students' Association"
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">

        <Navbar />

        <main>

          {/* HERO */}
          <section id="hero">
            <HeroSection />
          </section>

          {/* EVENTS */}
          <section id="events">
            <EventsPreview />
          </section>

          {/* ACHIEVEMENTS */}
          <section id="achievements">
            <AchievementsSection />
          </section>

          {/* GALLERY */}
          <section id="gallery">
            <GallerySection />
          </section>

        </main>

        {/* FOOTER */}
        <section id="footer">
          <Footer />
        </section>

        {/* GLOBAL NEX */}
        

      </div>
    </>
  );
};

export default Index;