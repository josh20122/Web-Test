<template>
   <!-- Email Modal -->

   <v-dialog v-model="modal">
      <v-card max-width="360" class="mx-auto w-full">
        <v-card-text>
          <div class="flex justify-between">
            <div></div>
            <div class="text-center font-semibold">Edit email address</div>
            <div @click="modal=false">&#10005</div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <label class="text-sm" for="">Current email address</label>
            <v-text-field
              name="currentEmail"
              placeholder="Current Email"
              id="id"
              model-value="example@gmail.com"
              disabled
              variant="outlined"
              prepend-inner-icon="mdi-email-outline"
              density="compact"
            ></v-text-field>
            <label class="text-sm" for="">Enter new email address</label>
            <v-text-field
              name="currentEmail"
              placeholder="Email address"
              id="id"
              variant="outlined"
              prepend-inner-icon="mdi-email-outline"
              density="compact"
            ></v-text-field>
            <label class="text-sm" for="">Confirm new email address</label>
            <v-text-field
              name="currentEmail"
              placeholder="Email address"
              id="id"
              variant="outlined"
              prepend-inner-icon="mdi-email-outline"
              density="compact"
            ></v-text-field>
            <label class="text-sm" for="">Confirm password</label>
            <v-text-field
              name="currentEmail"
              placeholder="Enter password"
              id="id"
              variant="outlined"
              prepend-inner-icon="mdi-email-outline"
              density="compact"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex w-full justify-end gap-x-4 py-2">
            <div>
              <v-btn color="" variant="outlined" @click="modal=false">
                <div class="normal-case font-normal text-gray-800">
                  Cancel
                </div>
              </v-btn>
            </div>
            <div>
              <v-btn color="" class="bg-secondaryBg w-fit" block @click="modal=false"
              >
              <div class="normal-case font-normal">
                Save changes
              </div>
              </v-btn
              >
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