<template>
  <user-navigation>
    <v-card flat>
      <v-card-title primary-title> Profile information </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form>
          <div class="md:px-16 md:pt-8">
            <edit-profile-picture class="mx-auto mb-8"></edit-profile-picture>
            <div class="grid md:grid-cols-2 gap-x-4">
              <div>
                <label for=""> First name</label>
                <v-text-field
                  name="name"
                  placeholder="Firstname"
                  validation-value="Joshnson"
                  density="compact"
                  variant="outlined"
                  append-inner-icon="mdi-pencil-outline"
                  id="id"
                ></v-text-field>
              </div>
              <div>
                <label for=""> Last name</label>
                <v-text-field
                  name="name"
                  placeholder="Firstname"
                  validation-value="Joshnson"
                  density="compact"
                  variant="outlined"
                  append-inner-icon="mdi-pencil-outline"
                  id="id"
                ></v-text-field>
              </div>
              <div>
                <label for=""> Email address</label>
                <v-text-field
                  name="name"
                  placeholder="Firstname"
                  validation-value="Joshnson"
                  density="compact"
                  variant="outlined"
                  append-inner-icon="mdi-pencil-outline"
                  id="id"
                ></v-text-field>
              </div>
              <div>
                <label for=""> Phone number</label>
                <v-text-field
                  name="name"
                  placeholder="Firstname"
                  validation-value="Joshnson"
                  density="compact"
                  variant="outlined"
                  append-inner-icon="mdi-pencil-outline"
                  id="id"
                ></v-text-field>
              </div>
            </div>
            <div>
              <label for=""> Location</label>
              <v-text-field
                name="name"
                placeholder="Firstname"
                validation-value="Joshnson"
                density="compact"
                variant="outlined"
                append-inner-icon="mdi-pencil-outline"
                id="id"
              ></v-text-field>
            </div>
            <div class="flex w-full justify-end gap-x-4 py-2">
              <div>
                <v-btn color="" variant="outlined" @click="modal = false">
                  <div class="normal-case font-normal text-gray-800">
                    Cancel
                  </div>
                </v-btn>
              </div>
              <div>
                <v-btn
                  color=""
                  class="bg-secondaryBg w-fit"
                  block
                  flat
                  @click="modal = false"
                >
                  <div class="normal-case font-normal">Save changes</div>
                </v-btn>
              </div>
            </div>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </user-navigation>
</template>

<script>
import UserNavigation from "@/components/UserNavigation.vue";
import EditProfilePicture from "@/components/EditProfilePicture.vue";
export default {
  components: { UserNavigation, EditProfilePicture },
};
</script>

<style>
</style>