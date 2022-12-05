<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <div
      v-for="n in 4"
      :key="n"
      class="rounded-md p-3 bg-white text-sm grid gap-y-2"
    >
      <div>Active Sessions</div>
      <div class="font-bold">49</div>
      <div class="flex justify-between">
        <div>
          <div>Last 24 hour</div>
          <div>43</div>
        </div>
        <div
          :class="Math.random() > 0.5 ? 'text-red-600' : 'text-green-500'"
          class="text-green-500"
        >
          &#8593;28.88%
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