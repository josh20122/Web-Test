<template>
  <v-card flat>
    <VCardTitle>Apdex score</VCardTitle>
    <v-divider></v-divider>
    <v-card-text>
      <div class="flex flex-row w-full gap-3">
        <div class="grid place-items-center">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="12"
            model-value="80"
            color="customBlue"
          >
            <span class="font-extrabold text-lg text-gray-700">0.80</span>
          </v-progress-circular>
        </div>
        <div class="grid gap-y-3 w-full">
          <ul
            role="list"
            class="
              marker:text-green-600
              list-disc
              pl-5
              marker:text-xl
              text-slate-500
            "
          >
            <li>
              <div class="grid gap-y-1">
                <div class="text-gray-600 text-xs flex justify-between">
                  <span>Satisfied</span> <span>16,262</span>
                </div>
                <div class="flex w-full gap-x-2">
                  <div class="font-bold text-gray-900">78%</div>
                  <div class="w-full pt-1.5">
                    <v-progress-linear
                      model-value="78"
                      color="green"
                      rounded
                      height="8"
                    ></v-progress-linear>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul
            role="list"
            class="
              marker:text-yellow-500
              list-disc
              pl-5
              marker:text-xl
              space-y-3
              text-slate-500
            "
          >
            <li>
              <div class="grid gap-y-0.5">
                <div class="text-gray-600 text-xs flex justify-between">
                  <span>Tolerating</span> <span>2,262</span>
                </div>
                <div class="flex w-full gap-x-2">
                  <div class="font-bold text-gray-900">19%</div>
                  <div class="w-full pt-1.5">
                    <v-progress-linear
                      model-value="19"
                      color="yellow-darken-2"
                      rounded
                      height="8"
                    ></v-progress-linear>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul
            role="list"
            class="
              marker:text-red-600
              list-disc
              pl-5
              marker:text-xl
              space-y-3
              text-slate-500
            "
          >
            <li>
              <div class="grid gap-y-1">
                <div class="text-gray-600 text-xs flex justify-between">
                  <span>Frustrated</span> <span>262</span>
                </div>
                <div class="flex w-full gap-x-2">
                  <div class="font-bold text-gray-900">2%</div>
                  <div class="w-full pt-1.5">
                    <v-progress-linear
                      model-value="2"
                      color="red"
                      rounded
                      height="8"
                    ></v-progress-linear>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      value: 80,
    };
  },
};
</script>

<style>
</style>