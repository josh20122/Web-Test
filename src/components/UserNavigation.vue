<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item> LOGO</v-list-item>
    </v-list>
    <v-divider class="mb-0"></v-divider>
    <v-list class="pt-0 mt-0">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        :value="item"
        active-color="secondaryBg"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <router-link to="/">
          <v-btn block color="red" variant="outlined">
            <v-icon start>mdi-logout</v-icon>
            <span class="normal-case">Log out</span>
          </v-btn>
        </router-link>
      </div>
    </template>
  </v-navigation-drawer>

  <v-app-bar elevation="0" :border="true" class="px-8-md-and-up">
    <v-app-bar-nav-icon
      class="hidden-sm-and-up"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-avatar color="blue" size="large">
        <span class="text-h5">JN</span>
      </v-avatar>
      <span class="font-semibold"> Hello, Jonathan</span>
    </v-toolbar-title>

    <v-btn color="" class="bg-secondaryBg">
      <span class="normal-case">Start test</span>
      <v-icon end>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
  <div class="bg-primaryBg w-full h-full md:px-10 md:pt-4">
    <div class="p-2 pb-8">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { text: "Test Overview", icon: "mdi-poll", path: "test-overview" },
        { text: "Profile", icon: "mdi-account-badge-outline", path: "profile" },
        {
          text: "My subscriptions",
          icon: "mdi-home-circle-outline",
          path: "subscription",
        },
        { text: "Settings", icon: "mdi-cog-outline", path: "settings" },
      ],
    };
  },
  mounted() {},
};
</script>

<style>
</style>