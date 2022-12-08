<template>
  <user-navigation>
    <template #test-manager-nav>
      <all-tests-nav-bar
        :showDeleteButton="checkCount > 0 ? true : false"
      ></all-tests-nav-bar>
    </template>
    <test-list-table @check="checked"></test-list-table>
  </user-navigation>
</template>

<script>
import UserNavigation from "@/components/UserNavigation.vue";
import AllTestsNavBar from "@/components/AllTestsNavBar.vue";
import TestListTable from "@/components/TestListTable.vue";
export default {
  data() {
    return {
      checkCount: 0,
    };
  },
  components: {
    UserNavigation,
    AllTestsNavBar,
    TestListTable,
  },
  methods: {
    checked(count) {
      this.checkCount = count;
    },
  },
};
</script>

<style
  >
</style>
