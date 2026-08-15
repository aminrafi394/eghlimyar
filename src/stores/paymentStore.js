import { defineStore } from "pinia";

export const usePaymentStore = defineStore("payment", {
  state: () => ({
    payments: [
      {
        id: 1001,
        amount: 1500000,
        date: "1405/04/20",
        time: "14:32",
        card: "6037 **** **** 1234",
        status: "پرداخت شده",
        type: "پرداخت خدمات",
        trackingCode: "852741963",
      },

      {
        id: 1002,
        amount: 900000,
        date: "1405/04/10",
        time: "09:18",
        card: "6104 **** **** 5678",
        status: "در انتظار",
        type: "پرداخت خدمات",
        trackingCode: "741258963",
      },
    ],
  }),

  getters: {
    getPayments: (state) => state.payments,

    successfulPayments: (state) =>
      state.payments.filter(
        (payment) => payment.status === "پرداخت شده"
      ),
  },

  actions: {
    addPayment(payment) {
      this.payments.unshift({
        id: Date.now(),
        ...payment,
      });
    },

    updatePayment(id, updatedPayment) {
      const index = this.payments.findIndex(
        (payment) => payment.id === id
      );

      if (index !== -1) {
        this.payments[index] = {
          ...this.payments[index],
          ...updatedPayment,
        };
      }
    },

    removePayment(id) {
      this.payments = this.payments.filter(
        (payment) => payment.id !== id
      );
    },
  },
});