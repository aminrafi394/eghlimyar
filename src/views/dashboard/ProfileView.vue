<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/authStore.js";

const store = useUserStore();

const form = ref({
  username: store.username,
  phoneNumber: store.phoneNumber,
  email: store.email,
  role: store.role,
  profileImage: store.profileImage,
});

const chooseImage = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  form.value.profileImage = URL.createObjectURL(file);
};

const saveProfile = () => {
  store.updateProfile(form.value);

  alert("اطلاعات با موفقیت ذخیره شد.");
};
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8">

    <div class="bg-white rounded-2xl shadow-lg border border-slate-200">

      <div class="p-8">

        <h1 class="text-3xl font-bold text-slate-800">
          پروفایل کاربری
        </h1>

        <p class="text-slate-500 mt-2">
          اطلاعات حساب کاربری خود را ویرایش کنید.
        </p>

      </div>

      <div
        class="px-8 pb-8 flex flex-col lg:flex-row gap-10"
      >

        <!-- عکس -->

        <div
          class="flex flex-col items-center"
        >

          <div class="relative">

            <img
              :src="form.profileImage"
              class="w-40 h-40 rounded-full object-cover border-4 border-green-600"
            />

            <label
              for="image"
              class="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >

              📷

            </label>

            <input
              id="image"
              type="file"
              class="hidden"
              accept="image/*"
              @change="chooseImage"
            />

          </div>

        </div>

        <!-- فرم -->

        <div class="flex-1">

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>

              <label class="block mb-2 text-sm">
                نام و نام خانوادگی
              </label>

              <input
                v-model="form.username"
                class="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

            <div>

              <label class="block mb-2 text-sm">
                شماره موبایل
              </label>

              <input
                v-model="form.phoneNumber"
                class="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

            <div>

              <label class="block mb-2 text-sm">
                ایمیل
              </label>

              <input
                type="email"
                v-model="form.email"
                class="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

            <div>

              <label class="block mb-2 text-sm">
                نقش
              </label>

              <input
                v-model="form.role"
                class="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

          </div>

          <div class="mt-10 flex justify-end">

            <button
              @click="saveProfile"
              class="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-xl"
            >
              ذخیره اطلاعات
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>