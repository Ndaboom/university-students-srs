import { defineStore } from 'pinia';
export const authStore = defineStore({
    id: 'user',
    state: () => ({
        name: null,
        roles: null,
    }),
    getters: {},
    mutations: {},
    actions: {
        setName(val) {
            this.name = val;
        },
        setRole(val) {
            this.roles = val;
        }
    },
})