<template>
  <section class="mx-auto max-w-3xl">

    <div class="text-center">

      <h1 class="text-4xl font-extrabold text-slate-800">
        تماس با ما
      </h1>

      <p class="mt-5 text-slate-600">
        اگر سوال یا پیشنهادی دارید با ما در ارتباط باشید.
      </p>

    </div>

    <form class="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm">

      <input
        type="text"
        placeholder="نام و نام خانوادگی"
        class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600"
      >

      <input
        type="email"
        placeholder="ایمیل"
        class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600"
      >

      <textarea
        rows="6"
        placeholder="پیام شما..."
        class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600"
      ></textarea>

      <button
        class="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        ارسال پیام
      </button>

    </form>

  </section>
</template>

<script setup>
</script>