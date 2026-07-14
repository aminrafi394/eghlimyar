<template>
  <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-slate-800">فعالیت‌های اخیر</h2>

      <button class="text-sm text-green-600 hover:text-green-700 transition">مشاهده همه</button>
    </div>

    <div class="space-y-5">
      <div v-for="item in activities" :key="item.id" class="flex items-start gap-4">
        <div class="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
          <component :is="item.icon" :size="18" class="text-green-600" />
        </div>

        <div class="flex-1">
          <h3 class="font-semibold text-slate-700">
            {{ item.title }}
          </h3>

          <p class="text-sm text-slate-500 mt-1">
            {{ item.description }}
          </p>
        </div>

        <span class="text-xs text-slate-400 whitespace-nowrap">
          {{ item.time }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sprout, CloudSun, FileText, CreditCard } from 'lucide-vue-next'

const activities = [
  {
    id: 1,
    title: 'ثبت مزرعه جدید',
    description: 'مزرعه گندم شماره ۳ اضافه شد.',
    time: '۱۰ دقیقه پیش',
    icon: Sprout,
  },
  {
    id: 2,
    title: 'بروزرسانی آب و هوا',
    description: 'اطلاعات هواشناسی دریافت شد.',
    time: '۴۵ دقیقه پیش',
    icon: CloudSun,
  },
  {
    id: 3,
    title: 'ثبت گزارش',
    description: 'گزارش هفتگی با موفقیت ثبت شد.',
    time: '۲ ساعت پیش',
    icon: FileText,
  },
  {
    id: 4,
    title: 'پرداخت انجام شد',
    description: 'هزینه اشتراک با موفقیت پرداخت شد.',
    time: 'دیروز',
    icon: CreditCard,
  },
]
</script>
