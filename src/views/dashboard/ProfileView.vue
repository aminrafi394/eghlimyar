<template>
  <div class="space-y-6">

    <!-- عنوان -->
    <div>
      <h1 class="text-3xl font-bold text-slate-800">
        پروفایل کاربری
      </h1>

      <p class="text-slate-500 mt-2">
        اطلاعات حساب کاربری خود را مشاهده و ویرایش کنید.
      </p>
    </div>

    <!-- کارت اطلاعات -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <div class="flex flex-col lg:flex-row gap-8">

        <!-- تصویر -->
        <div class="flex justify-center">

          <div
            class="w-32 h-32 rounded-full bg-green-600 text-white flex items-center justify-center text-5xl font-bold"
          >
            م
          </div>

        </div>

        <!-- اطلاعات -->
        <div class="flex-1">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="block text-sm text-slate-500 mb-2">
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                value="مرتضی اشرف"
                disabled
                class="w-full border rounded-xl px-4 py-3 bg-slate-100"
              >
            </div>

            <div>
              <label class="block text-sm text-slate-500 mb-2">
                شماره موبایل
              </label>

              <input
                type="text"
                value="09123456789"
                disabled
                class="w-full border rounded-xl px-4 py-3 bg-slate-100"
              >
            </div>

            <div>
              <label class="block text-sm text-slate-500 mb-2">
                ایمیل
              </label>

              <input
                type="email"
                value="user@gmail.com"
                disabled
                class="w-full border rounded-xl px-4 py-3 bg-slate-100"
              >
            </div>

            <div>
              <label class="block text-sm text-slate-500 mb-2">
                نقش
              </label>

              <input
                type="text"
                value="کشاورز"
                disabled
                class="w-full border rounded-xl px-4 py-3 bg-slate-100"
              >
            </div>

          </div>

          <div class="mt-8 flex justify-end">

            <button
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
            >
              ویرایش اطلاعات
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
</script>