export const useNotificationStore = defineStore({
  id: 'notification',

  state: () => ({
    active: false,
    autoHide: true,
    notifications: [],
  }),

  actions: {
    showNotification(notification) {
      this.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      })
    },

    hideNotification(data) {
      this.notifications = this.notifications.filter((notification) => {
        return notification.id !== data.id
      })
    },
  },
})

