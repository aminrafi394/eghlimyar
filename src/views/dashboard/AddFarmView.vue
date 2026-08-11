<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        افزودن مزرعه
      </h1>

      <p class="mt-2 text-slate-500">
        اطلاعات مزرعه جدید را وارد کنید.
      </p>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
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

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
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

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
              استان
            </label>

            <input
              v-model="form.province"
              type="text"
              placeholder="استان"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
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

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
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

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">
              وضعیت
            </label>

            <select
              v-model="form.status"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
            >
              <option value="فعال">فعال</option>
              <option value="غیرفعال">غیرفعال</option>
            </select>
          </div>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            توضیحات
          </label>

          <textarea
            v-model="form.description"
            rows="5"
            placeholder="توضیحات مزرعه..."
            class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
          ></textarea>
        </div>

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
            ثبت مزرعه
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { useFarmStore } from "@/stores/farmStore";

const router = useRouter();
const farmStore = useFarmStore();

const form = reactive({
  name: "",
  crop: "",
  province: "",
  city: "",
  area: "",
  status: "فعال",
  description: "",
});

const handleSubmit = () => {
  farmStore.addFarm({
    name: form.name,
    crop: form.crop,
    area: form.area,
    city: form.city,
    status: form.status,
    province: form.province,
    description: form.description,
  });

  router.push("/dashboard/farms");
};
</script>