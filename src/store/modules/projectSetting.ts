import { defineStore } from 'pinia';

export const useProjectSettingStore = defineStore({
  id: 'app-project-setting',
  state: () => ({
    appTheme: '#2d8cf0',
  }),
  getters: {
    getAppTheme(): string {
      return this.appTheme;
    },
  },
});
