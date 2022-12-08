<template>
  <div class="bg-primaryBg text-gray-700">
    <HomeNavigation>
      <introduction></introduction>
      <home-about-us></home-about-us>
      <what-makes-us-special></what-makes-us-special>
      <how-it-works></how-it-works>
      <home-footer></home-footer>
    </HomeNavigation>
  </div>
</template>


<script>
import HomeNavigation from "@/components/HomeNavigation.vue";
import Introduction from "@/components/Introduction.vue";
import HomeAboutUs from "@/components/HomeAboutUs.vue";
import WhatMakesUsSpecial from "@/components/WhatMakesUsSpecial.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  components: {
    HomeNavigation,
    Introduction,
    HomeAboutUs,
    WhatMakesUsSpecial,
    HowItWorks,
    HomeFooter,
  },
};
</script>

<style>
</style>