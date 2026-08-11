<template>
  <div class="space-y-8">
    <!-- Header -->
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-slate-800">
          ویرایش مزرعه
        </h1>

        <p class="mt-2 text-slate-500">
          اطلاعات مزرعه را ویرایش کنید.
        </p>
      </div>

      <RouterLink
        to="/dashboard/farms"
        class="w-full md:w-auto"
      >
        <button
          type="button"
          class="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 md:w-auto"
        >
          بازگشت
        </button>
      </RouterLink>
    </div>

    <!-- Not Found -->
    <div
      v-if="!farm"
      class="rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm sm:p-8"
    >
      <div class="text-4xl">
        ⚠️
      </div>

      <h2 class="mt-4 text-xl font-bold text-slate-800">
        مزرعه پیدا نشد
      </h2>

      <p class="mt-2 text-slate-500">
        مزرعه مورد نظر وجود ندارد.
      </p>

      <RouterLink
        to="/dashboard/farms"
        class="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
      >
        بازگشت به مزارع
      </RouterLink>
    </div>

    <!-- Form -->
    <div
      v-else
      class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8"
    >
      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Name -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              نام مزرعه
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="نام مزرعه"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
              required
            />
          </div>

          <!-- Crop -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              نوع محصول
            </label>

            <input
              v-model="form.crop"
              type="text"
              placeholder="مثلاً گندم"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
              required
            />
          </div>

          <!-- Province -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              استان
            </label>

            <input
              v-model="form.province"
              type="text"
              placeholder="استان"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <!-- City -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              شهر
            </label>

            <input
              v-model="form.city"
              type="text"
              placeholder="شهر"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
              required
            />
          </div>

          <!-- Area -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              مساحت
            </label>

            <input
              v-model="form.area"
              type="text"
              placeholder="مثلاً ۱۲ هکتار"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
              required
            />
          </div>

          <!-- Status -->
          <div>
            <label
              class="mb-2 block text-sm font-medium text-slate-700"
            >
              وضعیت
            </label>

            <select
              v-model="form.status"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
            >
              <option value="فعال">
                فعال
              </option>

              <option value="غیرفعال">
                غیرفعال
              </option>
            </select>
          </div>
        </div>

        <!-- Description -->
        <div>
          <label
            class="mb-2 block text-sm font-medium text-slate-700"
          >
            توضیحات
          </label>

          <textarea
            v-model="form.description"
            rows="5"
            placeholder="توضیحات مزرعه..."
            class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
          ></textarea>
        </div>

        <!-- Actions -->
        <div
          class="flex flex-col-reverse gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end"
        >
          <RouterLink
            to="/dashboard/farms"
            class="w-full sm:w-auto"
          >
            <button
              type="button"
              class="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
            >
              انصراف
            </button>
          </RouterLink>

          <button
            type="submit"
            class="w-full rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700 sm:w-auto"
          >
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useFarmStore } from "@/stores/farmStore";

const route = useRoute();
const router = useRouter();
const farmStore = useFarmStore();

const farm = farmStore.getFarmById(route.params.id);

const form = reactive({
  name: farm?.name || "",
  crop: farm?.crop || "",
  province: farm?.province || "",
  city: farm?.city || "",
  area: farm?.area || "",
  status: farm?.status || "فعال",
  description: farm?.description || "",
});

const handleSubmit = () => {
  farmStore.updateFarm(route.params.id, {
    name: form.name,
    crop: form.crop,
    province: form.province,
    city: form.city,
    area: form.area,
    status: form.status,
    description: form.description,
  });

  router.push("/dashboard/farms");
};
</script>