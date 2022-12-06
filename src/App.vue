<template>
  <v-app>
    <!--  -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <my-subscription></my-subscription> -->
    <!-- <profile></profile> -->
    <!-- <settings></settings> -->
    <!-- <test-overview> </test-overview> -->
    <!-- <home></home> -->
  </v-app>
</template>

<script >
import Home from "./pages/Home.vue";
import MySubscription from "./pages/MySubscription.vue";
import Profile from "./pages/Profile.vue";
import Settings from "./pages/Settings.vue";
import TestOverview from "./pages/TestOverview.vue";
export default {
  components: { Home, TestOverview, Profile, MySubscription, Settings },
};
</script>
