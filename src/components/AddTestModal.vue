<template>
  <!-- Email Modal -->

  <v-dialog v-model="modal">
    <v-card max-width="450" class="mx-auto w-full">
      <v-card-text>
        <div class="flex justify-between">
          <div></div>
          <div class="text-center font-semibold">Add test</div>
          <div @click="modal=false">&#10005</div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-form>
          <label class="text-sm" for="">Enter URL</label>
          <v-text-field
            name="currentEmail"
            placeholder="Enter your website URL"
            id="id"
            model-value="example@mail.com"
            variant="outlined"
            type="text"
            prepend-inner-icon="mdi-web"
            density="compact"
          ></v-text-field>
          <label class="text-sm" for="">Testing location</label>
          <v-select
            density="compact"
            prepend-inner-icon="mdi-map"
            variant="outlined"
            placeholder="Select one location set"
            :items="locationOptions"
          ></v-select>
          <div class="grid grid-cols-2 gap-x-2">
            <div>
              <label class="text-sm" for="">Browser type</label>
              <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn  v-bind="props" variant="outlined" class="w-full">
          <div class="flex justify-start">

            <img  class="w-4 h-4 mr-2" :src="selectedBrowser.image"/>
            <span class="normal-case font-normal text-xs">  {{ selectedBrowser.name }} </span>
          </div>
                  <v-icon end>mdi-triangle-small-down</v-icon>
                </v-btn>
      </template>

      <v-list>
        <v-list-item @click="setBrowser(index)"
        v-for="(item, index) in browsers"
        :key="index"
        :value="item.name"
        active-color="primary"
      >
        <template v-slot:prepend>

          <img  class="w-4 h-4 mr-2" :src="item.image"/>
        </template>

        <v-list-item-title>
          <span class="text-sm" v-text="item.name"></span>
        </v-list-item-title>
      </v-list-item>
      </v-list>
    </v-menu>
            </div>
            <div>
              <label class="text-sm" for="">Check interval</label>
              <v-select 
                density="compact" placeholder="Select interval"
                variant="outlined" :items="intervalOptions"
              ></v-select>
            </div>
          </div>
          <div>
            <div>
              <v-slider
              thumb-color="secondaryBg"
              color="secondaryBg"
              v-model="slider"
              thumb-label
            ></v-slider>
            <div class="flex mt-n8 text-xs justify-between">
              <span>0s</span>
              <span>100s</span>
            </div>
          </div>
          </div>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <div class="flex w-full justify-end gap-x-4 py-2">
          <div>
            <v-btn color="" variant="outlined" @click="modal = false">
              <div class="normal-case font-normal text-gray-800">Cancel</div>
            </v-btn>
          </div>
          <div>
            <v-btn
              color=""
              class="bg-secondaryBg w-fit"
              block
              @click="modal = false"
            >
              <div class="normal-case font-normal">Save changes</div>
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
 
 <script>
export default {
  props: ["show"],
  data() {
    return {
      locationOptions: [
        "Asia - Japan -Tokyo",
        "Europe - Germany - Frankfrut",
        "Europe - United Kingdom - London",
      ],
      intervalOptions: [
        "Every 15 minutes",
        "Every 30 min",
        "Every 45 min",
        "Every 1 hour",
      ],
      selectedBrowser: { image: "/assets/chrome.png", name: "Google chrome" },
      browsers: [
        { image: "/assets/chrome.png", name: "Google chrome" },
        { image: "/assets/edge.png", name: "Microsoft Edge" },
        { image: "/assets/firefox.png", name: "Mozilla Firefox" },
        { image: "/assets/opera.png", name: "Opera browser" },
      ],
      modal: this.show,
      slider: 2,
    };
  },
  watch: {
    show(value) {
      this.modal = value;
    },
    modal(value) {
      if (value == false) {
        this.$emit("close");
      }
    },
  },
  methods: {
    setBrowser(key) {
      console.log(key);
      this.selectedBrowser = this.browsers[key];
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
 
 <style>
</style>