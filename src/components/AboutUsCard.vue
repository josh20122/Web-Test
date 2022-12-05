<template>
  <v-card elevation="0" flat width="w-min">
    <div class="grid gap-y-4 w-96">
      <img :src="img" class="" alt="" />
      <div class="pl-14">
        <div class="text-2xl font-bold" v-text="title"></div>
        <div v-text="description"></div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["img", "title", "description"],
};
</script>

<style>
</style>