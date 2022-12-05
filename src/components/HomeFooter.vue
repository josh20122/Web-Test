<template>
  <v-footer color="footerBg">
    <v-card color="transparent" width="100%" flat>
      <div class="grid w-full md:px-32 py-10 gap-y-10 text-slate-300">
        <div class="flex justify-between w-full flex-col md:flex-row">
          <div>
            <div class="text-4xl">LOGO</div>
          </div>
          <div class="">
            <div
              class="inline-flex gap-x-14 w-full flex-col gap-y-1 md:flex-row"
            >
              <span v-for="(item, index) in pages" :key="index" class="">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col gap-y-6">
          <div class="inline-grid gap-y-1">
            <div class="text-xl font-bold">Offices</div>
            <div>4517 Washington Ave.</div>
            <div>Manchester, Kentucky 39495</div>
          </div>
          <div class="inline-grid gap-y-1">
            <div class="text-xl font-bold">Contact</div>
            <div>+880 111 1111 111</div>
            <div>Mail@company.com</div>
          </div>
          <div class="inline-grid gap-y-1">
            <div class="text-xl font-bold">
              <div>Subscribe to our Newsletter</div>
            </div>
            <div>Don’t miss any promotion & get additional disscount</div>
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >Search</label
            >
            <div class="relative w-auto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
              <div
                class="
                  absolute
                  left-0
                  w-fit
                  flex
                  items-center
                  pl-3
                  pointer-events-none
                "
              ></div>
              <input
                type="search"
                id="search"
                class="
                  block
                  w-full
                  py-4
                  pl-6
                  text-sm text-gray-900
                  border border-gray-300
                  rounded-full
                  bg-gray-50
                  focus:ring-blue-500 focus:border-blue-500
                "
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                class="
                  text-white
                  absolute
                  right-2.5
                  bottom-2.5
                  bg-secondaryBg
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium
                  rounded-full
                  text-sm
                  px-4
                  py-2
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <v-divider color="primaryBg"> </v-divider>
        <div class="flex justify-between">
          <div>© Copyright Testload full right reserved</div>
          <div class="inline-flex gap-x-2">
            <v-icon v-for="(item, index) in socialIcons" :key="index">
              {{ item.icon }}
            </v-icon>
          </div>
        </div>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { icon: "mdi-twitter", url: "////" },
        { icon: "mdi-facebook", url: "////" },
        { icon: "mdi-instagram", url: "////" },
        { icon: "mdi-linkedin", url: "////" },
      ],
      pages: [
        { name: "Home", url: "ddd" },
        { name: "Pricing", url: "ddd" },
        { name: "Support", url: "ddd" },
        { name: "Terms & Condition", url: "ddd" },
      ],
    };
  },
};
</script>

<style>
</style>