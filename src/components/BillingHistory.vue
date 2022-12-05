<template>
  <VCard flat>
    <v-card-title primary-title> Billing History </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <!-- head -->
          <thead>
            <tr>
              <th class="font-semibold normal-case">Date</th>
              <th class="font-semibold normal-case">Details</th>
              <th class="font-semibold normal-case">Amount</th>
              <th class="font-semibold normal-case">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover" v-for="n in 5" :key="n">
              <td>02/07/2022</td>
              <td>Premium plan, monthly</td>
              <td>$29</td>
              <td class="text-blue-600">Invoice08, july 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-card-text>
  </VCard>
</template>

<script>
export default {};
</script>

<style>
</style>