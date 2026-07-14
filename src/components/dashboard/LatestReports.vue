<template>
  <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

    <div class="flex items-center justify-between mb-6">

      <h2 class="text-lg font-bold text-slate-800">
        آخرین گزارش‌ها
      </h2>

      <button
        class="text-sm text-green-600 hover:text-green-700 transition"
      >
        مشاهده همه
      </button>

    </div>

    <div class="space-y-4">

      <div
        v-for="report in reports"
        :key="report.id"
        class="border rounded-xl p-4 hover:bg-slate-50 transition"
      >

        <div class="flex items-center justify-between">

          <div>

            <h3 class="font-bold text-slate-700">
              {{ report.title }}
            </h3>

            <p class="text-sm text-slate-500 mt-2">
              {{ report.date }}
            </p>

          </div>

          <span
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="statusClass(report.status)"
          >
            {{ report.status }}
          </span>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>

const reports = [

{
id:1,
title:"گزارش سلامت گندم",
date:"۱۴۰۵/۰۴/۲۴",
status:"تکمیل شده"
},

{
id:2,
title:"بررسی آبیاری مزرعه",
date:"۱۴۰۵/۰۴/۲۳",
status:"در حال بررسی"
},

{
id:3,
title:"کنترل آفات",
date:"۱۴۰۵/۰۴/۲۲",
status:"تکمیل شده"
}

]

const statusClass = (status)=>{

if(status==="تکمیل شده"){

return "bg-green-100 text-green-700"

}

return "bg-yellow-100 text-yellow-700"

}

</script>