<template>
  <dialog ref="dialog" :open>
    <div class="dialog-container" v-bind="$attrs">
      <slot />
    </div>
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
  margin: auto;
}

.dialog-container {
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
}
</style>
