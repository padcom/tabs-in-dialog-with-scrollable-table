<template>
  <Dialog ref="dialog">
    <h2>Dialog header</h2>
    <p class="paragraph">Some longer dialog description</p>
    <Tabs>
      <Tab title="Tab 1" class="users-tab">
        <UsersTable :max="20" />
        <Actions>
          <button>New</button>
          <button>Delete</button>
        </Actions>
      </Tab>
      <Tab title="Tab 2" class="users-tab">
        <UsersTable :max="2" />
        <Actions>
          <button>New</button>
          <button>Delete</button>
        </Actions>
      </Tab>
    </Tabs>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import UsersTable from './components/UsersTable.vue'
import Actions from './components/Actions.vue'

const dialog = ref<InstanceType<typeof Dialog>>()

onMounted(() => {
  dialog.value?.showModal()
})
</script>

<style lang="postcss" scoped>
dialog {
  width: 50dvw;
  height: 50dvh;
  overflow: hidden;
}

.users-tab {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
