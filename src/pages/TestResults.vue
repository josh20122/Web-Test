<template>
  <user-navigation>
    <template #test-manager-nav>
      <test-results-nav-bar></test-results-nav-bar>
    </template>
    <div class="grid gap-y-4">
      <stat-card></stat-card>
      <page-load-time-chart></page-load-time-chart>

      <div class="flex flex-col md:flex-row gap-4 w-full">
        <appdex-score class="md:basis-4/12"></appdex-score>
        <load-time-chart class="md:basis-8/12"></load-time-chart>
      </div>
      <test-recommendations></test-recommendations>
    </div>
  </user-navigation>
</template>
  
  <script>
import UserNavigation from "@/components/UserNavigation.vue";
import StatCard from "@/components/StatCard.vue";
import AddTestModal from "@/components/AddTestModal.vue";
import TestListTable from "@/components/TestListTable.vue";
import PageLoadTimeChart from "@/components/PageLoadTimeChart.vue";
import AppdexScore from "@/components/AppdexScore.vue";
import LoadTimeChart from "@/components/LoadTimeChart.vue";
import TestRecommendations from "@/components/TestRecommendations.vue";
import TestResultsNavBar from "@/components/TestResultsNavBar.vue";
export default {
  components: {
    UserNavigation,
    StatCard,
    AddTestModal,
    TestListTable,
    PageLoadTimeChart,
    AppdexScore,
    LoadTimeChart,
    TestRecommendations,
    TestResultsNavBar,
  },
};
</script>
  ,
    