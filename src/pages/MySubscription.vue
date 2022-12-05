<template>
  <user-navigation>
    <div class="grid gap-y-8">
      <currenct-plan></currenct-plan>
      <payment-method></payment-method>
      <billing-history></billing-history>
    </div>
  </user-navigation>
</template>

<script>
import UserNavigation from "@/components/UserNavigation.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import CurrenctPlan from "@/components/CurrenctPlan.vue";
import BillingHistory from "@/components/BillingHistory.vue";
export default {
  components: { UserNavigation, PaymentMethod, CurrenctPlan, BillingHistory },
};
</script>

<style>
</style>