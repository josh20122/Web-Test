<template>
  <div class="bg-white md:px-32">
    <div
      class="
        bg-white
        pt-20
        flex
        pb-20
        md:flex-row
        flex-col
        justify-center
        gap-y-16 gap-x-7
      "
    >
      <about-us-card
        v-for="(item, index) in aboutUsCards"
        :key="index"
        :title="item.title"
        :img="item.img"
        :description="item.description"
      ></about-us-card>
    </div>
    <div class="hero min-h-screen bg-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/assets/asset9.png" />
        <div>
          <h1 class="text-3xl font-bold">
            Resolve your website problems faster & easier with us
          </h1>
          <p class="py-6">
            Customers that switched to Uptrends pride us for reducing their
            alert noise. Inform the right people, at the right time, when
            there’s actually something wrong
          </p>
          <button class="btn bg-secondaryBg">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutUsCard from "./AboutUsCard.vue";
export default {
  components: { AboutUsCard },
  data() {
    return {
      aboutUsCards: [
        {
          img: "/assets/asset11.png",
          title: "Hello there",
          description:
            "Test your pages as often as you need, whether hourly or weekly. Get the best result for your website",
        },
        {
          img: "/assets/asset7.png",
          title: "Worldwide location (10+)",
          description:
            "Test your pages as often as you need, whether hourly or weekly. Get the best result for your website",
        },
        {
          img: "/assets/asset8.png",
          title: "Different page comparison",
          description:
            "Test your pages as often as you need, whether hourly or weekly. Get the best result for your website",
        },
      ],
    };
  },
};
</script>

<style>
</style>