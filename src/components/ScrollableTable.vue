<template>
  <div class="scrollable-table">
    <table class="table">
      <slot />
    </table>
  </div>
</template>

<style lang="postcss" scoped>
.scrollable-table {
  overflow-y: scroll; /* The table will be scrollable vertically */
  position: relative;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;

    &::v-deep(thead) {
      position: sticky;
      top: 0;
      background-color: red; /* It is necessary to set the background color because by default it is transparent! */
    }
  }
}
</style>
