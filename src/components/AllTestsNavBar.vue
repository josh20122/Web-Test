<template>
  <VToolbar color="white">
    <v-toolbar-title>
      <div class="pr-4">
        <div class="flex justify-between">
          <div class="text-base font-semibold inline-flex gap-x-4">
            <div>Test manager</div>
            <div>
              <v-btn
                v-if="showDeleteButton"
                @click="showDeleteModal = true"
                color="red"
                variant="outlined"
              >
                Delete
                <v-icon end>mdi-delete</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="flex gap-x-2">
            <v-icon>mdi-magnify</v-icon>

            <v-menu location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn color="" v-bind="props" variant="outlined">
                  <span class="normal-case"> Sort by: {{ active }} </span>
                  <v-icon end>mdi-triangle-small-down</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  @click="selectOption(index)"
                  v-for="(item, index) in selectItems"
                  :key="index"
                >
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </v-toolbar-title>
  </VToolbar>
  <delete-test-modal
    :show="showDeleteModal"
    @close="showDeleteModal = false"
  ></delete-test-modal>
</template>

<script>
import DeleteTestModal from "./DeleteTestModal.vue";

export default {
  components: { DeleteTestModal },
  props: ["showDeleteButton"],
  data() {
    return {
      showDeleteModal: false,
      active: "All tests",
      selectItems: ["All test", "Date created", "Date modified"],
    };
  },
  methods: {
    selectOption(key) {
      this.active = this.selectItems[key];
    },
  },
};
</script>

<style>
</style>