<template>
  <user-navigation>
    <stat-card></stat-card>
    <page-load-time-graph></page-load-time-graph>
    <add-test-modal :show="true"></add-test-modal>
  </user-navigation>
</template>

<script>
import UserNavigation from "@/components/UserNavigation.vue";
import StatCard from "@/components/StatCard.vue";
import PageLoadTimeGraph from "@/components/PageLoadTimeGraph.vue";
import AddTestModal from "@/components/AddTestModal.vue";
export default {
  components: { UserNavigation, StatCard, PageLoadTimeGraph, AddTestModal },
};
</script>
