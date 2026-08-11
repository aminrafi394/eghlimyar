<template>
  <section
    class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
  >
    <div
      class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <!-- Image -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
          alt="کشاورزی هوشمند"
          class="h-[300px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px] lg:h-[520px]"
        />

        <div
          class="absolute -bottom-5 right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8 sm:p-6"
        >
          <p class="text-2xl font-extrabold text-green-600 sm:text-3xl">
            +500
          </p>

          <p class="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
            مزرعه مدیریت شده
          </p>
        </div>
      </div>

      <!-- Content -->
      <div>
        <span
          class="inline-block rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 sm:text-sm"
        >
          درباره اقلیم یار
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold leading-[1.5] text-slate-800 sm:mt-6 sm:text-4xl lg:text-5xl"
        >
          کشاورزی هوشمند،
          <br />
          آینده‌ای بهتر
        </h2>

        <p
          class="mt-5 text-sm leading-8 text-slate-600 sm:mt-6 sm:text-base"
        >
          اقلیم یار با هدف هوشمندسازی مدیریت مزارع ایجاد شده است.
          این سامانه به کشاورزان کمک می‌کند اطلاعات مزارع خود را
          مدیریت کنند، وضعیت آب‌وهوا را بررسی کنند و بر اساس داده‌ها
          تصمیم‌های دقیق‌تری بگیرند.
        </p>

        <div class="mt-7 space-y-5 sm:mt-8">
          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 sm:h-10 sm:w-10"
            >
              ✓
            </div>

            <div>
              <h3 class="text-sm font-bold text-slate-800 sm:text-base">
                مدیریت آسان مزارع
              </h3>

              <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                اطلاعات مزارع خود را در یک محیط ساده و یکپارچه مدیریت کنید.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 sm:h-10 sm:w-10"
            >
              ✓
            </div>

            <div>
              <h3 class="text-sm font-bold text-slate-800 sm:text-base">
                اطلاعات آب‌وهوایی
              </h3>

              <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                وضعیت آب‌وهوا و پیش‌بینی روزهای آینده را بررسی کنید.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 sm:h-10 sm:w-10"
            >
              ✓
            </div>

            <div>
              <h3 class="text-sm font-bold text-slate-800 sm:text-base">
                گزارش‌های دقیق
              </h3>

              <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                عملکرد مزارع را بررسی و گزارش‌های کاربردی دریافت کنید.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          class="mt-8 inline-flex rounded-2xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-700 sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
        >
          شروع کار با اقلیم یار
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>