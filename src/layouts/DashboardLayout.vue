<template>
  <div class="min-h-screen bg-[#F8F9FC] flex flex-row-reverse">

    <DahboardSidebar />

    <div class="flex-1 flex flex-col">

      <DashboardHeader />

      <main class="flex-1 p-6 overflow-auto">
        <RouterView />
      </main>

    </div>

  </div>
</template>

<script setup>
import DahboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
</script>