<template>
  <!-- Email Modal -->

  <v-dialog v-model="modal">
    <v-card max-width="360" class="mx-auto w-full">
      <v-card-text>
        <div class="flex justify-between">
          <div></div>
          <div class="text-center font-semibold">Edit password</div>
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
            model-value="example@"
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
          ></v-select>
          <div class="grid grid-cols-2 gap-x-2">
            <div>
              <label class="text-sm" for="">Re-enter password</label>
              <v-select
                density="compact"
                variant="outlined" bg-color="white"
 autofocus    color="white"             clearable
              ></v-select>
            </div>
            <div>
              <label class="text-sm" for="">Check interval</label>
              <v-select
                density="compact"
                variant="outlined"
                clearable
              ></v-select>
            </div>
          </div>
          <div>
            <v-slider
              thumb-color="secondaryBg"
              color="secondaryBg"
              v-model="slider"
              thumb-label
            ></v-slider>
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
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
 
 <style>
</style>