<template>
  <form class="space-y-6">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <label class="block mb-2 text-sm font-medium text-slate-700">
          نام مزرعه
        </label>

        <input
          v-model="form.name"
          type="text"
          placeholder="نام مزرعه"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-slate-700">
          نوع محصول
        </label>

        <input
          v-model="form.crop"
          type="text"
          placeholder="مثلاً گندم"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-slate-700">
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
        <label class="block mb-2 text-sm font-medium text-slate-700">
          شهر
        </label>

        <input
          v-model="form.city"
          type="text"
          placeholder="شهر"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-slate-700">
          مساحت (هکتار)
        </label>

        <input
          v-model="form.area"
          type="number"
          placeholder="مثلاً 12"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label class="block mb-2 text-sm font-medium text-slate-700">
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
      <label class="block mb-2 text-sm font-medium text-slate-700">
        توضیحات
      </label>

      <textarea
        v-model="form.description"
        rows="5"
        placeholder="توضیحات مزرعه..."
        class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600"
      />
    </div>

  </form>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  crop: "",
  province: "",
  city: "",
  area: "",
  status: "فعال",
  description: "",
});
</script>