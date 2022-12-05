<template>
  <div class="bg-primaryBg py-24 md:px-32 text-gray-600">
    <div class="grid px-2 md:grid-cols-2 gap-x-16 gap-y-6">
      <img src="/assets/asset10.png" alt="" />
      <div>
        <h1 class="text-4xl font-bold text-gray-800">What makes us special</h1>

        <v-timeline truncate-line="both" density="compact" side="end">
          <v-timeline-item
            icon="mdi-arrow-right-thin"
            class="mb-4"
            dot-color="secondaryBg"
            size="small"
            v-for="(item, index) in timelineItems"
            :key="index"
          >
            <div class="inline-flex flex-col">
              <div
                class="text-xl font-bold text-gray-700"
                v-text="item.title"
              ></div>
              <div
                class="flex-shrink-0 text-gray-600"
                v-text="item.description"
              ></div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        {
          title: "Easy load testing design",
          description:
            " Use auto-correlations rules and frameworks as well as test validation to quickly create virtual users.",
        },
        {
          title: "Automated cloud infrastructure",
          description:
            " Start load test agents all around the globe in a matter of minutes.",
        },
        {
          title: "Real time, customizable reports",
          description:
            " Create custom visualisations, compare results over time and create report templates.",
        },
      ],
    };
  },
};
</script>

<style>
</style>