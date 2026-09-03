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

      <section id="about" class="scroll-mt-20">
        <AboutSection />
      </section>

    </main>

    <Footer />

  </div>
</template>


<script setup>

import Navbar from "@/components/website/NavbarView.vue";
import HeroSection from "@/components/website/HeroSection.vue";
import FeatureSection from "@/components/website/FeatureSection.vue";
import AboutSection from "@/components/website/AboutSection.vue";
import Footer from "@/components/website/FooterView.vue";

</script>