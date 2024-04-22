<template>
  <ul class="tab-selector">
    <li v-for="tab in tabs" :key="tab.id"
      :class="{ tab: true, active: selectedTab?.id === tab.id }"
      @click="selectTab(tab)"
    >
      {{ tab.title }}
    </li>
    <li class="filler" />
  </ul>
</template>

<script lang="ts" setup>
import { useTabsContext } from './tabs'

const { tabs, selectTab, selectedTab } = useTabsContext()
</script>

<style lang="postcss" scoped>
.tab-selector {
  display: flex;

  & li {
    list-style: none;
    border-bottom: solid 1px black;
  }

  .tab {
    cursor: pointer;
    user-select: none;
    padding: 3px 17px 2px 17px;

    &.active {
      -webkit-text-stroke: 0.06ex;
      padding: 2px 16px;
      border-left: solid 1px black;
      border-top: solid 1px black;
      border-right: solid 1px black;
      border-bottom: solid 1px transparent;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  .filler {
    flex: 1;
  }
}
</style>
