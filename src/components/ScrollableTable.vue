<template>
  <div class="scrollable-table">
    <table>
      <slot />
    </table>
  </div>
</template>

<style lang="postcss">
.scrollable-table {
  overflow-y: scroll; /* The table will be scrollable vertically */
  position: relative;

  & table {
    width: 100%;               /* Since the scrolling happens on the parent level it's best */
                               /* to make the table 100% wide. That way the scrollbar is glued to it. */
    border-collapse: collapse; /* Because the scrolling happens on the parent if there is a border spacing */
                               /* it will make the header bounce by the width of the spacing when scrolling */
    background-color: white;
  }

  /* Sticky table header */
  & thead {
    position: sticky;
    top: 0;
    background-color: red; /* It is necessary to set the background color because by default it is transparent! */
  }
}
</style>
