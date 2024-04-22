<template>
  <Dialog ref="dialog">
    <h2>Dialog header</h2>
    <p class="paragraph">Some longer dialog description</p>
    <Tabs>
      <Tab title="Tab 1">
        <UsersTable />
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

<style lang="postcss">
.dialog {
  width: 50dvw;
  height: 50dvh;
  margin: auto;
}

.dialog-container {
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
}

.tabs {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
}

.tabs-container {
  height: 100%;
  overflow: hidden;
}

.tab {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;

  & table {
    width: 100%;
  }
}

    /*
    .tabs {
      background-color: cornflowerblue;

      & .tab.tab-with-table-and-actions {
        display: grid;
        grid-template-rows: 1fr min-content;
        background-color: cadetblue;

        .users {
          overflow-y: auto;
        }

        .actions {
          background-color: dodgerblue;
        }
      }
    }
    */
</style>
