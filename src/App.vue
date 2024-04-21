<template>
  <Dialog ref="dialog">
    <h2>Dialog header</h2>
    <p>Some longer dialog description</p>
    <Tabs>
      <Tab title="Tab 1" class="tab-with-table-and-actions">
        <UsersTable />
        <Actions>
          <button>New</button>
          <button>Delete</button>
        </Actions>
      </Tab>
      <Tab title="Tab 2">
        <p>This is an empty tab</p>
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
.dialog {
  width: 50dvw;
  height: 50dvh;

  &::v-deep(.container) {
    grid-template-rows: min-content min-content 1fr;
  }

  & .tab-with-table-and-actions {
    display: grid;
    grid-template-rows: 1fr auto;
    width: 100%;
    height: 100%;
  }

  & .users {
    background-color: red;
  }
}
</style>
