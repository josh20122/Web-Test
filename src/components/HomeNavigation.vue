<template>
  <v-app-bar
    class="md--px-16 px-3"
    color="primaryBg"
    flat
    density="compact"
    height="100"
  >
    <v-avatar color="grey-darken-1 md:ml-16" size="32"></v-avatar>

    <v-spacer></v-spacer>
    <v-tabs centered color="secondaryBg" class="hidden-md-and-down w-min mt-10">
      <v-tab
        v-for="(link, index) in links"
        fixed
        :key="index"
        color="secondaryBg"
      >
        <div class="capitalize">
          {{ link.page }}
        </div>
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <div class="inline-flex md:mr-16">
      <v-btn color="" flat density="0" elevation="0">
        <span class="normal-case"> Log in </span>
      </v-btn>
      <v-btn size="large" flat color="" class="bg-secondaryBg normal-case">
        <span class="normal-case text-sm"> Get started </span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { page: "Home", url: "pricing" },
        { page: "Pricing", url: "pricing" },
        { page: "Support", url: "pricing" },
      ],
    };
  },
};
</script>

<style>
</style>