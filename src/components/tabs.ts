import { ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

export interface Tab {
  id: string
  title: string
}

function createTabsContext() {
  const tabs = ref([] as Tab[])
  const selectedTab = ref<Tab | null>(null)

  function addTab(tab: Tab) {
    tabs.value.push(tab)

    if (tabs.value.length === 1) {
      // eslint-disable-next-line prefer-destructuring
      selectedTab.value = tabs.value[0]
    }
  }

  function removeTab(tab: Tab) {
    tabs.value = tabs.value.filter(item => item.id !== tab.id)
  }

  function selectTab(tab: Tab | null) {
    selectedTab.value = tab
  }

  return {
    tabs,
    selectedTab,
    addTab,
    removeTab,
    selectTab,
  }
}

const [provideTabsContext, useTabsContextOrUndefined] = createInjectionState(createTabsContext)

function useTabsContext() {
  const result = useTabsContextOrUndefined()
  if (!result) throw new Error('Tabs context not provided. Call `provideTabsContext()` first')

  return result
}

export { provideTabsContext, useTabsContext }
