<template>
  <div class="overflow-x-auto rounded-2xl bg-white shadow-sm">
    <table class="min-w-full">

      <thead class="bg-slate-100">
        <tr>
          <th class="px-6 py-4 text-right">شناسه</th>
          <th class="px-6 py-4 text-right">مبلغ</th>
          <th class="px-6 py-4 text-right">تاریخ</th>
          <th class="px-6 py-4 text-right">وضعیت</th>
        </tr>
      </thead>

      <tbody>

        <tr
          v-for="payment in payments"
          :key="payment.id"
          class="border-t"
        >
          <td class="px-6 py-4">{{ payment.id }}</td>
          <td class="px-6 py-4">{{ payment.amount }}</td>
          <td class="px-6 py-4">{{ payment.date }}</td>
          <td class="px-6 py-4">{{ payment.status }}</td>
        </tr>

      </tbody>

    </table>
  </div>
</template>

<script setup>
const payments = [
  {
    id: 1001,
    amount: "۱,۵۰۰,۰۰۰",
    date: "1405/04/20",
    status: "پرداخت شده",
  },
  {
    id: 1002,
    amount: "۹۰۰,۰۰۰",
    date: "1405/04/10",
    status: "در انتظار",
  },
];
</script>