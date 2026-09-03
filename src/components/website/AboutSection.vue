<template>
  <section
    id="about"
    class="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28"
  >
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-green-100/50 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl"
    ></div>

    <div
      class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
    >
      <!-- Image -->
      <div class="relative">
        <div class="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="../../../public/images/image2.png"
            alt="کشاورزی هوشمند"
            class="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] lg:h-[540px]"
          />
        </div>

        <!-- Floating Stat -->
        <div
          class="absolute -bottom-5 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8 sm:p-6"
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
        <!-- Label -->
        <span
          class="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-bold text-green-700 sm:text-sm"
        >
          درباره اقلیم‌یار
        </span>

        <!-- Title -->
        <h2
          class="mt-5 text-3xl font-extrabold leading-[1.5] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl"
        >
          فناوری در کنار
          <br />
          <span class="text-green-600">کشاورزی هوشمند</span>
        </h2>

        <!-- Description -->
        <p
          class="mt-5 text-sm leading-8 text-slate-600 sm:mt-6 sm:text-base"
        >
          اقلیم‌یار با هدف ساده‌تر کردن مدیریت مزارع و کمک به تصمیم‌گیری
          دقیق‌تر ایجاد شده است. ما تلاش می‌کنیم اطلاعات مهم موردنیاز
          کشاورزان را در یک محیط ساده، کاربردی و یکپارچه در اختیار آن‌ها
          قرار دهیم.
        </p>

        <!-- Benefits -->
        <div class="mt-7 space-y-5 sm:mt-8">
          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-10 sm:w-10"
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
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-10 sm:w-10"
            >
              ✓
            </div>

            <div>
              <h3 class="text-sm font-bold text-slate-800 sm:text-base">
                اطلاعات آب‌وهوایی
              </h3>

              <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                وضعیت آب‌وهوا و پیش‌بینی روزهای آینده را برای تصمیم‌گیری بهتر
                بررسی کنید.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-10 sm:w-10"
            >
              ✓
            </div>

            <div>
              <h3 class="text-sm font-bold text-slate-800 sm:text-base">
                گزارش‌ها و توصیه‌های کاربردی
              </h3>

              <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                اطلاعات و گزارش‌های موردنیاز خود را برای مدیریت بهتر مزرعه
                در اختیار داشته باشید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>