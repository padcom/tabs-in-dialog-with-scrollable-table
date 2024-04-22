<template>
  <div v-show="selectedTab?.id === id" class="tab">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useTabsContext } from './tabs'
import { uuid } from '@/composables/uuid'

const props = defineProps({
  title: { type: String, default: 'Tab' },
})

const id = uuid()
const { selectedTab, addTab, removeTab } = useTabsContext()

onMounted(() => {
  addTab({ id: id.value, title: props.title })
})

onBeforeUnmount(() => {
  removeTab({ id: id.value, title: props.title })
})
</script>

<style lang="postcss" scoped>
.tab {
  height: 100%;
}
</style>
