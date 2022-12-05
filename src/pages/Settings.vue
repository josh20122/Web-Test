<template>
  <user-navigation>
    <v-card flat>
      <v-card-title primary-title> My Login </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div
          class="
            py-2
            inline-flex
            md:justify-start md:gap-x-16
            justify-between
            w-full
          "
        >
          <div class="md:basis-3/12">
            <div>Email Address</div>
            <div class="font-semibold">josh20122@gmail.com</div>
          </div>
          <div>
            <v-btn flat @click="emailDialog = true">
              <div class="text-blue">EDIT</div>
            </v-btn>
          </div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <div
          class="
            py-2
            inline-flex
            md:justify-start md:gap-x-16
            justify-between
            w-full
          "
        >
          <div class="md:basis-3/12">
            <div>Password</div>
            <div class="font-semibold">**************</div>
          </div>
          <div>
            <v-btn flat @click="passwordModal = true">
              <div class="text-blue">EDIT</div>
            </v-btn>
          </div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <div
          class="
            py-2
            inline-flex
            md:justify-start md:gap-x-16
            justify-between
            w-full
          "
        >
          <div class="md:basis-3/12">
            <div>Account status</div>
            <div class="font-semibold text-green-600">Verified</div>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <edit-password-modal
      @close="passwordModal = false"
      :show="passwordModal"
    ></edit-password-modal>
    <edit-email-modal @close="emailDialog = false" :show="emailDialog" />
  </user-navigation>
</template>
  
  <script>
import UserNavigation from "@/components/UserNavigation.vue";
import EditEmailModal from "@/components/EditEmailModal.vue";
import EditPasswordModal from "@/components/EditPasswordModal.vue";
export default {
  components: { UserNavigation, EditEmailModal, EditPasswordModal },
  data() {
    return {
      emailDialog: false,
      passwordModal: false,
    };
  },
};
</script>
  
  <style>
</style>
  