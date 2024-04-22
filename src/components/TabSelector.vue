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

  & li.tab {
    list-style: none;
    cursor: pointer;
    user-select: none;
    border: solid 1px transparent;
    padding: 2px 4px;

    &.active {
      -webkit-text-stroke: 0.06ex;
      border-top: solid 1px black;
      border-left: solid 1px black;
      border-right: solid 1px black;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
}
</style>
