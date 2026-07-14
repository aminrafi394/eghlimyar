<template>
  <div class="min-h-screen bg-slate-100">

    <div class="flex">

      <!-- Sidebar -->
      <DashboardSidebar />

      <!-- Content -->

      <div class="flex flex-1 flex-col min-w-0">

        <!-- Header -->

        <DashboardHeader />

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
import { RouterView } from "vue-router";

import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
</script>