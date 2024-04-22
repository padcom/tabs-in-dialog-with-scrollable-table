<template>
  <dialog ref="dialog" class="dialog" :open>
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
