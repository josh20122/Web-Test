<template>
 
 
    <v-dialog v-model="modal">
       <v-card max-width="360" class="mx-auto w-full">
         <v-card-text>
           <div class="flex justify-between">
             <div></div>
             <div @click="modal=false">&#10005</div>
            </div>
        </v-card-text>
        
        <v-card-text class="">
            <div class="text-center pb-4 font-semibold">Delete test</div>
            <div class="grid gap-y-4 ">
                
            <div class="w-full grid place-items-center">
                <VBtn class="mx-auto" flat icon color="red-lighten-4" >
                    <v-icon color="red">mdi-delete</v-icon>
                </VBtn>
            </div>
            <div class="text-center text-xs">
                Are you sure you want to delete the seleted tests? Once you
                confirm all the history will be erased
            </div>
            <div class="flex w-full justify-center gap-x-4 py-2">
              <div>
                <v-btn color="" variant="outlined" @click="modal=false">
                  <div class="normal-case font-normal text-gray-800">
                    Cancel
                  </div>
                </v-btn>
              </div>
              <div>
                <v-btn flat color="" class="bg-secondaryBg w-fit" block @click="modal=false"
                >
                <div class="normal-case font-normal">
                  Delete test
                </div>
                </v-btn
                >
              </div>
            </div>
        </div>
       </v-card-text>
     
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