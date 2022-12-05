<template>
  <v-card flat>
    <v-card-text class="w-full">
      <div class="grid md:grid-cols-2 w-full justify-between">
        <div class="flex flex-col gap-y-4">
          <div class="text-gray-600">Current plan</div>
          <div class="flex w-full gap-4">
            <div class="font-extrabold text-xl">Basic trial</div>
            <div>
              <v-btn
                color=""
                class="text-orange-darken-2 bg-orange-lighten-4"
                flat
                size="small"
              >
                <div class="normal-case">$00/month</div>
              </v-btn>
            </div>
          </div>
          <div class="space-y-1">
            <div class="text-gray-600">Status</div>
            <div class="inline-flex gap-x-2">
              <!-- <span> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="green"
                class="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>
              <!-- </span> -->
              <span>Active</span>
            </div>
          </div>
          <div>
            <span class="text-gray-600">Member Since</span>
            <span class="text-gray-800"> June 1, 2022</span>
          </div>
          <div>
            <span class="text-gray-600">Next billing Period on</span>
            <span class="text-gray-800"> July 1, 2022</span>
          </div>
        </div>
        <div class="flex align-end flex-col gap-y-4">
          <div class="w-fit">
            <v-btn
              color=""
              class="bg-secondaryBg w-fit"
              block
              flat
              @click="modal = false"
            >
              <div class="normal-case font-normal">Upgrade plan</div>
            </v-btn>
          </div>
          <div class="w-fit">
            <v-btn
              color=""
              variant="outlined"
              class="w-full"
              @click="modal = false"
            >
              <div class="normal-case font-normal text-gray-800">
                Cancel subscription
              </div>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>