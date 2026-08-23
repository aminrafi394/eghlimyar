import { defineStore } from 'pinia'

export const useReportStore = defineStore('reports', {
  state: () => ({
    reports: [
      {
        id: 1,
        title: 'گزارش مزرعه گندم',
        farm: 'مزرعه گندم',
        crop: 'گندم',
        status: 'ready',
        statusLabel: 'آماده',
        description:
          'بررسی وضعیت برگ‌های گندم و تغییر رنگ مشاهده شده.',
        media: '',
        mediaType: '',
        createdAt: '۱۴۰۵/۰۵/۲۸',
      },

      {
        id: 2,
        title: 'بررسی وضعیت مزرعه',
        farm: 'مزرعه شماره ۲',
        crop: 'ذرت',
        status: 'processing',
        statusLabel: 'در حال پردازش',
        description:
          'بررسی وضعیت رشد گیاه و شرایط مزرعه.',
        media: '',
        mediaType: '',
        createdAt: '۱۴۰۵/۰۵/۲۹',
      },
    ],
  }),

  getters: {
    totalReports: (state) => {
      return state.reports.length
    },

    readyReports: (state) => {
      return state.reports.filter(
        (report) => report.status === 'ready'
      ).length
    },

    processingReports: (state) => {
      return state.reports.filter(
        (report) => report.status === 'processing'
      ).length
    },
  },

  actions: {
    addReport(report) {
      this.reports.unshift({
        id: Date.now(),
        title: report.title,
        farm: report.farm,
        crop: report.crop,
        description: report.description,

        // فایل
        media: report.media,
        mediaType: report.mediaType,

        status: 'processing',
        statusLabel: 'در حال پردازش',

        createdAt: new Date().toLocaleDateString('fa-IR'),
      })
    },

    getReportById(id) {
      return this.reports.find(
        (report) => String(report.id) === String(id)
      )
    },
  },
})