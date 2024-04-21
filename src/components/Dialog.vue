<template>
  <dialog ref="dialog" :open class="dialog">
    <div class="container" v-bind="$attrs">
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
.container {
  display: grid;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
</style>
