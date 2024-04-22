<template>
  <dialog ref="dialog" :open>
    <slot />
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { provideDialogContext } from './dialog'

defineProps({
  open: { type: Boolean, default: false },
})

const dialog = ref<HTMLDialogElement>()

const { showModal, close } = provideDialogContext(dialog)

defineExpose({ showModal, close })
</script>

<style lang="postcss" scoped>
dialog {
  padding: 4px;
}

dialog > ::v-deep(main) {
  height: 100%;
}
</style>
