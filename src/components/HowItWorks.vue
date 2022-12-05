<template>
  <div class="bg-white px-2 py-20">
    <div class="py-20 bg-white">
      <div class="text-center">
        <div class="gap-y-8 grid justify-center">
          <div class="text-4xl font-extrabold">How it works</div>
          <div class="lg:w-[600px]">
            We built this Website Speed Test to help you analyze your website
            load speed. The test is designed to help make your site faster by
            identifying what abo
          </div>
        </div>
      </div>
    </div>
    <div class="inline-flex md:px-32 md:flex-row flex-col gap-y-4 gap-x-4">
      <div class="px-2" v-for="(item, index) in howItWorksCards" :key="index">
        <how-it-works-card :card="item"></how-it-works-card>
      </div>
    </div>
    <div class="grid justify-center pt-20">
      <how-it-works-finishing class=""></how-it-works-finishing>
    </div>
  </div>
</template>

<script>
import HowItWorksCard from "./HowItWorksCard.vue";
import HowItWorksFinishing from "./HowItWorksFinishing.vue";
export default {
  components: { HowItWorksCard, HowItWorksFinishing },
  data() {
    return {
      howItWorksCards: [
        {
          title: "Test setup",
          description:
            "Test is created automatically based on Google Analytics visits/pageviews data. You only need to login – we take care of everything else.",
          img: "/assets/internet.png",
        },
        {
          title: "Customisation",
          description:
            "You can get so many customizing option for your desired result. Add them and get perfect analytics of your website’s current situation.",
          img: "/assets/internet2.png",
        },
        {
          title: "Test run",
          description:
            "Choose a goal and number of users or run test with recommended params. You will be able to track performance as soon as you start the test",
          img: "/assets/mission.png",
        },
        {
          title: "Test Results",
          description:
            "Get a test report with detailed performance data, identified problems and improvement advice. Compare to previous runs and control SLAs fulfillment.",
          img: "/assets/notepad.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>