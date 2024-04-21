import { ref, type Ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

// eslint-disable-next-line max-lines-per-function
function createDialogContext(dialog: Ref<HTMLDialogElement | undefined>) {
  let resolveFn: ((result?: string) => void) | undefined
  const open = ref(false)

  function close(result?: string) {
    // eslint-disable-next-line no-unused-expressions
    resolveFn && resolveFn(result)
    resolveFn = undefined
    open.value = false
  }

  function handleEscapeKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
  }

  function showModal() {
    return new Promise((resolve, reject) => {
      if (dialog.value) {
        resolveFn = resolve
        dialog.value.addEventListener('keydown', handleEscapeKey, { once: true })
        dialog.value.showModal()
        open.value = true
      } else {
        reject(new Error('Missing dialog reference'))
      }
    })
  }

  return {
    dialog,
    showModal,
    close,
  }
}

const [provideDialogContext, useDialogContextOrUndefined] = createInjectionState(createDialogContext)

function useDialogContext() {
  const result = useDialogContextOrUndefined()
  if (!result) throw new Error('No dialog context provided. Call `provideDialogContext(dialogRef)` first.')

  return result
}

export { provideDialogContext, useDialogContext }
