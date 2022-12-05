<template>
  <div class="grid place-items-center place-content-center pt-28 pb-36 px-2">
    <div class="inline-flex flex-col text-center gap-y-8">
      <div class="font-semibold text-gray-800 text-5xl">
        Uplift your load testing
      </div>
      <div class="w-full">
        <div class="text-gray-600 text-center">
          Let's make the web a faster place. Test your website speed in real
          browsers from up to three worldwide locations
        </div>
      </div>
      <div
        class="
          inline-flex
          min-w-max
          gap-x-4
          md:flex-row
          flex-col
          gap-y-4
          w-full
        "
      >
        <v-text-field
          name="name"
          outline
          prepend-inner-icon="mdi-web"
          variant="outlined"
          class="bg-white"
          hide-details
          persistent-placeholder
          placeholder="Enter URL address"
        ></v-text-field>
        <VSelect
          prepend-inner-icon="mdi-map-marker-radius-outline"
          variant="outlined"
          hide-details
          persistent-placeholder
          placeholder="Europe, Germany +1"
          class="bg-white"
        ></VSelect>
        <div>
          <v-btn color="secondaryBg" size="x-large" flat>
            <span class="normal-case text-sm"> Run testing</span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>