import { defineStore } from 'pinia'

export const useIndexStore = defineStore('indexStore', () => {
    const homeTab = ref('prophet')

    function setHomeTab(value: string) {
        homeTab.value = value
    }
    return { homeTab, setHomeTab }
})