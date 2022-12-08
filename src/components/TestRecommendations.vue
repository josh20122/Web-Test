<template>
  <v-card flat>
    <v-card-title primary-title> Recommendation </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div v-for="n in 8" :key="n">
        <accordion></accordion>
        <v-divider v-if="n != 8" class="my-4"></v-divider>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  components: { Accordion },
};
</script>

<style>
</style>