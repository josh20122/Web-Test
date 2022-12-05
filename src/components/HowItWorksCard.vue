<template>
  <v-card rounded="lg" class="border--secondaryBg">
    <v-card-text>
      <div
        class="rounded-full bg-secondaryBg w-12 h-12 grid place-content-center"
      >
        <img :src="card.img" class="w-10" alt="" />
      </div>
    </v-card-text>
    <v-card-text>
      <div class="text-xl capitalize font-bold pb-3" v-text="card.title"></div>
      <div v-text="card.description"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
</style>