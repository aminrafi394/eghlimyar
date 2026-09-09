<template>
  <div class="min-h-screen bg-slate-100">

    <div class="flex">

      <!-- Sidebar Desktop -->
      <DashboardSidebar />

      <!-- Mobile Sidebar Overlay -->
      <Transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-40 bg-black/40 lg:hidden"
          @click="mobileMenuOpen = false"
        ></div>
      </Transition>

      <!-- Mobile Sidebar -->
      <Transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden"
        >
          <DashboardSidebar
            mobile
            @close="mobileMenuOpen = false"
          />
        </div>
      </Transition>


      <!-- Content -->

      <div class="flex flex-1 flex-col min-w-0">

        <!-- Header -->

        <DashboardHeader
          @toggle-menu="mobileMenuOpen = !mobileMenuOpen"
        />

        <!-- Pages -->

        <main
          class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 xl:px-10"
        >
          <RouterView />
        </main>

      </div>

    </div>

  </div>
</template>


<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";


const mobileMenuOpen = ref(false);
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>