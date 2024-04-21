import { v4 } from 'uuid'
import { computed, readonly } from 'vue'

export function uuid() {
  return readonly(computed(() => v4()))
}
