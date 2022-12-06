<template>
  <user-navigation>
    <stat-card></stat-card>
    <!-- <page-load-time-graph></page-load-time-graph> -->
    <!-- <add-test-modal :show="true"></add-test-modal> -->
    <test-list-table class="mt-16"></test-list-table>
  </user-navigation>
</template>

<script>
import UserNavigation from "@/components/UserNavigation.vue";
import StatCard from "@/components/StatCard.vue";
import PageLoadTimeGraph from "@/components/PageLoadTimeGraph.vue";
import AddTestModal from "@/components/AddTestModal.vue";
import TestListTable from "@/components/TestListTable.vue";
export default {
  components: {
    UserNavigation,
    StatCard,
    PageLoadTimeGraph,
    AddTestModal,
    TestListTable,
  },
};
</script>
,
  