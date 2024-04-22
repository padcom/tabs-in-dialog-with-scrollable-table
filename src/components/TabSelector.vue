<template>
  <ul class="tab-selector">
    <li v-for="tab in tabs" :key="tab.id"
      :class="{ tab: true, active: selectedTab?.id === tab.id }"
      @click="selectTab(tab)"
    >
      {{ tab.title }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useTabsContext } from './tabs'

const { tabs, selectTab, selectedTab } = useTabsContext()
</script>

<style lang="postcss" scoped>
ul.tab-selector {
  display: flex;
  gap: 16px;

  li.tab {
    list-style: none;
    cursor: pointer;
    user-select: none;

    &.active {
      -webkit-text-stroke: 0.04ex;
    }
  }
}
</style>
