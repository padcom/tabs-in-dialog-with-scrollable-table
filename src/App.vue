<template>
  <Dialog ref="dialog">
    <main>
      <h2>Dialog header</h2>
      <p class="paragraph">Some longer dialog description</p>
      <Tabs>
        <Tab title="Tab 1" class="tab1">
          <Panel :style="{ 'margin-top': '8px' }">
            This is some text
          </Panel>
          <Panel class="wrapper">
            <UsersTable :max="7" />
            <Panel>
              <p>Hello!</p>
              <p>Hello!</p>
              <p>Hello!</p>
              <p>Hello!</p>
              <p>Hello!</p>
              <p>Hello!</p>
            </Panel>
          </Panel>
          <Actions>
            <button>New</button>
            <button>Delete</button>
          </Actions>
        </Tab>
        <Tab title="Tab 2" class="tab2">
          <UsersTable :max="7" />
          <Actions>
            <button>New</button>
            <button>Delete</button>
          </Actions>
        </Tab>
      </Tabs>
    </main>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import UsersTable from './components/UsersTable.vue'
import Panel from './components/Panel.vue'
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

  & main {
    display: grid;
    gap: 4px;
    grid-template-rows: auto auto 1fr;
  }
}

h2 {
  font-size: 1.5rem;
}

.tab1, .tab2 {
  gap: 4px;
}

.tab1 {
  grid-template-rows: auto 1fr auto;
}

.tab2 {
  grid-template-rows: 1fr auto;
}

.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
