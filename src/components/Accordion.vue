<template>
  <div class="flex gap-x-4 w-full">
    <div class="">
      <div class="w-5.5 rounded-full h-4">
        <img class="w-5.5 rounded-full h-4" src="/assets/error.png" alt="" />
      </div>
    </div>
    <div class="basis-9/12">
      <div class="font-bold">Reduce the number of DOM elements</div>
      <div v-if="active">
        A complex page means more bytes to download, and it also means slower
        DOM access in JavaScript. Reduce the number of DOM elements on the page
        to improve performance
      </div>
    </div>
    <div class="justify-self-end">
      <div class="w-fit inline-flex justify-end">
        <v-btn
          color="grey-lighten-4"
          @click="active = !active"
          icon
          size="x-small"
          flat
        >
          <v-icon v-if="!active">mdi-chevron-up</v-icon>
          <v-icon v-if="active">mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
</style>