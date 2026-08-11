<template>
  <div
    id="home"
    class="min-h-screen overflow-x-hidden bg-slate-50"
  >
    <Navbar />

    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <FeatureSection />
      </section>

      <section id="stats">
        <StatsSection />
      </section>

      <section id="about" class="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="contact" class="scroll-mt-20">
        <ContactCTA />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/website/NavbarView.vue";
import HeroSection from "@/components/website/HeroSection.vue";
import FeatureSection from "@/components/website/FeatureSection.vue";
import StatsSection from "@/components/website/StatsSection.vue";
import AboutSection from "@/components/website/AboutSection.vue";
import ContactCTA from "@/components/website/ContactCTA.vue";
import Footer from "@/components/website/FooterView.vue";
</script>