<template>
  <ScrollableTable class="users">
    <thead>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </ScrollableTable>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ScrollableTable from './ScrollableTable.vue'

interface User {
  id: string
  firstName: string
  lastName: string
  age: number
}

const users = ref([] as User[])

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/users')
  if (response.ok) {
    const data = await response.json()
    users.value = data.users
  }
})
</script>
