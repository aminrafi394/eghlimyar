<template>
  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

    <div class="flex items-center justify-between p-6 border-b">
      <h2 class="text-lg font-bold text-slate-800">
        مزارع من
      </h2>

      <button
        class="text-green-600 hover:text-green-700 text-sm font-medium"
      >
        مشاهده همه
      </button>
    </div>

    <div class="overflow-x-auto">

      <table class="w-full text-sm">

        <thead class="bg-slate-50">

          <tr>

            <th class="px-6 py-4 text-right">
              نام مزرعه
            </th>

            <th class="px-6 py-4 text-right">
              محصول
            </th>

            <th class="px-6 py-4 text-right">
              مساحت
            </th>

            <th class="px-6 py-4 text-right">
              وضعیت
            </th>

          </tr>

        </thead>

        <tbody>

          <tr
            v-for="farm in farms"
            :key="farm.id"
            class="border-t hover:bg-slate-50"
          >

            <td class="px-6 py-5">
              {{ farm.name }}
            </td>

            <td class="px-6 py-5">
              {{ farm.crop }}
            </td>

            <td class="px-6 py-5">
              {{ farm.area }}
            </td>

            <td class="px-6 py-5">

              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="
                  farm.status=='فعال'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                "
              >

                {{ farm.status }}

              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<script setup>

const farms=[

{
id:1,
name:"مزرعه گندم",
crop:"گندم",
area:"۱۲ هکتار",
status:"فعال"
},

{
id:2,
name:"مزرعه ذرت",
crop:"ذرت",
area:"۸ هکتار",
status:"فعال"
},

{
id:3,
name:"باغ انار",
crop:"انار",
area:"۵ هکتار",
status:"غیرفعال"
}

]

</script>