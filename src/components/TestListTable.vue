<template>
  <div class="overflow-x-auto relative rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <!-- <div class="overflow-x-auto relative shadow-md rounded-lg mb-10"> -->
      <thead
        class="
          text-xs text-gray-700
          bg-white
          overflow-x-auto
          relative
          shadow-md
          rounded-lg
          mb-10
        "
      >
        <tr>
          <th scope="col" class="py-3 px-6">
            <input
              type="checkbox"
              class="
                form-checkbox
                rounded-full
                h-5
                w-5
                border border-gray-800
                outline-1
                text-secondaryBg
              "
            />
          </th>
          <th scope="col" class="py-3 px-6">Url name</th>
          <th scope="col" class="py-3 px-6">Start date</th>
          <th scope="col" class="py-3 px-6">Total runs</th>
          <th scope="col" class="py-3 px-6">Last runs</th>
        </tr>
      </thead>
      <!-- </div> -->
      <tbody class="">
        <tr class="bg-transparent">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          ></th>
          <td class="py-2 px-6"></td>
          <td class="py-2 px-6"></td>
          <td class="py-2 px-6"></td>
          <td class="py-2 px-6"></td>
        </tr>
        <tr v-for="n in 3" :key="n" class="bg-white border-b">
          <th
            scope="row"
            class="
              font-medium
              py-3
              px-6
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            <input
              type="checkbox"
              class="
                form-checkbox
                rounded-full
                h-5
                w-5
                border border-gray-800
                outline-1
                text-secondaryBg
              "
            />
          </th>
          <td class="py-3 px-6">www.google.com</td>
          <td class="py-3 px-6">05/January/2022</td>
          <td class="py-3 px-6">06</td>
          <td class="py-3 px-6">02 days ago</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="bg-white pt-8 pb-28 pr-4">
            <div class="flex justify-end">
              <div
                v-for="n in 5"
                :key="n"
                class="
                  h-10
                  border
                  ml-4
                  text-center
                  border-blue-700
                  grid
                  place-items-center
                  w-10
                  rounded-full
                "
              >
                {{ n }}
              </div>
              <div
                class="
                  h-10
                  border
                  ml-4
                  text-center
                  border-blue-700
                  grid
                  place-items-center
                  w-10
                  rounded-full
                "
              >
                >
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>