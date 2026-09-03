<template>
  <footer class=" border-slate-800 bg-slate-950 text-white">
   <div 
          class="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm sm:mt-10 sm:p-6"
        >
        
          <div class="mb-4" id="footer">
              <h3 class="text-base font-bold text-white">
                ارتباط با اقلیم‌یار
              </h3>
            

            <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
              برای دریافت اطلاعات بیشتر می‌توانید از راه‌های زیر با ما در
              ارتباط باشید.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <!-- Phone -->
            <a
              href="tel:02112345678"
              class="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-green-200 hover:bg-green-50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.04 12.04 0 0 1-7.644-7.644 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.37-.278.54-.752.417-1.173L6.512 3.6A1.125 1.125 0 0 0 5.422 2.75H4.05A2.25 2.25 0 0 0 1.8 5v1.75Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs text-slate-400">
                  شماره تماس
                </p>

                <p
                  class="mt-1 text-sm font-bold text-slate-700 transition group-hover:text-green-600"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </p>
              </div>
            </a>

            <!-- Email -->
            <a
              href="mailto:info@eghlimyar.ir"
              class="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-green-200 hover:bg-green-50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0-8.69 5.793a1.875 1.875 0 0 1-2.08 0L2.25 6.75"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <p class="text-xs text-slate-400">
                  ایمیل
                </p>

                <p
                  class="mt-1 truncate text-sm font-bold text-slate-700 transition group-hover:text-green-600"
                >
                  info@eghlimyar.ir
                </p>
              </div>
            </a>
          </div>

          <!-- Address -->
          <div
            class="mt-4 flex items-center gap-3 rounded-xl border border-slate-100 p-3"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>

            <div>
              <p class="text-xs text-slate-400">
                آدرس
              </p>

              <p class="mt-1 truncate text-sm font-bold text-slate-700 transition group-hover:text-green-600">
                تهران، خیابان نمونه، ساختمان اقلیم‌یار
              </p>
            </div>
          </div>
        </div>


    <!-- Bottom -->
    <div
      class="border-t border-slate-800/80 px-4 py-5 text-center text-xs text-slate-500 sm:text-sm"
    >
      <p>© 2026 اقلیم‌یار — تمامی حقوق محفوظ است.</p>
    </div>
  </footer>
</template>

<script setup>
</script>
