<template>
  <div class="scrollable-table">
    <table class="table">
      <slot />
    </table>
  </div>
</template>

<style lang="postcss" scoped>
.scrollable-table {
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    &::v-deep(thead) {
      position: sticky;
      top: 0;
      background-color: lightgray; /* It is necessary to set the background color because by default it is transparent! */
    }
  }
}
</style>
