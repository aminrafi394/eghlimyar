<template>
  <div class="min-h-screen bg-slate-100">

    <!-- <Navbar /> -->

    <main>
      <RouterView />
    </main>

  </div>
</template>

<script setup>
// import Navbar from "@/components/website/NavbarView.vue";
import { RouterView } from "vue-router";
</script>